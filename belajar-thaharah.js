// ============================================================
// DATA MATERI & QUIZ - FIKIH: THAHARAH (BERSUCI)
// Sumber: Fiqhul Ibadah, Kitab Matan Al-Ghayah wat Taqrib,
//         Rumaysho.com, Muslim.or.id, IslamicAcademy.org
// ============================================================

const LESSONS = [
  {
    id: 1,
    title: 'Pengertian Thaharah',
    duration: '10 mnt',
    type: 'materi',
    content: `
      <div class="lesson-header">
        <div class="lesson-tag">${'📖'} Bab 1 · Fikih Dasar</div>
        <h1>Pengertian Thaharah (Bersuci)</h1>
        <div class="lesson-meta">
          <span>⏱ 10 menit baca</span>
          <span>📚 Fikih Ibadah</span>
        </div>
      </div>
      <div class="lesson-body">
        <h2>Apa itu Thaharah?</h2>
        <p>
          <strong>Thaharah</strong> (الطهارة) secara bahasa berarti <em>kebersihan</em> dan <em>kesucian</em> dari segala kotoran, baik yang bersifat hissi (nyata/fisik) maupun maknawi (batin). Secara istilah syariat, thaharah adalah <strong>mengangkat hadats dan menghilangkan najis</strong> dengan menggunakan air atau yang menggantikannya (seperti tanah/debu untuk tayamum).
        </p>
        <div class="callout hadith">
          <div class="callout-icon">📜</div>
          <div class="callout-body">
            <strong>Dalil Al-Qur'an:</strong>
            "Sesungguhnya Allah menyukai orang-orang yang bertaubat dan menyukai orang-orang yang mensucikan diri."
            <br><em>(QS. Al-Baqarah: 222)</em>
          </div>
        </div>
        <div class="callout hadith">
          <div class="callout-icon">📜</div>
          <div class="callout-body">
            <strong>Dalil Hadits:</strong>
            "Kebersihan adalah sebagian dari iman."
            <br><em>(HR. Muslim no. 223)</em>
          </div>
        </div>

        <h2>Kedudukan Thaharah dalam Islam</h2>
        <p>
          Thaharah merupakan <strong>syarat sah shalat</strong> dan ibadah-ibadah tertentu lainnya. Tanpa thaharah, shalat seseorang tidak akan diterima. Rasulullah ﷺ bersabda:
        </p>
        <div class="callout hadith">
          <div class="callout-icon">📜</div>
          <div class="callout-body">
            "Allah tidak menerima shalat salah seorang di antara kalian apabila ia berhadats, hingga ia berwudhu."
            <br><em>(HR. Bukhari no. 135 & Muslim no. 225)</em>
          </div>
        </div>

        <h2>Pembagian Thaharah</h2>
        <p>Thaharah dibagi menjadi dua jenis utama:</p>
        <table class="table-materi">
          <thead><tr><th>Jenis</th><th>Pengertian</th><th>Caranya</th></tr></thead>
          <tbody>
            <tr><td><strong>Thaharah Sughra</strong> (Kecil)</td><td>Mengangkat hadats kecil</td><td>Wudhu atau tayamum</td></tr>
            <tr><td><strong>Thaharah Kubra</strong> (Besar)</td><td>Mengangkat hadats besar</td><td>Mandi wajib (ghusl) atau tayamum</td></tr>
          </tbody>
        </table>

        <h2>Macam-macam Najis</h2>
        <p>Selain hadats, thaharah juga mencakup membersihkan <strong>najis</strong> dari badan, pakaian, dan tempat shalat. Najis dibagi menjadi tiga tingkatan:</p>
        <ul>
          <li><strong>Najis Mughallazhah (Berat)</strong> — Najis anjing dan babi. Cara mensucikannya: dibasuh 7 kali, salah satunya dengan tanah.</li>
          <li><strong>Najis Mutawassithah (Sedang)</strong> — Najis pada umumnya (air kencing, kotoran, darah, dll). Cara mensucikannya: dihilangkan wujud, warna, bau, dan rasanya dengan air.</li>
          <li><strong>Najis Mukhaffafah (Ringan)</strong> — Air kencing bayi laki-laki yang belum makan selain ASI. Cara mensucikannya: cukup dipercikkan air.</li>
        </ul>

        <div class="callout success">
          <div class="callout-icon">✅</div>
          <div class="callout-body">
            <strong>Poin Penting:</strong>
            Thaharah adalah fondasi ibadah. Pelajari dengan baik agar ibadah Anda sah dan diterima Allah ﷻ.
          </div>
        </div>

        <div class="source-box">
          <strong>📚 Sumber Referensi:</strong>
          • Kitab <em>Matan Al-Ghayah wat Taqrib</em> (Imam Abu Syuja') <br>
          • <a href="https://rumaysho.com/tag/thaharah" target="_blank">rumaysho.com — Artikel Thaharah</a><br>
          • <a href="https://muslim.or.id/category/fiqh/thaharah" target="_blank">muslim.or.id — Fiqih Thaharah</a><br>
          • <a href="https://islamicacademy.org/html/Books/GLIS/tah.htm" target="_blank">islamicacademy.org — Tahaarah (Purification)</a>
        </div>
      </div>`
  },

  {
    id: 2,
    title: 'Macam-macam Air',
    duration: '8 mnt',
    type: 'materi',
    content: `
      <div class="lesson-header">
        <div class="lesson-tag">📖 Bab 2 · Fikih Dasar</div>
        <h1>Macam-macam Air dan Hukumnya</h1>
        <div class="lesson-meta"><span>⏱ 8 menit baca</span><span>📚 Fikih Ibadah</span></div>
      </div>
      <div class="lesson-body">
        <h2>Air sebagai Alat Bersuci</h2>
        <p>Air adalah alat utama untuk bersuci dalam Islam. Namun tidak semua air boleh digunakan untuk bersuci. Para ulama membagi air menjadi beberapa kategori berdasarkan hukum penggunaannya.</p>

        <h2>Pembagian Air Menurut Hukum Fikih</h2>
        <table class="table-materi">
          <thead><tr><th>Jenis Air</th><th>Keterangan</th><th>Hukum Bersuci</th></tr></thead>
          <tbody>
            <tr><td><strong>Air Mutlak (Thahir Muthahhir)</strong></td><td>Air murni yang belum berubah sifatnya: air hujan, air laut, air sungai, air sumur, air salju, air embun</td><td>✅ Sah untuk bersuci</td></tr>
            <tr><td><strong>Air Musta'mal</strong></td><td>Air yang sudah digunakan untuk bersuci (wudhu/mandi wajib) dalam jumlah sedikit</td><td>⚠️ Khilaf ulama; mayoritas: tidak sah</td></tr>
            <tr><td><strong>Air Mutanajjis</strong></td><td>Air yang terkena najis dan berubah salah satu sifatnya (warna/bau/rasa)</td><td>❌ Tidak sah, haram digunakan</td></tr>
            <tr><td><strong>Air Makruh</strong></td><td>Air yang terjemur matahari dalam wadah logam (selain emas/perak) di daerah panas</td><td>⚠️ Makruh digunakan untuk badan</td></tr>
          </tbody>
        </table>

        <h2>Ukuran Air: Dua Qullah</h2>
        <p>Rasulullah ﷺ menetapkan ukuran <strong>dua qullah</strong> sebagai batas air yang tidak mudah terkena najis:</p>
        <div class="callout hadith">
          <div class="callout-icon">📜</div>
          <div class="callout-body">
            <strong>Hadits:</strong> "Apabila air telah mencapai dua qullah, maka ia tidak membawa najis."
            <br><em>(HR. Abu Dawud no. 63, At-Tirmidzi no. 67 — dishahihkan Al-Albani)</em>
          </div>
        </div>
        <div class="callout info">
          <div class="callout-icon">ℹ️</div>
          <div class="callout-body">
            <strong>Ukuran Dua Qullah:</strong> Setara dengan ±216 liter, atau wadah berukuran 60×60×60 cm. Air sebanyak ini tidak menjadi najis meskipun terkena najis, selama sifat-sifatnya (warna, bau, rasa) tidak berubah.
          </div>
        </div>

        <h2>Air Laut</h2>
        <div class="callout hadith">
          <div class="callout-icon">📜</div>
          <div class="callout-body">
            <strong>Hadits:</strong> Seseorang bertanya kepada Nabi ﷺ: "Wahai Rasulullah, kami berlayar di laut dan kami hanya membawa sedikit air. Jika kami gunakan untuk wudhu, kami akan kehausan. Bolehkah kami berwudhu dengan air laut?" Rasulullah ﷺ menjawab: <em>"Air laut itu suci (mensucikan) dan bangkainya pun halal."</em>
            <br><em>(HR. Abu Dawud no. 83, At-Tirmidzi no. 69 — dishahihkan)</em>
          </div>
        </div>

        <div class="source-box">
          <strong>📚 Sumber Referensi:</strong>
          • Kitab <em>Al-Fiqhul Islami wa Adillatuhu</em> (Dr. Wahbah Az-Zuhaili)<br>
          • <a href="https://rumaysho.com/2648-macam-macam-air-untuk-bersuci.html" target="_blank">rumaysho.com — Macam-macam Air untuk Bersuci</a><br>
          • <a href="https://muslim.or.id/6886-air-yang-boleh-digunakan-untuk-bersuci.html" target="_blank">muslim.or.id — Air yang Boleh Digunakan Bersuci</a>
        </div>
      </div>`
  },
  {
    id: 3,
    title: 'Wudhu: Syarat & Rukun',
    duration: '12 mnt',
    type: 'materi',
    content: `
      <div class="lesson-header">
        <div class="lesson-tag">📖 Bab 3 · Fikih Dasar</div>
        <h1>Wudhu: Syarat, Rukun, dan Sunnahnya</h1>
        <div class="lesson-meta"><span>⏱ 12 menit baca</span><span>📚 Fikih Ibadah</span></div>
      </div>
      <div class="lesson-body">
        <h2>Pengertian Wudhu</h2>
        <p><strong>Wudhu</strong> (الوضوء) adalah bersuci menggunakan air pada anggota tubuh tertentu dengan tata cara yang telah ditetapkan syariat, sebagai syarat sah shalat dan ibadah tertentu lainnya.</p>
        <div class="callout hadith">
          <div class="callout-icon">📜</div>
          <div class="callout-body">
            <strong>Dalil Al-Qur'an:</strong> "Wahai orang-orang yang beriman! Apabila kamu hendak melaksanakan shalat, maka basuhlah wajahmu dan tanganmu sampai ke siku, dan sapulah kepalamu dan (basuh) kedua kakimu sampai ke kedua mata kaki."
            <br><em>(QS. Al-Ma'idah: 6)</em>
          </div>
        </div>

        <h2>Syarat Wajib Wudhu</h2>
        <ul>
          <li>Islam</li>
          <li>Tamyiz (dapat membedakan baik dan buruk)</li>
          <li>Tidak sedang haid atau nifas (bagi wanita)</li>
          <li>Tidak ada yang menghalangi air sampai ke kulit (seperti cat tebal, kutek, dll)</li>
          <li>Tersedia air yang suci dan mensucikan</li>
        </ul>

        <h2>Rukun Wudhu (Fardhu Wudhu)</h2>
        <p>Rukun wudhu adalah bagian yang wajib dilakukan. Jika salah satu ditinggalkan, wudhu tidak sah:</p>
        <ol>
          <li><strong>Niat</strong> — di dalam hati saat membasuh wajah pertama kali</li>
          <li><strong>Membasuh wajah</strong> — dari batas tumbuh rambut kepala hingga dagu, dan dari telinga ke telinga</li>
          <li><strong>Membasuh kedua tangan</strong> — hingga siku (termasuk siku)</li>
          <li><strong>Mengusap sebagian kepala</strong> — minimal seukuran ubun-ubun</li>
          <li><strong>Membasuh kedua kaki</strong> — hingga mata kaki (termasuk mata kaki)</li>
          <li><strong>Tertib (berurutan)</strong> — dilakukan sesuai urutan di atas</li>
        </ol>

        <h2>Sunnah-sunnah Wudhu</h2>
        <ul>
          <li>Membaca basmalah di awal</li>
          <li>Mencuci kedua telapak tangan 3 kali sebelum memulai</li>
          <li>Berkumur-kumur (madhmadhah)</li>
          <li>Memasukkan air ke hidung (istinsyaq) dan mengeluarkannya (istintsar)</li>
          <li>Mengusap seluruh kepala</li>
          <li>Mengusap kedua telinga (luar dan dalam)</li>
          <li>Mendahulukan anggota kanan sebelum kiri</li>
          <li>Membasuh setiap anggota sebanyak 3 kali</li>
          <li>Berdoa setelah wudhu</li>
        </ul>

        <div class="callout success">
          <div class="callout-icon">✅</div>
          <div class="callout-body">
            <strong>Doa Setelah Wudhu:</strong><br>
            <em>أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ</em><br>
            "Aku bersaksi bahwa tidak ada ilah yang berhak disembah selain Allah semata, tidak ada sekutu bagi-Nya, dan aku bersaksi bahwa Muhammad adalah hamba dan utusan-Nya."
            <br><em>(HR. Muslim no. 234)</em>
          </div>
        </div>

        <div class="source-box">
          <strong>📚 Sumber Referensi:</strong>
          • <a href="https://rumaysho.com/2652-rukun-wudhu.html" target="_blank">rumaysho.com — Rukun Wudhu</a><br>
          • Kitab <em>Shahih Fiqhis Sunnah</em> (Syaikh Abu Malik Kamal)<br>
          • <a href="https://muslim.or.id/6890-tata-cara-wudhu-yang-benar.html" target="_blank">muslim.or.id — Tata Cara Wudhu yang Benar</a>
        </div>
      </div>`
  },

  {
    id: 4,
    title: 'Hal yang Membatalkan Wudhu',
    duration: '8 mnt',
    type: 'materi',
    content: `
      <div class="lesson-header">
        <div class="lesson-tag">📖 Bab 4 · Fikih Dasar</div>
        <h1>Hal-hal yang Membatalkan Wudhu</h1>
        <div class="lesson-meta"><span>⏱ 8 menit baca</span><span>📚 Fikih Ibadah</span></div>
      </div>
      <div class="lesson-body">
        <h2>Pembatal Wudhu</h2>
        <p>Wudhu yang telah dilakukan dapat batal karena beberapa sebab. Jika wudhu batal, maka seseorang harus berwudhu kembali sebelum melaksanakan shalat atau ibadah yang memerlukan wudhu.</p>

        <h2>Pembatal Wudhu yang Disepakati Ulama</h2>
        <ol>
          <li>
            <strong>Keluarnya sesuatu dari dua jalan (qubul dan dubur)</strong><br>
            Baik berupa air kencing, tinja, angin (kentut), madzi, wadi, maupun darah istihadhah.
          </li>
          <li>
            <strong>Hilangnya akal</strong><br>
            Karena tidur nyenyak, pingsan, gila, atau mabuk. Pengecualian: tidur dalam posisi duduk yang mantap (tidak batal menurut pendapat yang kuat).
          </li>
          <li>
            <strong>Menyentuh kemaluan dengan telapak tangan tanpa penghalang</strong><br>
            Berdasarkan hadits: <em>"Barangsiapa menyentuh kemaluannya, hendaklah ia berwudhu."</em> (HR. Abu Dawud, dishahihkan Al-Albani)
          </li>
          <li>
            <strong>Makan daging unta</strong><br>
            Berdasarkan hadits shahih riwayat Muslim no. 360.
          </li>
        </ol>

        <div class="callout warning">
          <div class="callout-icon">⚠️</div>
          <div class="callout-body">
            <strong>Perhatian:</strong> Menyentuh wanita (ajnabiyyah) — terdapat khilaf di antara ulama. Mazhab Syafi'i berpendapat membatalkan wudhu, sedangkan mazhab Hanafi dan pendapat yang kuat dari dalil menyatakan tidak membatalkan kecuali disertai syahwat.
          </div>
        </div>

        <h2>Yang TIDAK Membatalkan Wudhu</h2>
        <ul>
          <li>Tertawa terbahak-bahak (hanya membatalkan shalat, bukan wudhu)</li>
          <li>Memandikan jenazah (tidak membatalkan wudhu menurut pendapat yang rajih)</li>
          <li>Keluarnya darah dari selain dua jalan (luka, dll) — tidak membatalkan wudhu menurut pendapat yang kuat</li>
          <li>Muntah (tidak membatalkan wudhu menurut pendapat yang rajih)</li>
          <li>Menyentuh wanita tanpa syahwat (menurut pendapat yang kuat)</li>
        </ul>

        <div class="callout info">
          <div class="callout-icon">ℹ️</div>
          <div class="callout-body">
            <strong>Kaidah Penting:</strong> Wudhu yang sudah ada dianggap tetap ada (tidak batal) sampai ada keyakinan atau dugaan kuat bahwa wudhu telah batal. Keraguan tidak membatalkan wudhu.
          </div>
        </div>

        <div class="source-box">
          <strong>📚 Sumber Referensi:</strong>
          • <a href="https://rumaysho.com/2660-pembatal-wudhu.html" target="_blank">rumaysho.com — Pembatal Wudhu</a><br>
          • Kitab <em>Al-Mulakhkhash Al-Fiqhi</em> (Syaikh Shalih Al-Fauzan)<br>
          • <a href="https://muslim.or.id/6895-hal-hal-yang-membatalkan-wudhu.html" target="_blank">muslim.or.id — Hal yang Membatalkan Wudhu</a>
        </div>
      </div>`
  },
  {
    id: 5,
    title: 'Tayamum',
    duration: '10 mnt',
    type: 'materi',
    content: `
      <div class="lesson-header">
        <div class="lesson-tag">📖 Bab 5 · Fikih Dasar</div>
        <h1>Tayamum: Bersuci dengan Debu/Tanah</h1>
        <div class="lesson-meta"><span>⏱ 10 menit baca</span><span>📚 Fikih Ibadah</span></div>
      </div>
      <div class="lesson-body">
        <h2>Pengertian Tayamum</h2>
        <p><strong>Tayamum</strong> (التيمم) adalah bersuci menggunakan debu/tanah yang suci sebagai pengganti air, ketika air tidak tersedia atau tidak dapat digunakan karena uzur syar'i.</p>
        <div class="callout hadith">
          <div class="callout-icon">📜</div>
          <div class="callout-body">
            <strong>Dalil Al-Qur'an:</strong> "...dan jika kamu sakit atau dalam perjalanan atau kembali dari tempat buang air atau menyentuh perempuan, lalu kamu tidak memperoleh air, maka bertayamumlah dengan tanah yang baik (suci); usaplah wajahmu dan tanganmu dengan (tanah) itu."
            <br><em>(QS. Al-Ma'idah: 6)</em>
          </div>
        </div>

        <h2>Sebab-sebab Dibolehkannya Tayamum</h2>
        <ul>
          <li><strong>Tidak ada air</strong> — dalam perjalanan atau di tempat yang tidak tersedia air</li>
          <li><strong>Sakit</strong> — penggunaan air dapat memperparah penyakit atau memperlambat kesembuhan</li>
          <li><strong>Air sangat dingin</strong> — dan tidak ada cara untuk memanaskannya, serta dikhawatirkan membahayakan diri</li>
          <li><strong>Air hanya cukup untuk minum</strong> — kebutuhan minum lebih didahulukan</li>
        </ul>

        <h2>Cara Bertayamum</h2>
        <ol>
          <li>Niat tayamum di dalam hati</li>
          <li>Membaca basmalah</li>
          <li>Menepukkan kedua telapak tangan ke tanah/debu yang suci <strong>satu kali tepukan</strong></li>
          <li>Mengusap wajah dengan kedua telapak tangan</li>
          <li>Mengusap punggung tangan kanan dengan telapak tangan kiri, dan sebaliknya</li>
        </ol>

        <div class="callout success">
          <div class="callout-icon">✅</div>
          <div class="callout-body">
            <strong>Catatan Penting:</strong> Tayamum hanya dengan <strong>satu kali tepukan</strong> ke tanah, kemudian mengusap wajah dan kedua tangan. Ini berdasarkan hadits shahih riwayat Bukhari dan Muslim.
          </div>
        </div>

        <h2>Hal yang Membatalkan Tayamum</h2>
        <ul>
          <li>Semua yang membatalkan wudhu</li>
          <li>Menemukan air (bagi yang bertayamum karena tidak ada air)</li>
          <li>Hilangnya uzur yang membolehkan tayamum</li>
        </ul>

        <div class="source-box">
          <strong>📚 Sumber Referensi:</strong>
          • <a href="https://rumaysho.com/2670-tayamum-pengganti-wudhu.html" target="_blank">rumaysho.com — Tayamum, Pengganti Wudhu</a><br>
          • Kitab <em>Fiqhus Sunnah</em> (Sayyid Sabiq)<br>
          • <a href="https://muslim.or.id/6900-tayamum.html" target="_blank">muslim.or.id — Tayamum</a>
        </div>
      </div>`
  },
  {
    id: 6,
    title: 'Mandi Wajib (Ghusl)',
    duration: '10 mnt',
    type: 'materi',
    content: `
      <div class="lesson-header">
        <div class="lesson-tag">📖 Bab 6 · Fikih Dasar</div>
        <h1>Mandi Wajib (Ghusl)</h1>
        <div class="lesson-meta"><span>⏱ 10 menit baca</span><span>📚 Fikih Ibadah</span></div>
      </div>
      <div class="lesson-body">
        <h2>Pengertian Mandi Wajib</h2>
        <p><strong>Mandi wajib</strong> atau <strong>ghusl</strong> (الغسل) adalah mengalirkan air ke seluruh tubuh dengan niat tertentu untuk mengangkat hadats besar.</p>

        <h2>Sebab-sebab yang Mewajibkan Mandi</h2>
        <ol>
          <li><strong>Keluarnya mani</strong> — baik karena mimpi basah, jima', atau sebab lain, disertai syahwat</li>
          <li><strong>Jima' (hubungan suami istri)</strong> — meskipun tidak keluar mani</li>
          <li><strong>Haid</strong> — setelah selesai masa haid</li>
          <li><strong>Nifas</strong> — setelah selesai masa nifas (darah setelah melahirkan)</li>
          <li><strong>Wiladah (melahirkan)</strong> — meskipun bayi lahir dalam keadaan kering</li>
          <li><strong>Meninggal dunia</strong> — wajib dimandikan oleh orang yang masih hidup</li>
        </ol>

        <h2>Rukun Mandi Wajib</h2>
        <ol>
          <li><strong>Niat</strong> — mengangkat hadats besar</li>
          <li><strong>Meratakan air ke seluruh tubuh</strong> — termasuk rambut dan kulit, hingga ke lipatan-lipatan tubuh</li>
        </ol>

        <h2>Tata Cara Mandi Wajib yang Sempurna (Sunnah)</h2>
        <ol>
          <li>Niat mandi wajib</li>
          <li>Mencuci kedua tangan 3 kali</li>
          <li>Membersihkan kemaluan dan kotoran yang ada</li>
          <li>Berwudhu seperti wudhu shalat</li>
          <li>Menuangkan air ke kepala 3 kali sambil menyela-nyela rambut</li>
          <li>Meratakan air ke seluruh tubuh, dimulai dari sisi kanan lalu kiri</li>
          <li>Membasuh kedua kaki</li>
        </ol>

        <div class="callout hadith">
          <div class="callout-icon">📜</div>
          <div class="callout-body">
            <strong>Hadits Aisyah radhiyallahu 'anha:</strong> "Apabila Nabi ﷺ mandi janabah, beliau memulai dengan mencuci kedua tangannya, kemudian berwudhu seperti wudhu untuk shalat, kemudian memasukkan jari-jarinya ke dalam air lalu menyela-nyela pangkal rambutnya..."
            <br><em>(HR. Bukhari no. 248 & Muslim no. 316)</em>
          </div>
        </div>

        <div class="source-box">
          <strong>📚 Sumber Referensi:</strong>
          • <a href="https://rumaysho.com/2680-mandi-wajib.html" target="_blank">rumaysho.com — Mandi Wajib</a><br>
          • Kitab <em>Shahih Fiqhis Sunnah</em> (Syaikh Abu Malik Kamal)<br>
          • <a href="https://muslim.or.id/6910-mandi-wajib.html" target="_blank">muslim.or.id — Mandi Wajib</a>
        </div>
      </div>`
  },

  // QUIZ
  {
    id: 7,
    title: 'Kuis: Thaharah',
    duration: '15 mnt',
    type: 'quiz',
    questions: [
      {
        q: 'Apa pengertian thaharah secara istilah syariat?',
        options: [
          'Membersihkan rumah dari kotoran',
          'Mengangkat hadats dan menghilangkan najis dengan air atau penggantinya',
          'Mandi setiap hari agar badan bersih',
          'Mencuci pakaian yang kotor'
        ],
        answer: 1,
        explanation: 'Thaharah secara istilah syariat adalah mengangkat hadats dan menghilangkan najis dengan menggunakan air atau yang menggantikannya (seperti tanah untuk tayamum). (Sumber: Matan Al-Ghayah wat Taqrib)'
      },
      {
        q: 'Dalil wajibnya wudhu sebelum shalat terdapat dalam Al-Qur\'an surah...',
        options: ['QS. Al-Baqarah: 222', 'QS. Al-Ma\'idah: 6', 'QS. An-Nisa: 43', 'QS. Al-Imran: 97'],
        answer: 1,
        explanation: 'Perintah wudhu sebelum shalat terdapat dalam QS. Al-Ma\'idah ayat 6: "Wahai orang-orang yang beriman! Apabila kamu hendak melaksanakan shalat, maka basuhlah wajahmu dan tanganmu sampai ke siku..."'
      },
      {
        q: 'Najis yang cara mensucikannya harus dibasuh 7 kali dan salah satunya dengan tanah disebut...',
        options: ['Najis Mukhaffafah', 'Najis Mutawassithah', 'Najis Mughallazhah', 'Najis Mutanajjis'],
        answer: 2,
        explanation: 'Najis Mughallazhah (najis berat) adalah najis anjing dan babi. Cara mensucikannya dibasuh 7 kali, salah satunya dengan tanah. (HR. Muslim no. 279)'
      },
      {
        q: 'Berapa jumlah rukun wudhu yang wajib dilakukan?',
        options: ['4 rukun', '5 rukun', '6 rukun', '7 rukun'],
        answer: 2,
        explanation: 'Rukun wudhu ada 6: (1) Niat, (2) Membasuh wajah, (3) Membasuh kedua tangan hingga siku, (4) Mengusap sebagian kepala, (5) Membasuh kedua kaki hingga mata kaki, (6) Tertib/berurutan.'
      },
      {
        q: 'Manakah yang TIDAK termasuk pembatal wudhu?',
        options: [
          'Keluarnya angin dari dubur (kentut)',
          'Tidur nyenyak hingga tidak sadar',
          'Tertawa terbahak-bahak di luar shalat',
          'Makan daging unta'
        ],
        answer: 2,
        explanation: 'Tertawa terbahak-bahak di luar shalat tidak membatalkan wudhu. Ia hanya membatalkan shalat jika dilakukan saat shalat. Pembatal wudhu yang benar adalah: keluarnya sesuatu dari dua jalan, hilang akal, menyentuh kemaluan, dan makan daging unta.'
      },
      {
        q: 'Ukuran "dua qullah" air yang tidak mudah terkena najis setara dengan...',
        options: ['Sekitar 50 liter', 'Sekitar 100 liter', 'Sekitar 216 liter', 'Sekitar 500 liter'],
        answer: 2,
        explanation: 'Dua qullah setara dengan ±216 liter, atau wadah berukuran 60×60×60 cm. Air sebanyak ini tidak menjadi najis meskipun terkena najis, selama sifat-sifatnya tidak berubah. (HR. Abu Dawud no. 63)'
      },
      {
        q: 'Tayamum dilakukan dengan berapa kali tepukan ke tanah?',
        options: ['Dua kali tepukan', 'Tiga kali tepukan', 'Satu kali tepukan', 'Sesuai kebutuhan'],
        answer: 2,
        explanation: 'Tayamum dilakukan dengan SATU kali tepukan ke tanah, kemudian mengusap wajah dan kedua tangan. Ini berdasarkan hadits shahih riwayat Bukhari dan Muslim dari Ammar bin Yasir radhiyallahu \'anhu.'
      },
      {
        q: 'Manakah yang TIDAK mewajibkan mandi wajib?',
        options: [
          'Keluarnya mani disertai syahwat',
          'Selesai masa haid',
          'Mimpi tanpa keluar mani',
          'Jima\' (hubungan suami istri)'
        ],
        answer: 2,
        explanation: 'Mimpi tanpa keluar mani tidak mewajibkan mandi wajib. Yang mewajibkan mandi adalah keluarnya mani (disertai syahwat), jima\', selesai haid, selesai nifas, wiladah, dan meninggal dunia.'
      },
      {
        q: 'Air yang sudah digunakan untuk wudhu disebut...',
        options: ['Air Mutlak', 'Air Musta\'mal', 'Air Mutanajjis', 'Air Makruh'],
        answer: 1,
        explanation: 'Air Musta\'mal adalah air yang sudah digunakan untuk bersuci (wudhu/mandi wajib) dalam jumlah sedikit. Mayoritas ulama berpendapat air musta\'mal tidak sah digunakan untuk bersuci kembali.'
      },
      {
        q: 'Hadits "Kebersihan adalah sebagian dari iman" diriwayatkan oleh...',
        options: ['HR. Bukhari', 'HR. Muslim', 'HR. Abu Dawud', 'HR. At-Tirmidzi'],
        answer: 1,
        explanation: 'Hadits "Ath-thahaatu syathrul iiman" (Kebersihan adalah sebagian dari iman) diriwayatkan oleh Imam Muslim dalam Shahihnya, no. 223, dari Abu Malik Al-Asy\'ari radhiyallahu \'anhu.'
      }
    ]
  }
];

// ============================================================
// ENGINE BELAJAR
// ============================================================
let currentLesson = 0;
let progress = JSON.parse(localStorage.getItem('thaharah_progress') || '[]');

function saveProgress(id) {
  if (!progress.includes(id)) { progress.push(id); localStorage.setItem('thaharah_progress', JSON.stringify(progress)); }
  // Hitung progress keseluruhan kursus fikih
  const total = LESSONS.length;
  const done = LESSONS.filter(l => progress.includes(l.id)).length;
  const pct = Math.round((done / total) * 100);
  localStorage.setItem('progress_fikih', pct);
  if (typeof saveProgressToCloud !== 'undefined') { saveProgressToCloud('fikih', pct); }
  if (pct >= 100) {
    if (!localStorage.getItem('completed_date_fikih')) {
      localStorage.setItem('completed_date_fikih', new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }));
    }
  }
}

function renderSidebar() {
  const list = document.getElementById('materiSidebarList');
  list.innerHTML = LESSONS.map((l, i) => {
    const isDone = progress.includes(l.id);
    const isActive = i === currentLesson;
    const icon = l.type === 'quiz'
      ? `<span style="color:var(--gold)">${IC.clipboardCheck}</span>`
      : isDone ? `<span style="color:var(--green)">${IC.checkCircle}</span>`
      : `<span style="color:#ccc">${IC.lockSmall}</span>`;
    return `<button class="sidebar-lesson ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}"
      onclick="goToLesson(${i})">
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
    const isFirst = index === 0;
    const isLast = index === LESSONS.length - 1;
    main.innerHTML = `
      ${lesson.content}
      <div class="lesson-nav">
        <button class="btn-nav" onclick="goToLesson(${index - 1})" ${isFirst ? 'disabled' : ''}>
          ← Sebelumnya
        </button>
        <button class="btn-nav primary" onclick="markDoneAndNext(${index})">
          ${isLast ? 'Selesai' : 'Tandai Selesai & Lanjut →'}
        </button>
      </div>`;
  } else if (lesson.type === 'quiz') {
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

// ============================================================
// QUIZ ENGINE
// ============================================================
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
        <h1>Kuis: Thaharah (Bersuci)</h1>
        <p>Uji pemahaman Anda tentang materi thaharah</p>
        <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
        <div class="quiz-progress-label">Soal ${current + 1} dari ${questions.length}</div>
      </div>
      <div class="question-card">
        <div class="question-num">Pertanyaan ${current + 1}</div>
        <div class="question-text">${q.q}</div>
        <div class="options-list" id="optionsList">
          ${q.options.map((opt, i) => `
            <button class="option-btn" onclick="selectOption(${i})" id="opt${i}">
              <span class="option-letter">${letters[i]}</span>
              <span>${opt}</span>
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
  document.querySelectorAll('.option-btn').forEach((b, idx) => {
    b.classList.toggle('selected', idx === i);
  });
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
  if (quizState.current >= quizState.questions.length) {
    showResult();
  } else {
    renderQuestion();
  }
}

function showResult() {
  const { score, questions } = quizState;
  const pct = Math.round((score / questions.length) * 100);
  const lulus = pct >= 70;
  const emoji = pct >= 80 ? '🎉' : pct >= 70 ? '✅' : '📚';
  const msg = pct >= 80 ? 'Luar biasa! Anda menguasai materi ini dengan baik.'
            : pct >= 70 ? 'Bagus! Anda lulus dan berhak mendapatkan sertifikat.'
            : 'Nilai Anda belum mencapai 70. Pelajari ulang dan coba lagi untuk mendapatkan sertifikat.';

  if (lulus) {
    saveProgress(LESSONS[currentLesson].id);
    localStorage.setItem('score_fikih', pct);
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

// INIT
initLayout('materi');
renderSidebar();
renderLesson(0);


