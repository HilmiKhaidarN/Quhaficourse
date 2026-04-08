# Design Document — diskusi-supabase

## Overview

Fitur ini memigrasikan sistem diskusi QuhafiCourse dari penyimpanan `localStorage` ke Supabase (PostgreSQL + Realtime). Saat ini data diskusi hanya tersimpan di browser masing-masing user, sehingga tidak ada interaksi antar pengguna. Setelah migrasi, semua user melihat diskusi yang sama, dapat berinteraksi secara real-time, dan data tersimpan secara persisten di cloud.

Karena project adalah static site HTML/CSS/JS murni tanpa npm/bundler, integrasi Supabase dilakukan sepenuhnya via CDN. Identitas user tetap menggunakan `localStorage.qc_current_user` (bukan Supabase Auth).

**Keputusan desain utama:**
- Supabase JS client di-load via CDN sebelum `diskusi.js`
- Konfigurasi Supabase dipisah ke `supabase-config.js` agar mudah diganti tanpa menyentuh logika bisnis
- RLS menggunakan `anon` role karena tidak ada Supabase Auth — semua operasi dilakukan sebagai anonymous user
- `likes_count` disimpan sebagai kolom integer di tabel thread/reply (denormalized) untuk performa query list, dengan `discussion_likes` sebagai sumber kebenaran untuk status liked per user

---

## Architecture

```mermaid
graph TD
    A[diskusi.html] -->|load CDN| B[@supabase/supabase-js]
    A -->|load| C[supabase-config.js]
    A -->|load| D[diskusi.js]
    D -->|import config| C
    D -->|init client| B
    D -->|CRUD| E[(Supabase PostgreSQL)]
    D -->|subscribe| F[Supabase Realtime]
    F -->|push events| D
    D -->|read identity| G[localStorage.qc_current_user]
```

**Alur data:**
1. `diskusi.html` memuat CDN Supabase, lalu `supabase-config.js`, lalu `diskusi.js`
2. `diskusi.js` menginisialisasi `SupabaseClient` menggunakan konstanta dari `supabase-config.js`
3. Semua operasi baca/tulis dilakukan via `SupabaseClient` ke PostgreSQL
4. Realtime subscription aktif saat user membuka detail thread (untuk reply baru) dan saat di halaman list (untuk thread baru)
5. Identitas penulis diambil dari `localStorage.qc_current_user` setiap kali operasi insert dilakukan

---

## Components and Interfaces

### supabase-config.js

File konfigurasi sederhana yang mengekspos dua konstanta global:

```js
const SUPABASE_URL = 'https://<project-ref>.supabase.co';
const SUPABASE_ANON_KEY = '<anon-key>';
```

### SupabaseClient (global `supabaseClient`)

Diinisialisasi di awal `diskusi.js`:

```js
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
```

### DiscussionService (fungsi-fungsi di diskusi.js)

| Fungsi | Deskripsi |
|---|---|
| `loadThreads()` | Fetch semua thread dari `discussion_threads`, hitung reply count |
| `createThread(data)` | Insert thread baru ke Supabase |
| `openThread(id)` | Fetch thread + replies, increment views, subscribe realtime |
| `submitReply(threadId)` | Insert reply baru ke Supabase |
| `likeThread(id)` | Toggle like pada thread (insert/delete `discussion_likes` + update `likes_count`) |
| `likeReply(threadId, replyId)` | Toggle like pada reply |
| `loadUserLikes(username)` | Fetch semua like milik user saat ini untuk menentukan status liked |
| `backToList()` | Unsubscribe realtime, kembali ke list view |

### RealtimeSubscriber

Dikelola sebagai variabel `activeChannel` di `diskusi.js`:

```js
let activeChannel = null; // channel Realtime yang sedang aktif

function subscribeToReplies(threadId) { ... }
function subscribeToThreads() { ... }
function unsubscribeActive() {
  if (activeChannel) {
    supabaseClient.removeChannel(activeChannel);
    activeChannel = null;
  }
}
```

---

## Data Models

### Tabel: discussion_threads

| Kolom | Tipe | Keterangan |
|---|---|---|
| `id` | uuid | Primary key, default `gen_random_uuid()` |
| `author_name` | text | Nama lengkap penulis dari `CurrentUser.nama` |
| `author_initials` | text | Inisial 2 huruf untuk avatar |
| `author_username` | text | Username dari `CurrentUser.username` |
| `kategori` | text | Salah satu: Fikih, Akidah, Akhlak, Qurdis, Sejarah |
| `title` | text | Judul thread, min 5 karakter |
| `body` | text | Isi thread, min 20 karakter |
| `label` | text | Nullable: Pertanyaan, Diskusi, Pengumuman |
| `views` | integer | Default 0, diincrement saat thread dibuka |
| `likes_count` | integer | Default 0, diupdate saat like/unlike |
| `is_pinned` | boolean | Default false |
| `created_at` | timestamptz | Default `now()` |

### Tabel: discussion_replies

| Kolom | Tipe | Keterangan |
|---|---|---|
| `id` | uuid | Primary key, default `gen_random_uuid()` |
| `thread_id` | uuid | Foreign key ke `discussion_threads.id` |
| `author_name` | text | Nama lengkap penulis |
| `author_initials` | text | Inisial 2 huruf |
| `author_username` | text | Username penulis |
| `body` | text | Isi balasan, min 10 karakter |
| `likes_count` | integer | Default 0 |
| `is_best` | boolean | Default false, hanya satu per thread |
| `created_at` | timestamptz | Default `now()` |

### Tabel: discussion_likes

| Kolom | Tipe | Keterangan |
|---|---|---|
| `id` | uuid | Primary key |
| `target_type` | text | Nilai: `'thread'` atau `'reply'` |
| `target_id` | uuid | ID thread atau reply yang disukai |
| `user_username` | text | Username dari `CurrentUser` |
| `created_at` | timestamptz | Default `now()` |

**Constraint:** `UNIQUE(target_type, target_id, user_username)` — mencegah duplikasi like.

### SQL DDL

```sql
-- Threads
create table discussion_threads (
  id uuid primary key default gen_random_uuid(),
  author_name text not null,
  author_initials text not null,
  author_username text not null,
  kategori text not null,
  title text not null,
  body text not null,
  label text,
  views integer not null default 0,
  likes_count integer not null default 0,
  is_pinned boolean not null default false,
  created_at timestamptz not null default now()
);

-- Replies
create table discussion_replies (
  id uuid primary key default gen_random_uuid(),
  thread_id uuid not null references discussion_threads(id) on delete cascade,
  author_name text not null,
  author_initials text not null,
  author_username text not null,
  body text not null,
  likes_count integer not null default 0,
  is_best boolean not null default false,
  created_at timestamptz not null default now()
);

-- Likes
create table discussion_likes (
  id uuid primary key default gen_random_uuid(),
  target_type text not null check (target_type in ('thread', 'reply')),
  target_id uuid not null,
  user_username text not null,
  created_at timestamptz not null default now(),
  unique (target_type, target_id, user_username)
);

-- RLS
alter table discussion_threads enable row level security;
alter table discussion_replies enable row level security;
alter table discussion_likes enable row level security;

create policy "anon_select_threads" on discussion_threads for select to anon using (true);
create policy "anon_insert_threads" on discussion_threads for insert to anon with check (true);
create policy "anon_update_threads" on discussion_threads for update to anon using (true);

create policy "anon_select_replies" on discussion_replies for select to anon using (true);
create policy "anon_insert_replies" on discussion_replies for insert to anon with check (true);
create policy "anon_update_replies" on discussion_replies for update to anon using (true);

create policy "anon_select_likes" on discussion_likes for select to anon using (true);
create policy "anon_insert_likes" on discussion_likes for insert to anon with check (true);
create policy "anon_delete_likes" on discussion_likes for delete to anon using (true);
```

### Mapping dari localStorage ke Supabase

| localStorage (lama) | Supabase (baru) |
|---|---|
| `t.id` (timestamp int) | `id` (uuid) |
| `t.author` | `author_name` |
| `t.initials` | `author_initials` |
| `t.authorUsername` | `author_username` |
| `t.likes` | `likes_count` |
| `t.pinned` | `is_pinned` |
| `t.replies` (array nested) | Tabel terpisah `discussion_replies` |
| `diskusi_liked` (localStorage) | Tabel `discussion_likes` |


---

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Like toggle round-trip

*For any* thread atau reply, dan any user yang belum pernah menyukainya: setelah `likeThread`/`likeReply` dipanggil sekali, `likes_count` harus bertambah 1 dan LikeRecord harus ada di `discussion_likes`. Setelah dipanggil lagi (unlike), `likes_count` harus kembali ke nilai semula dan LikeRecord harus tidak ada.

**Validates: Requirements 7.2, 7.3, 7.4**

### Property 2: Like status display consistency

*For any* daftar thread atau reply yang ditampilkan, status liked (tombol aktif/tidak aktif) harus konsisten dengan keberadaan LikeRecord di `discussion_likes` untuk `CurrentUser.username` saat halaman dimuat.

**Validates: Requirements 7.6**

### Property 3: Unique like constraint

*For any* kombinasi `(target_type, target_id, user_username)`, tidak boleh ada lebih dari satu baris di tabel `discussion_likes`. Mencoba insert duplikat harus menghasilkan error dari database.

**Validates: Requirements 2.4**

### Property 4: Thread creation round-trip

*For any* input thread yang valid (judul ≥ 5 karakter, body ≥ 20 karakter, kategori dipilih, user login), setelah `createThread()` berhasil, thread tersebut harus dapat di-fetch kembali dari Supabase dengan semua field yang sama.

**Validates: Requirements 4.1**

### Property 5: Reply creation round-trip

*For any* input reply yang valid (body ≥ 10 karakter, user login), setelah `submitReply()` berhasil, reply tersebut harus dapat di-fetch kembali dari Supabase dengan `thread_id` yang benar dan semua field yang sama.

**Validates: Requirements 6.1**

### Property 6: Input validation rejects short content

*For any* string yang panjangnya di bawah minimum (judul < 5 karakter, body thread < 20 karakter, body reply < 10 karakter), operasi insert harus ditolak di sisi client dan tidak ada request ke Supabase yang dikirim.

**Validates: Requirements 4.3, 4.5, 6.3**

### Property 7: Thread list matches Supabase data

*For any* kondisi halaman diskusi dimuat, semua thread yang ditampilkan di UI harus merupakan subset dari data yang ada di tabel `discussion_threads` di Supabase, tanpa ada thread yang ditambahkan atau dihilangkan secara sewenang-wenang.

**Validates: Requirements 3.1**

### Property 8: Reply count accuracy

*For any* thread yang ditampilkan di daftar, angka "Balasan" yang ditampilkan harus sama persis dengan jumlah baris di `discussion_replies` yang memiliki `thread_id` yang sesuai.

**Validates: Requirements 3.2**

### Property 9: Sort terbaru — pinned selalu di atas

*For any* daftar thread dengan filter "Terbaru", semua thread dengan `is_pinned = true` harus muncul sebelum semua thread dengan `is_pinned = false`, dan di dalam masing-masing grup, urutan harus berdasarkan `created_at` descending.

**Validates: Requirements 3.3**

### Property 10: Sort populer berdasarkan skor

*For any* pasangan thread berurutan `(thread[i], thread[i+1])` dalam mode "Populer", skor `thread[i]` (= `likes_count + reply_count * 2`) harus lebih besar atau sama dengan skor `thread[i+1]`.

**Validates: Requirements 3.4**

### Property 11: Filter belum dijawab

*For any* thread yang ditampilkan dalam mode "Belum Dijawab", jumlah reply thread tersebut harus 0.

**Validates: Requirements 3.5**

### Property 12: Search filter case-insensitive

*For any* teks pencarian dan daftar thread yang ditampilkan setelahnya, setiap thread yang muncul harus memiliki `title` atau `body` yang mengandung teks pencarian (case-insensitive). Thread yang tidak mengandung teks pencarian tidak boleh muncul.

**Validates: Requirements 3.6**

### Property 13: Kategori filter

*For any* kategori yang dipilih dari dropdown, semua thread yang ditampilkan harus memiliki `kategori` yang sama persis dengan pilihan tersebut.

**Validates: Requirements 3.7**

### Property 14: Views increment

*For any* thread, setelah `openThread(id)` dipanggil, nilai `views` thread tersebut di Supabase harus bertambah tepat 1 dari nilai sebelumnya.

**Validates: Requirements 5.2**

### Property 15: Reply sort — best answer selalu di atas

*For any* daftar reply yang ditampilkan di halaman detail thread, reply dengan `is_best = true` (jika ada) harus selalu muncul paling atas, dan sisanya diurutkan berdasarkan `created_at` ascending.

**Validates: Requirements 5.3**

### Property 16: Realtime events update UI

*For any* event INSERT yang masuk via Supabase Realtime channel (baik untuk `discussion_replies` saat di detail thread, maupun `discussion_threads` saat di list), item baru tersebut harus muncul di UI tanpa full page reload, dan item yang muncul harus memiliki data yang sama dengan payload event.

**Validates: Requirements 8.2, 8.4**

### Property 17: Realtime unsubscribe on back

*For any* kondisi di mana user memanggil `backToList()`, variabel `activeChannel` harus menjadi `null` dan tidak ada lagi event dari channel sebelumnya yang diproses.

**Validates: Requirements 8.3**

### Property 18: Migration round-trip

*For any* data thread dan reply yang valid di `localStorage.diskusi_threads`, setelah proses migrasi selesai: (a) semua thread dan reply tersebut harus dapat di-fetch dari Supabase, dan (b) `localStorage.diskusi_threads` harus tidak lagi berisi data tersebut.

**Validates: Requirements 9.2, 9.3**

---

## Error Handling

### Supabase Client Gagal Inisialisasi

Jika `supabase.createClient()` melempar error (misalnya CDN gagal load), `diskusi.js` harus menangkap error tersebut dan menampilkan pesan di container utama:

```js
try {
  const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} catch (e) {
  document.getElementById('threadList').innerHTML =
    '<div class="empty-state"><p>Gagal terhubung ke server. Coba refresh halaman.</p></div>';
  return;
}
```

### Operasi Database Gagal

Setiap fungsi async yang memanggil Supabase harus menggunakan pola `{ data, error }`:

```js
const { data, error } = await supabaseClient.from('discussion_threads').insert(payload);
if (error) {
  showToast('Gagal menyimpan diskusi. Coba lagi.', true);
  return; // jangan tutup modal
}
```

### User Tidak Login

Sebelum operasi write (create thread, submit reply, like), selalu cek `getCurrentUser()`:

```js
const cu = getCurrentUser();
if (!cu) {
  showToast('Silakan login terlebih dahulu.', true);
  return;
}
```

### Realtime Disconnect

Supabase JS client menangani reconnect secara otomatis. Tidak perlu implementasi manual. Jika status channel berubah ke `CHANNEL_ERROR`, log ke console untuk debugging.

### Migrasi Gagal

Jika ada error saat upload batch ke Supabase, hentikan proses, jangan hapus localStorage, dan tampilkan pesan error dengan detail thread mana yang gagal.

---

## Testing Strategy

### Pendekatan Dual Testing

Fitur ini menggunakan dua lapisan testing yang saling melengkapi:

1. **Unit tests** — untuk contoh spesifik, edge case, dan kondisi error
2. **Property-based tests** — untuk memverifikasi property universal di atas berbagai input yang di-generate secara acak

### Unit Tests

Fokus pada:
- Inisialisasi Supabase client berhasil dengan config yang valid (Req 1.1, 1.2)
- Error ditampilkan ketika user tidak login (Req 4.2, 6.2, 7.5)
- Modal ditutup dan toast muncul setelah thread berhasil dibuat (Req 4.6)
- Textarea dikosongkan setelah reply berhasil dikirim (Req 6.4)
- UI migrasi muncul ketika localStorage berisi data lama (Req 9.1)
- Realtime channel aktif setelah `openThread()` dipanggil (Req 8.1)

### Property-Based Tests

Library yang digunakan: **fast-check** (via CDN untuk test environment, atau via npm untuk test runner seperti Vitest/Jest).

Konfigurasi minimum: **100 iterasi per property test**.

Setiap property test harus diberi tag komentar dengan format:
```
// Feature: diskusi-supabase, Property {N}: {property_text}
```

Contoh implementasi property test:

```js
// Feature: diskusi-supabase, Property 6: Input validation rejects short content
fc.assert(
  fc.property(
    fc.string({ maxLength: 4 }), // judul < 5 karakter
    (shortTitle) => {
      const result = validateThreadInput({ title: shortTitle, body: 'valid body lebih dari 20 karakter', kategori: 'Fikih' });
      return result.valid === false;
    }
  ),
  { numRuns: 100 }
);
```

```js
// Feature: diskusi-supabase, Property 12: Search filter case-insensitive
fc.assert(
  fc.property(
    fc.array(fc.record({ title: fc.string(), body: fc.string(), kategori: fc.constant('Fikih') })),
    fc.string({ minLength: 1 }),
    (threads, searchQuery) => {
      const results = filterBySearch(threads, searchQuery);
      return results.every(t =>
        t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.body.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
  ),
  { numRuns: 100 }
);
```

### Cakupan per Property

| Property | Tipe Test | Prioritas |
|---|---|---|
| P1: Like toggle round-trip | Property | Tinggi |
| P2: Like status display | Property | Tinggi |
| P3: Unique like constraint | Property (integration) | Tinggi |
| P4: Thread creation round-trip | Property (integration) | Tinggi |
| P5: Reply creation round-trip | Property (integration) | Tinggi |
| P6: Input validation | Property | Tinggi |
| P7: Thread list matches Supabase | Property (integration) | Sedang |
| P8: Reply count accuracy | Property | Sedang |
| P9: Sort terbaru | Property | Sedang |
| P10: Sort populer | Property | Sedang |
| P11: Filter belum dijawab | Property | Sedang |
| P12: Search filter | Property | Sedang |
| P13: Kategori filter | Property | Sedang |
| P14: Views increment | Property (integration) | Sedang |
| P15: Reply sort | Property | Sedang |
| P16: Realtime update UI | Property (integration) | Sedang |
| P17: Realtime unsubscribe | Property | Sedang |
| P18: Migration round-trip | Property (integration) | Rendah |

Property yang ditandai "integration" memerlukan koneksi ke Supabase test instance atau mock Supabase client.
