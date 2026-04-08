// ============================================================
// DATA MATERI & QUIZ - QURDIS: ULUMUL QUR'AN & HADITS
// Sumber: Kitab Mabahits fi Ulumil Qur'an (Manna' Al-Qaththan),
//         Kitab Taisir Musthalahil Hadits (Dr. Mahmud Ath-Thahhan),
//         rumaysho.com, muslim.or.id
// ============================================================

const LESSONS = [
  {
    id: 1, title: "Pengertian & Sejarah Al-Qur'an", duration: '12 mnt', type: 'materi',
    content: `
      <div class="lesson-header">
        <div class="lesson-tag">📖 Bab 1 · Qurdis</div>
        <h1>Pengertian Al-Qur'an dan Sejarah Turunnya</h1>
        <div class="lesson-meta"><span>⏱ 12 menit baca</span><span>📚 Ulumul Qur'an</span></div>
      </div>
      <div class="lesson-body">
        <h2>Pengertian Al-Qur'an</h2>
        <p><strong>Al-Qur'an</strong> (القرآن) secara bahasa berasal dari kata <em>qara'a</em> yang berarti membaca. Secara istilah, Al-Qur'an adalah <strong>kalam (firman) Allah ﷻ yang diturunkan kepada Nabi Muhammad ﷺ melalui Malaikat Jibril, dalam bahasa Arab, yang dinukilkan secara mutawatir, dan membacanya bernilai ibadah.</strong></p>

        <h2>Unsur-unsur Definisi Al-Qur'an</h2>
        <table class="table-materi">
          <thead><tr><th>Unsur</th><th>Penjelasan</th></tr></thead>
          <tbody>
            <tr><td><strong>Kalam Allah</strong></td><td>Bukan perkataan manusia, jin, atau malaikat</td></tr>
            <tr><td><strong>Diturunkan kepada Nabi Muhammad ﷺ</strong></td><td>Membedakan dari kitab-kitab sebelumnya</td></tr>
            <tr><td><strong>Melalui Malaikat Jibril</strong></td><td>Perantara penyampaian wahyu</td></tr>
            <tr><td><strong>Bahasa Arab</strong></td><td>Terjemahan Al-Qur'an bukan Al-Qur'an</td></tr>
            <tr><td><strong>Mutawatir</strong></td><td>Diriwayatkan oleh banyak orang sehingga mustahil berdusta</td></tr>
            <tr><td><strong>Membacanya ibadah</strong></td><td>Setiap huruf bernilai 10 kebaikan</td></tr>
          </tbody>
        </table>

        <h2>Nama-nama Al-Qur'an</h2>
        <p>Al-Qur'an memiliki banyak nama yang menunjukkan keagungannya:</p>
        <ul>
          <li><strong>Al-Qur'an</strong> — yang dibaca (QS. Al-Isra': 9)</li>
          <li><strong>Al-Kitab</strong> — tulisan/buku (QS. Al-Baqarah: 2)</li>
          <li><strong>Al-Furqan</strong> — pembeda antara hak dan batil (QS. Al-Furqan: 1)</li>
          <li><strong>Adz-Dzikr</strong> — peringatan (QS. Al-Hijr: 9)</li>
          <li><strong>At-Tanzil</strong> — yang diturunkan (QS. Asy-Syu'ara: 192)</li>
        </ul>

        <h2>Sejarah Turunnya Al-Qur'an</h2>
        <p>Al-Qur'an diturunkan dalam <strong>dua tahap</strong>:</p>
        <ol>
          <li><strong>Dari Lauhul Mahfuzh ke Baitul 'Izzah</strong> (langit dunia) — sekaligus pada malam Lailatul Qadar</li>
          <li><strong>Dari Baitul 'Izzah kepada Nabi Muhammad ﷺ</strong> — secara berangsur-angsur selama ±23 tahun</li>
        </ol>
        <div class="callout hadith">
          <div class="callout-icon">📜</div>
          <div class="callout-body">
            <strong>QS. Al-Isra': 106:</strong><br>
            "Dan Al-Qur'an itu telah Kami turunkan dengan berangsur-angsur agar kamu membacakannya kepada manusia secara perlahan-lahan dan Kami menurunkannya bagian demi bagian."
          </div>
        </div>

        <h2>Wahyu Pertama dan Terakhir</h2>
        <table class="table-materi">
          <thead><tr><th></th><th>Ayat</th><th>Tempat</th><th>Waktu</th></tr></thead>
          <tbody>
            <tr><td><strong>Wahyu Pertama</strong></td><td>QS. Al-'Alaq: 1-5</td><td>Gua Hira, Makkah</td><td>17 Ramadan, 13 SH (610 M)</td></tr>
            <tr><td><strong>Wahyu Terakhir</strong></td><td>QS. Al-Ma'idah: 3 (menurut pendapat kuat)</td><td>Padang Arafah</td><td>9 Dzulhijjah, 10 H</td></tr>
          </tbody>
        </table>

        <div class="callout success">
          <div class="callout-icon">✅</div>
          <div class="callout-body">
            <strong>Keutamaan Membaca Al-Qur'an:</strong><br>
            "Bacalah Al-Qur'an, karena sesungguhnya ia akan datang pada hari kiamat sebagai pemberi syafaat bagi para pembacanya."
            <br><em>(HR. Muslim no. 804)</em>
          </div>
        </div>

        <div class="source-box">
          <strong>📚 Sumber Referensi:</strong>
          • Kitab <em>Mabahits fi Ulumil Qur'an</em> (Manna' Al-Qaththan)<br>
          • <a href="https://rumaysho.com/tag/ulumul-quran" target="_blank">rumaysho.com — Ulumul Qur'an</a><br>
          • <a href="https://muslim.or.id/category/al-quran" target="_blank">muslim.or.id — Al-Qur'an</a>
        </div>
      </div>`
  },
  {
    id: 2, title: "Asbabun Nuzul", duration: '10 mnt', type: 'materi',
    content: `
      <div class="lesson-header">
        <div class="lesson-tag">📖 Bab 2 · Qurdis</div>
        <h1>Asbabun Nuzul (Sebab-sebab Turunnya Ayat)</h1>
        <div class="lesson-meta"><span>⏱ 10 menit baca</span><span>📚 Ulumul Qur'an</span></div>
      </div>
      <div class="lesson-body">
        <h2>Pengertian Asbabun Nuzul</h2>
        <p><strong>Asbabun Nuzul</strong> (أسباب النزول) adalah sebab-sebab atau latar belakang turunnya suatu ayat atau beberapa ayat Al-Qur'an. Ilmu ini penting untuk memahami makna ayat secara tepat dan kontekstual.</p>

        <h2>Manfaat Mempelajari Asbabun Nuzul</h2>
        <ul>
          <li>Membantu memahami makna dan tafsir ayat dengan benar</li>
          <li>Mengetahui hikmah di balik penetapan suatu hukum</li>
          <li>Menghindari kesalahan dalam memahami ayat</li>
          <li>Mengetahui kepada siapa ayat tersebut pertama kali ditujukan</li>
          <li>Memudahkan hafalan dan pemahaman Al-Qur'an</li>
        </ul>

        <h2>Kaidah Penting: "Al-'Ibrah bi 'Umum Al-Lafzh"</h2>
        <div class="callout info">
          <div class="callout-icon">ℹ️</div>
          <div class="callout-body">
            <strong>Kaidah Ushul Fiqh:</strong> <em>"Yang menjadi patokan adalah keumuman lafazh, bukan kekhususan sebab."</em><br>
            Artinya: meskipun suatu ayat turun karena sebab tertentu, hukumnya berlaku umum untuk semua orang yang memenuhi kriteria dalam ayat tersebut, tidak terbatas pada orang yang menjadi sebab turunnya.
          </div>
        </div>

        <h2>Contoh-contoh Asbabun Nuzul</h2>
        <table class="table-materi">
          <thead><tr><th>Ayat</th><th>Sebab Turun</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>QS. Al-Baqarah: 187</strong><br>(boleh makan minum di malam Ramadan)</td>
              <td>Pada awal Islam, setelah tidur di malam Ramadan tidak boleh makan. Umar bin Khattab dan sahabat lain merasa kesulitan, lalu turunlah ayat ini.</td>
            </tr>
            <tr>
              <td><strong>QS. An-Nisa: 11</strong><br>(hukum waris)</td>
              <td>Istri Sa'd bin Ar-Rabi' mengadu kepada Nabi ﷺ bahwa pamannya mengambil seluruh harta Sa'd tanpa memberi bagian kepada anak-anaknya.</td>
            </tr>
            <tr>
              <td><strong>QS. Al-Mujadilah: 1</strong><br>(hukum zhihar)</td>
              <td>Khaulah binti Tsa'labah mengadu kepada Nabi ﷺ bahwa suaminya (Aus bin Ash-Shamit) menzhiharnya.</td>
            </tr>
          </tbody>
        </table>

        <div class="callout hadith">
          <div class="callout-icon">📜</div>
          <div class="callout-body">
            <strong>Perkataan Ibnu Mas'ud radhiyallahu 'anhu:</strong><br>
            "Demi Allah yang tidak ada ilah selain-Nya, tidaklah turun satu ayat pun dari Al-Qur'an melainkan aku mengetahui tentang siapa ia turun dan di mana ia turun."
            <br><em>(HR. Bukhari no. 5002)</em>
          </div>
        </div>

        <div class="source-box">
          <strong>📚 Sumber Referensi:</strong>
          • Kitab <em>Lubabun Nuqul fi Asbabin Nuzul</em> (Imam As-Suyuthi)<br>
          • Kitab <em>Mabahits fi Ulumil Qur'an</em> (Manna' Al-Qaththan), Bab Asbabun Nuzul<br>
          • <a href="https://rumaysho.com/tag/asbabun-nuzul" target="_blank">rumaysho.com — Asbabun Nuzul</a>
        </div>
      </div>`
  },

  {
    id: 3, title: "Makki dan Madani", duration: '8 mnt', type: 'materi',
    content: `
      <div class="lesson-header">
        <div class="lesson-tag">📖 Bab 3 · Qurdis</div>
        <h1>Ayat Makki dan Madani</h1>
        <div class="lesson-meta"><span>⏱ 8 menit baca</span><span>📚 Ulumul Qur'an</span></div>
      </div>
      <div class="lesson-body">
        <h2>Pengertian</h2>
        <p>Al-Qur'an dibagi berdasarkan tempat dan waktu turunnya menjadi dua kelompok:</p>
        <ul>
          <li><strong>Makki</strong> — ayat/surah yang turun sebelum hijrah Nabi ﷺ ke Madinah (meskipun turun di luar Makkah)</li>
          <li><strong>Madani</strong> — ayat/surah yang turun setelah hijrah Nabi ﷺ ke Madinah (meskipun turun di luar Madinah)</li>
        </ul>

        <h2>Ciri-ciri Ayat Makki</h2>
        <ul>
          <li>Umumnya pendek-pendek dan berirama kuat</li>
          <li>Banyak membahas <strong>akidah</strong> (tauhid, hari kiamat, surga-neraka)</li>
          <li>Banyak menggunakan seruan <em>"Yaa ayyuhan naas"</em> (wahai manusia)</li>
          <li>Banyak kisah para nabi dan umat terdahulu</li>
          <li>Jumlah surah: 86 surah</li>
        </ul>

        <h2>Ciri-ciri Ayat Madani</h2>
        <ul>
          <li>Umumnya panjang-panjang</li>
          <li>Banyak membahas <strong>hukum syariat</strong> (ibadah, muamalah, hudud)</li>
          <li>Banyak menggunakan seruan <em>"Yaa ayyuhal ladziina aamanuu"</em> (wahai orang-orang beriman)</li>
          <li>Membahas orang munafik dan ahli kitab</li>
          <li>Jumlah surah: 28 surah</li>
        </ul>

        <table class="table-materi">
          <thead><tr><th>Aspek</th><th>Makki</th><th>Madani</th></tr></thead>
          <tbody>
            <tr><td>Waktu</td><td>Sebelum hijrah (13 tahun)</td><td>Setelah hijrah (10 tahun)</td></tr>
            <tr><td>Fokus</td><td>Akidah, tauhid, akhlak</td><td>Hukum, syariat, sosial</td></tr>
            <tr><td>Gaya bahasa</td><td>Singkat, padat, kuat</td><td>Panjang, rinci, detail</td></tr>
            <tr><td>Seruan</td><td>"Yaa ayyuhan naas"</td><td>"Yaa ayyuhal ladziina aamanuu"</td></tr>
            <tr><td>Jumlah surah</td><td>86 surah</td><td>28 surah</td></tr>
          </tbody>
        </table>

        <div class="callout info">
          <div class="callout-icon">ℹ️</div>
          <div class="callout-body">
            <strong>Hikmah Pembagian Makki-Madani:</strong> Menunjukkan metode dakwah Islam yang bertahap — dimulai dari membangun akidah yang kuat, baru kemudian menetapkan hukum-hukum syariat.
          </div>
        </div>

        <div class="source-box">
          <strong>📚 Sumber Referensi:</strong>
          • Kitab <em>Mabahits fi Ulumil Qur'an</em> (Manna' Al-Qaththan), Bab Makki wal Madani<br>
          • Kitab <em>Al-Itqan fi Ulumil Qur'an</em> (Imam As-Suyuthi)<br>
          • <a href="https://rumaysho.com/tag/makki-madani" target="_blank">rumaysho.com — Makki dan Madani</a>
        </div>
      </div>`
  },
  {
    id: 4, title: "Nasikh dan Mansukh", duration: '10 mnt', type: 'materi',
    content: `
      <div class="lesson-header">
        <div class="lesson-tag">📖 Bab 4 · Qurdis</div>
        <h1>Nasikh dan Mansukh dalam Al-Qur'an</h1>
        <div class="lesson-meta"><span>⏱ 10 menit baca</span><span>📚 Ulumul Qur'an</span></div>
      </div>
      <div class="lesson-body">
        <h2>Pengertian</h2>
        <p><strong>Nasikh</strong> (الناسخ) adalah ayat atau hukum yang menghapus/menggantikan hukum sebelumnya. <strong>Mansukh</strong> (المنسوخ) adalah ayat atau hukum yang dihapus/digantikan.</p>
        <div class="callout hadith">
          <div class="callout-icon">📜</div>
          <div class="callout-body">
            <strong>QS. Al-Baqarah: 106:</strong><br>
            "Ayat mana saja yang Kami nasakhkan, atau Kami jadikan (manusia) lupa kepadanya, Kami datangkan yang lebih baik daripadanya atau yang sebanding dengannya. Tidakkah kamu mengetahui bahwa sesungguhnya Allah Maha Kuasa atas segala sesuatu?"
          </div>
        </div>

        <h2>Hikmah Adanya Nasikh-Mansukh</h2>
        <ul>
          <li>Menunjukkan <strong>kebijaksanaan Allah</strong> dalam menetapkan hukum secara bertahap</li>
          <li>Memudahkan umat Islam dalam menerima hukum yang berat</li>
          <li>Menunjukkan bahwa syariat Islam bersifat dinamis dan memperhatikan kondisi manusia</li>
          <li>Merupakan rahmat Allah kepada hamba-Nya</li>
        </ul>

        <h2>Contoh Nasikh-Mansukh</h2>
        <table class="table-materi">
          <thead><tr><th>Mansukh (Dihapus)</th><th>Nasikh (Pengganti)</th></tr></thead>
          <tbody>
            <tr>
              <td>Kewajiban berwasiat untuk orang tua dan kerabat (QS. Al-Baqarah: 180)</td>
              <td>Dihapus oleh ayat waris (QS. An-Nisa: 11-12) dan hadits "Tidak ada wasiat bagi ahli waris"</td>
            </tr>
            <tr>
              <td>Arah kiblat ke Baitul Maqdis (Yerusalem)</td>
              <td>Dihapus dan diganti kiblat ke Ka'bah (QS. Al-Baqarah: 144)</td>
            </tr>
            <tr>
              <td>Larangan minum khamr secara bertahap (QS. An-Nisa: 43)</td>
              <td>Diharamkan secara total (QS. Al-Ma'idah: 90)</td>
            </tr>
          </tbody>
        </table>

        <div class="callout warning">
          <div class="callout-icon">⚠️</div>
          <div class="callout-body">
            <strong>Catatan Penting:</strong> Nasikh-mansukh hanya terjadi pada hukum-hukum syariat, bukan pada ayat-ayat akidah, berita, atau janji-janji Allah. Jumlah ayat yang mansukh menurut para ulama sangat sedikit.
          </div>
        </div>

        <div class="source-box">
          <strong>📚 Sumber Referensi:</strong>
          • Kitab <em>Al-Nasikh wal Mansukh</em> (Imam Abu 'Ubaid Al-Qasim)<br>
          • Kitab <em>Mabahits fi Ulumil Qur'an</em> (Manna' Al-Qaththan), Bab An-Naskh<br>
          • <a href="https://rumaysho.com/tag/nasikh-mansukh" target="_blank">rumaysho.com — Nasikh dan Mansukh</a>
        </div>
      </div>`
  },
  {
    id: 5, title: "Pengertian Hadits & Pembagiannya", duration: '12 mnt', type: 'materi',
    content: `
      <div class="lesson-header">
        <div class="lesson-tag">📖 Bab 5 · Qurdis</div>
        <h1>Pengertian Hadits dan Pembagiannya</h1>
        <div class="lesson-meta"><span>⏱ 12 menit baca</span><span>📚 Ulumul Hadits</span></div>
      </div>
      <div class="lesson-body">
        <h2>Pengertian Hadits</h2>
        <p><strong>Hadits</strong> (الحديث) secara bahasa berarti sesuatu yang baru atau berita. Secara istilah, hadits adalah <strong>segala sesuatu yang disandarkan kepada Nabi Muhammad ﷺ</strong>, baik berupa ucapan (qauliyah), perbuatan (fi'liyah), ketetapan (taqririyah), maupun sifat beliau.</p>

        <h2>Unsur-unsur Hadits</h2>
        <table class="table-materi">
          <thead><tr><th>Unsur</th><th>Pengertian</th><th>Contoh</th></tr></thead>
          <tbody>
            <tr><td><strong>Sanad</strong></td><td>Rantai perawi yang menyampaikan hadits</td><td>"Dari A, dari B, dari C, dari Nabi ﷺ..."</td></tr>
            <tr><td><strong>Matan</strong></td><td>Isi/teks hadits itu sendiri</td><td>Ucapan atau perbuatan Nabi ﷺ</td></tr>
            <tr><td><strong>Rawi</strong></td><td>Orang yang meriwayatkan hadits</td><td>Imam Bukhari, Muslim, dll.</td></tr>
          </tbody>
        </table>

        <h2>Pembagian Hadits Berdasarkan Kualitas</h2>
        <ol>
          <li>
            <strong>Hadits Shahih</strong> — hadits yang memenuhi 5 syarat:<br>
            <ul style="margin-top:6px">
              <li>Sanadnya bersambung hingga Nabi ﷺ</li>
              <li>Semua perawinya adil (Muslim, baligh, berakal, tidak fasik)</li>
              <li>Semua perawinya dhabith (kuat hafalan/catatan)</li>
              <li>Tidak ada syadz (kejanggalan)</li>
              <li>Tidak ada 'illah (cacat tersembunyi)</li>
            </ul>
          </li>
          <li><strong>Hadits Hasan</strong> — memenuhi syarat shahih, namun ada perawi yang kurang kuat hafalannya</li>
          <li><strong>Hadits Dha'if</strong> — tidak memenuhi salah satu syarat hadits shahih atau hasan</li>
          <li><strong>Hadits Maudhu'</strong> — hadits palsu yang dibuat-buat atas nama Nabi ﷺ</li>
        </ol>

        <div class="callout warning">
          <div class="callout-icon">⚠️</div>
          <div class="callout-body">
            <strong>Hadits:</strong> "Barangsiapa berdusta atas namaku dengan sengaja, maka hendaklah ia bersiap menempati tempat duduknya di neraka."
            <br><em>(HR. Bukhari no. 110 & Muslim no. 3)</em>
          </div>
        </div>

        <h2>Pembagian Hadits Berdasarkan Jumlah Perawi</h2>
        <ul>
          <li><strong>Mutawatir</strong> — diriwayatkan oleh banyak perawi di setiap tingkatan, mustahil bersepakat dusta. Contoh: hadits tentang Al-Qur'an, shalat 5 waktu.</li>
          <li><strong>Ahad</strong> — diriwayatkan oleh satu, dua, atau beberapa orang (tidak mencapai derajat mutawatir). Dibagi menjadi: Masyhur, 'Aziz, dan Gharib.</li>
        </ul>

        <div class="source-box">
          <strong>📚 Sumber Referensi:</strong>
          • Kitab <em>Taisir Musthalahil Hadits</em> (Dr. Mahmud Ath-Thahhan)<br>
          • Kitab <em>Al-Baa'its Al-Hatsits</em> (Ibnu Katsir)<br>
          • <a href="https://rumaysho.com/tag/ilmu-hadits" target="_blank">rumaysho.com — Ilmu Hadits</a><br>
          • <a href="https://muslim.or.id/category/hadits" target="_blank">muslim.or.id — Hadits</a>
        </div>
      </div>`
  },
  {
    id: 6, title: "Kitab-kitab Hadits Utama", duration: '10 mnt', type: 'materi',
    content: `
      <div class="lesson-header">
        <div class="lesson-tag">📖 Bab 6 · Qurdis</div>
        <h1>Kitab-kitab Hadits Utama dalam Islam</h1>
        <div class="lesson-meta"><span>⏱ 10 menit baca</span><span>📚 Ulumul Hadits</span></div>
      </div>
      <div class="lesson-body">
        <h2>Al-Kutub As-Sittah (Enam Kitab Hadits Utama)</h2>
        <p>Para ulama hadits menetapkan enam kitab hadits yang menjadi rujukan utama umat Islam, dikenal sebagai <strong>Al-Kutub As-Sittah</strong>:</p>

        <table class="table-materi">
          <thead><tr><th>Kitab</th><th>Pengarang</th><th>Wafat</th><th>Keistimewaan</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>Shahih Al-Bukhari</strong></td>
              <td>Imam Muhammad bin Ismail Al-Bukhari</td>
              <td>256 H</td>
              <td>Kitab hadits paling shahih setelah Al-Qur'an. Berisi ±7.275 hadits (dengan pengulangan).</td>
            </tr>
            <tr>
              <td><strong>Shahih Muslim</strong></td>
              <td>Imam Muslim bin Al-Hajjaj</td>
              <td>261 H</td>
              <td>Kitab hadits paling shahih kedua. Berisi ±9.200 hadits (dengan pengulangan). Lebih sistematis dari Bukhari.</td>
            </tr>
            <tr>
              <td><strong>Sunan Abu Dawud</strong></td>
              <td>Imam Abu Dawud As-Sijistani</td>
              <td>275 H</td>
              <td>Fokus pada hadits-hadits hukum (fiqih). Berisi ±5.274 hadits.</td>
            </tr>
            <tr>
              <td><strong>Sunan At-Tirmidzi</strong></td>
              <td>Imam Muhammad At-Tirmidzi</td>
              <td>279 H</td>
              <td>Menyebutkan derajat hadits (shahih/hasan/dha'if). Berisi ±3.956 hadits.</td>
            </tr>
            <tr>
              <td><strong>Sunan An-Nasa'i</strong></td>
              <td>Imam Ahmad An-Nasa'i</td>
              <td>303 H</td>
              <td>Dikenal ketat dalam seleksi perawi. Berisi ±5.761 hadits.</td>
            </tr>
            <tr>
              <td><strong>Sunan Ibnu Majah</strong></td>
              <td>Imam Muhammad Ibnu Majah</td>
              <td>273 H</td>
              <td>Berisi banyak hadits yang tidak ada di kitab lain. Berisi ±4.341 hadits.</td>
            </tr>
          </tbody>
        </table>

        <h2>Kitab Hadits Penting Lainnya</h2>
        <ul>
          <li><strong>Musnad Ahmad</strong> (Imam Ahmad bin Hanbal, w. 241 H) — berisi ±27.000 hadits</li>
          <li><strong>Muwaththa' Malik</strong> (Imam Malik bin Anas, w. 179 H) — kitab hadits tertua yang masih ada</li>
          <li><strong>Riyadhus Shalihin</strong> (Imam An-Nawawi, w. 676 H) — kumpulan hadits akhlak dan ibadah</li>
          <li><strong>Bulughul Maram</strong> (Ibnu Hajar Al-Asqalani, w. 852 H) — hadits-hadits hukum fiqih</li>
        </ul>

        <div class="callout success">
          <div class="callout-icon">✅</div>
          <div class="callout-body">
            <strong>Imam Al-Bukhari dan Seleksi Hadits:</strong><br>
            Imam Al-Bukhari meriwayatkan dari 600.000 hadits yang ia hafal, kemudian menyeleksi hanya ±7.275 hadits yang memenuhi syarat shahih tertinggi untuk dimasukkan dalam kitabnya.
          </div>
        </div>

        <div class="source-box">
          <strong>📚 Sumber Referensi:</strong>
          • Kitab <em>Taisir Musthalahil Hadits</em> (Dr. Mahmud Ath-Thahhan)<br>
          • <a href="https://rumaysho.com/tag/kitab-hadits" target="_blank">rumaysho.com — Kitab-kitab Hadits</a><br>
          • <a href="https://muslim.or.id/category/hadits/kitab-hadits" target="_blank">muslim.or.id — Kitab Hadits Utama</a>
        </div>
      </div>`
  },
  {
    id: 7, title: "Tajwid: Hukum Nun Mati & Tanwin", duration: '12 mnt', type: 'materi',
    content: `
      <div class="lesson-header">
        <div class="lesson-tag">📖 Bab 7 · Qurdis</div>
        <h1>Tajwid: Hukum Nun Mati dan Tanwin</h1>
        <div class="lesson-meta"><span>⏱ 12 menit baca</span><span>📚 Ilmu Tajwid</span></div>
      </div>
      <div class="lesson-body">
        <h2>Pengertian Tajwid</h2>
        <p><strong>Tajwid</strong> (التجويد) secara bahasa berarti memperindah. Secara istilah, tajwid adalah ilmu yang mempelajari cara membaca Al-Qur'an dengan benar sesuai dengan kaidah-kaidah yang telah ditetapkan.</p>
        <div class="callout hadith">
          <div class="callout-icon">📜</div>
          <div class="callout-body">
            <strong>QS. Al-Muzzammil: 4:</strong><br>
            "...dan bacalah Al-Qur'an itu dengan <strong>tartil</strong> (perlahan-lahan dan jelas)."
          </div>
        </div>

        <h2>Hukum Nun Mati (نْ) dan Tanwin (ـً ـٍ ـٌ)</h2>
        <p>Ketika nun mati atau tanwin bertemu dengan huruf hijaiyah, ada 4 hukum bacaan:</p>

        <table class="table-materi">
          <thead><tr><th>Hukum</th><th>Huruf</th><th>Cara Baca</th><th>Contoh</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>Izhar Halqi</strong><br>(jelas)</td>
              <td>ء ه ع ح غ خ</td>
              <td>Nun mati/tanwin dibaca jelas tanpa dengung</td>
              <td>مِنْ عِلْمٍ — مَنْ آمَنَ</td>
            </tr>
            <tr>
              <td><strong>Idgham</strong><br>(lebur)</td>
              <td>ي ر م ل و ن (يرملون)</td>
              <td>Nun mati/tanwin dilebur ke huruf berikutnya</td>
              <td>مِنْ نَّعِيمٍ — هُدًى لِّلْمُتَّقِينَ</td>
            </tr>
            <tr>
              <td><strong>Iqlab</strong><br>(ganti)</td>
              <td>ب</td>
              <td>Nun mati/tanwin diganti mim, lalu dengung</td>
              <td>مِنْ بَعْدِ — سَمِيعٌ بَصِيرٌ</td>
            </tr>
            <tr>
              <td><strong>Ikhfa'</strong><br>(samar)</td>
              <td>15 huruf sisanya</td>
              <td>Nun mati/tanwin dibaca samar dengan dengung</td>
              <td>مِنْ قَبْلِ — عَلِيمٌ حَكِيمٌ</td>
            </tr>
          </tbody>
        </table>

        <h2>Hukum Mim Mati (مْ)</h2>
        <table class="table-materi">
          <thead><tr><th>Hukum</th><th>Kondisi</th><th>Cara Baca</th></tr></thead>
          <tbody>
            <tr><td><strong>Ikhfa' Syafawi</strong></td><td>Mim mati bertemu ب</td><td>Dibaca samar dengan dengung</td></tr>
            <tr><td><strong>Idgham Mimi</strong></td><td>Mim mati bertemu م</td><td>Dilebur dengan dengung</td></tr>
            <tr><td><strong>Izhar Syafawi</strong></td><td>Mim mati bertemu selain ب dan م</td><td>Dibaca jelas</td></tr>
          </tbody>
        </table>

        <div class="callout success">
          <div class="callout-icon">✅</div>
          <div class="callout-body">
            <strong>Tips Belajar Tajwid:</strong> Belajar tajwid paling efektif dengan langsung mempraktikkan bacaan Al-Qur'an bersama guru yang bersanad (memiliki silsilah guru hingga Nabi ﷺ). Ilmu tajwid tidak cukup hanya dipelajari dari buku.
          </div>
        </div>

        <div class="source-box">
          <strong>📚 Sumber Referensi:</strong>
          • Kitab <em>Hidayatul Mustafid fi Ahkamit Tajwid</em> (Syaikh Muhammad Al-Mahmud)<br>
          • <a href="https://rumaysho.com/tag/tajwid" target="_blank">rumaysho.com — Ilmu Tajwid</a><br>
          • <a href="https://muslim.or.id/category/al-quran/tajwid" target="_blank">muslim.or.id — Tajwid Al-Qur'an</a>
        </div>
      </div>`
  },

  // QUIZ QURDIS
  {
    id: 8, title: "Kuis: Qurdis", duration: '15 mnt', type: 'quiz',
    questions: [
      {
        q: "Al-Qur'an diturunkan kepada Nabi Muhammad ﷺ melalui perantara...",
        options: ['Malaikat Mikail', 'Malaikat Jibril', 'Malaikat Israfil', 'Malaikat Izrail'],
        answer: 1,
        explanation: "Al-Qur'an diturunkan melalui Malaikat Jibril (Ruhul Amin). Allah berfirman: 'Dan sesungguhnya Al-Qur'an ini benar-benar diturunkan oleh Tuhan semesta alam, yang dibawa turun oleh Ar-Ruh Al-Amin (Jibril).' (QS. Asy-Syu'ara: 192-193)"
      },
      {
        q: "Wahyu pertama yang diturunkan kepada Nabi Muhammad ﷺ adalah...",
        options: ['QS. Al-Fatihah: 1-7', "QS. Al-'Alaq: 1-5", 'QS. Al-Mudatstsir: 1-5', 'QS. Al-Muzzammil: 1-5'],
        answer: 1,
        explanation: "Wahyu pertama adalah QS. Al-'Alaq: 1-5 ('Iqra' bismi rabbikalladzii khalaq...'), turun di Gua Hira pada 17 Ramadan, 13 tahun sebelum hijrah (610 M). Ini adalah awal dari kenabian Muhammad ﷺ."
      },
      {
        q: "Ilmu yang mempelajari sebab-sebab turunnya ayat Al-Qur'an disebut...",
        options: ['Nasikh Mansukh', 'Asbabun Nuzul', 'Makki Madani', 'Ulumul Qur\'an'],
        answer: 1,
        explanation: "Asbabun Nuzul adalah ilmu yang mempelajari sebab-sebab atau latar belakang turunnya suatu ayat Al-Qur'an. Ilmu ini penting untuk memahami makna ayat secara tepat dan kontekstual."
      },
      {
        q: "Ayat Madani memiliki ciri khas menggunakan seruan...",
        options: ['"Yaa ayyuhan naas"', '"Yaa ayyuhal ladziina aamanuu"', '"Yaa banii Israil"', '"Yaa ahlal kitab"'],
        answer: 1,
        explanation: "Ayat Madani umumnya menggunakan seruan 'Yaa ayyuhal ladziina aamanuu' (wahai orang-orang beriman), karena ditujukan kepada komunitas Muslim yang sudah terbentuk di Madinah. Sedangkan ayat Makki menggunakan 'Yaa ayyuhan naas' (wahai manusia)."
      },
      {
        q: "Kaidah 'Al-'Ibrah bi 'Umum Al-Lafzh la bi Khushush As-Sabab' berarti...",
        options: [
          'Hukum ayat hanya berlaku untuk orang yang menjadi sebab turunnya',
          'Yang menjadi patokan adalah keumuman lafazh, bukan kekhususan sebab',
          'Setiap ayat harus dipahami sesuai konteks historisnya',
          'Asbabun nuzul menentukan hukum suatu ayat'
        ],
        answer: 1,
        explanation: "Kaidah ini berarti: meskipun suatu ayat turun karena sebab tertentu, hukumnya berlaku umum untuk semua orang yang memenuhi kriteria dalam ayat tersebut. Ini adalah kaidah ushul fiqh yang disepakati mayoritas ulama."
      },
      {
        q: "Hadits yang memenuhi 5 syarat: sanad bersambung, perawi adil, perawi dhabith, tidak syadz, tidak 'illah disebut...",
        options: ['Hadits Hasan', 'Hadits Shahih', "Hadits Dha'if", 'Hadits Mutawatir'],
        answer: 1,
        explanation: "Hadits Shahih adalah hadits yang memenuhi 5 syarat: (1) Sanadnya bersambung, (2) Semua perawi adil, (3) Semua perawi dhabith (kuat hafalan), (4) Tidak ada syadz (kejanggalan), (5) Tidak ada 'illah (cacat tersembunyi)."
      },
      {
        q: "Kitab hadits yang disebut paling shahih setelah Al-Qur'an adalah...",
        options: ['Shahih Muslim', 'Shahih Al-Bukhari', 'Sunan Abu Dawud', "Muwaththa' Malik"],
        answer: 1,
        explanation: "Shahih Al-Bukhari karya Imam Muhammad bin Ismail Al-Bukhari (w. 256 H) adalah kitab hadits yang paling shahih setelah Al-Qur'an. Imam Al-Bukhari menyeleksi ±7.275 hadits dari 600.000 hadits yang ia hafal."
      },
      {
        q: "Hukum bacaan nun mati atau tanwin ketika bertemu huruf ب disebut...",
        options: ['Izhar', 'Idgham', 'Iqlab', "Ikhfa'"],
        answer: 2,
        explanation: "Iqlab adalah hukum bacaan ketika nun mati atau tanwin bertemu huruf ب (ba'). Cara membacanya: nun mati/tanwin diganti dengan mim, kemudian dibaca dengan dengung (ghunnah). Contoh: مِنْ بَعْدِ dibaca 'mim ba'di'."
      },
      {
        q: "Ayat yang menghapus hukum ayat sebelumnya disebut...",
        options: ['Mansukh', 'Nasikh', 'Mujmal', 'Mutasyabih'],
        answer: 1,
        explanation: "Nasikh adalah ayat atau hukum yang menghapus/menggantikan hukum sebelumnya. Sedangkan Mansukh adalah ayat atau hukum yang dihapus/digantikan. Contoh: perubahan arah kiblat dari Baitul Maqdis ke Ka'bah."
      },
      {
        q: "Hadits yang diriwayatkan oleh banyak perawi di setiap tingkatan sehingga mustahil bersepakat dusta disebut...",
        options: ['Hadits Ahad', 'Hadits Mutawatir', 'Hadits Masyhur', 'Hadits Gharib'],
        answer: 1,
        explanation: "Hadits Mutawatir adalah hadits yang diriwayatkan oleh banyak perawi di setiap tingkatan sanad, sehingga secara akal mustahil mereka semua bersepakat untuk berdusta. Hadits mutawatir memberikan keyakinan yang pasti (qath'i). Contoh: hadits tentang Al-Qur'an dan shalat 5 waktu."
      }
    ]
  }
];

// ============================================================
// ENGINE
// ============================================================
let currentLesson = 0;
let progress = JSON.parse(localStorage.getItem('qurdis_progress') || '[]');

function saveProgress(id) {
  if (!progress.includes(id)) { progress.push(id); localStorage.setItem('qurdis_progress', JSON.stringify(progress)); }
  const total = LESSONS.length;
  const done = LESSONS.filter(l => progress.includes(l.id)).length;
  const pct = Math.round((done / total) * 100);
  localStorage.setItem('progress_qurdis', pct);
  if (typeof saveProgressToCloud !== 'undefined') { saveProgressToCloud('qurdis', pct); }
  if (pct >= 100 && !localStorage.getItem('completed_date_qurdis')) {
    localStorage.setItem('completed_date_qurdis', new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }));
  }
}

function renderSidebar() {
  document.getElementById('materiSidebarList').innerHTML = LESSONS.map((l, i) => {
    const isDone = progress.includes(l.id);
    const isActive = i === currentLesson;
    const icon = l.type === 'quiz'
      ? `<span style="color:var(--gold)">${IC.clipboardCheck}</span>`
      : isDone ? `<span style="color:var(--green)">${IC.checkCircle}</span>`
      : `<span style="color:#ccc">${IC.lockSmall}</span>`;
    return `<button class="sidebar-lesson ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}" onclick="goToLesson(${i})">
      <span class="sl-icon">${icon}</span>
      <span class="sl-title">${l.title}</span>
      <span class="sl-dur">${l.duration}</span>
    </button>`;
  }).join('');
}

function renderLesson(index) {
  currentLesson = index;
  const lesson = LESSONS[index];
  const main = document.getElementById('belajarMain');
  if (lesson.type === 'materi') {
    main.innerHTML = `${lesson.content}
      <div class="lesson-nav">
        <button class="btn-nav" onclick="goToLesson(${index - 1})" ${index === 0 ? 'disabled' : ''}>← Sebelumnya</button>
        <button class="btn-nav primary" onclick="markDoneAndNext(${index})">
          ${index === LESSONS.length - 1 ? 'Selesai' : 'Tandai Selesai & Lanjut →'}
        </button>
      </div>`;
  } else {
    renderQuiz(lesson.questions);
  }
  renderSidebar();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function markDoneAndNext(index) {
  saveProgress(LESSONS[index].id);
  if (index < LESSONS.length - 1) goToLesson(index + 1);
  else renderSidebar();
}

function goToLesson(index) {
  if (index < 0 || index >= LESSONS.length) return;
  renderLesson(index);
}

let quizState = { current: 0, score: 0, answered: false, questions: [] };

function renderQuiz(questions) {
  quizState = { current: 0, score: 0, answered: false, questions };
  renderQuestion();
}

function renderQuestion() {
  const { current, questions } = quizState;
  const q = questions[current];
  const pct = Math.round((current / questions.length) * 100);
  const letters = ['A', 'B', 'C', 'D'];
  document.getElementById('belajarMain').innerHTML = `
    <div class="quiz-container">
      <div class="quiz-header">
        <h1>Kuis: Qurdis</h1>
        <p>Uji pemahaman Anda tentang Al-Qur'an dan Hadits</p>
        <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
        <div class="quiz-progress-label">Soal ${current + 1} dari ${questions.length}</div>
      </div>
      <div class="question-card">
        <div class="question-num">Pertanyaan ${current + 1}</div>
        <div class="question-text">${q.q}</div>
        <div class="options-list">
          ${q.options.map((opt, i) => `
            <button class="option-btn" onclick="selectOption(${i})">
              <span class="option-letter">${letters[i]}</span><span>${opt}</span>
            </button>`).join('')}
        </div>
        <div class="answer-feedback" id="feedback"></div>
        <div style="display:flex;gap:12px;align-items:center">
          <button class="btn-check" id="btnCheck" onclick="checkAnswer()" disabled>Periksa Jawaban</button>
          <button class="btn-next" id="btnNext" onclick="nextQuestion()">
            ${current < questions.length - 1 ? 'Soal Berikutnya →' : 'Lihat Hasil'}
          </button>
        </div>
      </div>
    </div>`;
  quizState.answered = false;
  quizState.selected = null;
}

function selectOption(i) {
  if (quizState.answered) return;
  quizState.selected = i;
  document.querySelectorAll('.option-btn').forEach((b, idx) => b.classList.toggle('selected', idx === i));
  document.getElementById('btnCheck').disabled = false;
}

function checkAnswer() {
  if (quizState.answered) return;
  quizState.answered = true;
  const { selected, questions, current } = quizState;
  const q = questions[current];
  const isCorrect = selected === q.answer;
  if (isCorrect) quizState.score++;
  document.querySelectorAll('.option-btn').forEach((b, i) => {
    b.disabled = true;
    if (i === q.answer) b.classList.add('correct');
    else if (i === selected && !isCorrect) b.classList.add('wrong');
  });
  const fb = document.getElementById('feedback');
  fb.className = `answer-feedback show ${isCorrect ? 'correct' : 'wrong'}`;
  fb.innerHTML = `<strong>${isCorrect ? '✅ Jawaban Benar!' : '❌ Jawaban Salah'}</strong>${q.explanation}`;
  document.getElementById('btnCheck').style.display = 'none';
  document.getElementById('btnNext').classList.add('show');
}

function nextQuestion() {
  quizState.current++;
  if (quizState.current >= quizState.questions.length) showResult();
  else renderQuestion();
}

function showResult() {
  const { score, questions } = quizState;
  const pct = Math.round((score / questions.length) * 100);
  const lulus = pct >= 70;
  const emoji = pct >= 80 ? '🎉' : pct >= 70 ? '✅' : '📚';
  const msg = pct >= 80 ? 'Masya Allah! Anda menguasai materi Qurdis dengan sangat baik.'
            : pct >= 70 ? 'Bagus! Anda lulus dan berhak mendapatkan sertifikat.'
            : 'Nilai Anda belum mencapai 70. Pelajari ulang dan coba lagi untuk mendapatkan sertifikat.';
  if (lulus) {
    saveProgress(LESSONS[currentLesson].id);
    localStorage.setItem('score_qurdis', pct);
  }
  document.getElementById('belajarMain').innerHTML = `
    <div class="quiz-result">
      <div class="result-icon">${emoji}</div>
      <h2>${pct >= 80 ? 'Selamat!' : pct >= 70 ? 'Lulus!' : 'Belum Lulus'}</h2>
      <p>${msg}</p>
      <div class="result-score" style="color:${lulus ? '#27ae60' : '#e74c3c'}">${pct}%</div>
      <div class="result-stats">
        <div class="result-stat green"><div class="rs-num">${score}</div><div class="rs-label">Benar</div></div>
        <div class="result-stat red"><div class="rs-num">${questions.length - score}</div><div class="rs-label">Salah</div></div>
        <div class="result-stat"><div class="rs-num">${questions.length}</div><div class="rs-label">Total Soal</div></div>
      </div>
      ${lulus
        ? `<button class="btn-lanjut-materi" onclick="window.location.href='sertifikat.html'">🏆 Lihat Sertifikat</button>`
        : `<button class="btn-retry" onclick="renderQuiz(quizState.questions)">🔄 Ulangi Kuis</button>
           <button class="btn-lanjut-materi" onclick="goToLesson(0)">📖 Pelajari Ulang</button>`
      }
    </div>`;
  renderSidebar();
}

(async () => {
  await initLayout('materi');
  renderSidebar();
  renderLesson(0);
})();

