// ============================================================
// DATA MATERI & QUIZ - SEJARAH KEBUDAYAAN ISLAM
// Sumber: Kitab Ar-Rahiq Al-Makhtum (Syaikh Shafiyyurrahman Al-Mubarakfuri),
//         Kitab Tarikh Al-Khulafa (Imam As-Suyuthi),
//         rumaysho.com, muslim.or.id, Wikipedia
// ============================================================

const LESSONS = [
  {
    id: 1, title: 'Sejarah Pra-Islam (Jahiliyyah)', duration: '10 mnt', type: 'materi',
    content: `
      <div class="lesson-header">
        <div class="lesson-tag">🕌 Bab 1 · Sejarah Islam</div>
        <h1>Kondisi Dunia Sebelum Islam (Masa Jahiliyyah)</h1>
        <div class="lesson-meta"><span>⏱ 10 menit baca</span><span>📚 Sejarah Kebudayaan Islam</span></div>
      </div>
      <div class="lesson-body">
        <h2>Pengertian Jahiliyyah</h2>
        <p><strong>Jahiliyyah</strong> (الجاهلية) berasal dari kata <em>jahl</em> yang berarti kebodohan. Masa jahiliyyah merujuk pada kondisi masyarakat Arab sebelum datangnya Islam — bukan berarti bodoh dalam arti tidak berilmu, tetapi bodoh dalam hal agama, akhlak, dan peradaban yang benar.</p>

        <h2>Kondisi Jazirah Arab Sebelum Islam</h2>
        <table class="table-materi">
          <thead><tr><th>Aspek</th><th>Kondisi</th></tr></thead>
          <tbody>
            <tr><td><strong>Agama</strong></td><td>Menyembah berhala (360 berhala di Ka'bah), sebagian menyembah bintang, api, dan roh nenek moyang</td></tr>
            <tr><td><strong>Sosial</strong></td><td>Perbudakan merajalela, wanita tidak memiliki hak, bayi perempuan dikubur hidup-hidup</td></tr>
            <tr><td><strong>Moral</strong></td><td>Minum khamr, berjudi, perzinaan, dan peperangan antar suku adalah hal biasa</td></tr>
            <tr><td><strong>Politik</strong></td><td>Tidak ada pemerintahan terpusat, dikuasai sistem kesukuan (qabilah)</td></tr>
            <tr><td><strong>Ekonomi</strong></td><td>Riba merajalela, perdagangan budak, perampokan kafilah dagang</td></tr>
          </tbody>
        </table>

        <h2>Kondisi Dunia Saat Islam Datang</h2>
        <p>Tidak hanya Arab, seluruh dunia saat itu berada dalam kegelapan:</p>
        <ul>
          <li><strong>Persia (Sassanid)</strong> — sistem kasta yang kejam, raja dianggap tuhan</li>
          <li><strong>Romawi (Byzantium)</strong> — korupsi, penindasan rakyat, konflik agama Kristen</li>
          <li><strong>India</strong> — sistem kasta Brahmana yang menindas kaum bawah</li>
          <li><strong>Cina</strong> — feodalisme dan perbudakan</li>
        </ul>

        <div class="callout hadith">
          <div class="callout-icon">📜</div>
          <div class="callout-body">
            <strong>QS. Al-Anbiya: 107:</strong><br>
            "Dan Kami tidak mengutus engkau (Muhammad) melainkan untuk (menjadi) rahmat bagi seluruh alam."
          </div>
        </div>

        <h2>Keistimewaan Bangsa Arab</h2>
        <p>Meskipun dalam kondisi jahiliyyah, bangsa Arab memiliki beberapa keistimewaan yang menjadi modal dakwah Islam:</p>
        <ul>
          <li>Kemampuan bahasa Arab yang tinggi (syair, sastra)</li>
          <li>Hafalan yang kuat</li>
          <li>Sifat dermawan dan keberanian</li>
          <li>Posisi geografis strategis (persimpangan tiga benua)</li>
          <li>Masih ada sisa-sisa ajaran Ibrahim 'alaihissalam (haji, khitan, dll.)</li>
        </ul>

        <div class="source-box">
          <strong>📚 Sumber Referensi:</strong>
          • Kitab <em>Ar-Rahiq Al-Makhtum</em> (Syaikh Shafiyyurrahman Al-Mubarakfuri), Bab 1<br>
          • <a href="https://rumaysho.com/tag/sejarah-islam" target="_blank">rumaysho.com — Sejarah Islam</a><br>
          • <a href="https://muslim.or.id/category/sejarah-islam" target="_blank">muslim.or.id — Sejarah Islam</a>
        </div>
      </div>`
  },
  {
    id: 2, title: 'Kelahiran & Masa Muda Nabi ﷺ', duration: '12 mnt', type: 'materi',
    content: `
      <div class="lesson-header">
        <div class="lesson-tag">🕌 Bab 2 · Sejarah Islam</div>
        <h1>Kelahiran dan Masa Muda Nabi Muhammad ﷺ</h1>
        <div class="lesson-meta"><span>⏱ 12 menit baca</span><span>📚 Sejarah Kebudayaan Islam</span></div>
      </div>
      <div class="lesson-body">
        <h2>Nasab (Silsilah) Nabi ﷺ</h2>
        <p>Muhammad bin Abdullah bin Abdul Muthallib bin Hasyim bin Abdi Manaf bin Qushay bin Kilab... hingga Nabi Ismail bin Ibrahim 'alaihimassalam.</p>
        <p>Beliau berasal dari suku <strong>Quraisy</strong>, klan <strong>Bani Hasyim</strong> — suku paling mulia di Arab.</p>

        <h2>Kelahiran Nabi ﷺ</h2>
        <table class="table-materi">
          <thead><tr><th>Keterangan</th><th>Detail</th></tr></thead>
          <tbody>
            <tr><td><strong>Tanggal lahir</strong></td><td>12 Rabi'ul Awwal (menurut pendapat mayoritas) / Senin, tahun Gajah (570 M)</td></tr>
            <tr><td><strong>Tempat lahir</strong></td><td>Makkah Al-Mukarramah</td></tr>
            <tr><td><strong>Ayah</strong></td><td>Abdullah bin Abdul Muthallib (wafat sebelum Nabi lahir)</td></tr>
            <tr><td><strong>Ibu</strong></td><td>Aminah binti Wahb (wafat saat Nabi berusia 6 tahun)</td></tr>
            <tr><td><strong>Ibu susu</strong></td><td>Halimah As-Sa'diyyah dari Bani Sa'd</td></tr>
          </tbody>
        </table>

        <h2>Peristiwa Penting Masa Kecil</h2>
        <ul>
          <li><strong>Tahun Gajah</strong> — tahun kelahiran Nabi ﷺ, Allah menghancurkan pasukan Abrahah yang hendak merobohkan Ka'bah dengan burung Ababil</li>
          <li><strong>Pembelahan dada (Syaqqush Shadr)</strong> — Malaikat Jibril membelah dada Nabi kecil dan membersihkan hatinya saat bersama Halimah</li>
          <li><strong>Yatim piatu</strong> — ayah wafat sebelum lahir, ibu wafat usia 6 tahun, kakek Abdul Muthallib wafat usia 8 tahun</li>
          <li><strong>Diasuh paman</strong> — Abu Thalib mengasuh Nabi ﷺ setelah kakeknya wafat</li>
        </ul>

        <h2>Masa Muda: Al-Amin</h2>
        <p>Sejak muda, Nabi Muhammad ﷺ dikenal dengan gelar <strong>Al-Amin</strong> (yang terpercaya) karena kejujuran dan amanahnya yang luar biasa. Beliau:</p>
        <ul>
          <li>Bekerja sebagai penggembala kambing</li>
          <li>Ikut berdagang bersama pamannya ke Syam (Suriah) pada usia 12 tahun</li>
          <li>Mengelola perdagangan Khadijah binti Khuwailid pada usia 25 tahun</li>
          <li>Menikah dengan Khadijah pada usia 25 tahun (Khadijah berusia 40 tahun)</li>
          <li>Ikut membangun kembali Ka'bah dan menyelesaikan perselisihan peletakan Hajar Aswad</li>
        </ul>

        <div class="callout success">
          <div class="callout-icon">✅</div>
          <div class="callout-body">
            <strong>Sifat Nabi ﷺ sebelum kenabian:</strong> Beliau tidak pernah menyembah berhala, tidak pernah minum khamr, tidak pernah berzina, dan selalu jujur dalam setiap urusan — menjadi bukti bahwa Allah mempersiapkan beliau untuk menjadi nabi.
          </div>
        </div>

        <div class="source-box">
          <strong>📚 Sumber Referensi:</strong>
          • Kitab <em>Ar-Rahiq Al-Makhtum</em> (Syaikh Shafiyyurrahman Al-Mubarakfuri), Bab 2-4<br>
          • Kitab <em>Sirah Nabawiyyah</em> (Ibnu Hisyam)<br>
          • <a href="https://rumaysho.com/tag/sirah-nabawiyyah" target="_blank">rumaysho.com — Sirah Nabawiyyah</a>
        </div>
      </div>`
  },

  {
    id: 3, title: 'Dakwah di Makkah', duration: '12 mnt', type: 'materi',
    content: `
      <div class="lesson-header">
        <div class="lesson-tag">🕌 Bab 3 · Sejarah Islam</div>
        <h1>Dakwah Nabi ﷺ di Makkah (610–622 M)</h1>
        <div class="lesson-meta"><span>⏱ 12 menit baca</span><span>📚 Sejarah Kebudayaan Islam</span></div>
      </div>
      <div class="lesson-body">
        <h2>Awal Kenabian</h2>
        <p>Pada usia <strong>40 tahun</strong> (610 M), Nabi Muhammad ﷺ menerima wahyu pertama di <strong>Gua Hira</strong> melalui Malaikat Jibril. Wahyu pertama adalah QS. Al-'Alaq: 1-5. Inilah awal dari periode kenabian selama 23 tahun.</p>

        <h2>Fase Dakwah di Makkah (13 Tahun)</h2>
        <h3>1. Dakwah Sirriyyah (Sembunyi-sembunyi) — 3 Tahun Pertama</h3>
        <p>Nabi ﷺ berdakwah secara rahasia kepada orang-orang terdekat. Yang pertama masuk Islam:</p>
        <ul>
          <li><strong>Khadijah binti Khuwailid</strong> — istri Nabi, wanita pertama yang masuk Islam</li>
          <li><strong>Ali bin Abi Thalib</strong> — sepupu Nabi, anak kecil pertama yang masuk Islam</li>
          <li><strong>Abu Bakar Ash-Shiddiq</strong> — sahabat terdekat, laki-laki dewasa pertama yang masuk Islam</li>
          <li><strong>Zaid bin Haritsah</strong> — budak yang dimerdekakan Nabi</li>
        </ul>

        <h3>2. Dakwah Jahriyyah (Terang-terangan) — Setelah Tahun ke-3</h3>
        <p>Setelah turun QS. Al-Hijr: 94, Nabi ﷺ berdakwah secara terbuka. Reaksi kaum Quraisy semakin keras:</p>
        <ul>
          <li>Penghinaan, ejekan, dan ancaman kepada Nabi ﷺ</li>
          <li>Penyiksaan terhadap para sahabat yang lemah (Bilal, Ammar, Sumayyah, dll.)</li>
          <li><strong>Sumayyah binti Khayyath</strong> — syahidah pertama dalam Islam</li>
          <li>Pemboikotan ekonomi dan sosial terhadap Bani Hasyim selama 3 tahun</li>
        </ul>

        <h2>'Amul Huzn (Tahun Kesedihan)</h2>
        <p>Pada tahun ke-10 kenabian, dua orang yang paling dicintai Nabi ﷺ wafat dalam waktu berdekatan:</p>
        <ul>
          <li><strong>Khadijah radhiyallahu 'anha</strong> — istri tercinta, pendukung setia dakwah</li>
          <li><strong>Abu Thalib</strong> — paman yang selalu melindungi Nabi ﷺ</li>
        </ul>

        <h2>Isra' Mi'raj</h2>
        <p>Sebagai hiburan dari Allah atas kesedihan Nabi ﷺ, pada tahun ke-11 kenabian terjadi peristiwa <strong>Isra' Mi'raj</strong> — perjalanan malam dari Masjidil Haram ke Masjidil Aqsha, lalu naik ke langit hingga Sidratul Muntaha. Dalam peristiwa ini, Nabi ﷺ menerima perintah <strong>shalat 5 waktu</strong>.</p>

        <div class="callout hadith">
          <div class="callout-icon">📜</div>
          <div class="callout-body">
            <strong>QS. Al-Isra': 1:</strong><br>
            "Mahasuci (Allah), yang telah memperjalankan hamba-Nya (Muhammad) pada malam hari dari Masjidil Haram ke Masjidil Aqsha yang telah Kami berkahi sekelilingnya agar Kami perlihatkan kepadanya sebagian tanda-tanda (kebesaran) Kami..."
          </div>
        </div>

        <div class="source-box">
          <strong>📚 Sumber Referensi:</strong>
          • Kitab <em>Ar-Rahiq Al-Makhtum</em> (Syaikh Shafiyyurrahman Al-Mubarakfuri), Bab 5-10<br>
          • <a href="https://rumaysho.com/tag/dakwah-makkah" target="_blank">rumaysho.com — Dakwah di Makkah</a><br>
          • <a href="https://muslim.or.id/category/sejarah-islam/sirah-nabawiyyah" target="_blank">muslim.or.id — Sirah Nabawiyyah</a>
        </div>
      </div>`
  },
  {
    id: 4, title: 'Hijrah & Dakwah di Madinah', duration: '12 mnt', type: 'materi',
    content: `
      <div class="lesson-header">
        <div class="lesson-tag">🕌 Bab 4 · Sejarah Islam</div>
        <h1>Hijrah ke Madinah dan Pembangunan Peradaban Islam</h1>
        <div class="lesson-meta"><span>⏱ 12 menit baca</span><span>📚 Sejarah Kebudayaan Islam</span></div>
      </div>
      <div class="lesson-body">
        <h2>Hijrah ke Madinah (622 M)</h2>
        <p><strong>Hijrah</strong> adalah perpindahan Nabi ﷺ dan para sahabat dari Makkah ke Madinah (Yatsrib) pada tahun 622 M. Peristiwa ini menjadi <strong>titik awal kalender Hijriyah</strong> dan babak baru peradaban Islam.</p>
        <p>Nabi ﷺ berhijrah bersama Abu Bakar Ash-Shiddiq, bersembunyi di <strong>Gua Tsur</strong> selama 3 hari sebelum melanjutkan perjalanan ke Madinah.</p>

        <h2>Langkah-langkah Strategis Nabi ﷺ di Madinah</h2>
        <ol>
          <li>
            <strong>Membangun Masjid Nabawi</strong><br>
            Masjid pertama yang dibangun Nabi ﷺ di Madinah — menjadi pusat ibadah, pendidikan, dan pemerintahan.
          </li>
          <li>
            <strong>Mempersaudarakan Muhajirin dan Anshar (Mu'akhat)</strong><br>
            Nabi ﷺ mempersaudarakan setiap satu orang Muhajirin (pendatang dari Makkah) dengan satu orang Anshar (penduduk Madinah). Ini adalah langkah sosial yang luar biasa.
          </li>
          <li>
            <strong>Piagam Madinah (Shahifah Al-Madinah)</strong><br>
            Perjanjian tertulis pertama dalam sejarah Islam yang mengatur hubungan antar komunitas di Madinah (Muslim, Yahudi, dan suku-suku Arab lainnya).
          </li>
        </ol>

        <h2>Perang-perang Besar di Masa Nabi ﷺ</h2>
        <table class="table-materi">
          <thead><tr><th>Perang</th><th>Tahun</th><th>Hasil</th></tr></thead>
          <tbody>
            <tr><td><strong>Badar</strong></td><td>2 H (624 M)</td><td>Kemenangan besar Islam. 313 Muslim vs 1.000 Quraisy. 70 kafir terbunuh, 70 ditawan.</td></tr>
            <tr><td><strong>Uhud</strong></td><td>3 H (625 M)</td><td>Awalnya menang, lalu berbalik karena pemanah meninggalkan pos. 70 sahabat syahid.</td></tr>
            <tr><td><strong>Khandaq (Ahzab)</strong></td><td>5 H (627 M)</td><td>Kaum Muslim menggali parit. Koalisi 10.000 pasukan gagal menembus pertahanan.</td></tr>
            <tr><td><strong>Khaibar</strong></td><td>7 H (628 M)</td><td>Kemenangan atas Yahudi Khaibar. Membuka jalan ke utara Jazirah Arab.</td></tr>
            <tr><td><strong>Fathu Makkah</strong></td><td>8 H (630 M)</td><td>Makkah ditaklukkan tanpa pertumpahan darah. Nabi ﷺ memaafkan semua penduduk Makkah.</td></tr>
          </tbody>
        </table>

        <h2>Haji Wada' dan Wafatnya Nabi ﷺ</h2>
        <p>Pada tahun <strong>10 H (632 M)</strong>, Nabi ﷺ melaksanakan haji terakhir (Haji Wada') dan menyampaikan khutbah bersejarah di Padang Arafah. Tiga bulan kemudian, pada <strong>12 Rabi'ul Awwal 11 H</strong>, Nabi ﷺ wafat di usia 63 tahun di rumah Aisyah radhiyallahu 'anha.</p>

        <div class="callout hadith">
          <div class="callout-icon">📜</div>
          <div class="callout-body">
            <strong>Khutbah Haji Wada':</strong><br>
            "Wahai manusia, sesungguhnya darahmu, hartamu, dan kehormatanmu adalah haram (suci) atas kalian, seperti haramnya hari ini, di bulan ini, di negeri ini..."
            <br><em>(HR. Bukhari no. 1741 & Muslim no. 1679)</em>
          </div>
        </div>

        <div class="source-box">
          <strong>📚 Sumber Referensi:</strong>
          • Kitab <em>Ar-Rahiq Al-Makhtum</em> (Syaikh Shafiyyurrahman Al-Mubarakfuri), Bab 11-20<br>
          • <a href="https://rumaysho.com/tag/hijrah" target="_blank">rumaysho.com — Hijrah Nabi ﷺ</a><br>
          • <a href="https://muslim.or.id/category/sejarah-islam/perang" target="_blank">muslim.or.id — Perang di Masa Nabi</a>
        </div>
      </div>`
  },
  {
    id: 5, title: 'Khulafaur Rasyidin', duration: '14 mnt', type: 'materi',
    content: `
      <div class="lesson-header">
        <div class="lesson-tag">🕌 Bab 5 · Sejarah Islam</div>
        <h1>Khulafaur Rasyidin (11–41 H / 632–661 M)</h1>
        <div class="lesson-meta"><span>⏱ 14 menit baca</span><span>📚 Sejarah Kebudayaan Islam</span></div>
      </div>
      <div class="lesson-body">
        <h2>Pengertian Khulafaur Rasyidin</h2>
        <p><strong>Khulafaur Rasyidin</strong> (الخلفاء الراشدون) adalah empat khalifah pertama yang memimpin umat Islam setelah wafatnya Nabi ﷺ. Mereka mendapat petunjuk (rasyid) dari Allah dalam kepemimpinannya.</p>
        <div class="callout hadith">
          <div class="callout-icon">📜</div>
          <div class="callout-body">
            <strong>Hadits:</strong> "Hendaklah kalian berpegang teguh dengan sunnahku dan sunnah Khulafaur Rasyidin yang mendapat petunjuk setelahku. Gigitlah ia dengan gigi geraham kalian."
            <br><em>(HR. Abu Dawud no. 4607 — dishahihkan Al-Albani)</em>
          </div>
        </div>

        <h2>1. Abu Bakar Ash-Shiddiq (11–13 H / 632–634 M)</h2>
        <ul>
          <li>Khalifah pertama, sahabat terdekat Nabi ﷺ</li>
          <li>Memerangi kaum <strong>murtad dan nabi palsu</strong> (Musailamah Al-Kadzdzab, Thulaihah, dll.)</li>
          <li>Memerangi orang yang <strong>menolak membayar zakat</strong></li>
          <li>Menginisiasi <strong>pengumpulan Al-Qur'an</strong> dalam satu mushaf atas saran Umar bin Khattab</li>
          <li>Memulai ekspansi ke Persia dan Romawi</li>
          <li>Memerintah selama <strong>2 tahun 3 bulan</strong></li>
        </ul>

        <h2>2. Umar bin Khattab Al-Faruq (13–23 H / 634–644 M)</h2>
        <ul>
          <li>Khalifah kedua, dikenal tegas dan adil</li>
          <li>Menaklukkan <strong>Persia, Syam (Suriah), Mesir, dan Palestina</strong></li>
          <li>Membebaskan <strong>Baitul Maqdis (Yerusalem)</strong> dari Romawi (638 M)</li>
          <li>Mendirikan sistem <strong>Baitul Mal</strong> (kas negara) dan administrasi pemerintahan</li>
          <li>Menetapkan <strong>kalender Hijriyah</strong> dimulai dari peristiwa hijrah</li>
          <li>Wafat syahid ditikam oleh Abu Lu'lu'ah Al-Majusi (644 M)</li>
          <li>Memerintah selama <strong>10 tahun 6 bulan</strong></li>
        </ul>

        <h2>3. Utsman bin Affan Dzun Nurain (23–35 H / 644–656 M)</h2>
        <ul>
          <li>Khalifah ketiga, menantu Nabi ﷺ (menikahi dua putri Nabi)</li>
          <li>Menyempurnakan <strong>kodifikasi Al-Qur'an</strong> dalam satu mushaf standar (Mushaf Utsmani)</li>
          <li>Memperluas wilayah Islam ke <strong>Afrika Utara, Armenia, dan Asia Tengah</strong></li>
          <li>Membangun armada laut Islam pertama</li>
          <li>Wafat syahid dibunuh oleh kaum pemberontak (656 M)</li>
          <li>Memerintah selama <strong>12 tahun</strong></li>
        </ul>

        <h2>4. Ali bin Abi Thalib Karramallahu Wajhah (35–41 H / 656–661 M)</h2>
        <ul>
          <li>Khalifah keempat, sepupu dan menantu Nabi ﷺ (suami Fatimah Az-Zahra)</li>
          <li>Masa kepemimpinannya diwarnai <strong>fitnah (konflik internal)</strong></li>
          <li>Perang Jamal (656 M) — melawan Aisyah, Thalhah, dan Zubair</li>
          <li>Perang Shiffin (657 M) — melawan Muawiyah bin Abi Sufyan</li>
          <li>Wafat syahid ditikam oleh Abdurrahman bin Muljam dari kaum Khawarij (661 M)</li>
          <li>Memerintah selama <strong>4 tahun 9 bulan</strong></li>
        </ul>

        <div class="source-box">
          <strong>📚 Sumber Referensi:</strong>
          • Kitab <em>Tarikh Al-Khulafa</em> (Imam As-Suyuthi)<br>
          • Kitab <em>Al-Bidayah wan Nihayah</em> (Ibnu Katsir)<br>
          • <a href="https://rumaysho.com/tag/khulafaur-rasyidin" target="_blank">rumaysho.com — Khulafaur Rasyidin</a><br>
          • <a href="https://muslim.or.id/category/sejarah-islam/khulafaur-rasyidin" target="_blank">muslim.or.id — Khulafaur Rasyidin</a>
        </div>
      </div>`
  },
  {
    id: 6, title: 'Dinasti Umayyah & Abbasiyah', duration: '12 mnt', type: 'materi',
    content: `
      <div class="lesson-header">
        <div class="lesson-tag">🕌 Bab 6 · Sejarah Islam</div>
        <h1>Dinasti Umayyah dan Abbasiyah</h1>
        <div class="lesson-meta"><span>⏱ 12 menit baca</span><span>📚 Sejarah Kebudayaan Islam</span></div>
      </div>
      <div class="lesson-body">
        <h2>Dinasti Umayyah (41–132 H / 661–750 M)</h2>
        <p>Didirikan oleh <strong>Muawiyah bin Abi Sufyan</strong> setelah Ali bin Abi Thalib wafat. Ibu kota: <strong>Damaskus (Suriah)</strong>.</p>
        <h3>Pencapaian Dinasti Umayyah:</h3>
        <ul>
          <li>Ekspansi terluas dalam sejarah Islam — dari Spanyol (Al-Andalus) di barat hingga India di timur</li>
          <li>Penaklukan <strong>Spanyol (711 M)</strong> oleh Thariq bin Ziyad</li>
          <li>Pembangunan <strong>Masjid Al-Aqsha</strong> dan <strong>Kubah Ash-Shakhra</strong> di Yerusalem</li>
          <li>Arabisasi administrasi pemerintahan</li>
          <li>Khalifah terbaik: <strong>Umar bin Abdul Aziz (Umar II)</strong> — dikenal sangat adil dan zuhud</li>
        </ul>
        <div class="callout info">
          <div class="callout-icon">ℹ️</div>
          <div class="callout-body">
            <strong>Umar bin Abdul Aziz (99–101 H):</strong> Dalam masa pemerintahannya yang singkat (2 tahun), beliau berhasil mewujudkan keadilan hingga tidak ada lagi orang yang berhak menerima zakat karena semua rakyat sudah sejahtera.
          </div>
        </div>

        <h2>Dinasti Abbasiyah (132–656 H / 750–1258 M)</h2>
        <p>Didirikan oleh <strong>Abu Al-Abbas As-Saffah</strong>. Ibu kota: <strong>Baghdad (Irak)</strong>.</p>
        <h3>Pencapaian Dinasti Abbasiyah:</h3>
        <ul>
          <li><strong>Zaman Keemasan Islam (Golden Age)</strong> — terutama masa Harun Ar-Rasyid dan Al-Ma'mun</li>
          <li>Penerjemahan besar-besaran karya ilmu Yunani, Persia, dan India ke bahasa Arab</li>
          <li>Pendirian <strong>Baitul Hikmah</strong> (House of Wisdom) di Baghdad — pusat ilmu pengetahuan dunia</li>
          <li>Lahirnya ilmuwan-ilmuwan besar: Al-Khawarizmi (matematika/aljabar), Ibnu Sina (kedokteran), Al-Biruni (astronomi), Al-Farabi (filsafat)</li>
          <li>Berakhir dengan <strong>invasi Mongol</strong> yang menghancurkan Baghdad (1258 M)</li>
        </ul>

        <table class="table-materi">
          <thead><tr><th>Aspek</th><th>Umayyah</th><th>Abbasiyah</th></tr></thead>
          <tbody>
            <tr><td>Ibu kota</td><td>Damaskus</td><td>Baghdad</td></tr>
            <tr><td>Fokus</td><td>Ekspansi militer</td><td>Ilmu pengetahuan & budaya</td></tr>
            <tr><td>Durasi</td><td>±90 tahun</td><td>±500 tahun</td></tr>
            <tr><td>Akhir</td><td>Digulingkan Abbasiyah</td><td>Dihancurkan Mongol</td></tr>
          </tbody>
        </table>

        <div class="source-box">
          <strong>📚 Sumber Referensi:</strong>
          • Kitab <em>Al-Bidayah wan Nihayah</em> (Ibnu Katsir), Juz 8-13<br>
          • <a href="https://rumaysho.com/tag/dinasti-umayyah" target="_blank">rumaysho.com — Dinasti Umayyah</a><br>
          • <a href="https://muslim.or.id/category/sejarah-islam/dinasti-abbasiyah" target="_blank">muslim.or.id — Dinasti Abbasiyah</a>
        </div>
      </div>`
  },
  {
    id: 7, title: 'Islam di Nusantara', duration: '12 mnt', type: 'materi',
    content: `
      <div class="lesson-header">
        <div class="lesson-tag">🕌 Bab 7 · Sejarah Islam</div>
        <h1>Masuk dan Berkembangnya Islam di Nusantara</h1>
        <div class="lesson-meta"><span>⏱ 12 menit baca</span><span>📚 Sejarah Kebudayaan Islam</span></div>
      </div>
      <div class="lesson-body">
        <h2>Teori Masuknya Islam ke Nusantara</h2>
        <p>Para sejarawan berbeda pendapat tentang kapan dan dari mana Islam masuk ke Nusantara. Ada beberapa teori utama:</p>
        <table class="table-materi">
          <thead><tr><th>Teori</th><th>Asal</th><th>Waktu</th><th>Tokoh Pendukung</th></tr></thead>
          <tbody>
            <tr><td><strong>Teori Arab</strong></td><td>Arab (Hadramaut, Yaman)</td><td>Abad 7-8 M</td><td>Hamka, Van Leur</td></tr>
            <tr><td><strong>Teori Gujarat</strong></td><td>Gujarat, India</td><td>Abad 13 M</td><td>Snouck Hurgronje, Pijnapel</td></tr>
            <tr><td><strong>Teori Persia</strong></td><td>Persia (Iran)</td><td>Abad 13 M</td><td>Hoesein Djajadiningrat</td></tr>
            <tr><td><strong>Teori Cina</strong></td><td>Cina (Muslim Cina)</td><td>Abad 9-10 M</td><td>Slamet Muljana</td></tr>
          </tbody>
        </table>

        <h2>Kerajaan-kerajaan Islam di Nusantara</h2>
        <ul>
          <li><strong>Kerajaan Samudera Pasai</strong> (Aceh, abad 13 M) — kerajaan Islam pertama di Nusantara</li>
          <li><strong>Kerajaan Malaka</strong> (Malaysia, abad 15 M) — pusat perdagangan dan penyebaran Islam</li>
          <li><strong>Kerajaan Demak</strong> (Jawa, abad 15 M) — kerajaan Islam pertama di Jawa</li>
          <li><strong>Kerajaan Mataram Islam</strong> (Jawa, abad 16-17 M)</li>
          <li><strong>Kerajaan Ternate & Tidore</strong> (Maluku) — pusat rempah-rempah</li>
          <li><strong>Kerajaan Gowa-Tallo</strong> (Sulawesi Selatan)</li>
        </ul>

        <h2>Wali Songo — Penyebar Islam di Jawa</h2>
        <p>Sembilan wali (Wali Songo) berperan besar dalam penyebaran Islam di Pulau Jawa melalui pendekatan budaya:</p>
        <ul>
          <li><strong>Sunan Gresik</strong> (Maulana Malik Ibrahim) — wali pertama di Jawa</li>
          <li><strong>Sunan Ampel</strong> (Raden Rahmat) — mendirikan pesantren pertama di Jawa</li>
          <li><strong>Sunan Bonang</strong> — menggunakan gamelan dan tembang</li>
          <li><strong>Sunan Drajat</strong> — dakwah melalui sosial dan ekonomi</li>
          <li><strong>Sunan Kalijaga</strong> — menggunakan wayang dan seni budaya Jawa</li>
          <li><strong>Sunan Giri</strong> — mendirikan pesantren di Giri, Gresik</li>
          <li><strong>Sunan Kudus</strong> — toleransi dengan budaya Hindu-Buddha</li>
          <li><strong>Sunan Muria</strong> — dakwah di pedesaan dan pegunungan</li>
          <li><strong>Sunan Gunung Jati</strong> — menyebarkan Islam di Cirebon dan Banten</li>
        </ul>

        <div class="callout success">
          <div class="callout-icon">✅</div>
          <div class="callout-body">
            <strong>Metode Dakwah Wali Songo:</strong> Para wali menggunakan pendekatan budaya lokal (akulturasi) — tidak menghancurkan budaya yang ada, tetapi mengisinya dengan nilai-nilai Islam. Inilah yang membuat Islam diterima dengan damai di Nusantara.
          </div>
        </div>

        <div class="source-box">
          <strong>📚 Sumber Referensi:</strong>
          • Buku <em>Sejarah Kebudayaan Islam</em> (Kementerian Agama RI)<br>
          • <a href="https://rumaysho.com/tag/islam-nusantara" target="_blank">rumaysho.com — Islam di Nusantara</a><br>
          • <a href="https://muslim.or.id/category/sejarah-islam/islam-indonesia" target="_blank">muslim.or.id — Sejarah Islam di Indonesia</a>
        </div>
      </div>`
  },

  // QUIZ SEJARAH
  {
    id: 8, title: 'Kuis: Sejarah Islam', duration: '15 mnt', type: 'quiz',
    questions: [
      {
        q: 'Istilah "Jahiliyyah" merujuk pada kondisi masyarakat Arab sebelum Islam yang...',
        options: [
          'Tidak memiliki kemampuan membaca dan menulis',
          'Bodoh dalam hal agama, akhlak, dan peradaban yang benar',
          'Tidak mengenal perdagangan dan ekonomi',
          'Tidak memiliki bahasa dan sastra'
        ],
        answer: 1,
        explanation: 'Jahiliyyah bukan berarti bodoh dalam arti tidak berilmu — bangsa Arab justru terkenal dengan kemampuan bahasa dan sastranya. Jahiliyyah berarti kebodohan dalam hal agama, akhlak, dan peradaban yang benar: menyembah berhala, mengubur bayi perempuan, minum khamr, dll.'
      },
      {
        q: 'Nabi Muhammad ﷺ menerima wahyu pertama pada usia berapa tahun?',
        options: ['35 tahun', '40 tahun', '45 tahun', '25 tahun'],
        answer: 1,
        explanation: 'Nabi Muhammad ﷺ menerima wahyu pertama (QS. Al-\'Alaq: 1-5) di Gua Hira pada usia 40 tahun, tepatnya pada 17 Ramadan tahun 610 M. Inilah awal dari periode kenabian selama 23 tahun.'
      },
      {
        q: 'Siapakah wanita pertama yang masuk Islam?',
        options: ['Aisyah binti Abu Bakar', 'Fatimah Az-Zahra', 'Khadijah binti Khuwailid', 'Sumayyah binti Khayyath'],
        answer: 2,
        explanation: 'Khadijah binti Khuwailid radhiyallahu \'anha adalah wanita pertama yang masuk Islam, sekaligus orang pertama yang beriman kepada Nabi ﷺ. Beliau adalah istri pertama dan pendukung setia dakwah Nabi ﷺ.'
      },
      {
        q: 'Peristiwa Isra\' Mi\'raj terjadi pada tahun ke berapa kenabian?',
        options: ['Tahun ke-5', 'Tahun ke-8', 'Tahun ke-11', 'Tahun ke-13'],
        answer: 2,
        explanation: 'Isra\' Mi\'raj terjadi pada tahun ke-11 kenabian, sebagai hiburan dari Allah setelah \'Amul Huzn (tahun kesedihan) — wafatnya Khadijah dan Abu Thalib. Dalam peristiwa ini Nabi ﷺ menerima perintah shalat 5 waktu.'
      },
      {
        q: 'Perang Badar terjadi pada tahun berapa Hijriyah?',
        options: ['1 H', '2 H', '3 H', '5 H'],
        answer: 1,
        explanation: 'Perang Badar terjadi pada 17 Ramadan tahun 2 H (624 M). Ini adalah kemenangan besar pertama Islam — 313 Muslim mengalahkan 1.000 pasukan Quraisy. 70 kafir terbunuh dan 70 ditawan.'
      },
      {
        q: 'Khalifah yang menginisiasi pengumpulan Al-Qur\'an dalam satu mushaf adalah...',
        options: ['Umar bin Khattab', 'Abu Bakar Ash-Shiddiq', 'Utsman bin Affan', 'Ali bin Abi Thalib'],
        answer: 1,
        explanation: 'Abu Bakar Ash-Shiddiq menginisiasi pengumpulan Al-Qur\'an dalam satu mushaf atas saran Umar bin Khattab, setelah banyak hafizh Al-Qur\'an yang syahid dalam Perang Yamamah melawan Musailamah Al-Kadzdzab.'
      },
      {
        q: 'Khalifah yang menetapkan kalender Hijriyah dimulai dari peristiwa hijrah adalah...',
        options: ['Abu Bakar Ash-Shiddiq', 'Umar bin Khattab', 'Utsman bin Affan', 'Ali bin Abi Thalib'],
        answer: 1,
        explanation: 'Umar bin Khattab radhiyallahu \'anhu menetapkan kalender Hijriyah yang dimulai dari peristiwa hijrah Nabi ﷺ ke Madinah. Beliau juga mendirikan sistem Baitul Mal dan administrasi pemerintahan Islam.'
      },
      {
        q: 'Kerajaan Islam pertama di Nusantara adalah...',
        options: ['Kerajaan Demak', 'Kerajaan Malaka', 'Kerajaan Samudera Pasai', 'Kerajaan Mataram Islam'],
        answer: 2,
        explanation: 'Kerajaan Samudera Pasai di Aceh (abad 13 M) adalah kerajaan Islam pertama di Nusantara. Kerajaan ini menjadi pusat perdagangan dan penyebaran Islam di Asia Tenggara sebelum Malaka.'
      },
      {
        q: 'Wali Songo yang dikenal menggunakan wayang dan seni budaya Jawa dalam dakwahnya adalah...',
        options: ['Sunan Bonang', 'Sunan Kalijaga', 'Sunan Kudus', 'Sunan Giri'],
        answer: 1,
        explanation: 'Sunan Kalijaga (Raden Said) dikenal menggunakan wayang, gamelan, dan seni budaya Jawa sebagai media dakwah. Beliau menciptakan wayang kulit dengan tokoh-tokoh yang mengandung nilai-nilai Islam.'
      },
      {
        q: 'Dinasti Abbasiyah berakhir karena...',
        options: [
          'Digulingkan oleh Dinasti Umayyah',
          'Dihancurkan oleh invasi Mongol (1258 M)',
          'Runtuh karena konflik internal',
          'Ditaklukkan oleh Tentara Salib'
        ],
        answer: 1,
        explanation: 'Dinasti Abbasiyah berakhir pada 1258 M ketika pasukan Mongol di bawah Hulagu Khan menyerang dan menghancurkan Baghdad. Khalifah terakhir Al-Musta\'shim dibunuh, dan Baitul Hikmah beserta jutaan buku dibakar dan dibuang ke Sungai Tigris.'
      }
    ]
  }
];

// ============================================================
// ENGINE
// ============================================================
let currentLesson = 0;
let progress = JSON.parse(localStorage.getItem('sejarah_progress') || '[]');

function saveProgress(id) {
  if (!progress.includes(id)) { progress.push(id); localStorage.setItem('sejarah_progress', JSON.stringify(progress)); }
  const total = LESSONS.length;
  const done = LESSONS.filter(l => progress.includes(l.id)).length;
  const pct = Math.round((done / total) * 100);
  localStorage.setItem('progress_sejarah', pct);
  if (typeof saveProgressToCloud !== 'undefined') { saveProgressToCloud('sejarah', pct); }
  if (pct >= 100 && !localStorage.getItem('completed_date_sejarah')) {
    localStorage.setItem('completed_date_sejarah', new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }));
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
        <h1>Kuis: Sejarah Kebudayaan Islam</h1>
        <p>Uji pemahaman Anda tentang Sejarah Islam</p>
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
  const msg = pct >= 80 ? 'Masya Allah! Anda menguasai Sejarah Islam dengan sangat baik.'
            : pct >= 70 ? 'Bagus! Anda lulus dan berhak mendapatkan sertifikat.'
            : 'Nilai Anda belum mencapai 70. Pelajari ulang dan coba lagi untuk mendapatkan sertifikat.';
  if (lulus) {
    saveProgress(LESSONS[currentLesson].id);
    localStorage.setItem('score_sejarah', pct);
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

