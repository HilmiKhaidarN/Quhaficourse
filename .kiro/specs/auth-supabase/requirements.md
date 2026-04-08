# Requirements Document

## Introduction

Fitur ini memigrasikan sistem autentikasi QuhafiCourse dari penyimpanan `localStorage` ke Supabase Auth. Saat ini login, register, dan manajemen user sepenuhnya berbasis `localStorage` (key `qc_users` dan `qc_current_user`), sehingga akun tidak bisa digunakan lintas browser/device dan password tersimpan dalam plaintext. Setelah migrasi, autentikasi menggunakan Supabase Auth (email/password), data profil user disimpan di tabel `profiles` di Supabase, dan session persisten antar browser/device. Fungsi `getCurrentUser()` tetap mengembalikan objek dengan struktur yang sama agar semua halaman lain tidak perlu diubah.

---

## Glossary

- **AuthService**: Modul JavaScript di `app.js` yang menangani semua operasi autentikasi menggunakan Supabase Auth.
- **ProfileService**: Modul JavaScript yang menangani operasi baca/tulis data profil user ke tabel `profiles` di Supabase.
- **SupabaseClient**: Instance Supabase JS yang diinisialisasi via CDN menggunakan `SUPABASE_URL` dan `SUPABASE_ANON_KEY` dari `supabase-config.js`.
- **CurrentUser**: Objek user aktif dengan struktur `{ id, nama, email, username, role, avatar, joinDate }` yang dikembalikan oleh `getCurrentUser()`.
- **Session**: Token autentikasi Supabase yang disimpan secara otomatis oleh Supabase JS client di `localStorage` dan berlaku lintas tab browser.
- **Profile**: Baris di tabel `profiles` Supabase yang menyimpan data tambahan user (nama, username, role, avatar, joinDate) yang tidak tersedia di Supabase Auth.
- **AdminAccount**: Akun dengan `role = 'Admin'` yang memiliki akses ke `admin.html`.
- **SeedAdmin**: Proses inisialisasi satu kali untuk memastikan akun admin tersedia di Supabase.

---

## Requirements

### Requirement 1: Inisialisasi Supabase Client untuk Auth

**User Story:** Sebagai developer, saya ingin Supabase JS client tersedia di semua halaman yang membutuhkan autentikasi, agar operasi login/register/session dapat dilakukan tanpa npm/bundler.

#### Acceptance Criteria

1. THE SupabaseClient SHALL diinisialisasi menggunakan Supabase JS CDN (`@supabase/supabase-js`) sebelum `app.js` dieksekusi di setiap halaman yang memuatnya.
2. THE SupabaseClient SHALL menggunakan `SUPABASE_URL` dan `SUPABASE_ANON_KEY` yang didefinisikan di `supabase-config.js`.
3. IF `SUPABASE_URL` atau `SUPABASE_ANON_KEY` tidak terdefinisi saat inisialisasi, THEN THE AuthService SHALL menampilkan pesan error di console dan menghentikan operasi autentikasi lebih lanjut.

---

### Requirement 2: Skema Database — Tabel Profiles

**User Story:** Sebagai developer, saya ingin tabel `profiles` di Supabase yang menyimpan data profil user, agar data seperti nama, username, dan role tersedia setelah autentikasi.

#### Acceptance Criteria

1. THE database SHALL memiliki tabel `profiles` dengan kolom: `id` (uuid, primary key, referensi ke `auth.users.id`), `nama` (text, not null), `username` (text, not null, unique), `role` (text, not null, default `'Pelajar'`), `avatar` (text, nullable), `join_date` (text, not null).
2. THE database SHALL menerapkan Row Level Security (RLS) pada tabel `profiles` dengan policy yang mengizinkan user membaca semua profil (`SELECT` untuk `anon` dan `authenticated` role).
3. THE database SHALL menerapkan policy RLS yang mengizinkan user hanya mengubah profil miliknya sendiri (`UPDATE` di mana `auth.uid() = id`).
4. THE database SHALL menerapkan policy RLS yang mengizinkan insert profil baru hanya jika `id` sama dengan `auth.uid()`.
5. THE database SHALL memiliki constraint UNIQUE pada kolom `username` di tabel `profiles`.

---

### Requirement 3: Register User Baru

**User Story:** Sebagai pengunjung, saya ingin mendaftar akun baru menggunakan email dan password, agar saya bisa mengakses konten QuhafiCourse.

#### Acceptance Criteria

1. WHEN user mengisi form register dan menekan tombol "Daftar", THE AuthService SHALL memanggil `supabase.auth.signUp()` dengan email dan password yang diinput.
2. WHEN `signUp` berhasil, THE ProfileService SHALL menyimpan baris baru ke tabel `profiles` dengan `id` dari Supabase Auth, `nama`, `username`, `role = 'Pelajar'`, dan `join_date` berformat `"D MMMM YYYY"` dalam bahasa Indonesia.
3. IF email sudah terdaftar di Supabase Auth, THEN THE AuthService SHALL menampilkan pesan error "Email sudah terdaftar." kepada user.
4. IF username sudah digunakan di tabel `profiles`, THEN THE ProfileService SHALL menampilkan pesan error "Username sudah digunakan." kepada user.
5. IF password kurang dari 6 karakter, THEN THE AuthService SHALL menampilkan pesan error "Password minimal 6 karakter." sebelum memanggil Supabase.
6. IF konfirmasi password tidak cocok dengan password, THEN THE AuthService SHALL menampilkan pesan error "Konfirmasi password tidak cocok." sebelum memanggil Supabase.
7. IF field nama, email, atau username kosong, THEN THE AuthService SHALL menampilkan pesan error "Semua field wajib diisi." sebelum memanggil Supabase.
8. WHEN register berhasil, THE AuthService SHALL mengarahkan user ke `dashboard.html`.
9. IF operasi `signUp` atau insert `profiles` gagal karena error Supabase, THEN THE AuthService SHALL menampilkan pesan error deskriptif kepada user.

---

### Requirement 4: Login User

**User Story:** Sebagai user terdaftar, saya ingin login menggunakan email atau username dan password, agar saya bisa mengakses akun saya dari browser atau device manapun.

#### Acceptance Criteria

1. WHEN user memasukkan email dan password lalu menekan "Masuk", THE AuthService SHALL memanggil `supabase.auth.signInWithPassword()` dengan email dan password tersebut.
2. WHEN user memasukkan username (bukan email) di field identifier, THE AuthService SHALL mengambil email yang terkait dengan username tersebut dari tabel `profiles` sebelum memanggil `signInWithPassword()`.
3. IF username tidak ditemukan di tabel `profiles`, THEN THE AuthService SHALL menampilkan pesan error "Email/username atau password salah." kepada user.
4. IF `signInWithPassword` mengembalikan error, THEN THE AuthService SHALL menampilkan pesan error "Email/username atau password salah." kepada user.
5. WHEN login berhasil, THE AuthService SHALL mengambil data profil dari tabel `profiles` berdasarkan `id` user Supabase Auth.
6. WHEN login berhasil dan role user adalah `'Admin'`, THE AuthService SHALL mengarahkan user ke `admin.html`.
7. WHEN login berhasil dan role user bukan `'Admin'`, THE AuthService SHALL mengarahkan user ke `dashboard.html`.
8. THE AuthService SHALL mengelola session secara otomatis menggunakan mekanisme bawaan Supabase JS client (token disimpan di localStorage oleh Supabase).

---

### Requirement 5: Fungsi getCurrentUser() — Kompatibilitas Mundur

**User Story:** Sebagai developer, saya ingin `getCurrentUser()` tetap mengembalikan objek dengan struktur yang sama, agar semua halaman yang sudah ada tidak perlu diubah.

#### Acceptance Criteria

1. THE AuthService SHALL menyediakan fungsi `getCurrentUser()` yang mengembalikan objek `{ id, nama, email, username, role, avatar, joinDate }` atau `null` jika tidak ada session aktif.
2. WHEN `getCurrentUser()` dipanggil dan session Supabase aktif, THE AuthService SHALL mengembalikan data profil yang sudah di-cache dari tabel `profiles`.
3. WHEN `getCurrentUser()` dipanggil dan tidak ada session Supabase aktif, THE AuthService SHALL mengembalikan `null`.
4. THE AuthService SHALL menyediakan mekanisme cache profil di memori (variabel modul) agar `getCurrentUser()` dapat dipanggil secara sinkron tanpa menunggu network request.
5. WHEN session Supabase berubah (login/logout), THE AuthService SHALL memperbarui cache profil secara otomatis menggunakan `supabase.auth.onAuthStateChange()`.

---

### Requirement 6: Logout

**User Story:** Sebagai user yang sudah login, saya ingin bisa logout, agar sesi saya berakhir dengan aman.

#### Acceptance Criteria

1. WHEN user mengklik menu "Keluar" di sidebar, THE AuthService SHALL memanggil `supabase.auth.signOut()`.
2. WHEN `signOut` berhasil, THE AuthService SHALL menghapus cache profil di memori dan mengarahkan user ke `index.html`.
3. IF `signOut` gagal, THEN THE AuthService SHALL tetap mengarahkan user ke `index.html` dan menghapus cache profil lokal.

---

### Requirement 7: Proteksi Halaman (Auth Guard)

**User Story:** Sebagai developer, saya ingin halaman-halaman yang membutuhkan login terlindungi, agar user yang belum login tidak bisa mengaksesnya langsung.

#### Acceptance Criteria

1. WHEN halaman yang membutuhkan autentikasi dimuat dan tidak ada session Supabase aktif, THE AuthService SHALL mengarahkan user ke `index.html`.
2. WHEN halaman `admin.html` dimuat dan user yang login bukan `'Admin'`, THE AuthService SHALL mengarahkan user ke `dashboard.html`.
3. WHEN halaman `index.html` atau `register.html` dimuat dan sudah ada session Supabase aktif, THE AuthService SHALL mengarahkan user ke `dashboard.html` (atau `admin.html` jika role Admin).
4. THE AuthService SHALL menyelesaikan pengecekan session sebelum merender konten halaman untuk mencegah flash konten yang tidak seharusnya terlihat.

---

### Requirement 8: Update Profil di Pengaturan

**User Story:** Sebagai user yang sudah login, saya ingin mengubah nama, username, dan informasi profil saya, agar data akun saya selalu akurat.

#### Acceptance Criteria

1. WHEN user menekan "Simpan Perubahan" di tab Akun pada `pengaturan.html`, THE ProfileService SHALL mengupdate baris di tabel `profiles` dengan `nama`, `username`, dan `avatar` yang baru.
2. IF username baru sudah digunakan oleh user lain, THEN THE ProfileService SHALL menampilkan pesan error "Username sudah digunakan." dan membatalkan operasi.
3. WHEN update profil berhasil, THE AuthService SHALL memperbarui cache `CurrentUser` di memori dengan data terbaru.
4. WHEN update profil berhasil, THE ProfileService SHALL menampilkan toast konfirmasi "Informasi akun berhasil disimpan!".
5. IF operasi update ke Supabase gagal, THEN THE ProfileService SHALL menampilkan pesan error deskriptif kepada user.

---

### Requirement 9: Ganti Password di Pengaturan

**User Story:** Sebagai user yang sudah login, saya ingin mengganti password saya melalui halaman pengaturan, agar keamanan akun saya terjaga.

#### Acceptance Criteria

1. WHEN user mengisi field password baru dan menekan "Ubah Password" di tab Keamanan, THE AuthService SHALL memanggil `supabase.auth.updateUser({ password: passBaru })`.
2. IF password baru kurang dari 8 karakter, THEN THE AuthService SHALL menampilkan pesan error "Password baru minimal 8 karakter." sebelum memanggil Supabase.
3. IF konfirmasi password baru tidak cocok, THEN THE AuthService SHALL menampilkan pesan error "Konfirmasi password tidak cocok." sebelum memanggil Supabase.
4. WHEN ganti password berhasil, THE AuthService SHALL mengosongkan semua field password dan menampilkan toast "Password berhasil diubah!".
5. IF `updateUser` gagal, THEN THE AuthService SHALL menampilkan pesan error dari Supabase kepada user.
6. THE AuthService SHALL tidak memerlukan verifikasi "password saat ini" karena Supabase Auth mengelola validasi session secara internal.

---

### Requirement 10: Seed Akun Admin

**User Story:** Sebagai developer, saya ingin akun admin tersedia di Supabase, agar panel admin dapat diakses setelah migrasi.

#### Acceptance Criteria

1. THE SeedAdmin SHALL menyediakan script atau instruksi SQL untuk membuat akun admin di Supabase Auth dengan email `admin@quhaficourse.id`.
2. WHEN akun admin dibuat di Supabase Auth, THE SeedAdmin SHALL menyisipkan baris ke tabel `profiles` dengan `nama = 'Admin'`, `username = 'admin'`, `role = 'Admin'`, dan `join_date = '1 Januari 2025'`.
3. THE AuthService SHALL tidak lagi menjalankan fungsi `seedAdmin()` secara otomatis di sisi client karena pembuatan akun admin dilakukan satu kali via script/SQL.

---

### Requirement 11: Hapus Akun

**User Story:** Sebagai user, saya ingin bisa menghapus akun saya secara permanen, agar data saya tidak tersimpan di platform.

#### Acceptance Criteria

1. WHEN user mengkonfirmasi penghapusan akun di `pengaturan.html`, THE AuthService SHALL memanggil Supabase untuk menghapus data profil dari tabel `profiles`.
2. WHEN data profil berhasil dihapus, THE AuthService SHALL memanggil `supabase.auth.signOut()` dan mengarahkan user ke `index.html`.
3. IF operasi penghapusan gagal, THEN THE AuthService SHALL menampilkan pesan error dan membatalkan proses logout.
4. THE AuthService SHALL menampilkan konfirmasi modal sebelum menjalankan penghapusan akun.

---

### Requirement 12: Session Persisten Lintas Browser/Device

**User Story:** Sebagai user, saya ingin session saya tetap aktif saat membuka browser baru atau device lain, agar saya tidak perlu login ulang setiap saat.

#### Acceptance Criteria

1. THE SupabaseClient SHALL dikonfigurasi dengan `persistSession: true` agar Supabase JS menyimpan token session di `localStorage` secara otomatis.
2. WHEN user membuka halaman baru di tab yang sama atau tab berbeda dalam browser yang sama, THE AuthService SHALL memulihkan session dari storage tanpa meminta login ulang.
3. WHEN token session Supabase kedaluwarsa, THE SupabaseClient SHALL memperbarui token secara otomatis menggunakan refresh token bawaan Supabase JS.
