// ============================================================
// DATA MATERI & QUIZ - AKIDAH: RUKUN IMAN
// Sumber: Kitab Al-Aqidah Al-Wasithiyyah (Ibnu Taimiyyah),
//         Kitab Syarh Ushul Ats-Tsalatsah (Ibnu Utsaimin),
//         rumaysho.com, muslim.or.id
// ============================================================

const LESSONS = [
  {
    id: 1, title: 'Pengertian Akidah & Rukun Iman', duration: '10 mnt', type: 'materi',
    content: `
      <div class="lesson-header">
        <div class="lesson-tag">🌙 Bab 1 · Akidah Islam</div>
        <h1>Pengertian Akidah dan Rukun Iman</h1>
        <div class="lesson-meta"><span>⏱ 10 menit baca</span><span>📚 Akidah Islam</span></div>
      </div>
      <div class="lesson-body">
        <h2>Apa itu Akidah?</h2>
        <p><strong>Akidah</strong> (العقيدة) secara bahasa berasal dari kata <em>'aqada</em> yang berarti mengikat atau menetapkan. Secara istilah, akidah adalah <strong>keyakinan yang kuat dan teguh</strong> yang tertanam dalam hati, tidak tergoyahkan oleh keraguan.</p>
        <p>Dalam Islam, akidah mencakup keyakinan terhadap Allah ﷻ, para malaikat-Nya, kitab-kitab-Nya, para rasul-Nya, hari akhir, serta qadha dan qadar.</p>
        <div class="callout hadith">
          <div class="callout-icon">📜</div>
          <div class="callout-body">
            <strong>Hadits Jibril — Definisi Iman:</strong><br>
            Jibril bertanya: "Beritahukan kepadaku tentang iman." Rasulullah ﷺ menjawab: <em>"Iman adalah engkau beriman kepada Allah, para malaikat-Nya, kitab-kitab-Nya, para rasul-Nya, hari akhir, dan engkau beriman kepada takdir yang baik maupun yang buruk."</em>
            <br><em>(HR. Muslim no. 8)</em>
          </div>
        </div>
        <h2>Enam Rukun Iman</h2>
        <table class="table-materi">
          <thead><tr><th>No</th><th>Rukun Iman</th><th>Dalil</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>Iman kepada Allah</td><td>QS. Al-Baqarah: 285</td></tr>
            <tr><td>2</td><td>Iman kepada Malaikat</td><td>QS. Al-Baqarah: 285</td></tr>
            <tr><td>3</td><td>Iman kepada Kitab-kitab Allah</td><td>QS. Al-Baqarah: 285</td></tr>
            <tr><td>4</td><td>Iman kepada Para Rasul</td><td>QS. Al-Baqarah: 285</td></tr>
            <tr><td>5</td><td>Iman kepada Hari Akhir</td><td>QS. Al-Baqarah: 177</td></tr>
            <tr><td>6</td><td>Iman kepada Qadha dan Qadar</td><td>HR. Muslim no. 8</td></tr>
          </tbody>
        </table>
        <div class="callout hadith">
          <div class="callout-icon">📜</div>
          <div class="callout-body">
            <strong>Dalil Al-Qur'an:</strong><br>
            "Rasul (Muhammad) beriman kepada apa yang diturunkan kepadanya dari Tuhannya, demikian pula orang-orang yang beriman. Semua beriman kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya dan rasul-rasul-Nya..."
            <br><em>(QS. Al-Baqarah: 285)</em>
          </div>
        </div>
        <h2>Hubungan Iman, Islam, dan Ihsan</h2>
        <p>Dalam hadits Jibril yang masyhur, agama Islam mencakup tiga tingkatan:</p>
        <ul>
          <li><strong>Islam</strong> — amalan lahiriah (syahadat, shalat, zakat, puasa, haji)</li>
          <li><strong>Iman</strong> — keyakinan batin (enam rukun iman)</li>
          <li><strong>Ihsan</strong> — beribadah seolah melihat Allah, atau minimal yakin Allah melihat kita</li>
        </ul>
        <div class="callout success">
          <div class="callout-icon">✅</div>
          <div class="callout-body"><strong>Poin Penting:</strong> Iman bukan sekadar ucapan lisan, tetapi harus diyakini dalam hati dan dibuktikan dengan amal perbuatan. Iman bisa bertambah dengan ketaatan dan berkurang dengan kemaksiatan.</div>
        </div>
        <div class="source-box">
          <strong>📚 Sumber Referensi:</strong>
          • Kitab <em>Syarh Al-Aqidah Al-Wasithiyyah</em> (Ibnu Utsaimin)<br>
          • <a href="https://rumaysho.com/tag/rukun-iman" target="_blank">rumaysho.com — Rukun Iman</a><br>
          • <a href="https://muslim.or.id/category/aqidah/rukun-iman" target="_blank">muslim.or.id — Akidah & Rukun Iman</a>
        </div>
      </div>`
  },

  {
    id: 2, title: 'Iman kepada Allah', duration: '12 mnt', type: 'materi',
    content: `
      <div class="lesson-header">
        <div class="lesson-tag">🌙 Bab 2 · Akidah Islam</div>
        <h1>Iman kepada Allah ﷻ</h1>
        <div class="lesson-meta"><span>⏱ 12 menit baca</span><span>📚 Akidah Islam</span></div>
      </div>
      <div class="lesson-body">
        <h2>Pengertian Iman kepada Allah</h2>
        <p>Iman kepada Allah adalah <strong>rukun iman yang pertama dan paling utama</strong>. Ia mencakup empat hal pokok:</p>
        <ol>
          <li>Mengimani <strong>wujud (keberadaan) Allah</strong></li>
          <li>Mengimani <strong>Rububiyyah Allah</strong> — bahwa Allah adalah satu-satunya Pencipta, Pemilik, dan Pengatur alam semesta</li>
          <li>Mengimani <strong>Uluhiyyah Allah</strong> — bahwa Allah adalah satu-satunya yang berhak disembah</li>
          <li>Mengimani <strong>Asma' wa Shifat Allah</strong> — nama-nama dan sifat-sifat Allah yang sempurna</li>
        </ol>

        <h2>Tauhid: Inti Iman kepada Allah</h2>
        <p>Inti dari iman kepada Allah adalah <strong>tauhid</strong> — mengesakan Allah dalam segala aspek. Tauhid dibagi menjadi tiga:</p>
        <table class="table-materi">
          <thead><tr><th>Jenis Tauhid</th><th>Pengertian</th><th>Contoh</th></tr></thead>
          <tbody>
            <tr><td><strong>Tauhid Rububiyyah</strong></td><td>Mengesakan Allah sebagai Pencipta dan Pengatur</td><td>Meyakini hanya Allah yang menciptakan langit dan bumi</td></tr>
            <tr><td><strong>Tauhid Uluhiyyah</strong></td><td>Mengesakan Allah dalam ibadah</td><td>Hanya berdoa, bertawakkal, dan beribadah kepada Allah</td></tr>
            <tr><td><strong>Tauhid Asma' wa Shifat</strong></td><td>Mengesakan Allah dalam nama dan sifat-Nya</td><td>Menetapkan sifat Al-'Alim (Maha Mengetahui) hanya untuk Allah</td></tr>
          </tbody>
        </table>

        <h2>Dalil Wujud Allah</h2>
        <div class="callout hadith">
          <div class="callout-icon">📜</div>
          <div class="callout-body">
            <strong>QS. Ath-Thur: 35-36:</strong><br>
            "Apakah mereka diciptakan tanpa sesuatu pun ataukah mereka yang menciptakan (diri mereka sendiri)? Ataukah mereka telah menciptakan langit dan bumi? Sebenarnya mereka tidak meyakini (apa yang mereka katakan)."
          </div>
        </div>
        <p>Ayat ini menunjukkan bahwa akal sehat pun mengakui adanya Pencipta. Tidak mungkin alam semesta ada dengan sendirinya tanpa ada yang menciptakan.</p>

        <h2>Asmaul Husna — 99 Nama Allah</h2>
        <p>Allah memiliki nama-nama yang indah (Asmaul Husna) yang menunjukkan kesempurnaan sifat-Nya:</p>
        <div class="callout hadith">
          <div class="callout-icon">📜</div>
          <div class="callout-body">
            <strong>Hadits:</strong> "Sesungguhnya Allah memiliki 99 nama — seratus kurang satu — barangsiapa yang menghafalnya, ia akan masuk surga."
            <br><em>(HR. Bukhari no. 2736 & Muslim no. 2677)</em>
          </div>
        </div>
        <p>Di antara Asmaul Husna yang paling agung: <strong>Allah, Ar-Rahman, Ar-Rahim, Al-Malik, Al-Quddus, As-Salam, Al-Mu'min, Al-'Aziz, Al-Jabbar, Al-Mutakabbir</strong>, dan lainnya.</p>

        <h2>Syirik: Lawan dari Tauhid</h2>
        <div class="callout warning">
          <div class="callout-icon">⚠️</div>
          <div class="callout-body">
            <strong>Syirik adalah dosa terbesar!</strong><br>
            "Sesungguhnya Allah tidak akan mengampuni dosa syirik, dan Dia mengampuni segala dosa yang selain dari (syirik) itu, bagi siapa yang dikehendaki-Nya."
            <br><em>(QS. An-Nisa: 48)</em>
          </div>
        </div>
        <p>Syirik adalah menyekutukan Allah dengan sesuatu yang lain dalam hal rububiyyah, uluhiyyah, atau asma' wa shifat-Nya.</p>

        <div class="source-box">
          <strong>📚 Sumber Referensi:</strong>
          • Kitab <em>Al-Qaulul Mufid 'ala Kitabit Tauhid</em> (Ibnu Utsaimin)<br>
          • <a href="https://rumaysho.com/tag/tauhid" target="_blank">rumaysho.com — Tauhid</a><br>
          • <a href="https://muslim.or.id/category/aqidah/tauhid" target="_blank">muslim.or.id — Tauhid</a>
        </div>
      </div>`
  },
  {
    id: 3, title: 'Iman kepada Malaikat', duration: '10 mnt', type: 'materi',
    content: `
      <div class="lesson-header">
        <div class="lesson-tag">🌙 Bab 3 · Akidah Islam</div>
        <h1>Iman kepada Malaikat Allah</h1>
        <div class="lesson-meta"><span>⏱ 10 menit baca</span><span>📚 Akidah Islam</span></div>
      </div>
      <div class="lesson-body">
        <h2>Pengertian Iman kepada Malaikat</h2>
        <p>Iman kepada malaikat adalah <strong>rukun iman yang kedua</strong>. Kita wajib meyakini bahwa malaikat adalah makhluk Allah yang diciptakan dari cahaya, selalu taat kepada Allah, dan tidak pernah bermaksiat.</p>
        <div class="callout hadith">
          <div class="callout-icon">📜</div>
          <div class="callout-body">
            <strong>Hadits:</strong> "Malaikat diciptakan dari cahaya, jin diciptakan dari api yang menyala-nyala, dan Adam diciptakan dari apa yang telah diceritakan kepada kalian (tanah)."
            <br><em>(HR. Muslim no. 2996)</em>
          </div>
        </div>

        <h2>Sifat-sifat Malaikat</h2>
        <ul>
          <li>Diciptakan dari <strong>cahaya (nur)</strong></li>
          <li>Tidak memiliki jenis kelamin (bukan laki-laki, bukan perempuan)</li>
          <li>Tidak makan, tidak minum, tidak tidur</li>
          <li>Selalu <strong>taat kepada Allah</strong> dan tidak pernah bermaksiat</li>
          <li>Dapat berubah wujud atas izin Allah</li>
          <li>Jumlahnya sangat banyak, hanya Allah yang mengetahui jumlah pastinya</li>
        </ul>

        <h2>Malaikat yang Wajib Diketahui</h2>
        <table class="table-materi">
          <thead><tr><th>Nama Malaikat</th><th>Tugas</th></tr></thead>
          <tbody>
            <tr><td><strong>Jibril (Ruhul Amin)</strong></td><td>Menyampaikan wahyu kepada para nabi dan rasul</td></tr>
            <tr><td><strong>Mikail</strong></td><td>Mengurus rezeki dan hujan</td></tr>
            <tr><td><strong>Israfil</strong></td><td>Meniup sangkakala pada hari kiamat</td></tr>
            <tr><td><strong>Izrail (Malakul Maut)</strong></td><td>Mencabut nyawa</td></tr>
            <tr><td><strong>Munkar & Nakir</strong></td><td>Menanyai manusia di alam kubur</td></tr>
            <tr><td><strong>Raqib & Atid</strong></td><td>Mencatat amal baik dan amal buruk</td></tr>
            <tr><td><strong>Malik</strong></td><td>Penjaga neraka</td></tr>
            <tr><td><strong>Ridwan</strong></td><td>Penjaga surga</td></tr>
          </tbody>
        </table>

        <div class="callout hadith">
          <div class="callout-icon">📜</div>
          <div class="callout-body">
            <strong>QS. Al-Anbiya: 19-20:</strong><br>
            "Dan kepunyaan-Nyalah segala yang di langit dan di bumi. Dan malaikat-malaikat yang di sisi-Nya, mereka tiada mempunyai rasa angkuh untuk menyembah-Nya dan tiada (pula) merasa letih. Mereka selalu bertasbih malam dan siang tiada henti-hentinya."
          </div>
        </div>

        <div class="source-box">
          <strong>📚 Sumber Referensi:</strong>
          • Kitab <em>Syarh Ushul Ats-Tsalatsah</em> (Ibnu Utsaimin)<br>
          • <a href="https://rumaysho.com/tag/malaikat" target="_blank">rumaysho.com — Iman kepada Malaikat</a><br>
          • <a href="https://muslim.or.id/category/aqidah/iman-kepada-malaikat" target="_blank">muslim.or.id — Malaikat Allah</a>
        </div>
      </div>`
  },

  {
    id: 4, title: 'Iman kepada Kitab-kitab Allah', duration: '8 mnt', type: 'materi',
    content: `
      <div class="lesson-header">
        <div class="lesson-tag">🌙 Bab 4 · Akidah Islam</div>
        <h1>Iman kepada Kitab-kitab Allah</h1>
        <div class="lesson-meta"><span>⏱ 8 menit baca</span><span>📚 Akidah Islam</span></div>
      </div>
      <div class="lesson-body">
        <h2>Pengertian</h2>
        <p>Iman kepada kitab-kitab Allah adalah <strong>rukun iman ketiga</strong>. Kita wajib meyakini bahwa Allah telah menurunkan kitab-kitab suci kepada para nabi dan rasul-Nya sebagai petunjuk bagi umat manusia.</p>

        <h2>Kitab-kitab Allah yang Disebutkan dalam Al-Qur'an</h2>
        <table class="table-materi">
          <thead><tr><th>Kitab</th><th>Diturunkan kepada</th><th>Umat</th></tr></thead>
          <tbody>
            <tr><td><strong>Shuhuf</strong></td><td>Nabi Ibrahim & Musa 'alaihimassalam</td><td>Umat terdahulu</td></tr>
            <tr><td><strong>Taurat (Torah)</strong></td><td>Nabi Musa 'alaihissalam</td><td>Bani Israil</td></tr>
            <tr><td><strong>Zabur (Psalms)</strong></td><td>Nabi Dawud 'alaihissalam</td><td>Bani Israil</td></tr>
            <tr><td><strong>Injil (Gospel)</strong></td><td>Nabi Isa 'alaihissalam</td><td>Bani Israil</td></tr>
            <tr><td><strong>Al-Qur'an</strong></td><td>Nabi Muhammad ﷺ</td><td>Seluruh umat manusia hingga akhir zaman</td></tr>
          </tbody>
        </table>

        <h2>Keistimewaan Al-Qur'an</h2>
        <p>Al-Qur'an adalah kitab Allah yang terakhir dan paling sempurna. Ia memiliki keistimewaan yang tidak dimiliki kitab-kitab sebelumnya:</p>
        <ul>
          <li><strong>Terjaga keasliannya</strong> — Allah sendiri yang menjaganya dari perubahan dan pemalsuan</li>
          <li><strong>Berlaku untuk semua umat</strong> — bukan hanya untuk satu kaum atau bangsa</li>
          <li><strong>Berlaku hingga akhir zaman</strong> — tidak akan digantikan oleh kitab lain</li>
          <li><strong>Mukjizat terbesar</strong> — tidak ada yang mampu menandingi keindahan bahasanya</li>
        </ul>
        <div class="callout hadith">
          <div class="callout-icon">📜</div>
          <div class="callout-body">
            <strong>QS. Al-Hijr: 9:</strong><br>
            <em>"Sesungguhnya Kami-lah yang menurunkan Al-Qur'an, dan sesungguhnya Kami benar-benar memeliharanya."</em>
          </div>
        </div>

        <h2>Sikap Kita terhadap Kitab-kitab Sebelum Al-Qur'an</h2>
        <div class="callout info">
          <div class="callout-icon">ℹ️</div>
          <div class="callout-body">
            Kita mengimani bahwa Taurat, Zabur, dan Injil adalah kitab Allah yang asli. Namun kitab-kitab tersebut telah mengalami <strong>perubahan dan pemalsuan</strong> oleh tangan manusia. Oleh karena itu, kita tidak mengikuti hukum-hukumnya, melainkan hanya mengikuti Al-Qur'an dan Sunnah Nabi ﷺ.
          </div>
        </div>

        <div class="source-box">
          <strong>📚 Sumber Referensi:</strong>
          • Kitab <em>Al-Aqidah Al-Wasithiyyah</em> (Ibnu Taimiyyah)<br>
          • <a href="https://rumaysho.com/tag/kitab-allah" target="_blank">rumaysho.com — Iman kepada Kitab Allah</a><br>
          • <a href="https://muslim.or.id/category/aqidah/iman-kepada-kitab" target="_blank">muslim.or.id — Kitab-kitab Allah</a>
        </div>
      </div>`
  },
  {
    id: 5, title: 'Iman kepada Para Rasul', duration: '12 mnt', type: 'materi',
    content: `
      <div class="lesson-header">
        <div class="lesson-tag">🌙 Bab 5 · Akidah Islam</div>
        <h1>Iman kepada Para Rasul Allah</h1>
        <div class="lesson-meta"><span>⏱ 12 menit baca</span><span>📚 Akidah Islam</span></div>
      </div>
      <div class="lesson-body">
        <h2>Pengertian</h2>
        <p>Iman kepada para rasul adalah <strong>rukun iman keempat</strong>. Kita wajib meyakini bahwa Allah telah mengutus para nabi dan rasul kepada umat manusia untuk menyampaikan risalah (ajaran) Islam.</p>
        <div class="callout hadith">
          <div class="callout-icon">📜</div>
          <div class="callout-body">
            <strong>QS. An-Nahl: 36:</strong><br>
            "Dan sungguh, Kami telah mengutus seorang rasul untuk setiap umat (untuk menyerukan): 'Sembahlah Allah, dan jauhilah tagut.'"
          </div>
        </div>

        <h2>Perbedaan Nabi dan Rasul</h2>
        <table class="table-materi">
          <thead><tr><th></th><th>Nabi</th><th>Rasul</th></tr></thead>
          <tbody>
            <tr><td><strong>Wahyu</strong></td><td>Menerima wahyu</td><td>Menerima wahyu</td></tr>
            <tr><td><strong>Syariat</strong></td><td>Mengikuti syariat rasul sebelumnya</td><td>Membawa syariat baru</td></tr>
            <tr><td><strong>Jumlah</strong></td><td>Sangat banyak (ada yang menyebut 124.000)</td><td>313 atau 315 rasul</td></tr>
          </tbody>
        </table>

        <h2>25 Nabi dan Rasul yang Wajib Diketahui</h2>
        <p>Al-Qur'an menyebutkan 25 nama nabi dan rasul yang wajib kita imani:</p>
        <p style="line-height:2.2;font-size:14px">
          Adam, Idris, Nuh, Hud, Shalih, Ibrahim, Luth, Ismail, Ishaq, Ya'qub, Yusuf, Ayyub, Syu'aib, Musa, Harun, Dzulkifli, Dawud, Sulaiman, Ilyas, Ilyasa', Yunus, Zakaria, Yahya, Isa, dan <strong>Muhammad ﷺ</strong>.
        </p>

        <h2>Sifat Wajib Para Rasul</h2>
        <ul>
          <li><strong>Shiddiq</strong> — selalu jujur dan benar</li>
          <li><strong>Amanah</strong> — dapat dipercaya</li>
          <li><strong>Tabligh</strong> — menyampaikan wahyu Allah</li>
          <li><strong>Fathanah</strong> — cerdas dan bijaksana</li>
        </ul>

        <h2>Nabi Muhammad ﷺ: Penutup Para Nabi</h2>
        <div class="callout success">
          <div class="callout-icon">✅</div>
          <div class="callout-body">
            <strong>QS. Al-Ahzab: 40:</strong><br>
            "Muhammad itu sekali-kali bukanlah bapak dari seorang laki-laki di antara kamu, tetapi dia adalah Rasulullah dan <strong>penutup para nabi (Khatamun Nabiyyin)</strong>. Dan adalah Allah Maha Mengetahui segala sesuatu."
          </div>
        </div>
        <p>Nabi Muhammad ﷺ adalah nabi dan rasul terakhir. Tidak ada nabi setelah beliau. Siapa yang mengaku sebagai nabi setelah beliau adalah pendusta.</p>

        <div class="source-box">
          <strong>📚 Sumber Referensi:</strong>
          • Kitab <em>Syarh Ushul Ats-Tsalatsah</em> (Ibnu Utsaimin)<br>
          • <a href="https://rumaysho.com/tag/nabi-rasul" target="_blank">rumaysho.com — Iman kepada Rasul</a><br>
          • <a href="https://muslim.or.id/category/aqidah/iman-kepada-rasul" target="_blank">muslim.or.id — Para Rasul Allah</a>
        </div>
      </div>`
  },
  {
    id: 6, title: 'Iman kepada Hari Akhir', duration: '12 mnt', type: 'materi',
    content: `
      <div class="lesson-header">
        <div class="lesson-tag">🌙 Bab 6 · Akidah Islam</div>
        <h1>Iman kepada Hari Akhir</h1>
        <div class="lesson-meta"><span>⏱ 12 menit baca</span><span>📚 Akidah Islam</span></div>
      </div>
      <div class="lesson-body">
        <h2>Pengertian</h2>
        <p>Iman kepada hari akhir adalah <strong>rukun iman kelima</strong>. Kita wajib meyakini bahwa kehidupan dunia ini akan berakhir, dan akan ada kehidupan setelah mati yang kekal abadi.</p>

        <h2>Tahapan Kehidupan Setelah Mati</h2>
        <ol>
          <li>
            <strong>Alam Barzakh (Alam Kubur)</strong><br>
            Kehidupan antara kematian dan hari kiamat. Di sini manusia akan ditanya oleh Malaikat Munkar dan Nakir tentang Rabb, agama, dan nabinya.
          </li>
          <li>
            <strong>Yaumul Ba'ts (Hari Kebangkitan)</strong><br>
            Semua manusia dibangkitkan dari kubur setelah Malaikat Israfil meniup sangkakala.
          </li>
          <li>
            <strong>Yaumul Hasyr (Hari Pengumpulan)</strong><br>
            Semua manusia dikumpulkan di Padang Mahsyar untuk dihisab.
          </li>
          <li>
            <strong>Hisab dan Mizan</strong><br>
            Perhitungan dan penimbangan seluruh amal perbuatan manusia.
          </li>
          <li>
            <strong>Shirath (Jembatan)</strong><br>
            Jembatan yang membentang di atas neraka. Orang beriman akan melewatinya menuju surga.
          </li>
          <li>
            <strong>Surga dan Neraka</strong><br>
            Tempat tinggal abadi — surga bagi orang beriman dan beramal shalih, neraka bagi orang kafir dan pelaku dosa besar yang tidak bertaubat.
          </li>
        </ol>

        <div class="callout hadith">
          <div class="callout-icon">📜</div>
          <div class="callout-body">
            <strong>QS. Az-Zalzalah: 7-8:</strong><br>
            "Maka barangsiapa mengerjakan kebaikan seberat zarrah, niscaya dia akan melihat (balasan)nya. Dan barangsiapa mengerjakan kejahatan seberat zarrah, niscaya dia akan melihat (balasan)nya."
          </div>
        </div>

        <h2>Tanda-tanda Hari Kiamat</h2>
        <p><strong>Tanda-tanda kecil (Asyratus Sa'ah Ash-Shughra):</strong></p>
        <ul>
          <li>Diutusnya Nabi Muhammad ﷺ (sudah terjadi)</li>
          <li>Merebaknya perzinaan, riba, dan kemaksiatan</li>
          <li>Ilmu agama dicabut, kebodohan merajalela</li>
          <li>Banyak fitnah dan peperangan</li>
        </ul>
        <p><strong>Tanda-tanda besar (Asyratus Sa'ah Al-Kubra):</strong></p>
        <ul>
          <li>Keluarnya Dajjal</li>
          <li>Turunnya Nabi Isa 'alaihissalam</li>
          <li>Keluarnya Ya'juj dan Ma'juj</li>
          <li>Terbitnya matahari dari barat</li>
          <li>Keluarnya Dabbah (binatang melata)</li>
        </ul>

        <div class="source-box">
          <strong>📚 Sumber Referensi:</strong>
          • Kitab <em>Al-Yaumul Akhir</em> (Dr. Umar Sulaiman Al-Asyqar)<br>
          • <a href="https://rumaysho.com/tag/hari-kiamat" target="_blank">rumaysho.com — Hari Akhir</a><br>
          • <a href="https://muslim.or.id/category/aqidah/iman-kepada-hari-akhir" target="_blank">muslim.or.id — Iman kepada Hari Akhir</a>
        </div>
      </div>`
  },
  {
    id: 7, title: 'Iman kepada Qadha & Qadar', duration: '12 mnt', type: 'materi',
    content: `
      <div class="lesson-header">
        <div class="lesson-tag">🌙 Bab 7 · Akidah Islam</div>
        <h1>Iman kepada Qadha dan Qadar</h1>
        <div class="lesson-meta"><span>⏱ 12 menit baca</span><span>📚 Akidah Islam</span></div>
      </div>
      <div class="lesson-body">
        <h2>Pengertian</h2>
        <p>Iman kepada qadha dan qadar adalah <strong>rukun iman keenam</strong>. Kita wajib meyakini bahwa segala sesuatu yang terjadi di alam semesta ini telah ditetapkan oleh Allah ﷻ sejak zaman azali.</p>
        <ul>
          <li><strong>Qadar</strong> — ketetapan Allah yang telah ditentukan sejak zaman azali</li>
          <li><strong>Qadha</strong> — pelaksanaan/realisasi dari ketetapan tersebut</li>
        </ul>

        <h2>Empat Tingkatan Iman kepada Takdir</h2>
        <ol>
          <li>
            <strong>Al-'Ilm (Pengetahuan Allah)</strong><br>
            Mengimani bahwa Allah mengetahui segala sesuatu yang telah, sedang, dan akan terjadi.
          </li>
          <li>
            <strong>Al-Kitabah (Pencatatan)</strong><br>
            Mengimani bahwa Allah telah mencatat semua ketetapan di Lauhul Mahfuzh 50.000 tahun sebelum penciptaan langit dan bumi.
            <div class="callout hadith" style="margin-top:10px">
              <div class="callout-icon">📜</div>
              <div class="callout-body">"Allah telah mencatat takdir semua makhluk 50.000 tahun sebelum menciptakan langit dan bumi." <em>(HR. Muslim no. 2653)</em></div>
            </div>
          </li>
          <li>
            <strong>Al-Masyi'ah (Kehendak Allah)</strong><br>
            Mengimani bahwa segala sesuatu terjadi atas kehendak Allah. Apa yang Allah kehendaki pasti terjadi, dan apa yang tidak Allah kehendaki tidak akan terjadi.
          </li>
          <li>
            <strong>Al-Khalq (Penciptaan)</strong><br>
            Mengimani bahwa Allah adalah pencipta segala sesuatu, termasuk perbuatan manusia.
          </li>
        </ol>

        <h2>Takdir Tidak Menghilangkan Ikhtiar</h2>
        <div class="callout info">
          <div class="callout-icon">ℹ️</div>
          <div class="callout-body">
            <strong>Penting:</strong> Iman kepada takdir tidak berarti kita pasif dan tidak berusaha. Manusia tetap memiliki kehendak dan kemampuan untuk berikhtiar. Allah memerintahkan kita untuk berusaha, berdoa, dan bertawakkal. Takdir baru diketahui setelah terjadi, bukan sebelumnya.
          </div>
        </div>
        <div class="callout hadith">
          <div class="callout-icon">📜</div>
          <div class="callout-body">
            <strong>Hadits:</strong> "Bersemangatlah dalam hal yang bermanfaat bagimu, mintalah pertolongan kepada Allah, dan janganlah lemah. Jika sesuatu menimpamu, janganlah berkata: 'Seandainya aku melakukan ini, niscaya akan begini dan begitu.' Tetapi katakanlah: 'Qodarallah wa maa syaa'a fa'al' (Allah telah menetapkan dan apa yang Dia kehendaki pasti Dia lakukan)."
            <br><em>(HR. Muslim no. 2664)</em>
          </div>
        </div>

        <h2>Hikmah Beriman kepada Takdir</h2>
        <ul>
          <li>Menumbuhkan <strong>ketenangan jiwa</strong> — tidak terlalu sedih atas musibah</li>
          <li>Menghilangkan <strong>kesombongan</strong> — keberhasilan adalah karunia Allah</li>
          <li>Mendorong <strong>semangat berusaha</strong> — karena usaha adalah bagian dari takdir</li>
          <li>Menguatkan <strong>tawakkal kepada Allah</strong></li>
        </ul>

        <div class="source-box">
          <strong>📚 Sumber Referensi:</strong>
          • Kitab <em>Syarh Al-Aqidah Al-Wasithiyyah</em> (Ibnu Utsaimin)<br>
          • <a href="https://rumaysho.com/tag/takdir" target="_blank">rumaysho.com — Qadha dan Qadar</a><br>
          • <a href="https://muslim.or.id/category/aqidah/iman-kepada-takdir" target="_blank">muslim.or.id — Iman kepada Takdir</a>
        </div>
      </div>`
  },

  // QUIZ AKIDAH
  {
    id: 8, title: 'Kuis: Rukun Iman', duration: '15 mnt', type: 'quiz',
    questions: [
      {
        q: 'Berapa jumlah Rukun Iman dalam Islam?',
        options: ['4', '5', '6', '7'],
        answer: 2,
        explanation: 'Rukun Iman ada 6: (1) Iman kepada Allah, (2) Malaikat, (3) Kitab-kitab Allah, (4) Para Rasul, (5) Hari Akhir, (6) Qadha dan Qadar. Dalilnya adalah Hadits Jibril (HR. Muslim no. 8).'
      },
      {
        q: 'Hadits yang menjelaskan definisi lengkap Rukun Iman dikenal sebagai...',
        options: ['Hadits Arbain', 'Hadits Jibril', 'Hadits Qudsi', 'Hadits Muttafaq Alaih'],
        answer: 1,
        explanation: 'Hadits Jibril (HR. Muslim no. 8) adalah hadits di mana Malaikat Jibril datang dalam wujud manusia dan bertanya kepada Nabi ﷺ tentang Islam, Iman, dan Ihsan. Hadits ini menjelaskan definisi lengkap Rukun Iman.'
      },
      {
        q: 'Tauhid yang berkaitan dengan mengesakan Allah dalam ibadah disebut...',
        options: ['Tauhid Rububiyyah', 'Tauhid Uluhiyyah', 'Tauhid Asma wa Shifat', 'Tauhid Mulkiyyah'],
        answer: 1,
        explanation: 'Tauhid Uluhiyyah adalah mengesakan Allah dalam ibadah — hanya beribadah, berdoa, bertawakkal, dan memohon pertolongan kepada Allah semata. Ini adalah inti dari kalimat "Laa ilaaha illallah".'
      },
      {
        q: 'Malaikat yang bertugas menyampaikan wahyu kepada para nabi adalah...',
        options: ['Mikail', 'Israfil', 'Jibril', 'Izrail'],
        answer: 2,
        explanation: 'Malaikat Jibril (disebut juga Ruhul Amin atau Ruhul Qudus) bertugas menyampaikan wahyu Allah kepada para nabi dan rasul. Beliau adalah malaikat yang menyampaikan Al-Qur\'an kepada Nabi Muhammad ﷺ.'
      },
      {
        q: 'Kitab suci yang diturunkan kepada Nabi Dawud \'alaihissalam adalah...',
        options: ['Taurat', 'Injil', 'Zabur', 'Shuhuf'],
        answer: 2,
        explanation: 'Zabur (Psalms) diturunkan kepada Nabi Dawud \'alaihissalam. Taurat diturunkan kepada Nabi Musa, Injil kepada Nabi Isa, dan Shuhuf kepada Nabi Ibrahim dan Musa.'
      },
      {
        q: 'Berapa jumlah nabi dan rasul yang disebutkan namanya dalam Al-Qur\'an?',
        options: ['20 nabi/rasul', '25 nabi/rasul', '30 nabi/rasul', '40 nabi/rasul'],
        answer: 1,
        explanation: 'Al-Qur\'an menyebutkan 25 nama nabi dan rasul yang wajib kita imani, mulai dari Nabi Adam hingga Nabi Muhammad ﷺ sebagai penutup para nabi.'
      },
      {
        q: 'Sifat wajib para rasul yang berarti "selalu menyampaikan wahyu Allah" adalah...',
        options: ['Shiddiq', 'Amanah', 'Tabligh', 'Fathanah'],
        answer: 2,
        explanation: 'Tabligh artinya menyampaikan — para rasul wajib menyampaikan seluruh wahyu yang diterima dari Allah kepada umatnya, tidak boleh menyembunyikan satu pun. Sifat wajib rasul ada 4: Shiddiq, Amanah, Tabligh, Fathanah.'
      },
      {
        q: 'Berapa tahun sebelum penciptaan langit dan bumi Allah mencatat takdir semua makhluk di Lauhul Mahfuzh?',
        options: ['1.000 tahun', '10.000 tahun', '50.000 tahun', '100.000 tahun'],
        answer: 2,
        explanation: 'Berdasarkan HR. Muslim no. 2653: "Allah telah mencatat takdir semua makhluk 50.000 tahun sebelum menciptakan langit dan bumi, sementara Arsy-Nya berada di atas air."'
      },
      {
        q: 'Dosa apakah yang tidak akan diampuni Allah kecuali dengan taubat sebelum meninggal?',
        options: ['Dosa zina', 'Dosa syirik', 'Dosa mencuri', 'Dosa membunuh'],
        answer: 1,
        explanation: 'Syirik adalah dosa terbesar yang tidak akan diampuni Allah jika pelakunya meninggal dalam keadaan musyrik tanpa bertaubat. (QS. An-Nisa: 48). Dosa-dosa lain selain syirik masih dalam kehendak Allah untuk diampuni atau tidak.'
      },
      {
        q: 'Manakah yang BUKAN termasuk tanda-tanda kiamat besar (Asyratus Sa\'ah Al-Kubra)?',
        options: ['Keluarnya Dajjal', 'Turunnya Nabi Isa', 'Terbitnya matahari dari barat', 'Merebaknya perzinaan'],
        answer: 3,
        explanation: 'Merebaknya perzinaan adalah tanda kiamat KECIL (Asyratus Sa\'ah Ash-Shughra). Tanda kiamat besar antara lain: keluarnya Dajjal, turunnya Nabi Isa, keluarnya Ya\'juj Ma\'juj, terbitnya matahari dari barat, dan keluarnya Dabbah.'
      }
    ]
  }
];

// ============================================================
// ENGINE (sama dengan thaharah)
// ============================================================
let currentLesson = 0;
let progress = JSON.parse(localStorage.getItem('akidah_progress') || '[]');

function saveProgress(id) {
  if (!progress.includes(id)) { progress.push(id); localStorage.setItem('akidah_progress', JSON.stringify(progress)); }
  const total = LESSONS.length;
  const done = LESSONS.filter(l => progress.includes(l.id)).length;
  const pct = Math.round((done / total) * 100);
  localStorage.setItem('progress_akidah', pct);
  if (typeof saveProgressToCloud !== 'undefined') { saveProgressToCloud('akidah', pct); }
  if (pct >= 100 && !localStorage.getItem('completed_date_akidah')) {
    localStorage.setItem('completed_date_akidah', new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }));
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
    const isFirst = index === 0;
    main.innerHTML = `${lesson.content}
      <div class="lesson-nav">
        <button class="btn-nav" onclick="goToLesson(${index - 1})" ${isFirst ? 'disabled' : ''}>← Sebelumnya</button>
        <button class="btn-nav primary" onclick="markDoneAndNext(${index})">
          ${index === LESSONS.length - 1 ? 'Selesai' : 'Tandai Selesai & Lanjut →'}
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
        <h1>Kuis: Rukun Iman</h1>
        <p>Uji pemahaman Anda tentang Akidah Islam</p>
        <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
        <div class="quiz-progress-label">Soal ${current + 1} dari ${questions.length}</div>
      </div>
      <div class="question-card">
        <div class="question-num">Pertanyaan ${current + 1}</div>
        <div class="question-text">${q.q}</div>
        <div class="options-list" id="optionsList">
          ${q.options.map((opt, i) => `
            <button class="option-btn" onclick="selectOption(${i})" id="opt${i}">
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
  const msg = pct >= 80 ? 'Luar biasa! Anda menguasai materi Akidah dengan baik.'
            : pct >= 70 ? 'Bagus! Anda lulus dan berhak mendapatkan sertifikat.'
            : 'Nilai Anda belum mencapai 70. Pelajari ulang dan coba lagi untuk mendapatkan sertifikat.';
  if (lulus) {
    saveProgress(LESSONS[currentLesson].id);
    localStorage.setItem('score_akidah', pct);
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
(async () => {
  await initLayout('materi');
  renderSidebar();
  renderLesson(0);
})();

