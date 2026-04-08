# Implementation Plan: diskusi-supabase

## Overview

Migrasi sistem diskusi QuhafiCourse dari localStorage ke Supabase (PostgreSQL + Realtime). Implementasi dilakukan secara incremental: setup config → update HTML → rewrite diskusi.js → realtime → like system → migrasi data lama.

Stack: HTML/CSS/JS murni, Supabase JS via CDN, tanpa npm/bundler.

## Tasks

- [x] 1. Setup Supabase project dan skema database
  - Jalankan SQL DDL dari design.md di Supabase SQL Editor untuk membuat tabel `discussion_threads`, `discussion_replies`, `discussion_likes`
  - Aktifkan RLS dan buat semua policy `anon` (select, insert, update, delete) sesuai DDL di design.md
  - Aktifkan Realtime untuk tabel `discussion_replies` dan `discussion_threads` di Supabase Dashboard → Database → Replication
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_

- [x] 2. Buat supabase-config.js dan inisialisasi client
  - [x] 2.1 Buat file `supabase-config.js` di root project
    - Definisikan dua konstanta global: `SUPABASE_URL` dan `SUPABASE_ANON_KEY` dengan nilai dari Supabase Dashboard → Settings → API
    - _Requirements: 1.2_
  - [x] 2.2 Update `diskusi.html` — tambahkan CDN dan script baru
    - Tambahkan `<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js">` sebelum `icons.js`
    - Tambahkan `<script src="supabase-config.js">` setelah CDN Supabase dan sebelum `diskusi.js`
    - _Requirements: 1.1_
  - [x] 2.3 Inisialisasi `supabaseClient` di awal `diskusi.js`
    - Ganti variabel `threads` dan `saveThreads()` dengan inisialisasi `supabaseClient` menggunakan `supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)` di dalam try-catch
    - Jika gagal, tampilkan pesan error di `#threadList` dan return
    - Tambahkan variabel `let activeChannel = null` untuk RealtimeSubscriber
    - _Requirements: 1.1, 1.3_

- [x] 3. Implementasi load dan tampilkan daftar thread
  - [x] 3.1 Tulis fungsi `loadThreads()` async
    - Fetch semua baris dari `discussion_threads` via `supabaseClient.from('discussion_threads').select('*')`
    - Untuk setiap thread, hitung reply count dengan query `discussion_replies` filter `thread_id`
    - Simpan hasil ke variabel state lokal `threads` (array), lalu panggil `renderThreadList()`
    - Tangani error Supabase dengan `showToast`
    - _Requirements: 3.1, 3.2_
  - [ ]* 3.2 Tulis property test untuk reply count accuracy
    - **Property 8: Reply count accuracy**
    - **Validates: Requirements 3.2**
  - [x] 3.3 Update `renderThreadList()` — sorting dan filter
    - Ubah filter "Terbaru" agar sort berdasarkan `created_at` descending dengan pinned di atas
    - Ubah filter "Populer" agar sort berdasarkan `likes_count + reply_count * 2` descending
    - Ubah filter "Belum Dijawab" agar filter thread dengan `reply_count === 0`
    - Ubah filter "Terjawab" agar filter thread yang memiliki reply dengan `is_best = true`
    - Pastikan search dan filter kategori tetap berfungsi (case-insensitive untuk search)
    - _Requirements: 3.3, 3.4, 3.5, 3.6, 3.7, 3.8_
  - [ ]* 3.4 Tulis property test untuk sorting dan filter
    - **Property 9: Sort terbaru — pinned selalu di atas**
    - **Validates: Requirements 3.3**
  - [ ]* 3.5 Tulis property test untuk sort populer
    - **Property 10: Sort populer berdasarkan skor**
    - **Validates: Requirements 3.4**
  - [ ]* 3.6 Tulis property test untuk filter belum dijawab
    - **Property 11: Filter belum dijawab**
    - **Validates: Requirements 3.5**
  - [ ]* 3.7 Tulis property test untuk search filter
    - **Property 12: Search filter case-insensitive**
    - **Validates: Requirements 3.6**
  - [ ]* 3.8 Tulis property test untuk filter kategori
    - **Property 13: Kategori filter**
    - **Validates: Requirements 3.7**
  - [x] 3.9 Panggil `loadThreads()` di INIT (ganti `renderThreadList()` lama)
    - _Requirements: 3.1_

- [x] 4. Checkpoint — Pastikan daftar thread tampil dari Supabase
  - Ensure semua tests pass, ask the user if questions arise.

- [x] 5. Implementasi buat thread baru
  - [x] 5.1 Rewrite fungsi `submitThread()` menjadi async
    - Cek `getCurrentUser()`, tampilkan error jika null
    - Validasi judul (min 5 karakter), kategori, body (min 20 karakter) — jangan kirim request jika invalid
    - Insert ke `discussion_threads` via `supabaseClient.from('discussion_threads').insert({...})`
    - Ambil `author_name`, `author_initials`, `author_username` dari `getCurrentUser()`
    - Jika berhasil: tutup modal, tampilkan toast; jika gagal: tampilkan toast error tanpa tutup modal
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7_
  - [ ]* 5.2 Tulis property test untuk validasi input thread
    - **Property 6: Input validation rejects short content** (bagian thread)
    - **Validates: Requirements 4.3, 4.5**
  - [ ]* 5.3 Tulis property test untuk thread creation round-trip
    - **Property 4: Thread creation round-trip**
    - **Validates: Requirements 4.1**

- [x] 6. Implementasi detail thread dan submit balasan
  - [x] 6.1 Rewrite fungsi `openThread(id)` menjadi async
    - Fetch thread by id dari `discussion_threads`
    - Fetch semua reply dari `discussion_replies` dengan filter `thread_id = id`
    - Increment `views` via `supabaseClient.from('discussion_threads').update({ views: t.views + 1 }).eq('id', id)`
    - Simpan ke state lokal, panggil `renderThreadDetail()`
    - _Requirements: 5.1, 5.2_
  - [ ]* 6.2 Tulis property test untuk views increment
    - **Property 14: Views increment**
    - **Validates: Requirements 5.2**
  - [x] 6.3 Update `renderThreadDetail()` — gunakan data dari Supabase
    - Ubah sort reply: `is_best = true` di atas, sisanya `created_at` ascending
    - Pastikan tombol "Tandai Terbaik" memanggil fungsi `markBest()` yang diupdate
    - _Requirements: 5.3_
  - [ ]* 6.4 Tulis property test untuk reply sort
    - **Property 15: Reply sort — best answer selalu di atas**
    - **Validates: Requirements 5.3**
  - [x] 6.5 Rewrite fungsi `submitReply(threadId)` menjadi async
    - Cek `getCurrentUser()`, validasi body (min 10 karakter)
    - Insert ke `discussion_replies` via Supabase
    - Jika berhasil: kosongkan textarea, tampilkan toast; jika gagal: tampilkan toast error
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_
  - [ ]* 6.6 Tulis property test untuk validasi input reply
    - **Property 6: Input validation rejects short content** (bagian reply)
    - **Validates: Requirements 6.3**
  - [ ]* 6.7 Tulis property test untuk reply creation round-trip
    - **Property 5: Reply creation round-trip**
    - **Validates: Requirements 6.1**
  - [x] 6.8 Update fungsi `markBest(threadId, replyId)` menjadi async
    - Set semua reply thread ke `is_best = false`, lalu set reply target ke `is_best = true` via Supabase update
    - _Requirements: 5.3_

- [x] 7. Checkpoint — Pastikan buat thread, buka detail, dan kirim balasan berfungsi
  - Ensure semua tests pass, ask the user if questions arise.

- [x] 8. Implementasi like system
  - [x] 8.1 Tulis fungsi `loadUserLikes(username)` async
    - Fetch semua baris dari `discussion_likes` dengan filter `user_username = username`
    - Simpan ke Set lokal `userLikedSet` (format: `"thread_<id>"` atau `"reply_<id>"`)
    - Ganti fungsi `isLiked()` agar membaca dari `userLikedSet`
    - Panggil `loadUserLikes()` saat init jika user sudah login
    - _Requirements: 7.6_
  - [ ]* 8.2 Tulis property test untuk like status display consistency
    - **Property 2: Like status display consistency**
    - **Validates: Requirements 7.6**
  - [x] 8.3 Rewrite fungsi `likeThread(id)` menjadi async
    - Cek `getCurrentUser()`, tampilkan error jika null
    - Cek `userLikedSet` untuk status liked saat ini
    - Jika belum liked: insert ke `discussion_likes` + increment `likes_count` di `discussion_threads`
    - Jika sudah liked: delete dari `discussion_likes` + decrement `likes_count` di `discussion_threads`
    - Update `userLikedSet` dan re-render
    - _Requirements: 7.1, 7.2, 7.3, 7.5_
  - [x] 8.4 Rewrite fungsi `likeReply(threadId, replyId)` menjadi async
    - Logika sama dengan `likeThread()` tapi untuk `discussion_replies` dan `target_type = 'reply'`
    - _Requirements: 7.4, 7.5_
  - [ ]* 8.5 Tulis property test untuk like toggle round-trip
    - **Property 1: Like toggle round-trip**
    - **Validates: Requirements 7.2, 7.3, 7.4**
  - [ ]* 8.6 Tulis property test untuk unique like constraint
    - **Property 3: Unique like constraint**
    - **Validates: Requirements 2.4**

- [x] 9. Implementasi Realtime
  - [x] 9.1 Tulis fungsi `subscribeToReplies(threadId)`
    - Subscribe ke channel `discussion_replies` dengan filter `thread_id=eq.<threadId>`
    - Pada event INSERT: append reply baru ke state lokal dan re-render section replies tanpa full reload
    - Simpan channel ke `activeChannel`
    - _Requirements: 8.1, 8.2_
  - [x] 9.2 Tulis fungsi `subscribeToThreads()`
    - Subscribe ke channel `discussion_threads`
    - Pada event INSERT: prepend thread baru ke state lokal `threads` dan re-render thread list
    - Simpan channel ke `activeChannel`
    - _Requirements: 8.4_
  - [x] 9.3 Tulis fungsi `unsubscribeActive()`
    - Panggil `supabaseClient.removeChannel(activeChannel)` jika `activeChannel` tidak null
    - Set `activeChannel = null`
    - _Requirements: 8.3_
  - [x] 9.4 Integrasikan subscribe/unsubscribe ke flow navigasi
    - Panggil `subscribeToReplies(id)` di akhir `openThread()`
    - Panggil `unsubscribeActive()` di awal `backToList()`, lalu panggil `subscribeToThreads()`
    - Panggil `subscribeToThreads()` saat init
    - _Requirements: 8.1, 8.3, 8.4, 8.5_
  - [ ]* 9.5 Tulis property test untuk realtime update UI
    - **Property 16: Realtime events update UI**
    - **Validates: Requirements 8.2, 8.4**
  - [ ]* 9.6 Tulis property test untuk realtime unsubscribe
    - **Property 17: Realtime unsubscribe on back**
    - **Validates: Requirements 8.3**

- [x] 10. Checkpoint — Pastikan realtime dan like system berfungsi end-to-end
  - Ensure semua tests pass, ask the user if questions arise.

- [x] 11. Migrasi data lama dari localStorage (opsional)
  - [x] 11.1 Tulis fungsi `checkAndOfferMigration()`
    - Cek apakah `localStorage.diskusi_threads` berisi data (array non-empty)
    - Jika ya, tampilkan banner/prompt di UI yang menawarkan migrasi ke Supabase
    - _Requirements: 9.1_
  - [ ]* 11.2 Tulis fungsi `migrateLocalStorageToSupabase()` async
    - Parse data dari `localStorage.diskusi_threads`
    - Untuk setiap thread: insert ke `discussion_threads` (mapping field sesuai tabel di design.md)
    - Untuk setiap reply dalam thread: insert ke `discussion_replies` dengan `thread_id` dari hasil insert thread
    - Jika semua berhasil: hapus `localStorage.diskusi_threads` dan `localStorage.diskusi_liked`, tampilkan konfirmasi
    - Jika ada error: hentikan proses, pertahankan localStorage, tampilkan pesan error dengan detail
    - _Requirements: 9.2, 9.3, 9.4_
  - [ ]* 11.3 Tulis property test untuk migration round-trip
    - **Property 18: Migration round-trip**
    - **Validates: Requirements 9.2, 9.3**
  - [x] 11.4 Panggil `checkAndOfferMigration()` di INIT setelah `loadThreads()`
    - _Requirements: 9.1_

- [x] 12. Final checkpoint — Pastikan semua fitur terintegrasi
  - Ensure semua tests pass, ask the user if questions arise.

## Notes

- Tasks bertanda `*` bersifat opsional dan bisa dilewati untuk MVP lebih cepat
- Setiap task mereferensikan requirements spesifik untuk traceability
- Property tests menggunakan fast-check (via CDN atau npm untuk test runner)
- Semua operasi write harus cek `getCurrentUser()` terlebih dahulu
- `likes_count` di tabel thread/reply adalah denormalized counter — `discussion_likes` adalah sumber kebenaran untuk status liked per user
