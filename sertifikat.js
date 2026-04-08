// ============================================================
// SERTIFIKAT.JS
// ============================================================

const USER_NAME = (getCurrentUser()?.nama) || 'Pengguna';

// Data kursus — progress & unlocked diambil dari localStorage
const KURSUS_DATA = [
  {
    id: 'fikih', title: 'Fikih', subject: 'Fikih',
    desc: 'Telah menyelesaikan kursus Fikih yang mencakup materi Thaharah, Shalat, Zakat, Puasa, dan Haji.',
    instructor: 'Afifah Adawiyyah',
    gradient: 'linear-gradient(135deg, #1a6b3c 0%, #0f4a28 100%)',
    borderColor: '#c9a227', certNo: 'QC-FIK-2025-001',
  },
  {
    id: 'akidah', title: 'Akidah', subject: 'Akidah',
    desc: 'Telah menyelesaikan kursus Akidah yang mencakup materi Rukun Iman, Tauhid, dan dasar-dasar keyakinan Islam.',
    instructor: 'Soni Sultansah',
    gradient: 'linear-gradient(135deg, #1a3a6b 0%, #0d2444 100%)',
    borderColor: '#4a90d9', certNo: 'QC-AKD-2025-002',
  },
  {
    id: 'akhlak', title: 'Akhlak', subject: 'Akhlak',
    desc: 'Telah menyelesaikan kursus Akhlak yang mencakup materi akhlak terpuji, akhlak tercela, dan birrul walidain.',
    instructor: 'Farah Fathia Salimatul Haq',
    gradient: 'linear-gradient(135deg, #6b4a1a 0%, #4a3010 100%)',
    borderColor: '#c9a227', certNo: 'QC-AKH-2025-003',
  },
  {
    id: 'qurdis', title: 'Quran Hadits', subject: 'Quran Hadits',
    desc: 'Telah menyelesaikan kursus Quran Hadits yang mencakup Ulumul Qur\'an, Ilmu Hadits, dan Tajwid.',
    instructor: 'Putri Salsabilah Agasha',
    gradient: 'linear-gradient(135deg, #1a5a6b 0%, #0d3a44 100%)',
    borderColor: '#4ac9d9', certNo: 'QC-QRD-2025-004',
  },
  {
    id: 'sejarah', title: 'Sejarah Kebudayaan Islam', subject: 'Sejarah',
    desc: 'Telah menyelesaikan kursus Sejarah Kebudayaan Islam yang mencakup sejarah Nabi, Khulafaur Rasyidin, dan Islam di Nusantara.',
    instructor: 'Abdul Lathif Ahmad Hamid',
    gradient: 'linear-gradient(135deg, #4a1a6b 0%, #2d0d44 100%)',
    borderColor: '#9b59b6', certNo: 'QC-SKI-2025-005',
  },
];

// Ambil progress dari localStorage (sudah di-sync dari Supabase via loadAllProgress di initLayout)
function getProgressLocal(id) {
  return parseInt(localStorage.getItem('progress_' + id) || '0', 10);
}

function getCompletedDate(id) {
  return localStorage.getItem('completed_date_' + id) || null;
}

function buildSertifikat() {
  return KURSUS_DATA.map(k => {
    const progress = getProgressLocal(k.id);
    const unlocked = progress >= 100;
    const date = unlocked ? (getCompletedDate(k.id) || '—') : '—';
    const score = parseInt(localStorage.getItem('score_' + k.id) || '0', 10);
    return { ...k, progress, unlocked, date, score };
  });
}

let ALL_SERTIFIKAT = buildSertifikat();
let activeTab = 'diperoleh';
let currentCert = null;

(async () => {
  await initLayout('sertifikat');
  await loadAllProgress();
  renderGrid();
})();

// ============================================================
// GRID
// ============================================================
function filterSertif(tab, el) {
  activeTab = tab;
  document.querySelectorAll('.stab').forEach(t => t.classList.remove('active'));
  if (el) el.classList.add('active');
  renderGrid();
}

function renderGrid() {
  ALL_SERTIFIKAT = buildSertifikat();
  const list = activeTab === 'diperoleh'
    ? ALL_SERTIFIKAT.filter(s => s.unlocked)
    : ALL_SERTIFIKAT.filter(s => !s.unlocked);

  const grid = document.getElementById('sertifGrid');

  if (!list.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--text-light)">
      <div style="font-size:48px;margin-bottom:12px">🏆</div>
      <h3 style="font-size:16px;font-weight:700;margin-bottom:6px;color:var(--text)">
        ${activeTab === 'diperoleh' ? 'Belum ada sertifikat' : 'Semua kursus sudah selesai!'}
      </h3>
      <p>${activeTab === 'diperoleh' ? 'Selesaikan kursus untuk mendapatkan sertifikat.' : 'Anda telah menyelesaikan semua kursus yang tersedia.'}</p>
    </div>`;
    return;
  }

  grid.innerHTML = list.map(s => s.unlocked ? renderUnlocked(s) : renderLocked(s)).join('');
}

function renderUnlocked(s) {
  return `
  <div class="sertif-card">
    <div class="sertif-thumb">
      <div class="sertif-thumb-inner" style="background:${s.gradient}">
        <div class="st-ribbon">RESMI</div>
        <div class="st-logo">QUHAFI COURSE</div>
        <div class="st-icon">🏆</div>
        <div class="st-title">${s.title}</div>
        <div class="st-sub">Sertifikat Kelulusan</div>
      </div>
    </div>
    <div class="sertif-body">
      <h4>${s.title}</h4>
      <div class="sb-date">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        Diperoleh: ${s.date}
      </div>
      <div class="sb-id">${s.certNo}</div>
      ${s.score > 0 ? `
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">
        <span style="font-size:12px;color:var(--text-light)">Nilai:</span>
        <span style="font-size:16px;font-weight:800;color:${s.score>=80?'#27ae60':s.score>=60?'#e67e22':'#e74c3c'}">${s.score}%</span>
        <span style="font-size:11px;padding:2px 8px;border-radius:20px;background:var(--green-light);color:var(--green);font-weight:700">
          ${s.score>=80?'Sangat Baik':s.score>=60?'Baik':'Cukup'}
        </span>
      </div>` : ''}
      <div class="sertif-actions">
        <button class="btn-sertif-lihat" onclick="openCert('${s.id}')">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          Lihat Sertifikat
        </button>
        <button class="btn-sertif-dl" onclick="downloadCertDirect('${s.id}')">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Unduh
        </button>
      </div>
    </div>
  </div>`;
}

function renderLocked(s) {
  return `
  <div class="sertif-card locked">
    <div class="sertif-thumb">
      <div class="sertif-thumb-inner" style="background:${s.gradient}">
        <div class="st-logo">QUHAFI COURSE</div>
        <div class="st-icon">🏆</div>
        <div class="st-title">${s.title}</div>
      </div>
      <div class="sertif-lock-overlay">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        <span>Belum Terbuka</span>
      </div>
    </div>
    <div class="sertif-body">
      <h4>${s.title}</h4>
      <div class="sb-date">Pengajar: ${s.instructor}</div>
      <div class="sertif-progress-wrap">
        <div class="sp-label"><span>Progress</span><span>${s.progress}%</span></div>
        <div class="sertif-progress-bar"><div class="sertif-progress-fill" style="width:${s.progress}%"></div></div>
      </div>
      <p style="font-size:12px;color:var(--text-light);margin-bottom:12px">
        Selesaikan ${100 - s.progress}% materi lagi untuk mendapatkan sertifikat ini.
      </p>
      <button class="btn-sertif-mulai" onclick="window.location.href='materi.html'">
        Lanjutkan Belajar →
      </button>
    </div>
  </div>`;
}

// ============================================================
// CERTIFICATE DOCUMENT
// ============================================================
function buildCertHTML(s) {
  const scoreLabel = s.score >= 90 ? 'Dengan Pujian' : s.score >= 80 ? 'Sangat Memuaskan' : 'Memuaskan';
  return `
  <div class="certificate" id="certDoc_${s.id}" style="background:white">
    <div class="cert-border" style="border-color:${s.borderColor}"></div>
    <div class="cert-content" style="color:#1a1a2e">

      <div style="display:flex;align-items:center;justify-content:center;gap:12px;margin-bottom:6px">
        <img src="logo/logoQuhafiCourse.png" alt="logo" style="width:48px;height:48px;object-fit:contain">
        <div style="text-align:left">
          <div style="font-size:18px;font-weight:800;color:#1a6b3c">Quhafi Course</div>
          <div style="font-size:10px;letter-spacing:2px;color:#888;text-transform:uppercase">Qur'an · Hadis · Fikih · Islam</div>
        </div>
      </div>

      <div style="height:2px;background:linear-gradient(90deg,transparent,${s.borderColor},transparent);margin:16px auto;width:60%"></div>

      <div style="font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#888;margin-bottom:10px">Sertifikat Kelulusan</div>
      <div style="font-size:13px;color:#555;margin-bottom:6px">Dengan bangga diberikan kepada</div>
      <div style="font-size:38px;font-weight:700;color:#1a1a2e;font-style:italic;margin-bottom:4px;font-family:Georgia,serif">${USER_NAME}</div>
      <div style="font-size:13px;color:#888;margin-bottom:20px">Telah berhasil menyelesaikan kursus</div>

      <div style="background:${s.gradient};color:white;padding:14px 32px;border-radius:12px;display:inline-block;margin-bottom:8px">
        <div style="font-size:22px;font-weight:800">${s.title}</div>
        <div style="font-size:12px;opacity:0.85;margin-top:4px">${s.subject} · Quhafi Course</div>
      </div>

      <div style="font-size:13px;color:#555;line-height:1.8;max-width:480px;margin:16px auto 24px">${s.desc}</div>

      ${s.score > 0 ? `
      <div style="display:flex;justify-content:center;gap:24px;margin-bottom:24px">
        <div style="text-align:center;background:#f8f9fa;padding:12px 20px;border-radius:10px">
          <div style="font-size:28px;font-weight:900;color:${s.score>=80?'#27ae60':'#e67e22'}">${s.score}%</div>
          <div style="font-size:11px;color:#888;margin-top:2px">Nilai Akhir</div>
        </div>
        <div style="text-align:center;background:#f8f9fa;padding:12px 20px;border-radius:10px">
          <div style="font-size:16px;font-weight:700;color:#1a6b3c">${scoreLabel}</div>
          <div style="font-size:11px;color:#888;margin-top:2px">Predikat</div>
        </div>
      </div>` : ''}

      <div style="height:1px;background:#eee;margin:0 0 20px"></div>

      <div style="display:flex;justify-content:space-between;align-items:flex-end">
        <div style="text-align:center">
          <div style="font-size:16px;font-weight:700;color:#1a1a2e;font-style:italic;font-family:Georgia,serif">${s.instructor}</div>
          <div style="height:1px;background:#ccc;margin:6px 0"></div>
          <div style="font-size:11px;color:#888;letter-spacing:1px;text-transform:uppercase">Pengajar</div>
        </div>
        <div style="text-align:center">
          <div style="width:70px;height:70px;border-radius:50%;border:3px solid ${s.borderColor};display:flex;align-items:center;justify-content:center;flex-direction:column;margin:0 auto">
            <div style="font-size:20px">🏆</div>
            <div style="font-size:8px;font-weight:700;color:${s.borderColor};letter-spacing:0.5px">RESMI</div>
          </div>
        </div>
        <div style="text-align:center">
          <div style="font-size:16px;font-weight:700;color:#1a1a2e;font-family:Georgia,serif">${s.date}</div>
          <div style="height:1px;background:#ccc;margin:6px 0"></div>
          <div style="font-size:11px;color:#888;letter-spacing:1px;text-transform:uppercase">Tanggal</div>
        </div>
      </div>

      <div style="margin-top:16px;font-size:10px;color:#bbb;font-family:monospace">
        ID: ${s.certNo} · Verifikasi: quhaficourse.id/verify/${s.certNo}
      </div>
    </div>
  </div>`;
}

function openCert(id) {
  const s = ALL_SERTIFIKAT.find(x => x.id === id);
  if (!s || !s.unlocked) return;
  currentCert = s;
  document.getElementById('modalCertContent').innerHTML = buildCertHTML(s);
  document.getElementById('sertifModal').classList.add('show');
}

function closeModal() {
  document.getElementById('sertifModal').classList.remove('show');
}

function downloadSertif() {
  if (!currentCert) return;
  triggerPrint(currentCert);
}

function downloadCertDirect(id) {
  const s = ALL_SERTIFIKAT.find(x => x.id === id);
  if (!s) return;
  currentCert = s;
  triggerPrint(s);
}

function triggerPrint(s) {
  const html = buildCertHTML(s);
  const win = window.open('', '_blank', 'width=900,height=650');
  win.document.write(`<!DOCTYPE html><html><head>
    <title>Sertifikat - ${s.title}</title>
    <style>
      * { margin:0; padding:0; box-sizing:border-box; }
      body { font-family:'Segoe UI',sans-serif; background:#f0f0f0; display:flex; align-items:center; justify-content:center; min-height:100vh; padding:20px; }
      .certificate { max-width:800px; width:100%; }
      @media print { body { background:white; padding:0; } .no-print { display:none; } }
    </style>
  </head><body>
    <div class="no-print" style="text-align:center;margin-bottom:16px">
      <button onclick="window.print()" style="padding:10px 24px;background:#1a6b3c;color:white;border:none;border-radius:8px;font-size:14px;cursor:pointer;margin-right:8px">🖨️ Cetak / Simpan PDF</button>
      <button onclick="window.close()" style="padding:10px 24px;border:1.5px solid #ccc;background:white;border-radius:8px;font-size:14px;cursor:pointer">Tutup</button>
    </div>
    ${html}
  </body></html>`);
  win.document.close();
  showToast('Membuka halaman cetak...');
}

function shareSertif() {
  if (!currentCert) return;
  const text = `Alhamdulillah! Saya telah menyelesaikan kursus ${currentCert.title} di Quhafi Course. 🏆\n\nID Sertifikat: ${currentCert.certNo}`;
  if (navigator.share) {
    navigator.share({ title: 'Sertifikat Quhafi Course', text });
  } else {
    navigator.clipboard.writeText(text).then(() => showToast('Teks sertifikat disalin ke clipboard!'));
  }
}

function showToast(msg) {
  const t = document.getElementById('sertifToast');
  t.textContent = '✅ ' + msg;
  t.className = 'sertif-toast show';
  setTimeout(() => t.classList.remove('show'), 3000);
}

function backToList() {
  document.getElementById('viewList').style.display = 'block';
  document.getElementById('viewPreview').style.display = 'none';
}
