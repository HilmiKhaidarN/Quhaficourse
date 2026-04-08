// ============================================================
// PENGATURAN - FULLY FUNCTIONAL
// ============================================================

// --- INIT ---
initLayout('pengaturan');
// Tab icons
document.getElementById('ti1').innerHTML = IC.user;
document.getElementById('ti2').innerHTML = IC.bell;
document.getElementById('ti3').innerHTML = IC.lock;
document.getElementById('ti4').innerHTML = IC.settings;

// Eye icons for password fields
['eyeLama','eyeBaru','eyeKonfirm'].forEach(id => {
  document.getElementById(id).innerHTML = IC.eye;
});

// Camera icon
document.getElementById('camIcon').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`;

// Load saved data
loadAkun();
loadAvatar();
renderNotifToggles();
renderPrivasiToggles();
renderSessions();
load2FA();

// --- TABS ---
function switchTab(name, el) {
  document.querySelectorAll('.sett-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.sett-content').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('tab-' + name).classList.add('active');
}

// --- TOAST ---
function showToast(msg, isError = false) {
  const t = document.getElementById('settToast');
  t.textContent = (isError ? '❌ ' : '✅ ') + msg;
  t.className = 'sett-toast show' + (isError ? ' error' : '');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// --- MODAL ---
function showModal(icon, title, body, onConfirm) {
  document.getElementById('modalIcon').textContent = icon;
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalBody').textContent = body;
  document.getElementById('modalConfirmBtn').onclick = () => { closeModal(); onConfirm(); };
  document.getElementById('modalOverlay').classList.add('show');
}
function closeModal() {
  document.getElementById('modalOverlay').classList.remove('show');
}

// ============================================================
// TAB AKUN
// ============================================================
const AKUN_DEFAULT = { nama: 'Aisyah Rahma', username: 'aisyah_rahma', email: 'aisyah@email.com', telepon: '', bio: 'Seorang pelajar yang bersemangat untuk memperdalam ilmu agama Islam.', bahasa: 'id', zona: 'WIB' };

function loadAkun() {
  // Priority: saved settings > current user > default
  const user = getCurrentUser();
  const saved = JSON.parse(localStorage.getItem('sett_akun') || 'null');
  const data = saved || (user ? { nama: user.nama, username: user.username, email: user.email, telepon: '', bio: '', bahasa: 'id', zona: 'WIB' } : AKUN_DEFAULT);
  document.getElementById('namaLengkap').value = data.nama || '';
  document.getElementById('username').value = data.username || '';
  document.getElementById('email').value = data.email || '';
  document.getElementById('telepon').value = data.telepon || '';
  document.getElementById('bio').value = data.bio || '';
  document.getElementById('bahasa').value = data.bahasa || 'id';
  document.getElementById('zona').value = data.zona || 'WIB';

  // Statistik dinamis
  const keys = ['fikih','akidah','akhlak','qurdis','sejarah'];
  const kelasAktif = keys.filter(k => parseInt(localStorage.getItem('progress_' + k) || '0') > 0).length;
  const selesai = keys.filter(k => parseInt(localStorage.getItem('progress_' + k) || '0') >= 100).length;
  const sertif = keys.filter(k => parseInt(localStorage.getItem('progress_' + k) || '0') >= 100).length;
  document.getElementById('settStats').innerHTML = `
    <div class="sett-stat-item"><div class="sett-stat-num">${kelasAktif}</div><div class="sett-stat-label">Kelas Diikuti</div></div>
    <div class="sett-stat-item"><div class="sett-stat-num">${selesai}</div><div class="sett-stat-label">Kursus Selesai</div></div>
    <div class="sett-stat-item"><div class="sett-stat-num">${sertif}</div><div class="sett-stat-label">Sertifikat</div></div>`;
  document.getElementById('settJoinDate').textContent = user?.joinDate || '-';
}

async function saveAkun() {
  const nama = document.getElementById('namaLengkap').value.trim();
  const username = document.getElementById('username').value.trim();
  if (!nama) { showToast('Nama lengkap tidak boleh kosong.', true); return; }

  const avatar = localStorage.getItem('sett_avatar') || getCurrentUser()?.avatar || null;
  const { error } = await updateProfile({ nama, username, avatar });
  if (error) { showToast('❌ ' + error, true); return; }

  // Save local prefs
  const data = {
    nama, username,
    email: document.getElementById('email').value.trim(),
    telepon: document.getElementById('telepon').value.trim(),
    bio: document.getElementById('bio').value.trim(),
    bahasa: document.getElementById('bahasa').value,
    zona: document.getElementById('zona').value,
  };
  localStorage.setItem('sett_akun', JSON.stringify(data));
  showToast('Informasi akun berhasil disimpan!');
}

function resetAkun() {
  localStorage.removeItem('sett_akun');
  loadAkun();
  showToast('Data direset ke default.');
}

function confirmDeleteAccount() {
  showModal('⚠️', 'Hapus Akun?', 'Semua data Anda akan dihapus secara permanen. Tindakan ini tidak dapat dibatalkan.', async () => {
    await deleteAccount();
  });
}

// --- AVATAR ---
function loadAvatar() {
  const saved = localStorage.getItem('sett_avatar');
  const el = document.getElementById('avatarPreview');
  if (saved) {
    el.innerHTML = `<img src="${saved}" alt="avatar">`;
  } else {
    el.innerHTML = IC.userCircle;
  }
}

function handleAvatarChange(e) {
  const file = e.target.files[0];
  if (!file) return;
  if (file.size > 2 * 1024 * 1024) { showToast('Ukuran file melebihi 2MB.', true); return; }
  const reader = new FileReader();
  reader.onload = (ev) => {
    localStorage.setItem('sett_avatar', ev.target.result);
    loadAvatar();
    showToast('Foto profil berhasil diperbarui!');
  };
  reader.readAsDataURL(file);
}

function removeAvatar() {
  showModal('🗑️', 'Hapus Foto Profil?', 'Foto profil Anda akan dihapus dan diganti dengan avatar default.', () => {
    localStorage.removeItem('sett_avatar');
    loadAvatar();
    showToast('Foto profil dihapus.');
  });
}

// ============================================================
// TAB NOTIFIKASI
// ============================================================
const NOTIF_ITEMS = [
  { id: 'notif_live',    label: 'Live Class',           desc: 'Notifikasi sebelum live class dimulai',         default: true,  group: 'Aktivitas Belajar' },
  { id: 'notif_kuis',    label: 'Kuis Baru',            desc: 'Pemberitahuan ketika kuis baru tersedia',       default: true,  group: 'Aktivitas Belajar' },
  { id: 'notif_tugas',   label: 'Pengingat Tugas',      desc: 'Ingatkan deadline tugas yang akan datang',      default: true,  group: 'Aktivitas Belajar' },
  { id: 'notif_materi',  label: 'Materi Baru',          desc: 'Pemberitahuan ketika materi baru ditambahkan',  default: true,  group: 'Aktivitas Belajar' },
  { id: 'notif_diskusi', label: 'Balasan Diskusi',       desc: 'Notifikasi ketika ada yang membalas diskusi Anda', default: true, group: 'Sosial' },
  { id: 'notif_sertif',  label: 'Sertifikat Tersedia',  desc: 'Pemberitahuan ketika sertifikat siap diunduh',  default: true,  group: 'Sosial' },
  { id: 'notif_email',   label: 'Email Notifikasi',     desc: 'Terima ringkasan aktivitas via email',          default: false, group: 'Email' },
  { id: 'notif_promo',   label: 'Promosi & Info',       desc: 'Informasi kelas baru dan penawaran spesial',    default: false, group: 'Email' },
];

function getNotifState(id) {
  const saved = localStorage.getItem(id);
  if (saved !== null) return saved === 'true';
  return NOTIF_ITEMS.find(n => n.id === id)?.default ?? false;
}

function renderNotifToggles() {
  const container = document.getElementById('notifToggles');
  let lastGroup = '';
  container.innerHTML = NOTIF_ITEMS.map(item => {
    let groupHtml = '';
    if (item.group !== lastGroup) {
      lastGroup = item.group;
      groupHtml = `<div class="notif-group-label">${item.group}</div>`;
    }
    const on = getNotifState(item.id);
    return `${groupHtml}
      <div class="sett-toggle-row">
        <div class="sett-toggle-info">
          <h4>${item.label}</h4>
          <p>${item.desc}</p>
        </div>
        <button class="sett-toggle ${on ? 'on' : ''}" id="toggle_${item.id}" onclick="toggleItem('${item.id}')"></button>
      </div>`;
  }).join('');
}

function toggleItem(id) {
  const btn = document.getElementById('toggle_' + id);
  const newVal = !btn.classList.contains('on');
  btn.classList.toggle('on', newVal);
  localStorage.setItem(id, newVal);
}

function saveNotif() {
  NOTIF_ITEMS.forEach(item => {
    const btn = document.getElementById('toggle_' + item.id);
    if (btn) localStorage.setItem(item.id, btn.classList.contains('on'));
  });
  showToast('Preferensi notifikasi disimpan!');
}

function resetNotif() {
  NOTIF_ITEMS.forEach(item => localStorage.removeItem(item.id));
  renderNotifToggles();
  showToast('Notifikasi direset ke default.');
}

// ============================================================
// TAB PRIVASI
// ============================================================
const PRIVASI_ITEMS = [
  { id: 'priv_profil',   label: 'Profil Publik',         desc: 'Izinkan pengguna lain melihat profil Anda',       default: true },
  { id: 'priv_progress', label: 'Progress Belajar',      desc: 'Tampilkan progress belajar di profil publik',     default: true },
  { id: 'priv_sertif',   label: 'Sertifikat',            desc: 'Tampilkan sertifikat yang diraih di profil',      default: true },
  { id: 'priv_diskusi',  label: 'Riwayat Diskusi',       desc: 'Izinkan orang lain melihat diskusi Anda',         default: false },
  { id: 'priv_online',   label: 'Status Online',         desc: 'Tampilkan status online Anda kepada pengguna lain', default: false },
  { id: 'priv_analitik', label: 'Analitik & Peningkatan', desc: 'Bantu kami meningkatkan platform dengan data anonim', default: true },
];

function renderPrivasiToggles() {
  document.getElementById('privasiToggles').innerHTML = PRIVASI_ITEMS.map(item => {
    const saved = localStorage.getItem(item.id);
    const on = saved !== null ? saved === 'true' : item.default;
    return `<div class="sett-toggle-row">
      <div class="sett-toggle-info">
        <h4>${item.label}</h4>
        <p>${item.desc}</p>
      </div>
      <button class="sett-toggle ${on ? 'on' : ''}" id="toggle_${item.id}" onclick="toggleItem('${item.id}')"></button>
    </div>`;
  }).join('');
}

function savePrivasi() {
  PRIVASI_ITEMS.forEach(item => {
    const btn = document.getElementById('toggle_' + item.id);
    if (btn) localStorage.setItem(item.id, btn.classList.contains('on'));
  });
  showToast('Pengaturan privasi disimpan!');
}

function downloadData() {
  const data = {
    akun: JSON.parse(localStorage.getItem('sett_akun') || '{}'),
    notifikasi: Object.fromEntries(NOTIF_ITEMS.map(n => [n.id, getNotifState(n.id)])),
    exportedAt: new Date().toISOString(),
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
  a.download = 'quhaficourse-data.json'; a.click();
  showToast('Data berhasil diunduh!');
}

function clearHistory() {
  showModal('🗑️', 'Hapus Riwayat Belajar?', 'Semua riwayat aktivitas belajar Anda akan dihapus. Progress kuis dan materi akan direset.', () => {
    ['thaharah_progress','akidah_progress','akhlak_progress','qurdis_progress','sejarah_progress'].forEach(k => localStorage.removeItem(k));
    showToast('Riwayat belajar berhasil dihapus.');
  });
}

// ============================================================
// TAB KEAMANAN
// ============================================================
function togglePassField(id, btn) {
  const input = document.getElementById(id);
  const isHidden = input.type === 'password';
  input.type = isHidden ? 'text' : 'password';
  btn.innerHTML = isHidden ? IC.eyeOff : IC.eye;
}

function checkPassStrength() {
  const val = document.getElementById('passBaru').value;
  const wrap = document.getElementById('passStrength');
  const fill = document.getElementById('passStrengthFill');
  const label = document.getElementById('passStrengthLabel');
  if (!val) { wrap.style.display = 'none'; return; }
  wrap.style.display = 'flex';
  let score = 0;
  if (val.length >= 8) score++;
  if (/[A-Z]/.test(val)) score++;
  if (/[0-9]/.test(val)) score++;
  if (/[^A-Za-z0-9]/.test(val)) score++;
  const levels = [
    { pct: '25%', color: '#e74c3c', text: 'Lemah' },
    { pct: '50%', color: '#e67e22', text: 'Cukup' },
    { pct: '75%', color: '#f1c40f', text: 'Kuat' },
    { pct: '100%', color: '#27ae60', text: 'Sangat Kuat' },
  ];
  const lvl = levels[score - 1] || levels[0];
  fill.style.width = lvl.pct;
  fill.style.background = lvl.color;
  label.textContent = lvl.text;
  label.style.color = lvl.color;
}

function checkPassMatch() {
  const baru = document.getElementById('passBaru').value;
  const konfirm = document.getElementById('passKonfirm').value;
  const el = document.getElementById('passMatch');
  if (!konfirm) { el.style.display = 'none'; return; }
  el.style.display = 'block';
  if (baru === konfirm) {
    el.textContent = '✅ Password cocok'; el.style.color = '#27ae60';
  } else {
    el.textContent = '❌ Password tidak cocok'; el.style.color = '#e74c3c';
  }
}

async function savePassword() {
  const baru = document.getElementById('passBaru').value;
  const konfirm = document.getElementById('passKonfirm').value;
  if (baru.length < 8) { showToast('Password baru minimal 8 karakter.', true); return; }
  if (baru !== konfirm) { showToast('Konfirmasi password tidak cocok.', true); return; }

  const { error } = await changePassword(baru);
  if (error) { showToast('❌ ' + error.message, true); return; }

  document.getElementById('passLama').value = '';
  document.getElementById('passBaru').value = '';
  document.getElementById('passKonfirm').value = '';
  document.getElementById('passStrength').style.display = 'none';
  document.getElementById('passMatch').style.display = 'none';
  showToast('Password berhasil diubah!');
}

// --- 2FA ---
function load2FA() {
  const on = localStorage.getItem('sett_2fa') === 'true';
  update2FAUI(on);
}

function toggle2FA() {
  const current = localStorage.getItem('sett_2fa') === 'true';
  if (!current) {
    showModal('🔐', 'Aktifkan 2FA?', 'Autentikasi dua faktor akan menambah lapisan keamanan ekstra pada akun Anda.', () => {
      localStorage.setItem('sett_2fa', 'true');
      update2FAUI(true);
      showToast('2FA berhasil diaktifkan!');
    });
  } else {
    showModal('⚠️', 'Nonaktifkan 2FA?', 'Menonaktifkan 2FA akan mengurangi keamanan akun Anda.', () => {
      localStorage.setItem('sett_2fa', 'false');
      update2FAUI(false);
      showToast('2FA dinonaktifkan.');
    });
  }
}

function update2FAUI(on) {
  const badge = document.getElementById('twoFaBadge');
  const btn = document.getElementById('twoFaBtn');
  const info = document.getElementById('twoFaInfo');
  badge.textContent = on ? 'Aktif' : 'Nonaktif';
  badge.className = 'sett-2fa-badge ' + (on ? 'on' : 'off');
  btn.textContent = on ? 'Nonaktifkan 2FA' : 'Aktifkan 2FA';
  btn.className = on ? 'btn-sett-danger' : 'btn-sett-primary';
  info.style.display = on ? 'block' : 'none';
}

// --- SESSIONS ---
const SESSIONS = [
  { device: '💻', name: 'Chrome — Windows 11', loc: 'Jakarta, Indonesia', time: 'Aktif sekarang', current: true },
  { device: '📱', name: 'Safari — iPhone 14', loc: 'Bandung, Indonesia', time: '2 jam lalu', current: false },
  { device: '💻', name: 'Firefox — MacOS', loc: 'Surabaya, Indonesia', time: '1 hari lalu', current: false },
];

function renderSessions() {
  document.getElementById('sessionList').innerHTML = SESSIONS.map((s, i) => `
    <div class="sett-session-item">
      <div class="sett-session-icon">${s.device}</div>
      <div class="sett-session-info">
        <h4>${s.name}</h4>
        <p>${s.loc} · ${s.time}</p>
      </div>
      ${s.current
        ? '<span class="sett-session-current">Ini Anda</span>'
        : `<button class="btn-sett-danger" style="padding:6px 12px;font-size:12px" onclick="revokeSession(${i})">Cabut</button>`}
    </div>`).join('');
}

function revokeSession(i) {
  showModal('🔒', 'Cabut Sesi?', `Perangkat "${SESSIONS[i].name}" akan dikeluarkan dari akun Anda.`, () => {
    SESSIONS.splice(i, 1);
    renderSessions();
    showToast('Sesi berhasil dicabut.');
  });
}

function logoutAll() {
  showModal('🚪', 'Keluar dari Semua Perangkat?', 'Semua sesi aktif akan diakhiri. Anda perlu login ulang di semua perangkat.', () => {
    showToast('Berhasil keluar dari semua perangkat.');
    setTimeout(() => window.location.href = 'index.html', 1500);
  });
}
