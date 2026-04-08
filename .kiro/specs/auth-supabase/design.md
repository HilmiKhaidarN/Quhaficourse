# Design Document — auth-supabase

## Overview

Fitur ini memigrasikan sistem autentikasi QuhafiCourse dari `localStorage` ke Supabase Auth. Saat ini login, register, dan manajemen user sepenuhnya berbasis `localStorage` (key `qc_users` dan `qc_current_user`), sehingga akun tidak bisa digunakan lintas browser/device dan password tersimpan dalam plaintext.

Setelah migrasi:
- Login dan register menggunakan `supabase.auth.signInWithPassword()` dan `supabase.auth.signUp()`
- Data profil user (nama, username, role, avatar, joinDate) disimpan di tabel `profiles` di Supabase
- Session dikelola otomatis oleh Supabase JS client (token di localStorage, bukan data user)
- `getCurrentUser()` tetap sinkron dan mengembalikan objek `{ id, nama, email, username, role, avatar, joinDate }` via cache memori
- Semua halaman selain `index.html` dan `register.html` mendapat auth guard

Karena project adalah static site HTML/CSS/JS murni tanpa npm/bundler, integrasi Supabase dilakukan via CDN.

**Keputusan desain utama:**
- Supabase JS CDN di-load di semua halaman yang memuat `app.js`, sebelum `app.js` dieksekusi
- `getCurrentUser()` tetap sinkron dengan pola cache memori (`_currentUserCache`) yang diisi saat `onAuthStateChange` terpanggil
- Auth guard diimplementasikan di `app.js` via fungsi `requireAuth()` dan `requireGuest()` yang dipanggil di awal setiap halaman
- Fungsi `seedAdmin()` dihapus dari client-side; admin dibuat satu kali via SQL
- `getUsers()` dan `saveUsers()` dihapus; semua operasi user melalui Supabase

---

## Architecture

```mermaid
graph TD
    A[Halaman HTML] -->|1. load CDN| B[@supabase/supabase-js]
    A -->|2. load| C[supabase-config.js]
    A -->|3. load| D[app.js]
    D -->|init client| B
    D -->|onAuthStateChange| E[Cache _currentUserCache]
    E -->|getCurrentUser| F[Halaman lain]
    D -->|signUp / signInWithPassword| G[(Supabase Auth)]
    D -->|insert / select / update| H[(Supabase profiles table)]
    G -->|session token| I[localStorage - dikelola Supabase]
    D -->|auth guard| J[Redirect ke index.html / dashboard.html]
```

**Alur data login:**
1. User submit form → `handleLogin()` dipanggil
2. Jika input adalah username, fetch email dari `profiles` terlebih dahulu
3. `supabase.auth.signInWithPassword({ email, password })` dipanggil
4. Jika berhasil, `onAuthStateChange` terpanggil → fetch profil dari `profiles` → isi `_currentUserCache`
5. Redirect ke `dashboard.html` atau `admin.html` berdasarkan role

**Alur auth guard:**
1. Setiap halaman protected memanggil `requireAuth()` di awal script
2. `requireAuth()` mengecek session via `supabase.auth.getSession()` (async)
3. Jika tidak ada session → redirect ke `index.html`
4. Jika ada session tapi cache belum terisi → fetch profil → isi cache → render halaman

---

## Components and Interfaces

### supabase-config.js (tidak berubah)

```js
const SUPABASE_URL = 'https://tyalkbrukksjlnurnuot.supabase.co';
const SUPABASE_ANON_KEY = '...';
```

### SupabaseClient (global `_supabase`)

Diinisialisasi di awal `app.js`:

```js
let _supabase = null;
if (typeof supabase !== 'undefined' && SUPABASE_URL && SUPABASE_ANON_KEY) {
  _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: { persistSession: true }
  });
} else {
  console.error('[AuthService] Supabase tidak tersedia. Periksa CDN dan supabase-config.js.');
}
```

### AuthService (fungsi-fungsi di app.js)

| Fungsi | Deskripsi |
|---|---|
| `getCurrentUser()` | Sinkron, mengembalikan `_currentUserCache` atau `null` |
| `handleLogin(e)` | Async, handle form login — resolve username ke email jika perlu |
| `handleRegister(e)` | Async, handle form register — signUp + insert profiles |
| `handleLogout()` | Async, signOut + clear cache + redirect |
| `requireAuth(adminOnly)` | Async, auth guard untuk halaman protected |
| `requireGuest()` | Async, redirect ke dashboard jika sudah login |
| `_initAuthListener()` | Setup `onAuthStateChange`, isi/kosongkan cache |
| `_fetchAndCacheProfile(userId)` | Fetch profil dari tabel `profiles`, isi `_currentUserCache` |

### ProfileService (fungsi-fungsi di app.js)

| Fungsi | Deskripsi |
|---|---|
| `updateProfile(data)` | Update nama, username, avatar di tabel `profiles` |
| `changePassword(newPass)` | Panggil `supabase.auth.updateUser({ password })` |
| `deleteAccount()` | Hapus baris di `profiles` + signOut |

### Perubahan di halaman HTML

Setiap halaman yang memuat `app.js` perlu menambahkan CDN Supabase sebelum `app.js`:

```html
<!-- Tambahkan sebelum app.js -->
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script src="supabase-config.js"></script>
<script src="app.js"></script>
```

Halaman yang perlu diubah: `index.html`, `register.html`, `dashboard.html`, `kelas.html`, `materi.html`, `live-class.html`, `kuis.html`, `tugas.html`, `diskusi.html`, `sertifikat.html`, `pengaturan.html`, `profil.html`, `admin.html`, `belajar-*.html`

### Perubahan di pengaturan.js

- `saveAkun()` → panggil `updateProfile()` dari AuthService, hapus `setCurrentUser()` / `saveUsers()` lama
- `savePassword()` → hapus validasi "password lama", panggil `changePassword()`
- `confirmDeleteAccount()` → panggil `deleteAccount()` dari AuthService

---

## Data Models

### Tabel: profiles

| Kolom | Tipe | Keterangan |
|---|---|---|
| `id` | uuid | Primary key, referensi ke `auth.users.id` |
| `nama` | text | Nama lengkap, not null |
| `username` | text | Unique, not null |
| `role` | text | Default `'Pelajar'`, not null |
| `avatar` | text | Nullable, URL atau base64 |
| `join_date` | text | Format `"D MMMM YYYY"` bahasa Indonesia |

### Mapping CurrentUser

| Field CurrentUser | Sumber |
|---|---|
| `id` | `auth.users.id` (uuid) |
| `nama` | `profiles.nama` |
| `email` | `auth.users.email` |
| `username` | `profiles.username` |
| `role` | `profiles.role` |
| `avatar` | `profiles.avatar` |
| `joinDate` | `profiles.join_date` |

### SQL DDL

```sql
-- Tabel profiles
create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  nama text not null,
  username text not null unique,
  role text not null default 'Pelajar',
  avatar text,
  join_date text not null
);

-- RLS
alter table profiles enable row level security;

-- Semua user (termasuk anon) bisa baca semua profil (untuk lookup username → email)
create policy "profiles_select_all"
  on profiles for select
  to anon, authenticated
  using (true);

-- User hanya bisa insert profil miliknya sendiri
create policy "profiles_insert_own"
  on profiles for insert
  to authenticated
  with check (auth.uid() = id);

-- User hanya bisa update profil miliknya sendiri
create policy "profiles_update_own"
  on profiles for update
  to authenticated
  using (auth.uid() = id);

-- User hanya bisa delete profil miliknya sendiri
create policy "profiles_delete_own"
  on profiles for delete
  to authenticated
  using (auth.uid() = id);
```

### SQL Seed Admin

```sql
-- Jalankan satu kali di Supabase SQL Editor
-- 1. Buat user di auth.users via Supabase Dashboard (Authentication > Users > Add User)
--    Email: admin@quhaficourse.id, Password: farahfthsa
-- 2. Setelah user dibuat, jalankan:
insert into profiles (id, nama, username, role, avatar, join_date)
values (
  '<uuid-dari-auth-users>',  -- ganti dengan UUID yang dibuat Supabase
  'Admin',
  'admin',
  'Admin',
  null,
  '1 Januari 2025'
);
```

### Cache Profil di Memori

```js
let _currentUserCache = null; // { id, nama, email, username, role, avatar, joinDate }

// Diisi oleh onAuthStateChange
_supabase.auth.onAuthStateChange(async (event, session) => {
  if (session?.user) {
    await _fetchAndCacheProfile(session.user.id, session.user.email);
  } else {
    _currentUserCache = null;
  }
});

function getCurrentUser() {
  return _currentUserCache;
}
```

---

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Register round-trip

*For any* input registrasi yang valid (nama non-kosong, email valid, username non-kosong, password ≥ 6 karakter), setelah `handleRegister()` berhasil, memanggil