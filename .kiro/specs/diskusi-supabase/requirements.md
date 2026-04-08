# Requirements Document

## Introduction

Fitur ini memigrasikan sistem diskusi QuhafiCourse dari penyimpanan localStorage ke Supabase (PostgreSQL + Realtime). Saat ini setiap user hanya bisa melihat diskusi miliknya sendiri karena data tersimpan di browser masing-masing. Setelah migrasi, semua user dapat melihat dan berinteraksi dengan diskusi yang sama secara real-time tanpa refresh halaman. Identitas user tetap menggunakan data dari `localStorage.qc_current_user` (bukan Supabase Auth). Supabase JS client diintegrasikan via CDN.

---

## Glossary

- **DiscussionService**: Modul JavaScript yang menangani semua operasi baca/tulis diskusi ke Supabase.
- **RealtimeSubscriber**: Komponen yang mengelola koneksi Supabase Realtime untuk menerima perubahan data secara live.
- **Thread**: Postingan diskusi utama yang dibuat oleh user, berisi judul, isi, dan kategori.
- **Reply**: Balasan terhadap sebuah Thread.
- **CurrentUser**: Objek user yang tersimpan di `localStorage.qc_current_user`, digunakan sebagai identitas penulis.
- **SupabaseClient**: Instance Supabase JS yang diinisialisasi via CDN dengan URL dan anon key proyek.
- **LikeRecord**: Catatan bahwa seorang user telah menyukai sebuah Thread atau Reply, disimpan di tabel `discussion_likes`.
- **Kategori**: Klasifikasi Thread, salah satu dari: Fikih, Akidah, Akhlak, Qurdis, Sejarah.

---

## Requirements

### Requirement 1: Inisialisasi Supabase Client

**User Story:** Sebagai developer, saya ingin Supabase JS client tersedia di seluruh halaman diskusi, agar semua operasi database dapat dilakukan tanpa npm/bundler.

#### Acceptance Criteria

1. THE SupabaseClient SHALL diinisialisasi menggunakan Supabase JS CDN (`@supabase/supabase-js`) sebelum `diskusi.js` dieksekusi.
2. THE SupabaseClient SHALL menggunakan `SUPABASE_URL` dan `SUPABASE_ANON_KEY` yang didefinisikan sebagai konstanta di file konfigurasi terpisah (`supabase-config.js`).
3. IF SupabaseClient gagal diinisialisasi, THEN THE DiscussionService SHALL menampilkan pesan error kepada user dan menghentikan operasi lebih lanjut.

---

### Requirement 2: Skema Database Supabase

**User Story:** Sebagai developer, saya ingin skema tabel yang tepat di Supabase, agar data diskusi dapat disimpan dan diquery dengan efisien.

#### Acceptance Criteria

1. THE database SHALL memiliki tabel `discussion_threads` dengan kolom: `id` (uuid, primary key), `author_name` (text), `author_initials` (text), `author_username` (text), `kategori` (text), `title` (text), `body` (text), `views` (integer, default 0), `likes_count` (integer, default 0), `is_pinned` (boolean, default false), `created_at` (timestamptz, default now()).
2. THE database SHALL memiliki tabel `discussion_replies` dengan kolom: `id` (uuid, primary key), `thread_id` (uuid, foreign key ke `discussion_threads.id`), `author_name` (text), `author_initials` (text), `author_username` (text), `body` (text), `likes_count` (integer, default 0), `is_best` (boolean, default false), `created_at` (timestamptz, default now()).
3. THE database SHALL memiliki tabel `discussion_likes` dengan kolom: `id` (uuid, primary key), `target_type` (text, nilai: 'thread' atau 'reply'), `target_id` (uuid), `user_username` (text), `created_at` (timestamptz, default now()).
4. THE database SHALL menerapkan constraint UNIQUE pada kombinasi (`target_type`, `target_id`, `user_username`) di tabel `discussion_likes` untuk mencegah duplikasi like.
5. THE database SHALL mengaktifkan Row Level Security (RLS) pada semua tabel dengan policy yang mengizinkan semua operasi read untuk `anon` role, dan operasi insert untuk `anon` role.

---

### Requirement 3: Menampilkan Daftar Thread

**User Story:** Sebagai user, saya ingin melihat semua diskusi dari seluruh pengguna, agar saya bisa mengikuti percakapan yang sedang berlangsung.

#### Acceptance Criteria

1. WHEN halaman diskusi dimuat, THE DiscussionService SHALL mengambil semua Thread dari tabel `discussion_threads` di Supabase dan menampilkannya di daftar.
2. THE DiscussionService SHALL menghitung jumlah Reply per Thread menggunakan query ke `discussion_replies` dan menampilkannya di kartu Thread.
3. WHEN filter "Terbaru" aktif, THE DiscussionService SHALL mengurutkan Thread berdasarkan `created_at` descending, dengan Thread yang `is_pinned = true` ditampilkan paling atas.
4. WHEN filter "Populer" aktif, THE DiscussionService SHALL mengurutkan Thread berdasarkan formula `likes_count + (reply_count * 2)` secara descending.
5. WHEN filter "Belum Dijawab" aktif, THE DiscussionService SHALL hanya menampilkan Thread yang tidak memiliki Reply.
6. WHEN user mengetik di kolom pencarian, THE DiscussionService SHALL memfilter Thread yang `title` atau `body`-nya mengandung teks pencarian (case-insensitive).
7. WHEN user memilih Kategori dari dropdown, THE DiscussionService SHALL hanya menampilkan Thread dengan `kategori` yang sesuai.
8. IF tidak ada Thread yang sesuai filter, THEN THE DiscussionService SHALL menampilkan pesan "Belum ada diskusi".

---

### Requirement 4: Membuat Thread Baru

**User Story:** Sebagai user yang sudah login, saya ingin membuat diskusi baru, agar pertanyaan saya bisa dijawab oleh pengguna lain.

#### Acceptance Criteria

1. WHEN user mengisi form dan menekan "Posting Diskusi", THE DiscussionService SHALL menyimpan Thread baru ke tabel `discussion_threads` di Supabase dengan `author_name`, `author_initials`, dan `author_username` diambil dari `CurrentUser`.
2. IF `CurrentUser` adalah null (user belum login), THEN THE DiscussionService SHALL menampilkan pesan error "Silakan login terlebih dahulu" dan membatalkan operasi.
3. IF judul Thread kosong atau kurang dari 5 karakter, THEN THE DiscussionService SHALL menampilkan pesan validasi dan membatalkan operasi.
4. IF kategori tidak dipilih, THEN THE DiscussionService SHALL menampilkan pesan validasi dan membatalkan operasi.
5. IF isi Thread kosong atau kurang dari 20 karakter, THEN THE DiscussionService SHALL menampilkan pesan validasi dan membatalkan operasi.
6. WHEN Thread berhasil disimpan ke Supabase, THE DiscussionService SHALL menutup modal dan menampilkan toast konfirmasi.
7. IF operasi insert ke Supabase gagal, THEN THE DiscussionService SHALL menampilkan pesan error kepada user tanpa menutup modal.

---

### Requirement 5: Melihat Detail Thread dan Balasan

**User Story:** Sebagai user, saya ingin membuka thread dan melihat semua balasannya, agar saya bisa membaca diskusi secara lengkap.

#### Acceptance Criteria

1. WHEN user mengklik sebuah Thread, THE DiscussionService SHALL mengambil data Thread beserta semua Reply-nya dari Supabase dan menampilkan halaman detail.
2. WHEN halaman detail Thread dibuka, THE DiscussionService SHALL menginkrementasi kolom `views` pada Thread tersebut di Supabase sebesar 1.
3. THE DiscussionService SHALL menampilkan Reply diurutkan berdasarkan `created_at` ascending, dengan Reply yang `is_best = true` ditampilkan paling atas.

---

### Requirement 6: Mengirim Balasan

**User Story:** Sebagai user yang sudah login, saya ingin membalas thread diskusi, agar saya bisa berbagi pengetahuan dengan pengguna lain.

#### Acceptance Criteria

1. WHEN user mengisi textarea balasan dan menekan "Kirim Balasan", THE DiscussionService SHALL menyimpan Reply baru ke tabel `discussion_replies` di Supabase dengan `author_name`, `author_initials`, dan `author_username` dari `CurrentUser`.
2. IF `CurrentUser` adalah null, THEN THE DiscussionService SHALL menampilkan pesan error "Silakan login terlebih dahulu" dan membatalkan operasi.
3. IF isi balasan kosong atau kurang dari 10 karakter, THEN THE DiscussionService SHALL menampilkan pesan validasi dan membatalkan operasi.
4. WHEN Reply berhasil disimpan, THE DiscussionService SHALL mengosongkan textarea dan menampilkan toast konfirmasi.
5. IF operasi insert ke Supabase gagal, THEN THE DiscussionService SHALL menampilkan pesan error kepada user.

---

### Requirement 7: Fitur Like Thread dan Reply

**User Story:** Sebagai user yang sudah login, saya ingin menyukai thread atau balasan, agar saya bisa mengapresiasi konten yang bermanfaat.

#### Acceptance Criteria

1. WHEN user menekan tombol like pada sebuah Thread, THE DiscussionService SHALL memeriksa tabel `discussion_likes` apakah `CurrentUser.username` sudah pernah menyukai Thread tersebut.
2. IF user belum menyukai Thread, THEN THE DiscussionService SHALL menyimpan LikeRecord baru ke `discussion_likes` dan menginkrementasi `likes_count` pada Thread di Supabase.
3. IF user sudah menyukai Thread, THEN THE DiscussionService SHALL menghapus LikeRecord dari `discussion_likes` dan mendekrementasi `likes_count` pada Thread di Supabase (toggle unlike).
4. WHEN user menekan tombol like pada sebuah Reply, THE DiscussionService SHALL menerapkan logika yang sama seperti kriteria 1-3 untuk Reply tersebut.
5. IF `CurrentUser` adalah null, THEN THE DiscussionService SHALL menampilkan pesan error "Silakan login untuk menyukai" dan membatalkan operasi.
6. THE DiscussionService SHALL menampilkan status like (aktif/tidak aktif) berdasarkan data dari `discussion_likes` untuk `CurrentUser.username` saat halaman dimuat.

---

### Requirement 8: Realtime — Balasan Baru Muncul Otomatis

**User Story:** Sebagai user yang sedang membaca thread, saya ingin balasan baru muncul secara otomatis tanpa refresh, agar diskusi terasa lebih hidup dan responsif.

#### Acceptance Criteria

1. WHEN user membuka halaman detail Thread, THE RealtimeSubscriber SHALL berlangganan (subscribe) ke perubahan pada tabel `discussion_replies` dengan filter `thread_id = <id thread yang sedang dibuka>`.
2. WHEN ada Reply baru yang masuk via Supabase Realtime, THE RealtimeSubscriber SHALL menambahkan Reply tersebut ke tampilan tanpa me-reload seluruh halaman.
3. WHEN user meninggalkan halaman detail Thread (kembali ke daftar), THE RealtimeSubscriber SHALL melepas (unsubscribe) dari channel Realtime yang aktif.
4. WHEN ada Thread baru yang dibuat oleh user lain, THE RealtimeSubscriber SHALL menambahkan Thread tersebut ke daftar secara otomatis jika user sedang di halaman daftar.
5. IF koneksi Realtime terputus, THEN THE RealtimeSubscriber SHALL mencoba reconnect secara otomatis menggunakan mekanisme bawaan Supabase JS client.

---

### Requirement 9: Migrasi Data Lama (Opsional)

**User Story:** Sebagai user lama, saya ingin diskusi yang sudah saya buat sebelumnya tetap tersedia, agar riwayat diskusi tidak hilang.

#### Acceptance Criteria

1. WHERE data `diskusi_threads` ditemukan di localStorage, THE DiscussionService SHALL menawarkan opsi kepada user untuk memigrasikan data tersebut ke Supabase.
2. WHEN user menyetujui migrasi, THE DiscussionService SHALL mengupload semua Thread dan Reply dari localStorage ke tabel Supabase yang sesuai.
3. WHEN migrasi selesai, THE DiscussionService SHALL menghapus data lama dari localStorage dan menampilkan konfirmasi kepada user.
4. IF terjadi error saat migrasi, THEN THE DiscussionService SHALL menghentikan proses, mempertahankan data localStorage, dan menampilkan pesan error.
