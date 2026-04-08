// ============================================================
// DATA MATERI & QUIZ - AKHLAK MULIA
// Sumber: Kitab Ihya Ulumuddin (Al-Ghazali),
//         Kitab Riyadhus Shalihin (An-Nawawi),
//         rumaysho.com, muslim.or.id
// ============================================================

const LESSONS = [
  {
    id: 1, title: 'Pengertian Akhlak', duration: '10 mnt', type: 'materi',
    content: `
      <div class="lesson-header">
        <div class="lesson-tag">✨ Bab 1 · Akhlak Mulia</div>
        <h1>Pengertian dan Kedudukan Akhlak dalam Islam</h1>
        <div class="lesson-meta"><span>⏱ 10 menit baca</span><span>📚 Akhlak Islam</span></div>
      </div>
      <div class="lesson-body">
        <h2>Apa itu Akhlak?</h2>
        <p><strong>Akhlak</strong> (الأخلاق) secara bahasa adalah bentuk jamak dari <em>khuluq</em> yang berarti tabiat, watak, atau perangai. Secara istilah, akhlak adalah <strong>sifat yang tertanam kuat dalam jiwa seseorang</strong> yang mendorongnya melakukan perbuatan secara spontan tanpa perlu berpikir panjang.</p>
        <p>Akhlak yang baik disebut <strong>akhlak mahmudah (terpuji)</strong>, sedangkan akhlak yang buruk disebut <strong>akhlak madzmumah (tercela)</strong>.</p>

        <div class="callout hadith">
          <div class="callout-icon">📜</div>
          <div class="callout-body">
            <strong>Hadits — Tujuan Diutusnya Nabi ﷺ:</strong><br>
            "Sesungguhnya aku diutus hanyalah untuk menyempurnakan akhlak yang mulia."
            <br><em>(HR. Ahmad no. 8952, Al-Bukhari dalam Al-Adabul Mufrad — dishahihkan Al-Albani)</em>
          </div>
        </div>

        <h2>Kedudukan Akhlak dalam Islam</h2>
        <p>Akhlak menempati posisi yang sangat penting dalam Islam. Ia adalah <strong>buah dari iman dan ibadah</strong> yang benar. Seseorang yang shalatnya baik, puasanya rajin, namun akhlaknya buruk, maka ibadahnya belum sempurna.</p>
        <div class="callout hadith">
          <div class="callout-icon">📜</div>
          <div class="callout-body">
            <strong>Hadits — Akhlak dan Timbangan Amal:</strong><br>
            "Tidak ada sesuatu yang lebih berat dalam timbangan seorang mukmin pada hari kiamat daripada akhlak yang mulia. Sesungguhnya Allah membenci orang yang keji dan berkata kotor."
            <br><em>(HR. At-Tirmidzi no. 2002 — dishahihkan Al-Albani)</em>
          </div>
        </div>

        <h2>Hubungan Akhlak dengan Iman</h2>
        <p>Akhlak yang baik adalah cerminan iman yang kuat. Semakin kuat iman seseorang, semakin baik pula akhlaknya. Rasulullah ﷺ bersabda:</p>
        <div class="callout hadith">
          <div class="callout-icon">📜</div>
          <div class="callout-body">
            "Orang mukmin yang paling sempurna imannya adalah yang paling baik akhlaknya."
            <br><em>(HR. At-Tirmidzi no. 1162 — dishahihkan Al-Albani)</em>
          </div>
        </div>

        <h2>Sumber Akhlak Islam</h2>
        <ul>
          <li><strong>Al-Qur'an</strong> — pedoman utama akhlak Islam</li>
          <li><strong>Sunnah Nabi ﷺ</strong> — teladan akhlak terbaik sepanjang masa</li>
          <li><strong>Sirah Nabawiyyah</strong> — kisah hidup Nabi sebagai contoh nyata</li>
        </ul>
        <div class="callout success">
          <div class="callout-icon">✅</div>
          <div class="callout-body">
            <strong>Akhlak Nabi ﷺ:</strong> Aisyah radhiyallahu 'anha ditanya tentang akhlak Nabi ﷺ, beliau menjawab: <em>"Akhlak beliau adalah Al-Qur'an."</em> (HR. Muslim no. 746)
          </div>
        </div>

        <div class="source-box">
          <strong>📚 Sumber Referensi:</strong>
          • Kitab <em>Ihya Ulumuddin</em> (Imam Al-Ghazali), Juz III<br>
          • <a href="https://rumaysho.com/tag/akhlak" target="_blank">rumaysho.com — Akhlak Mulia</a><br>
          • <a href="https://muslim.or.id/category/akhlak-dan-nasehat" target="_blank">muslim.or.id — Akhlak dan Nasihat</a>
        </div>
      </div>`
  },
  {
    id: 2, title: 'Jujur (Ash-Shidq)', duration: '10 mnt', type: 'materi',
    content: `
      <div class="lesson-header">
        <div class="lesson-tag">✨ Bab 2 · Akhlak Terpuji</div>
        <h1>Jujur (Ash-Shidq) — Akhlak Mulia Pertama</h1>
        <div class="lesson-meta"><span>⏱ 10 menit baca</span><span>📚 Akhlak Islam</span></div>
      </div>
      <div class="lesson-body">
        <h2>Pengertian Jujur</h2>
        <p><strong>Jujur (Ash-Shidq)</strong> adalah kesesuaian antara ucapan dengan kenyataan, dan kesesuaian antara yang tersembunyi (niat) dengan yang tampak (perbuatan). Jujur adalah salah satu akhlak terpuji yang paling utama dalam Islam.</p>

        <h2>Keutamaan Jujur</h2>
        <div class="callout hadith">
          <div class="callout-icon">📜</div>
          <div class="callout-body">
            <strong>Hadits:</strong> "Hendaklah kalian selalu jujur, karena kejujuran membawa kepada kebaikan, dan kebaikan membawa ke surga. Seseorang yang selalu jujur dan berusaha untuk jujur akan dicatat di sisi Allah sebagai orang yang jujur (shiddiq). Dan jauhilah dusta, karena dusta membawa kepada kejahatan, dan kejahatan membawa ke neraka..."
            <br><em>(HR. Bukhari no. 6094 & Muslim no. 2607)</em>
          </div>
        </div>

        <h2>Macam-macam Jujur</h2>
        <table class="table-materi">
          <thead><tr><th>Jenis</th><th>Pengertian</th></tr></thead>
          <tbody>
            <tr><td><strong>Jujur dalam ucapan</strong></td><td>Berkata sesuai kenyataan, tidak berbohong</td></tr>
            <tr><td><strong>Jujur dalam niat</strong></td><td>Beramal ikhlas karena Allah, bukan riya'</td></tr>
            <tr><td><strong>Jujur dalam tekad</strong></td><td>Menepati janji dan komitmen</td></tr>
            <tr><td><strong>Jujur dalam perbuatan</strong></td><td>Amal sesuai dengan apa yang diucapkan</td></tr>
            <tr><td><strong>Jujur dalam agama</strong></td><td>Menjalankan agama dengan sungguh-sungguh</td></tr>
          </tbody>
        </table>

        <h2>Dampak Jujur dalam Kehidupan</h2>
        <ul>
          <li>Mendapat kepercayaan dari orang lain</li>
          <li>Hati menjadi tenang dan damai</li>
          <li>Mendapat ridha Allah ﷻ</li>
          <li>Menjadi teladan bagi orang sekitar</li>
          <li>Membawa keberkahan dalam rezeki dan kehidupan</li>
        </ul>

        <h2>Lawan Jujur: Dusta (Al-Kidzb)</h2>
        <div class="callout warning">
          <div class="callout-icon">⚠️</div>
          <div class="callout-body">
            <strong>Dusta adalah dosa besar!</strong> Rasulullah ﷺ bersabda: "Tanda-tanda orang munafik ada tiga: apabila berbicara ia berdusta, apabila berjanji ia mengingkari, dan apabila diberi amanah ia berkhianat."
            <br><em>(HR. Bukhari no. 33 & Muslim no. 59)</em>
          </div>
        </div>

        <div class="source-box">
          <strong>📚 Sumber Referensi:</strong>
          • Kitab <em>Riyadhus Shalihin</em> (Imam An-Nawawi), Bab Ash-Shidq<br>
          • <a href="https://rumaysho.com/tag/jujur" target="_blank">rumaysho.com — Keutamaan Jujur</a><br>
          • <a href="https://muslim.or.id/category/akhlak-dan-nasehat/jujur" target="_blank">muslim.or.id — Jujur dalam Islam</a>
        </div>
      </div>`
  },

  {
    id: 3, title: 'Sabar (Ash-Shabr)', duration: '10 mnt', type: 'materi',
    content: `
      <div class="lesson-header">
        <div class="lesson-tag">✨ Bab 3 · Akhlak Terpuji</div>
        <h1>Sabar (Ash-Shabr)</h1>
        <div class="lesson-meta"><span>⏱ 10 menit baca</span><span>📚 Akhlak Islam</span></div>
      </div>
      <div class="lesson-body">
        <h2>Pengertian Sabar</h2>
        <p><strong>Sabar (Ash-Shabr)</strong> adalah menahan diri dari keluh kesah dan rasa tidak puas terhadap ketentuan Allah, menahan lisan dari mengadu selain kepada Allah, dan menahan anggota badan dari perbuatan yang tidak diridhai Allah.</p>
        <p>Imam Ahmad rahimahullah berkata: <em>"Allah menyebut sabar dalam Al-Qur'an lebih dari 90 tempat."</em></p>

        <h2>Tiga Jenis Sabar</h2>
        <table class="table-materi">
          <thead><tr><th>Jenis Sabar</th><th>Pengertian</th><th>Contoh</th></tr></thead>
          <tbody>
            <tr><td><strong>Sabar dalam ketaatan</strong></td><td>Bersabar menjalankan perintah Allah</td><td>Sabar dalam shalat 5 waktu, puasa Ramadan</td></tr>
            <tr><td><strong>Sabar dari kemaksiatan</strong></td><td>Menahan diri dari larangan Allah</td><td>Menahan diri dari ghibah, zina, riba</td></tr>
            <tr><td><strong>Sabar atas musibah</strong></td><td>Menerima takdir Allah dengan lapang dada</td><td>Sabar saat sakit, kehilangan, atau kesulitan</td></tr>
          </tbody>
        </table>

        <h2>Keutamaan Sabar</h2>
        <div class="callout hadith">
          <div class="callout-icon">📜</div>
          <div class="callout-body">
            <strong>QS. Az-Zumar: 10:</strong><br>
            "Sesungguhnya hanya orang-orang yang bersabarlah yang dicukupkan pahala mereka tanpa batas."
          </div>
        </div>
        <div class="callout hadith">
          <div class="callout-icon">📜</div>
          <div class="callout-body">
            <strong>Hadits:</strong> "Sungguh menakjubkan urusan seorang mukmin. Semua urusannya adalah baik baginya. Hal ini tidak terjadi kecuali pada seorang mukmin. Jika ia mendapat kesenangan, ia bersyukur, maka itu baik baginya. Jika ia ditimpa kesusahan, ia bersabar, maka itu pun baik baginya."
            <br><em>(HR. Muslim no. 2999)</em>
          </div>
        </div>

        <h2>Cara Melatih Kesabaran</h2>
        <ul>
          <li>Mengingat bahwa setiap musibah adalah ujian dari Allah</li>
          <li>Membaca <strong>istirja'</strong>: <em>Innaa lillaahi wa innaa ilaihi raaji'uun</em></li>
          <li>Memperbanyak dzikir dan doa kepada Allah</li>
          <li>Mengingat pahala besar yang dijanjikan bagi orang sabar</li>
          <li>Membaca kisah para nabi yang bersabar dalam cobaan</li>
        </ul>

        <div class="callout success">
          <div class="callout-icon">✅</div>
          <div class="callout-body">
            <strong>Doa saat ditimpa musibah:</strong><br>
            <em>اللَّهُمَّ أْجُرْنِي فِي مُصِيبَتِي وَأَخْلِفْ لِي خَيْرًا مِنْهَا</em><br>
            "Ya Allah, berilah aku pahala dalam musibahku ini dan gantilah untukku dengan yang lebih baik darinya."
            <br><em>(HR. Muslim no. 918)</em>
          </div>
        </div>

        <div class="source-box">
          <strong>📚 Sumber Referensi:</strong>
          • Kitab <em>Uddatush Shabirin</em> (Ibnul Qayyim Al-Jauziyyah)<br>
          • <a href="https://rumaysho.com/tag/sabar" target="_blank">rumaysho.com — Keutamaan Sabar</a><br>
          • <a href="https://muslim.or.id/category/akhlak-dan-nasehat/sabar" target="_blank">muslim.or.id — Sabar dalam Islam</a>
        </div>
      </div>`
  },
  {
    id: 4, title: 'Syukur (Asy-Syukr)', duration: '8 mnt', type: 'materi',
    content: `
      <div class="lesson-header">
        <div class="lesson-tag">✨ Bab 4 · Akhlak Terpuji</div>
        <h1>Syukur (Asy-Syukr)</h1>
        <div class="lesson-meta"><span>⏱ 8 menit baca</span><span>📚 Akhlak Islam</span></div>
      </div>
      <div class="lesson-body">
        <h2>Pengertian Syukur</h2>
        <p><strong>Syukur</strong> adalah mengakui nikmat Allah dengan hati, mengucapkannya dengan lisan, dan menggunakannya dalam ketaatan kepada Allah. Syukur bukan sekadar mengucapkan "Alhamdulillah", tetapi mencakup tiga unsur:</p>
        <ul>
          <li><strong>Hati</strong> — mengakui dan meyakini bahwa semua nikmat berasal dari Allah</li>
          <li><strong>Lisan</strong> — mengucapkan pujian kepada Allah (Alhamdulillah)</li>
          <li><strong>Anggota badan</strong> — menggunakan nikmat untuk beribadah dan taat kepada Allah</li>
        </ul>

        <h2>Keutamaan Syukur</h2>
        <div class="callout hadith">
          <div class="callout-icon">📜</div>
          <div class="callout-body">
            <strong>QS. Ibrahim: 7:</strong><br>
            "Dan (ingatlah) ketika Tuhanmu memaklumkan: 'Sesungguhnya jika kamu bersyukur, niscaya Aku akan menambah (nikmat) kepadamu, tetapi jika kamu mengingkari (nikmat-Ku), maka pasti azab-Ku sangat berat.'"
          </div>
        </div>
        <div class="callout hadith">
          <div class="callout-icon">📜</div>
          <div class="callout-body">
            <strong>Hadits:</strong> "Barangsiapa tidak bersyukur kepada manusia, maka ia tidak bersyukur kepada Allah."
            <br><em>(HR. Abu Dawud no. 4811 — dishahihkan Al-Albani)</em>
          </div>
        </div>

        <h2>Cara Bersyukur kepada Allah</h2>
        <ol>
          <li>Memperbanyak dzikir dan tahmid (<em>Alhamdulillah</em>)</li>
          <li>Menggunakan nikmat untuk beribadah kepada Allah</li>
          <li>Tidak menggunakan nikmat untuk bermaksiat</li>
          <li>Membantu orang lain dengan nikmat yang dimiliki</li>
          <li>Mengingat nikmat Allah di saat susah maupun senang</li>
        </ol>

        <h2>Lawan Syukur: Kufur Nikmat</h2>
        <div class="callout warning">
          <div class="callout-icon">⚠️</div>
          <div class="callout-body">
            <strong>Kufur nikmat</strong> adalah tidak mengakui nikmat Allah atau menggunakannya untuk bermaksiat. Ini adalah dosa besar yang mendatangkan azab Allah. Allah berfirman: <em>"...dan sedikit sekali dari hamba-hamba-Ku yang bersyukur."</em> (QS. Saba': 13)
          </div>
        </div>

        <div class="source-box">
          <strong>📚 Sumber Referensi:</strong>
          • Kitab <em>Madarijus Salikin</em> (Ibnul Qayyim Al-Jauziyyah)<br>
          • <a href="https://rumaysho.com/tag/syukur" target="_blank">rumaysho.com — Keutamaan Syukur</a><br>
          • <a href="https://muslim.or.id/category/akhlak-dan-nasehat/syukur" target="_blank">muslim.or.id — Syukur kepada Allah</a>
        </div>
      </div>`
  },
  {
    id: 5, title: 'Tawadhu (Rendah Hati)', duration: '8 mnt', type: 'materi',
    content: `
      <div class="lesson-header">
        <div class="lesson-tag">✨ Bab 5 · Akhlak Terpuji</div>
        <h1>Tawadhu' (Rendah Hati)</h1>
        <div class="lesson-meta"><span>⏱ 8 menit baca</span><span>📚 Akhlak Islam</span></div>
      </div>
      <div class="lesson-body">
        <h2>Pengertian Tawadhu'</h2>
        <p><strong>Tawadhu'</strong> (التواضع) adalah rendah hati — tidak merasa lebih tinggi, lebih mulia, atau lebih baik dari orang lain. Tawadhu' bukan berarti merendahkan diri secara berlebihan, tetapi menempatkan diri pada posisi yang sewajarnya.</p>

        <h2>Keutamaan Tawadhu'</h2>
        <div class="callout hadith">
          <div class="callout-icon">📜</div>
          <div class="callout-body">
            <strong>Hadits:</strong> "Tidaklah seseorang bersikap tawadhu' karena Allah, melainkan Allah akan meninggikannya."
            <br><em>(HR. Muslim no. 2588)</em>
          </div>
        </div>
        <div class="callout hadith">
          <div class="callout-icon">📜</div>
          <div class="callout-body">
            <strong>Hadits:</strong> "Sesungguhnya Allah mewahyukan kepadaku agar kalian bersikap tawadhu', sehingga tidak ada seorang pun yang menyombongkan diri atas orang lain, dan tidak ada yang berbuat zalim kepada orang lain."
            <br><em>(HR. Muslim no. 2865)</em>
          </div>
        </div>

        <h2>Contoh Tawadhu' Nabi ﷺ</h2>
        <ul>
          <li>Mau makan bersama orang miskin dan budak</li>
          <li>Mengunjungi orang sakit meskipun rakyat biasa</li>
          <li>Menjahit sendiri pakaiannya yang robek</li>
          <li>Memerah susu kambingnya sendiri</li>
          <li>Tidak mau diperlakukan seperti raja</li>
        </ul>

        <h2>Lawan Tawadhu': Sombong (Kibr)</h2>
        <div class="callout warning">
          <div class="callout-icon">⚠️</div>
          <div class="callout-body">
            <strong>Sombong adalah dosa besar!</strong><br>
            "Tidak akan masuk surga orang yang di dalam hatinya terdapat kesombongan sebesar biji sawi."
            <br><em>(HR. Muslim no. 91)</em><br><br>
            Rasulullah ﷺ mendefinisikan sombong: <em>"Sombong adalah menolak kebenaran dan meremehkan manusia."</em> (HR. Muslim no. 91)
          </div>
        </div>

        <div class="source-box">
          <strong>📚 Sumber Referensi:</strong>
          • Kitab <em>Riyadhus Shalihin</em> (Imam An-Nawawi), Bab At-Tawadhu'<br>
          • <a href="https://rumaysho.com/tag/tawadhu" target="_blank">rumaysho.com — Tawadhu'</a><br>
          • <a href="https://muslim.or.id/category/akhlak-dan-nasehat/tawadhu" target="_blank">muslim.or.id — Rendah Hati dalam Islam</a>
        </div>
      </div>`
  },
  {
    id: 6, title: 'Akhlak Tercela', duration: '12 mnt', type: 'materi',
    content: `
      <div class="lesson-header">
        <div class="lesson-tag">✨ Bab 6 · Akhlak Tercela</div>
        <h1>Akhlak Tercela yang Harus Dihindari</h1>
        <div class="lesson-meta"><span>⏱ 12 menit baca</span><span>📚 Akhlak Islam</span></div>
      </div>
      <div class="lesson-body">
        <h2>Ghibah (Menggunjing)</h2>
        <p><strong>Ghibah</strong> adalah menyebut keburukan saudara Muslim di belakangnya, meskipun apa yang dikatakan itu benar.</p>
        <div class="callout hadith">
          <div class="callout-icon">📜</div>
          <div class="callout-body">
            <strong>QS. Al-Hujurat: 12:</strong><br>
            "...dan janganlah sebagian kamu menggunjing sebagian yang lain. Apakah ada di antara kamu yang suka memakan daging saudaranya yang sudah mati? Tentu kamu merasa jijik."
          </div>
        </div>
        <p>Ghibah dibolehkan hanya dalam kondisi tertentu: melaporkan kezaliman, meminta fatwa, memperingatkan dari bahaya seseorang, dan menyebut orang yang terang-terangan berbuat fasik.</p>

        <h2>Namimah (Adu Domba)</h2>
        <p><strong>Namimah</strong> adalah menyampaikan perkataan seseorang kepada orang lain dengan tujuan merusak hubungan di antara mereka.</p>
        <div class="callout warning">
          <div class="callout-icon">⚠️</div>
          <div class="callout-body">
            <strong>Hadits:</strong> "Tidak akan masuk surga orang yang suka mengadu domba (nammam)."
            <br><em>(HR. Bukhari no. 6056 & Muslim no. 105)</em>
          </div>
        </div>

        <h2>Hasad (Dengki/Iri Hati)</h2>
        <p><strong>Hasad</strong> adalah berharap agar nikmat yang ada pada orang lain hilang atau berpindah kepadanya.</p>
        <div class="callout warning">
          <div class="callout-icon">⚠️</div>
          <div class="callout-body">
            <strong>Hadits:</strong> "Jauhilah hasad, karena hasad memakan kebaikan-kebaikan sebagaimana api memakan kayu bakar."
            <br><em>(HR. Abu Dawud no. 4903 — dishahihkan Al-Albani)</em>
          </div>
        </div>
        <p>Hasad berbeda dengan <strong>ghibthah</strong> (ingin mendapat nikmat serupa tanpa berharap nikmat orang lain hilang) yang dibolehkan dalam dua hal: ilmu agama dan harta yang diinfakkan di jalan Allah.</p>

        <h2>Riya' (Pamer/Ingin Dilihat)</h2>
        <p><strong>Riya'</strong> adalah beramal bukan karena Allah, tetapi agar dilihat dan dipuji manusia. Riya' disebut syirik kecil.</p>
        <div class="callout warning">
          <div class="callout-icon">⚠️</div>
          <div class="callout-body">
            <strong>Hadits:</strong> "Sesungguhnya yang paling aku takutkan menimpa kalian adalah syirik kecil." Para sahabat bertanya: "Apa itu syirik kecil, wahai Rasulullah?" Beliau menjawab: <em>"Riya'."</em>
            <br><em>(HR. Ahmad no. 23630 — dishahihkan Al-Albani)</em>
          </div>
        </div>

        <h2>Ringkasan Akhlak Tercela</h2>
        <table class="table-materi">
          <thead><tr><th>Akhlak Tercela</th><th>Pengertian Singkat</th><th>Dalil</th></tr></thead>
          <tbody>
            <tr><td>Ghibah</td><td>Menyebut keburukan orang lain di belakangnya</td><td>QS. Al-Hujurat: 12</td></tr>
            <tr><td>Namimah</td><td>Mengadu domba antar sesama</td><td>HR. Bukhari no. 6056</td></tr>
            <tr><td>Hasad</td><td>Dengki atas nikmat orang lain</td><td>HR. Abu Dawud no. 4903</td></tr>
            <tr><td>Riya'</td><td>Beramal untuk dipuji manusia</td><td>HR. Ahmad no. 23630</td></tr>
            <tr><td>Kibr (Sombong)</td><td>Merasa lebih baik dari orang lain</td><td>HR. Muslim no. 91</td></tr>
            <tr><td>Bukhul (Kikir)</td><td>Menahan harta dari hak-hak yang wajib</td><td>QS. Ali Imran: 180</td></tr>
          </tbody>
        </table>

        <div class="source-box">
          <strong>📚 Sumber Referensi:</strong>
          • Kitab <em>Ihya Ulumuddin</em> (Imam Al-Ghazali), Juz III — Bab Muhlikat<br>
          • <a href="https://rumaysho.com/tag/ghibah" target="_blank">rumaysho.com — Ghibah dan Namimah</a><br>
          • <a href="https://muslim.or.id/category/akhlak-dan-nasehat/akhlak-tercela" target="_blank">muslim.or.id — Akhlak Tercela</a>
        </div>
      </div>`
  },
  {
    id: 7, title: 'Akhlak kepada Orang Tua', duration: '10 mnt', type: 'materi',
    content: `
      <div class="lesson-header">
        <div class="lesson-tag">✨ Bab 7 · Akhlak Sosial</div>
        <h1>Akhlak kepada Orang Tua (Birrul Walidain)</h1>
        <div class="lesson-meta"><span>⏱ 10 menit baca</span><span>📚 Akhlak Islam</span></div>
      </div>
      <div class="lesson-body">
        <h2>Pengertian Birrul Walidain</h2>
        <p><strong>Birrul Walidain</strong> (بر الوالدين) adalah berbakti kepada kedua orang tua — mencakup menghormati, menaati, merawat, mendoakan, dan menyenangkan hati mereka.</p>

        <h2>Kedudukan Birrul Walidain</h2>
        <div class="callout hadith">
          <div class="callout-icon">📜</div>
          <div class="callout-body">
            <strong>QS. Al-Isra': 23-24:</strong><br>
            "Dan Tuhanmu telah memerintahkan agar kamu jangan menyembah selain Dia dan hendaklah berbuat baik kepada ibu bapak. Jika salah seorang di antara keduanya atau kedua-duanya sampai berusia lanjut dalam pemeliharaanmu, maka sekali-kali janganlah engkau mengatakan kepada keduanya perkataan 'ah' dan janganlah engkau membentak keduanya..."
          </div>
        </div>
        <div class="callout hadith">
          <div class="callout-icon">📜</div>
          <div class="callout-body">
            <strong>Hadits:</strong> Seseorang bertanya kepada Nabi ﷺ: "Amalan apa yang paling dicintai Allah?" Beliau menjawab: <em>"Shalat pada waktunya." Ia bertanya lagi: "Kemudian apa?" Beliau menjawab: "Berbakti kepada kedua orang tua." Ia bertanya lagi: "Kemudian apa?" Beliau menjawab: "Jihad di jalan Allah."</em>
            <br><em>(HR. Bukhari no. 527 & Muslim no. 85)</em>
          </div>
        </div>

        <h2>Bentuk-bentuk Birrul Walidain</h2>
        <ul>
          <li>Menaati perintah orang tua selama tidak bermaksiat kepada Allah</li>
          <li>Berkata lemah lembut dan sopan kepada mereka</li>
          <li>Tidak membentak atau meninggikan suara di hadapan mereka</li>
          <li>Merawat mereka di hari tua dengan penuh kasih sayang</li>
          <li>Mendoakan mereka: <em>Rabbighfir lii wa liwaalidayya...</em></li>
          <li>Menyambung silaturahmi dengan sahabat-sahabat orang tua setelah mereka wafat</li>
        </ul>

        <h2>Durhaka kepada Orang Tua (Uququl Walidain)</h2>
        <div class="callout warning">
          <div class="callout-icon">⚠️</div>
          <div class="callout-body">
            <strong>Hadits:</strong> "Maukah aku beritahukan kepada kalian dosa-dosa besar yang paling besar?" (tiga kali). Para sahabat menjawab: "Tentu, wahai Rasulullah." Beliau bersabda: <em>"Menyekutukan Allah, durhaka kepada kedua orang tua..."</em>
            <br><em>(HR. Bukhari no. 5976 & Muslim no. 87)</em>
          </div>
        </div>

        <div class="source-box">
          <strong>📚 Sumber Referensi:</strong>
          • Kitab <em>Birrul Walidain</em> (Imam Al-Bukhari)<br>
          • <a href="https://rumaysho.com/tag/birrul-walidain" target="_blank">rumaysho.com — Birrul Walidain</a><br>
          • <a href="https://muslim.or.id/category/akhlak-dan-nasehat/birrul-walidain" target="_blank">muslim.or.id — Berbakti kepada Orang Tua</a>
        </div>
      </div>`
  },

  // QUIZ AKHLAK
  {
    id: 8, title: 'Kuis: Akhlak Mulia', duration: '15 mnt', type: 'quiz',
    questions: [
      {
        q: 'Apa tujuan utama diutusnya Nabi Muhammad ﷺ menurut hadits riwayat Ahmad?',
        options: [
          'Untuk mengajarkan ilmu pengetahuan',
          'Untuk menyempurnakan akhlak yang mulia',
          'Untuk memimpin negara Arab',
          'Untuk mengajarkan Al-Qur\'an'
        ],
        answer: 1,
        explanation: '"Sesungguhnya aku diutus hanyalah untuk menyempurnakan akhlak yang mulia." (HR. Ahmad no. 8952, dishahihkan Al-Albani). Ini menunjukkan betapa sentralnya akhlak dalam ajaran Islam.'
      },
      {
        q: 'Aisyah radhiyallahu \'anha menggambarkan akhlak Nabi ﷺ dengan kalimat...',
        options: [
          '"Akhlak beliau adalah hadits"',
          '"Akhlak beliau adalah Al-Qur\'an"',
          '"Akhlak beliau adalah sunnah"',
          '"Akhlak beliau adalah iman"'
        ],
        answer: 1,
        explanation: 'Ketika ditanya tentang akhlak Nabi ﷺ, Aisyah menjawab: "Akhlak beliau adalah Al-Qur\'an." (HR. Muslim no. 746). Artinya Nabi ﷺ mengamalkan seluruh ajaran Al-Qur\'an dalam kehidupan sehari-harinya.'
      },
      {
        q: 'Manakah yang BUKAN termasuk unsur syukur yang sempurna?',
        options: [
          'Mengakui nikmat Allah dalam hati',
          'Mengucapkan Alhamdulillah dengan lisan',
          'Menyimpan nikmat untuk diri sendiri',
          'Menggunakan nikmat untuk taat kepada Allah'
        ],
        answer: 2,
        explanation: 'Syukur yang sempurna mencakup tiga unsur: (1) Hati — mengakui nikmat dari Allah, (2) Lisan — mengucapkan Alhamdulillah, (3) Anggota badan — menggunakan nikmat untuk beribadah kepada Allah. Menyimpan nikmat untuk diri sendiri tanpa bersyukur bukan termasuk syukur.'
      },
      {
        q: 'Sabar dalam menjalankan perintah Allah seperti shalat dan puasa termasuk jenis sabar...',
        options: [
          'Sabar atas musibah',
          'Sabar dari kemaksiatan',
          'Sabar dalam ketaatan',
          'Sabar dalam cobaan'
        ],
        answer: 2,
        explanation: 'Para ulama membagi sabar menjadi tiga: (1) Sabar dalam ketaatan — bersabar menjalankan perintah Allah, (2) Sabar dari kemaksiatan — menahan diri dari larangan Allah, (3) Sabar atas musibah — menerima takdir Allah dengan lapang dada.'
      },
      {
        q: 'Menyebut keburukan saudara Muslim di belakangnya, meskipun yang dikatakan itu benar, disebut...',
        options: ['Namimah', 'Ghibah', 'Hasad', 'Riya\''],
        answer: 1,
        explanation: 'Ghibah adalah menyebut keburukan saudara Muslim di belakangnya, meskipun yang dikatakan itu benar. Jika yang dikatakan tidak benar, maka itu adalah fitnah (buhtan) yang dosanya lebih besar. (QS. Al-Hujurat: 12)'
      },
      {
        q: 'Riya\' disebut sebagai syirik kecil. Apa pengertian riya\'?',
        options: [
          'Beramal karena takut azab Allah',
          'Beramal agar dilihat dan dipuji manusia',
          'Beramal karena mengharap surga',
          'Beramal karena cinta kepada Allah'
        ],
        answer: 1,
        explanation: 'Riya\' adalah beramal bukan karena Allah, tetapi agar dilihat dan dipuji manusia. Rasulullah ﷺ menyebutnya sebagai syirik kecil (HR. Ahmad no. 23630). Amal yang disertai riya\' tidak diterima Allah.'
      },
      {
        q: 'Menurut hadits Bukhari & Muslim, amalan yang paling dicintai Allah setelah shalat tepat waktu adalah...',
        options: [
          'Puasa Ramadan',
          'Membaca Al-Qur\'an',
          'Berbakti kepada kedua orang tua',
          'Jihad di jalan Allah'
        ],
        answer: 2,
        explanation: 'Berdasarkan HR. Bukhari no. 527 & Muslim no. 85, urutan amalan yang paling dicintai Allah adalah: (1) Shalat pada waktunya, (2) Berbakti kepada kedua orang tua, (3) Jihad di jalan Allah.'
      },
      {
        q: 'Apa perbedaan antara hasad dan ghibthah?',
        options: [
          'Hasad dan ghibthah adalah sama',
          'Hasad berharap nikmat orang lain hilang; ghibthah ingin nikmat serupa tanpa berharap nikmat orang lain hilang',
          'Ghibthah lebih buruk dari hasad',
          'Hasad hanya tentang harta, ghibthah tentang ilmu'
        ],
        answer: 1,
        explanation: 'Hasad adalah berharap agar nikmat orang lain hilang — ini haram. Ghibthah adalah ingin mendapat nikmat serupa tanpa berharap nikmat orang lain hilang — ini dibolehkan bahkan dianjurkan dalam dua hal: ilmu agama dan harta yang diinfakkan di jalan Allah.'
      },
      {
        q: 'Hadits "Tidak akan masuk surga orang yang di dalam hatinya terdapat kesombongan sebesar biji sawi" diriwayatkan oleh...',
        options: ['HR. Bukhari', 'HR. Muslim', 'HR. Abu Dawud', 'HR. At-Tirmidzi'],
        answer: 1,
        explanation: 'Hadits tentang larangan sombong ini diriwayatkan oleh Imam Muslim no. 91. Dalam hadits yang sama, Rasulullah ﷺ mendefinisikan sombong: "Sombong adalah menolak kebenaran dan meremehkan manusia."'
      },
      {
        q: 'Manakah yang termasuk bentuk birrul walidain (berbakti kepada orang tua)?',
        options: [
          'Menaati orang tua meskipun memerintahkan bermaksiat kepada Allah',
          'Mendoakan orang tua yang sudah wafat',
          'Tidak perlu merawat orang tua jika sudah menikah',
          'Cukup memberi uang tanpa perlu berkomunikasi'
        ],
        answer: 1,
        explanation: 'Mendoakan orang tua yang sudah wafat adalah salah satu bentuk birrul walidain yang tetap bisa dilakukan setelah mereka meninggal. Adapun menaati orang tua hanya dalam hal yang tidak bermaksiat kepada Allah — jika memerintahkan maksiat, tidak boleh ditaati.'
      }
    ]
  }
];

// ============================================================
// ENGINE
// ============================================================
let currentLesson = 0;
let progress = JSON.parse(localStorage.getItem('akhlak_progress') || '[]');

function saveProgress(id) {
  if (!progress.includes(id)) { progress.push(id); localStorage.setItem('akhlak_progress', JSON.stringify(progress)); }
  const total = LESSONS.length;
  const done = LESSONS.filter(l => progress.includes(l.id)).length;
  const pct = Math.round((done / total) * 100);
  localStorage.setItem('progress_akhlak', pct);
  if (typeof saveProgressToCloud !== 'undefined') { saveProgressToCloud('akhlak', pct); }
  if (pct >= 100 && !localStorage.getItem('completed_date_akhlak')) {
    localStorage.setItem('completed_date_akhlak', new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }));
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
        <h1>Kuis: Akhlak Mulia</h1>
        <p>Uji pemahaman Anda tentang Akhlak dalam Islam</p>
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
  const msg = pct >= 80 ? 'Masya Allah! Anda menguasai materi Akhlak dengan sangat baik.'
            : pct >= 70 ? 'Bagus! Anda lulus dan berhak mendapatkan sertifikat.'
            : 'Nilai Anda belum mencapai 70. Pelajari ulang dan coba lagi untuk mendapatkan sertifikat.';
  if (lulus) {
    saveProgress(LESSONS[currentLesson].id);
    localStorage.setItem('score_akhlak', pct);
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

