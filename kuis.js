// ============================================================
// KUIS.JS — Fully functional quiz engine
// ============================================================

// All quiz data pulled from belajar-*.js question banks
const ALL_QUIZZES = [
  {
    id: 'thaharah', title: 'Kuis Thaharah', subject: 'Fikih',
    icon: 'scale', bg: '#e8f5ee', color: '#1a6b3c',
    soal: 10, durasi: 30, href: 'belajar-thaharah.html',
    questions: [
      { q: 'Apa pengertian thaharah secara istilah syariat?', options: ['Membersihkan rumah dari kotoran','Mengangkat hadats dan menghilangkan najis dengan air atau penggantinya','Mandi setiap hari agar badan bersih','Mencuci pakaian yang kotor'], answer: 1, explanation: 'Thaharah secara istilah adalah mengangkat hadats dan menghilangkan najis dengan air atau penggantinya. (Sumber: Matan Al-Ghayah wat Taqrib)' },
      { q: 'Dalil wajibnya wudhu sebelum shalat terdapat dalam Al-Qur\'an surah...', options: ['QS. Al-Baqarah: 222','QS. Al-Ma\'idah: 6','QS. An-Nisa: 43','QS. Al-Imran: 97'], answer: 1, explanation: 'Perintah wudhu sebelum shalat terdapat dalam QS. Al-Ma\'idah: 6.' },
      { q: 'Najis yang cara mensucikannya harus dibasuh 7 kali dan salah satunya dengan tanah disebut...', options: ['Najis Mukhaffafah','Najis Mutawassithah','Najis Mughallazhah','Najis Mutanajjis'], answer: 2, explanation: 'Najis Mughallazhah (najis berat) adalah najis anjing dan babi. Cara mensucikannya dibasuh 7 kali, salah satunya dengan tanah.' },
      { q: 'Berapa jumlah rukun wudhu yang wajib dilakukan?', options: ['4 rukun','5 rukun','6 rukun','7 rukun'], answer: 2, explanation: 'Rukun wudhu ada 6: Niat, membasuh wajah, membasuh tangan hingga siku, mengusap kepala, membasuh kaki, dan tertib.' },
      { q: 'Manakah yang TIDAK termasuk pembatal wudhu?', options: ['Keluarnya angin dari dubur (kentut)','Tidur nyenyak hingga tidak sadar','Tertawa terbahak-bahak di luar shalat','Makan daging unta'], answer: 2, explanation: 'Tertawa terbahak-bahak di luar shalat tidak membatalkan wudhu. Ia hanya membatalkan shalat jika dilakukan saat shalat.' },
      { q: 'Ukuran "dua qullah" air yang tidak mudah terkena najis setara dengan...', options: ['Sekitar 50 liter','Sekitar 100 liter','Sekitar 216 liter','Sekitar 500 liter'], answer: 2, explanation: 'Dua qullah setara dengan ±216 liter, atau wadah berukuran 60×60×60 cm. (HR. Abu Dawud no. 63)' },
      { q: 'Tayamum dilakukan dengan berapa kali tepukan ke tanah?', options: ['Dua kali tepukan','Tiga kali tepukan','Satu kali tepukan','Sesuai kebutuhan'], answer: 2, explanation: 'Tayamum dilakukan dengan SATU kali tepukan ke tanah, kemudian mengusap wajah dan kedua tangan. (HR. Bukhari & Muslim)' },
      { q: 'Manakah yang TIDAK mewajibkan mandi wajib?', options: ['Keluarnya mani disertai syahwat','Selesai masa haid','Mimpi tanpa keluar mani','Jima\' (hubungan suami istri)'], answer: 2, explanation: 'Mimpi tanpa keluar mani tidak mewajibkan mandi wajib. Yang mewajibkan adalah keluarnya mani, jima\', selesai haid, nifas, dan wiladah.' },
      { q: 'Air yang sudah digunakan untuk wudhu disebut...', options: ['Air Mutlak','Air Musta\'mal','Air Mutanajjis','Air Makruh'], answer: 1, explanation: 'Air Musta\'mal adalah air yang sudah digunakan untuk bersuci. Mayoritas ulama berpendapat tidak sah digunakan kembali.' },
      { q: 'Hadits "Kebersihan adalah sebagian dari iman" diriwayatkan oleh...', options: ['HR. Bukhari','HR. Muslim','HR. Abu Dawud','HR. At-Tirmidzi'], answer: 1, explanation: 'Hadits "Ath-thahaatu syathrul iiman" diriwayatkan oleh Imam Muslim no. 223.' },
    ]
  },
  {
    id: 'akidah', title: 'Kuis Rukun Iman', subject: 'Akidah',
    icon: 'moon', bg: '#e8f5ee', color: '#1a6b3c',
    soal: 10, durasi: 30, href: 'belajar-akidah.html',
    questions: [
      { q: 'Berapa jumlah Rukun Iman dalam Islam?', options: ['4','5','6','7'], answer: 2, explanation: 'Rukun Iman ada 6: Iman kepada Allah, Malaikat, Kitab-kitab, Rasul, Hari Akhir, dan Qadha-Qadar. (HR. Muslim no. 8)' },
      { q: 'Hadits yang menjelaskan definisi lengkap Rukun Iman dikenal sebagai...', options: ['Hadits Arbain','Hadits Jibril','Hadits Qudsi','Hadits Muttafaq Alaih'], answer: 1, explanation: 'Hadits Jibril (HR. Muslim no. 8) menjelaskan definisi Islam, Iman, dan Ihsan secara lengkap.' },
      { q: 'Tauhid yang berkaitan dengan mengesakan Allah dalam ibadah disebut...', options: ['Tauhid Rububiyyah','Tauhid Uluhiyyah','Tauhid Asma wa Shifat','Tauhid Mulkiyyah'], answer: 1, explanation: 'Tauhid Uluhiyyah adalah mengesakan Allah dalam ibadah — hanya beribadah kepada Allah semata.' },
      { q: 'Malaikat yang bertugas menyampaikan wahyu kepada para nabi adalah...', options: ['Mikail','Israfil','Jibril','Izrail'], answer: 2, explanation: 'Malaikat Jibril (Ruhul Amin) bertugas menyampaikan wahyu Allah kepada para nabi dan rasul.' },
      { q: 'Kitab suci yang diturunkan kepada Nabi Dawud \'alaihissalam adalah...', options: ['Taurat','Injil','Zabur','Shuhuf'], answer: 2, explanation: 'Zabur diturunkan kepada Nabi Dawud. Taurat kepada Musa, Injil kepada Isa, Shuhuf kepada Ibrahim dan Musa.' },
      { q: 'Berapa jumlah nabi dan rasul yang disebutkan namanya dalam Al-Qur\'an?', options: ['20','25','30','40'], answer: 1, explanation: 'Al-Qur\'an menyebutkan 25 nama nabi dan rasul yang wajib kita imani, dari Nabi Adam hingga Nabi Muhammad ﷺ.' },
      { q: 'Sifat wajib para rasul yang berarti "selalu menyampaikan wahyu Allah" adalah...', options: ['Shiddiq','Amanah','Tabligh','Fathanah'], answer: 2, explanation: 'Tabligh artinya menyampaikan — para rasul wajib menyampaikan seluruh wahyu yang diterima dari Allah.' },
      { q: 'Berapa tahun sebelum penciptaan langit dan bumi Allah mencatat takdir di Lauhul Mahfuzh?', options: ['1.000 tahun','10.000 tahun','50.000 tahun','100.000 tahun'], answer: 2, explanation: '"Allah telah mencatat takdir semua makhluk 50.000 tahun sebelum menciptakan langit dan bumi." (HR. Muslim no. 2653)' },
      { q: 'Dosa apakah yang tidak akan diampuni Allah kecuali dengan taubat sebelum meninggal?', options: ['Dosa zina','Dosa syirik','Dosa mencuri','Dosa membunuh'], answer: 1, explanation: 'Syirik adalah dosa terbesar yang tidak diampuni jika pelakunya meninggal tanpa bertaubat. (QS. An-Nisa: 48)' },
      { q: 'Manakah yang BUKAN termasuk tanda-tanda kiamat besar?', options: ['Keluarnya Dajjal','Turunnya Nabi Isa','Terbitnya matahari dari barat','Merebaknya perzinaan'], answer: 3, explanation: 'Merebaknya perzinaan adalah tanda kiamat KECIL. Tanda kiamat besar: Dajjal, turunnya Nabi Isa, Ya\'juj Ma\'juj, matahari dari barat, Dabbah.' },
    ]
  },
  {
    id: 'akhlak', title: 'Kuis Akhlak Mulia', subject: 'Akhlak',
    icon: 'heart', bg: '#fef9e7', color: '#c9a227',
    soal: 10, durasi: 30, href: 'belajar-akhlak.html',
    questions: [
      { q: 'Apa tujuan utama diutusnya Nabi Muhammad ﷺ menurut hadits riwayat Ahmad?', options: ['Untuk mengajarkan ilmu pengetahuan','Untuk menyempurnakan akhlak yang mulia','Untuk memimpin negara Arab','Untuk mengajarkan Al-Qur\'an'], answer: 1, explanation: '"Sesungguhnya aku diutus hanyalah untuk menyempurnakan akhlak yang mulia." (HR. Ahmad no. 8952)' },
      { q: 'Aisyah radhiyallahu \'anha menggambarkan akhlak Nabi ﷺ dengan kalimat...', options: ['"Akhlak beliau adalah hadits"','"Akhlak beliau adalah Al-Qur\'an"','"Akhlak beliau adalah sunnah"','"Akhlak beliau adalah iman"'], answer: 1, explanation: 'Ketika ditanya tentang akhlak Nabi ﷺ, Aisyah menjawab: "Akhlak beliau adalah Al-Qur\'an." (HR. Muslim no. 746)' },
      { q: 'Manakah yang BUKAN termasuk unsur syukur yang sempurna?', options: ['Mengakui nikmat Allah dalam hati','Mengucapkan Alhamdulillah dengan lisan','Menyimpan nikmat untuk diri sendiri','Menggunakan nikmat untuk taat kepada Allah'], answer: 2, explanation: 'Syukur sempurna mencakup: hati (mengakui), lisan (Alhamdulillah), dan anggota badan (menggunakan nikmat untuk taat).' },
      { q: 'Sabar dalam menjalankan perintah Allah seperti shalat dan puasa termasuk jenis sabar...', options: ['Sabar atas musibah','Sabar dari kemaksiatan','Sabar dalam ketaatan','Sabar dalam cobaan'], answer: 2, explanation: 'Sabar dalam ketaatan adalah bersabar menjalankan perintah Allah. Ada 3 jenis sabar: dalam ketaatan, dari kemaksiatan, dan atas musibah.' },
      { q: 'Menyebut keburukan saudara Muslim di belakangnya, meskipun yang dikatakan itu benar, disebut...', options: ['Namimah','Ghibah','Hasad','Riya\''], answer: 1, explanation: 'Ghibah adalah menyebut keburukan saudara Muslim di belakangnya meskipun benar. (QS. Al-Hujurat: 12)' },
      { q: 'Riya\' disebut sebagai syirik kecil. Apa pengertian riya\'?', options: ['Beramal karena takut azab Allah','Beramal agar dilihat dan dipuji manusia','Beramal karena mengharap surga','Beramal karena cinta kepada Allah'], answer: 1, explanation: 'Riya\' adalah beramal bukan karena Allah, tetapi agar dilihat dan dipuji manusia. (HR. Ahmad no. 23630)' },
      { q: 'Menurut hadits Bukhari & Muslim, amalan yang paling dicintai Allah setelah shalat tepat waktu adalah...', options: ['Puasa Ramadan','Membaca Al-Qur\'an','Berbakti kepada kedua orang tua','Jihad di jalan Allah'], answer: 2, explanation: 'Urutan: (1) Shalat pada waktunya, (2) Berbakti kepada orang tua, (3) Jihad di jalan Allah. (HR. Bukhari no. 527)' },
      { q: 'Apa perbedaan antara hasad dan ghibthah?', options: ['Hasad dan ghibthah adalah sama','Hasad berharap nikmat orang lain hilang; ghibthah ingin nikmat serupa tanpa berharap nikmat orang lain hilang','Ghibthah lebih buruk dari hasad','Hasad hanya tentang harta'], answer: 1, explanation: 'Hasad (haram): berharap nikmat orang lain hilang. Ghibthah (boleh): ingin nikmat serupa tanpa berharap nikmat orang lain hilang.' },
      { q: 'Hadits "Tidak akan masuk surga orang yang di dalam hatinya terdapat kesombongan sebesar biji sawi" diriwayatkan oleh...', options: ['HR. Bukhari','HR. Muslim','HR. Abu Dawud','HR. At-Tirmidzi'], answer: 1, explanation: 'Hadits tentang larangan sombong diriwayatkan oleh Imam Muslim no. 91.' },
      { q: 'Manakah yang termasuk bentuk birrul walidain (berbakti kepada orang tua)?', options: ['Menaati orang tua meskipun memerintahkan bermaksiat kepada Allah','Mendoakan orang tua yang sudah wafat','Tidak perlu merawat orang tua jika sudah menikah','Cukup memberi uang tanpa perlu berkomunikasi'], answer: 1, explanation: 'Mendoakan orang tua yang sudah wafat adalah bentuk birrul walidain yang tetap bisa dilakukan setelah mereka meninggal.' },
    ]
  },
  {
    id: 'qurdis', title: 'Kuis Qurdis', subject: 'Qurdis',
    icon: 'book', bg: '#e8f5ee', color: '#1a6b3c',
    soal: 10, durasi: 30, href: 'belajar-qurdis.html',
    questions: [
      { q: 'Al-Qur\'an diturunkan kepada Nabi Muhammad ﷺ melalui perantara...', options: ['Malaikat Mikail','Malaikat Jibril','Malaikat Israfil','Malaikat Izrail'], answer: 1, explanation: 'Al-Qur\'an diturunkan melalui Malaikat Jibril (Ruhul Amin). (QS. Asy-Syu\'ara: 192-193)' },
      { q: 'Wahyu pertama yang diturunkan kepada Nabi Muhammad ﷺ adalah...', options: ['QS. Al-Fatihah: 1-7','QS. Al-\'Alaq: 1-5','QS. Al-Mudatstsir: 1-5','QS. Al-Muzzammil: 1-5'], answer: 1, explanation: 'Wahyu pertama adalah QS. Al-\'Alaq: 1-5, turun di Gua Hira pada 17 Ramadan 610 M.' },
      { q: 'Ilmu yang mempelajari sebab-sebab turunnya ayat Al-Qur\'an disebut...', options: ['Nasikh Mansukh','Asbabun Nuzul','Makki Madani','Ulumul Qur\'an'], answer: 1, explanation: 'Asbabun Nuzul adalah ilmu yang mempelajari sebab-sebab turunnya suatu ayat Al-Qur\'an.' },
      { q: 'Ayat Madani memiliki ciri khas menggunakan seruan...', options: ['"Yaa ayyuhan naas"','"Yaa ayyuhal ladziina aamanuu"','"Yaa banii Israil"','"Yaa ahlal kitab"'], answer: 1, explanation: 'Ayat Madani menggunakan seruan "Yaa ayyuhal ladziina aamanuu" (wahai orang-orang beriman).' },
      { q: 'Kaidah "Al-\'Ibrah bi \'Umum Al-Lafzh la bi Khushush As-Sabab" berarti...', options: ['Hukum ayat hanya berlaku untuk orang yang menjadi sebab turunnya','Yang menjadi patokan adalah keumuman lafazh, bukan kekhususan sebab','Setiap ayat harus dipahami sesuai konteks historisnya','Asbabun nuzul menentukan hukum suatu ayat'], answer: 1, explanation: 'Kaidah ini berarti hukum ayat berlaku umum untuk semua yang memenuhi kriteria, tidak terbatas pada sebab turunnya.' },
      { q: 'Hadits yang memenuhi 5 syarat: sanad bersambung, perawi adil, dhabith, tidak syadz, tidak \'illah disebut...', options: ['Hadits Hasan','Hadits Shahih','Hadits Dha\'if','Hadits Mutawatir'], answer: 1, explanation: 'Hadits Shahih memenuhi 5 syarat: sanad bersambung, perawi adil, dhabith, tidak syadz, tidak \'illah.' },
      { q: 'Kitab hadits yang disebut paling shahih setelah Al-Qur\'an adalah...', options: ['Shahih Muslim','Shahih Al-Bukhari','Sunan Abu Dawud','Muwaththa\' Malik'], answer: 1, explanation: 'Shahih Al-Bukhari karya Imam Al-Bukhari (w. 256 H) adalah kitab hadits paling shahih setelah Al-Qur\'an.' },
      { q: 'Hukum bacaan nun mati atau tanwin ketika bertemu huruf ب disebut...', options: ['Izhar','Idgham','Iqlab','Ikhfa\''], answer: 2, explanation: 'Iqlab: nun mati/tanwin bertemu ب, dibaca dengan mengganti nun menjadi mim disertai dengung.' },
      { q: 'Ayat yang menghapus hukum ayat sebelumnya disebut...', options: ['Mansukh','Nasikh','Mujmal','Mutasyabih'], answer: 1, explanation: 'Nasikh adalah ayat yang menghapus hukum sebelumnya. Mansukh adalah ayat yang dihapus.' },
      { q: 'Hadits yang diriwayatkan oleh banyak perawi di setiap tingkatan sehingga mustahil bersepakat dusta disebut...', options: ['Hadits Ahad','Hadits Mutawatir','Hadits Masyhur','Hadits Gharib'], answer: 1, explanation: 'Hadits Mutawatir diriwayatkan banyak perawi di setiap tingkatan, mustahil bersepakat dusta. Memberikan keyakinan pasti.' },
    ]
  },
  {
    id: 'sejarah', title: 'Kuis Sejarah Islam', subject: 'Sejarah',
    icon: 'landmark', bg: '#fef9e7', color: '#c9a227',
    soal: 10, durasi: 30, href: 'belajar-sejarah.html',
    questions: [
      { q: 'Istilah "Jahiliyyah" merujuk pada kondisi masyarakat Arab sebelum Islam yang...', options: ['Tidak memiliki kemampuan membaca dan menulis','Bodoh dalam hal agama, akhlak, dan peradaban yang benar','Tidak mengenal perdagangan dan ekonomi','Tidak memiliki bahasa dan sastra'], answer: 1, explanation: 'Jahiliyyah berarti kebodohan dalam hal agama, akhlak, dan peradaban yang benar — bukan bodoh dalam arti tidak berilmu.' },
      { q: 'Nabi Muhammad ﷺ menerima wahyu pertama pada usia berapa tahun?', options: ['35 tahun','40 tahun','45 tahun','25 tahun'], answer: 1, explanation: 'Nabi ﷺ menerima wahyu pertama di Gua Hira pada usia 40 tahun, 17 Ramadan 610 M.' },
      { q: 'Siapakah wanita pertama yang masuk Islam?', options: ['Aisyah binti Abu Bakar','Fatimah Az-Zahra','Khadijah binti Khuwailid','Sumayyah binti Khayyath'], answer: 2, explanation: 'Khadijah binti Khuwailid radhiyallahu \'anha adalah wanita pertama yang masuk Islam.' },
      { q: 'Peristiwa Isra\' Mi\'raj terjadi pada tahun ke berapa kenabian?', options: ['Tahun ke-5','Tahun ke-8','Tahun ke-11','Tahun ke-13'], answer: 2, explanation: 'Isra\' Mi\'raj terjadi pada tahun ke-11 kenabian, setelah \'Amul Huzn (wafatnya Khadijah dan Abu Thalib).' },
      { q: 'Perang Badar terjadi pada tahun berapa Hijriyah?', options: ['1 H','2 H','3 H','5 H'], answer: 1, explanation: 'Perang Badar terjadi pada 17 Ramadan tahun 2 H (624 M). 313 Muslim mengalahkan 1.000 pasukan Quraisy.' },
      { q: 'Khalifah yang menginisiasi pengumpulan Al-Qur\'an dalam satu mushaf adalah...', options: ['Umar bin Khattab','Abu Bakar Ash-Shiddiq','Utsman bin Affan','Ali bin Abi Thalib'], answer: 1, explanation: 'Abu Bakar Ash-Shiddiq menginisiasi pengumpulan Al-Qur\'an setelah banyak hafizh syahid di Perang Yamamah.' },
      { q: 'Khalifah yang menetapkan kalender Hijriyah adalah...', options: ['Abu Bakar Ash-Shiddiq','Umar bin Khattab','Utsman bin Affan','Ali bin Abi Thalib'], answer: 1, explanation: 'Umar bin Khattab menetapkan kalender Hijriyah dimulai dari peristiwa hijrah Nabi ﷺ ke Madinah.' },
      { q: 'Kerajaan Islam pertama di Nusantara adalah...', options: ['Kerajaan Demak','Kerajaan Malaka','Kerajaan Samudera Pasai','Kerajaan Mataram Islam'], answer: 2, explanation: 'Kerajaan Samudera Pasai di Aceh (abad 13 M) adalah kerajaan Islam pertama di Nusantara.' },
      { q: 'Wali Songo yang dikenal menggunakan wayang dan seni budaya Jawa dalam dakwahnya adalah...', options: ['Sunan Bonang','Sunan Kalijaga','Sunan Kudus','Sunan Giri'], answer: 1, explanation: 'Sunan Kalijaga menggunakan wayang, gamelan, dan seni budaya Jawa sebagai media dakwah.' },
      { q: 'Dinasti Abbasiyah berakhir karena...', options: ['Digulingkan oleh Dinasti Umayyah','Dihancurkan oleh invasi Mongol (1258 M)','Runtuh karena konflik internal','Ditaklukkan oleh Tentara Salib'], answer: 1, explanation: 'Dinasti Abbasiyah berakhir 1258 M ketika pasukan Mongol di bawah Hulagu Khan menghancurkan Baghdad.' },
    ]
  },
];

// ============================================================
// STATE & HELPERS
// ============================================================
let activeFilter = 'semua';
let quizSession = null; // { quiz, current, score, answers, timer, timerInterval }

const ICON_MAP = {
  scale: IC.scale, moon: IC.moon, heart: IC.heart, book: IC.book, landmark: IC.landmark
};

function getScoreLocal(id) {
  const s = localStorage.getItem('score_' + id);
  return s !== null ? parseInt(s) : null;
}
function saveScoreLocal(id, pct) {
  localStorage.setItem('score_' + id, pct);
  if (pct >= 70) {
    localStorage.setItem('progress_' + id, 100);
    if (!localStorage.getItem('completed_date_' + id)) {
      localStorage.setItem('completed_date_' + id, new Date().toLocaleDateString('id-ID', { day:'numeric', month:'long', year:'numeric' }));
    }
  }
}
function getAnswers(id) {
  const s = localStorage.getItem('kuis_answers_' + id);
  return s ? JSON.parse(s) : null;
}
function saveAnswers(id, answers) {
  localStorage.setItem('kuis_answers_' + id, JSON.stringify(answers));
}

// ============================================================
// LIST VIEW
// ============================================================
function filterKuis(filter, el) {
  activeFilter = filter;
  document.querySelectorAll('#kuisTabs .tab-btn').forEach(t => t.classList.remove('active'));
  if (el) el.classList.add('active');
  renderList();
}

function renderList() {
  const list = document.getElementById('kuisList');
  let quizzes = ALL_QUIZZES;
  if (activeFilter === 'belum') quizzes = quizzes.filter(q => getScoreLocal(q.id) === null);
  if (activeFilter === 'selesai') quizzes = quizzes.filter(q => getScoreLocal(q.id) !== null);

  list.innerHTML = quizzes.map(q => {
    const score = getScoreLocal(q.id);
    const done = score !== null;
    const scoreColor = score >= 80 ? '#27ae60' : score >= 60 ? '#e67e22' : '#e74c3c';
    return `
    <div class="kuis-card">
      <div class="kc-icon" style="background:${q.bg};color:${q.color}">${ICON_MAP[q.icon]}</div>
      <div class="kc-info">
        <h4>${q.title}</h4>
        <p>${q.subject} · ${q.soal} Soal · ${q.durasi} Menit</p>
        <div class="kc-tags">
          <span class="kc-tag">${q.subject}</span>
          ${done ? `<span class="kc-tag" style="background:#eafaf1;color:#27ae60">Selesai</span>` : `<span class="kc-tag" style="background:#fef9e7;color:#e67e22">Belum</span>`}
        </div>
      </div>
      <div class="kc-score">
        ${done
          ? `<div class="ks-num" style="color:${scoreColor}">${score}%</div><p>Nilai</p>`
          : `<div class="ks-num na">—</div><p>Belum</p>`}
      </div>
      <div class="kc-actions">
        ${done
          ? `<button class="btn-kuis-ulangi" onclick="startQuiz('${q.id}')">Ulangi</button>
             <button class="btn-kuis-lihat" onclick="showReview('${q.id}')">Lihat Jawaban</button>`
          : `<button class="btn-kuis-mulai" onclick="startQuiz('${q.id}')">Mulai Kuis</button>`}
      </div>
    </div>`;
  }).join('') || `<div style="text-align:center;padding:40px;color:var(--text-light)">Tidak ada kuis di kategori ini.</div>`;
}

// ============================================================
// QUIZ ENGINE
// ============================================================
function startQuiz(id) {
  const quiz = ALL_QUIZZES.find(q => q.id === id);
  if (!quiz) return;
  quizSession = {
    quiz, current: 0, score: 0,
    answers: new Array(quiz.questions.length).fill(null),
    selected: null, answered: false,
    timeLeft: quiz.durasi * 60,
  };
  document.getElementById('viewList').style.display = 'none';
  document.getElementById('viewQuiz').style.display = 'block';
  renderQuestion();
  startTimer();
}

function startTimer() {
  if (quizSession.timerInterval) clearInterval(quizSession.timerInterval);
  quizSession.timerInterval = setInterval(() => {
    quizSession.timeLeft--;
    updateTimerDisplay();
    if (quizSession.timeLeft <= 0) {
      clearInterval(quizSession.timerInterval);
      autoSubmit();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const el = document.getElementById('quizTimer');
  if (!el) return;
  const m = Math.floor(quizSession.timeLeft / 60);
  const s = quizSession.timeLeft % 60;
  el.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  el.parentElement.className = 'quiz-timer' + (quizSession.timeLeft < 60 ? ' warning' : '');
}

function autoSubmit() {
  // Force finish with current answers
  showResult();
}

function renderQuestion() {
  const { quiz, current } = quizSession;
  const q = quiz.questions[current];
  const pct = Math.round((current / quiz.questions.length) * 100);
  const letters = ['A','B','C','D'];
  const m = Math.floor(quizSession.timeLeft / 60);
  const s = quizSession.timeLeft % 60;

  document.getElementById('quizArea').innerHTML = `
    <div class="quiz-page">
      <div class="quiz-topbar">
        <button class="btn-quiz-back" onclick="confirmBack()">← Kembali</button>
        <div class="quiz-title-bar">
          <h2>${quiz.title}</h2>
          <p>${quiz.subject} · ${quiz.questions.length} Soal</p>
        </div>
        <div class="quiz-timer" id="quizTimerWrap">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span id="quizTimer">${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}</span>
        </div>
      </div>

      <div class="quiz-progress-wrap">
        <div class="quiz-prog-header">
          <span>Soal <strong>${current + 1}</strong> dari <strong>${quiz.questions.length}</strong></span>
          <span>${pct}% selesai</span>
        </div>
        <div class="quiz-prog-bar"><div class="quiz-prog-fill" style="width:${pct}%"></div></div>
      </div>

      <div class="quiz-question-card">
        <div class="quiz-q-num">Pertanyaan ${current + 1}</div>
        <div class="quiz-q-text">${q.q}</div>
        <div class="quiz-options">
          ${q.options.map((opt, i) => `
            <button class="quiz-option" onclick="selectOpt(${i})" id="qopt${i}">
              <span class="quiz-opt-letter">${letters[i]}</span>
              <span>${opt}</span>
            </button>`).join('')}
        </div>
        <div class="quiz-feedback" id="quizFeedback"></div>
      </div>

      <div class="quiz-action-bar">
        <div style="font-size:13px;color:var(--text-light)">
          Pilih jawaban yang paling tepat
        </div>
        <div style="display:flex;gap:10px">
          <button class="btn-quiz-check" id="btnCheck" onclick="checkOpt()" disabled>Periksa Jawaban</button>
          <button class="btn-quiz-next" id="btnNext" onclick="nextOpt()">
            ${current < quiz.questions.length - 1 ? 'Soal Berikutnya →' : 'Lihat Hasil'}
          </button>
        </div>
      </div>
    </div>`;
  quizSession.selected = null;
  quizSession.answered = false;
}

function selectOpt(i) {
  if (quizSession.answered) return;
  quizSession.selected = i;
  document.querySelectorAll('.quiz-option').forEach((b, idx) => b.classList.toggle('selected', idx === i));
  document.getElementById('btnCheck').disabled = false;
}

function checkOpt() {
  if (quizSession.answered) return;
  quizSession.answered = true;
  const { quiz, current, selected } = quizSession;
  const q = quiz.questions[current];
  const correct = selected === q.answer;
  if (correct) quizSession.score++;
  quizSession.answers[current] = { selected, correct };

  document.querySelectorAll('.quiz-option').forEach((b, i) => {
    b.disabled = true;
    if (i === q.answer) b.classList.add('correct');
    else if (i === selected && !correct) b.classList.add('wrong');
  });

  const fb = document.getElementById('quizFeedback');
  fb.className = `quiz-feedback show ${correct ? 'correct' : 'wrong'}`;
  fb.innerHTML = `<strong>${correct ? '✅ Jawaban Benar!' : '❌ Jawaban Salah'}</strong>${q.explanation}`;

  document.getElementById('btnCheck').style.display = 'none';
  document.getElementById('btnNext').classList.add('show');
}

function nextOpt() {
  quizSession.current++;
  if (quizSession.current >= quizSession.quiz.questions.length) {
    showResult();
  } else {
    renderQuestion();
  }
}

function confirmBack() {
  if (confirm('Yakin ingin keluar? Progress kuis akan hilang.')) {
    clearInterval(quizSession.timerInterval);
    backToList();
  }
}

function backToList() {
  document.getElementById('viewList').style.display = 'block';
  document.getElementById('viewQuiz').style.display = 'none';
  renderList();
}

// ============================================================
// RESULT
// ============================================================
function showResult() {
  clearInterval(quizSession.timerInterval);
  const { quiz, score, answers } = quizSession;
  const total = quiz.questions.length;
  const pct = Math.round((score / total) * 100);
  const wrong = total - score;
  saveScoreLocal(quiz.id, pct);
  saveAnswers(quiz.id, answers);
  // Save to Supabase
  if (typeof saveScoreToCloud !== 'undefined') saveScoreToCloud(quiz.id, pct);

  const emoji = pct >= 80 ? '🎉' : pct >= 70 ? '✅' : '📚';
  const title = pct >= 80 ? 'Luar Biasa!' : pct >= 70 ? 'Lulus!' : 'Belum Lulus';
  const msg = pct >= 80 ? 'Masya Allah! Anda menguasai materi ini dengan sangat baik.'
            : pct >= 70 ? 'Bagus! Anda lulus dan berhak mendapatkan sertifikat.'
            : 'Nilai belum mencapai 70. Pelajari ulang dan coba lagi untuk mendapatkan sertifikat.';

  document.getElementById('quizArea').innerHTML = `
    <div class="quiz-page">
      <div class="quiz-result-card">
        <div class="qr-emoji">${emoji}</div>
        <div class="qr-title">${title}</div>
        <div class="qr-msg">${msg}</div>
        <div class="qr-score-big">${pct}%</div>
        <div class="qr-stats">
          <div class="qr-stat green"><div class="qrs-num">${score}</div><div class="qrs-label">Benar</div></div>
          <div class="qr-stat red"><div class="qrs-num">${wrong}</div><div class="qrs-label">Salah</div></div>
          <div class="qr-stat"><div class="qrs-num">${total}</div><div class="qrs-label">Total Soal</div></div>
        </div>
        <div class="qr-actions">
          <button class="btn-qr-retry" onclick="startQuiz('${quiz.id}')">🔄 Ulangi Kuis</button>
          <button class="btn-qr-back" onclick="showReviewInline()">📋 Lihat Jawaban</button>
          ${pct >= 70 ? `<button class="btn-qr-back" style="background:#1a6b3c;color:#fff" onclick="window.location.href='sertifikat.html'">🏆 Lihat Sertifikat</button>` : ''}
          <button class="btn-qr-back" style="background:var(--text-light)" onclick="backToList()">← Kembali</button>
        </div>
      </div>
    </div>`;
}

// ============================================================
// REVIEW
// ============================================================
function showReviewInline() {
  const { quiz, answers } = quizSession;
  renderReview(quiz, answers);
}

function showReview(id) {
  const quiz = ALL_QUIZZES.find(q => q.id === id);
  const answers = getAnswers(id);
  if (!answers) { alert('Belum ada jawaban tersimpan.'); return; }
  document.getElementById('viewList').style.display = 'none';
  document.getElementById('viewQuiz').style.display = 'block';
  renderReview(quiz, answers);
}

function renderReview(quiz, answers) {
  const letters = ['A','B','C','D'];
  document.getElementById('quizArea').innerHTML = `
    <div class="quiz-page">
      <div class="quiz-topbar">
        <button class="btn-quiz-back" onclick="backToList()">← Kembali ke Daftar</button>
        <div class="quiz-title-bar">
          <h2>Review: ${quiz.title}</h2>
          <p>Lihat jawaban benar dan penjelasannya</p>
        </div>
      </div>
      <div class="review-list">
        ${quiz.questions.map((q, i) => {
          const ans = answers[i];
          const userAns = ans ? ans.selected : null;
          const correct = ans ? ans.correct : false;
          return `
          <div class="review-item">
            <div class="ri-q">${i+1}. ${q.q}</div>
            ${q.options.map((opt, j) => {
              let cls = '';
              if (j === q.answer) cls = 'right-ans';
              else if (j === userAns && !correct) cls = 'wrong';
              if (!cls) return '';
              return `<div class="ri-answer ${cls}">${letters[j]}. ${opt} ${j === q.answer ? '✅' : '❌'}</div>`;
            }).join('')}
            ${userAns !== null && userAns !== q.answer
              ? `<div class="ri-answer wrong">Jawaban Anda: ${letters[userAns]}. ${q.options[userAns]} ❌</div>` : ''}
            <div class="ri-exp">💡 ${q.explanation}</div>
          </div>`;
        }).join('')}
      </div>
      <div style="text-align:center;margin-top:24px">
        <button class="btn-qr-back" onclick="backToList()">← Kembali ke Daftar Kuis</button>
      </div>
    </div>`;
}

// ============================================================
// INIT
// ============================================================
initLayout('kuis');
renderList();
