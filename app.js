// ============================================================
// SUPABASE CLIENT INIT
// ============================================================
let _supabase = null;
if (typeof supabase !== 'undefined' && typeof SUPABASE_URL !== 'undefined' && typeof SUPABASE_ANON_KEY !== 'undefined') {
  _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: { persistSession: true }
  });
} else {
  console.error('[AuthService] Supabase tidak tersedia. Periksa CDN dan supabase-config.js.');
}

// ============================================================
// AUTH CACHE
// ============================================================
let _currentUserCache = null;

async function _fetchAndCacheProfile(userId, email) {
  if (!_supabase) return null;
  const { data, error } = await _supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
  if (error || !data) return null;
  _currentUserCache = {
    id: userId,
    nama: data.nama,
    email: email,
    username: data.username,
    role: data.role,
    avatar: data.avatar,
    joinDate: data.join_date,
  };
  return _currentUserCache;
}

// Setup auth state listener
if (_supabase) {
  _supabase.auth.onAuthStateChange(async (event, session) => {
    if (session?.user) {
      await _fetchAndCacheProfile(session.user.id, session.user.email);
    } else {
      _currentUserCache = null;
    }
  });
}

// ============================================================
// AUTH HELPERS (backward compatible)
// ============================================================
function getCurrentUser() { return _currentUserCache; }
function setCurrentUser(u) { _currentUserCache = u; } // kept for compatibility

// Deprecated — kept for compatibility with non-auth code
function getUsers() { return JSON.parse(localStorage.getItem('qc_users') || '[]'); }
function saveUsers(u) { localStorage.setItem('qc_users', JSON.stringify(u)); }

// ============================================================
// AUTH GUARD
// ============================================================
async function requireAuth(adminOnly = false) {
  if (!_supabase) return;
  const { data: { session } } = await _supabase.auth.getSession();
  if (!session) {
    window.location.href = 'index.html';
    return;
  }
  if (!_currentUserCache) {
    await _fetchAndCacheProfile(session.user.id, session.user.email);
  }
  if (adminOnly && _currentUserCache?.role !== 'Admin') {
    window.location.href = 'dashboard.html';
  }
}

async function requireGuest() {
  if (!_supabase) return;
  const { data: { session } } = await _supabase.auth.getSession();
  if (session) {
    if (!_currentUserCache) {
      await _fetchAndCacheProfile(session.user.id, session.user.email);
    }
    window.location.href = _currentUserCache?.role === 'Admin' ? 'admin.html' : 'dashboard.html';
  }
}

// ============================================================
// LOGIN
// ============================================================
async function handleLogin(e) {
  e.preventDefault();
  if (!_supabase) { showAuthError('loginError', '❌ Koneksi ke server gagal.'); return; }

  const identifier = document.getElementById('loginIdentifier').value.trim();
  const password = document.getElementById('loginPass').value;

  let email = identifier;

  // Jika bukan email, cari email dari username via profiles
  if (!identifier.includes('@')) {
    const { data: profile } = await _supabase
      .from('profiles')
      .select('email')
      .eq('username', identifier)
      .single();

    if (!profile?.email) {
      showAuthError('loginError', '❌ Email/username atau password salah.');
      return;
    }
    email = profile.email;
  }

  const { data, error } = await _supabase.auth.signInWithPassword({ email, password });
  if (error) {
    showAuthError('loginError', '❌ Email/username atau password salah.');
    return;
  }

  await _fetchAndCacheProfile(data.user.id, data.user.email);
  window.location.href = _currentUserCache?.role === 'Admin' ? 'admin.html' : 'dashboard.html';
}

// ============================================================
// REGISTER
// ============================================================
async function handleRegister(e) {
  e.preventDefault();
  if (!_supabase) { showAuthError('regError', '❌ Koneksi ke server gagal.'); return; }

  const nama = document.getElementById('regNama').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const username = document.getElementById('regUsername').value.trim();
  const pass = document.getElementById('regPass').value;
  const pass2 = document.getElementById('regPass2').value;

  if (!nama || !email || !username || !pass) {
    showAuthError('regError', '❌ Semua field wajib diisi.'); return;
  }
  if (pass.length < 6) {
    showAuthError('regError', '❌ Password minimal 6 karakter.'); return;
  }
  if (pass !== pass2) {
    showAuthError('regError', '❌ Konfirmasi password tidak cocok.'); return;
  }

  // Cek username sudah dipakai
  const { data: existing } = await _supabase
    .from('profiles')
    .select('id')
    .eq('username', username)
    .single();
  if (existing) {
    showAuthError('regError', '❌ Username sudah digunakan.'); return;
  }

  // SignUp
  const { data, error } = await _supabase.auth.signUp({ email, password: pass });
  if (error) {
    showAuthError('regError', '❌ ' + (error.message.includes('already') ? 'Email sudah terdaftar.' : error.message));
    return;
  }

  // Insert profile
  const joinDate = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
  const { error: profileErr } = await _supabase.from('profiles').insert({
    id: data.user.id,
    nama,
    username,
    email,
    role: 'Pelajar',
    avatar: null,
    join_date: joinDate,
  });

  if (profileErr) {
    showAuthError('regError', '❌ Gagal menyimpan profil. Coba lagi.');
    return;
  }

  await _fetchAndCacheProfile(data.user.id, email);
  window.location.href = 'dashboard.html';
}

// ============================================================
// LOGOUT
// ============================================================
async function handleLogout() {
  if (_supabase) await _supabase.auth.signOut();
  _currentUserCache = null;
  window.location.href = 'index.html';
}

// ============================================================
// UPDATE PROFILE
// ============================================================
async function updateProfile(data) {
  if (!_supabase || !_currentUserCache) return { error: 'Tidak ada sesi aktif.' };

  // Cek username conflict
  if (data.username && data.username !== _currentUserCache.username) {
    const { data: existing } = await _supabase
      .from('profiles')
      .select('id')
      .eq('username', data.username)
      .single();
    if (existing) return { error: 'Username sudah digunakan.' };
  }

  const { error } = await _supabase
    .from('profiles')
    .update({ nama: data.nama, username: data.username, avatar: data.avatar })
    .eq('id', _currentUserCache.id);

  if (!error) {
    _currentUserCache = { ..._currentUserCache, ...data };
  }
  return { error };
}

// ============================================================
// CHANGE PASSWORD
// ============================================================
async function changePassword(newPass) {
  if (!_supabase) return { error: 'Tidak ada koneksi.' };
  const { error } = await _supabase.auth.updateUser({ password: newPass });
  return { error };
}

// ============================================================
// DELETE ACCOUNT
// ============================================================
async function deleteAccount() {
  if (!_supabase || !_currentUserCache) return;
  await _supabase.from('profiles').delete().eq('id', _currentUserCache.id);
  await _supabase.auth.signOut();
  _currentUserCache = null;
  window.location.href = 'index.html';
}


// ============================================================
// UI HELPERS
// ============================================================
function togglePass(id) {
  const el = document.getElementById(id);
  const isHidden = el.type === 'password';
  el.type = isHidden ? 'text' : 'password';
  const btn = el.parentElement.querySelector('.eye-icon');
  if (btn) btn.innerHTML = isHidden ? IC.eyeOff : IC.eye;
}

function showAuthError(elId, msg) {
  const el = document.getElementById(elId);
  if (!el) return;
  el.textContent = msg;
  el.style.display = 'block';
  setTimeout(() => el.style.display = 'none', 4000);
}

// ============================================================
// SIDEBAR & TOPBAR
// ============================================================
function buildSidebar(active) {
  const navItems = [
    { icon: IC.home,          label: 'Dashboard',  href: 'dashboard.html',  key: 'dashboard' },
    { icon: IC.bookOpen,      label: 'Kelas Saya', href: 'kelas.html',      key: 'kelas' },
    { icon: IC.fileText,      label: 'Materi',     href: 'materi.html',     key: 'materi' },
    { icon: IC.video,         label: 'Live Class', href: 'live-class.html', key: 'live' },
    { icon: IC.clipboardCheck,label: 'Kuis',       href: 'kuis.html',       key: 'kuis' },
    { icon: IC.clipboardList, label: 'Tugas',      href: 'tugas.html',      key: 'tugas' },
    { icon: IC.messageCircle, label: 'Diskusi',    href: 'diskusi.html',    key: 'diskusi' },
    { icon: IC.award,         label: 'Sertifikat', href: 'sertifikat.html', key: 'sertifikat' },
  ];
  const lainnya = [
    { icon: IC.settings, label: 'Pengaturan', href: 'pengaturan.html', key: 'pengaturan' },
    { icon: IC.logOut,   label: 'Keluar',     href: '#',               key: 'keluar', onclick: 'handleLogout()' },
  ];
  const nav = navItems.map(n => `
    <a href="${n.href}" class="nav-item ${active === n.key ? 'active' : ''}">
      <span class="nav-icon">${n.icon}</span> ${n.label}
    </a>`).join('');
  const lain = lainnya.map(n => `
    <a href="${n.href}" class="nav-item ${active === n.key ? 'active' : ''}" ${n.onclick ? `onclick="${n.onclick}"` : ''}>
      <span class="nav-icon">${n.icon}</span> ${n.label}
    </a>`).join('');
  return `
    <div class="sidebar-logo">
      <img src="logo/logoQuhafiCourse.png" alt="QuhafCourse" class="sidebar-logo-img">
      <div class="logo-text">
        <h2>Quhafi<span>Course</span></h2>
        <p>Qur'an, Hadis, Fikih, Islam</p>
      </div>
    </div>
    <nav class="sidebar-nav">
      ${nav}
      <div class="nav-label" style="margin-top:12px">Lainnya</div>
      ${lain}
    </nav>`;
}

function getNotifs() { return JSON.parse(localStorage.getItem('qc_notifs') || '[]'); }
function saveNotifs(list) { localStorage.setItem('qc_notifs', JSON.stringify(list)); }

let _notifCache = [];
let _readCache = [];

async function loadNotifCache() {
  if (!_supabase) return;
  const cu = getCurrentUser();
  const { data: notifs } = await _supabase.from('notifications').select('*').order('created_at', { ascending: false }).limit(20);
  _notifCache = notifs || [];
  if (cu) {
    const { data: reads } = await _supabase.from('notification_reads').select('notification_id').eq('user_username', cu.username);
    _readCache = (reads || []).map(r => r.notification_id);
  }
}

function getUnreadCount() {
  return _notifCache.filter(n => !_readCache.includes(n.id)).length;
}

function markNotifRead(id) {
  if (!_readCache.includes(id)) {
    _readCache.push(id);
    const cu = getCurrentUser();
    if (_supabase && cu) {
      _supabase.from('notification_reads').upsert({ notification_id: id, user_username: cu.username }, { onConflict: 'notification_id,user_username' });
    }
  }
}

async function markAllRead() {
  const cu = getCurrentUser();
  if (_supabase && cu && _notifCache.length) {
    const inserts = _notifCache.map(n => ({ notification_id: n.id, user_username: cu.username }));
    await _supabase.from('notification_reads').upsert(inserts, { onConflict: 'notification_id,user_username' });
  }
  _readCache = _notifCache.map(n => n.id);
  renderNotifPanel();
  updateNotifBadge();
}

function updateNotifBadge() {
  const dot = document.querySelector('.notif-dot');
  const badge = document.querySelector('.notif-count');
  const count = getUnreadCount();
  if (dot) dot.style.display = count > 0 ? 'block' : 'none';
  if (badge) { badge.textContent = count; badge.style.display = count > 0 ? 'flex' : 'none'; }
}

function renderNotifPanel() {
  const panel = document.getElementById('notifPanel');
  if (!panel) return;
  const notifs = _notifCache;
  const unread = getUnreadCount();
  panel.innerHTML = `
    <div class="notif-panel-header">
      <span class="notif-panel-title">Notifikasi</span>
      ${unread > 0 ? `<button class="notif-mark-all" onclick="markAllRead()">Tandai semua dibaca</button>` : ''}
    </div>
    <div class="notif-list">
      ${notifs.length === 0
        ? `<div style="text-align:center;padding:40px 20px;color:var(--text-light)">
             <div style="font-size:36px;margin-bottom:8px">🔔</div>
             <div style="font-size:13px">Belum ada notifikasi</div>
           </div>`
        : notifs.map(n => {
            const isRead = _readCache.includes(n.id);
            const timeAgoStr = n.created_at ? timeAgoNotif(n.created_at) : '';
            return `<div class="notif-item ${isRead ? 'read' : 'unread'}" onclick="handleNotifClick('${n.id}', '${n.href}')">
              <div class="notif-icon-wrap">${n.icon}</div>
              <div class="notif-content">
                <div class="notif-title">${n.title}</div>
                <div class="notif-body">${n.body}</div>
                <div class="notif-time">${timeAgoStr}</div>
              </div>
              ${!isRead ? '<div class="notif-unread-dot"></div>' : ''}
            </div>`;
          }).join('')
      }
    </div>
    ${notifs.length > 0 ? `<a href="#" class="notif-panel-footer">Lihat semua notifikasi</a>` : ''}`;
}

function timeAgoNotif(ts) {
  const diff = Date.now() - new Date(ts).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return 'Baru saja';
  if (m < 60) return m + ' menit lalu';
  const h = Math.floor(m / 60);
  if (h < 24) return h + ' jam lalu';
  return Math.floor(h / 24) + ' hari lalu';
}

function handleNotifClick(id, href) {
  markNotifRead(id);
  updateNotifBadge();
  renderNotifPanel();
  window.location.href = href;
}

function toggleNotif(e) {
  e.stopPropagation();
  const panel = document.getElementById('notifPanel');
  const isOpen = panel.classList.contains('open');
  document.querySelectorAll('.notif-panel.open').forEach(p => p.classList.remove('open'));
  if (!isOpen) {
    panel.classList.add('open');
    loadNotifCache().then(() => {
      renderNotifPanel();
      updateNotifBadge();
    });
  }
}

function buildTopbar() {
  const user = getCurrentUser();
  const nama = user ? user.nama : 'Tamu';
  const role = user ? user.role : 'Pelajar';
  const initials = nama.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
  const count = getUnreadCount();
  return `
    <div class="topbar-search">
      <span class="icon">${IC.search}</span>
      <input type="text" placeholder="Cari materi, kelas, atau topik..." onkeydown="handleSearch(event)">
    </div>
    <div class="topbar-right">
      <div class="notif-wrapper" id="notifWrapper">
        <button class="notif-btn" onclick="toggleNotif(event)" aria-label="Notifikasi">
          ${IC.bell}
          <span class="notif-dot" style="display:${count > 0 ? 'block' : 'none'}"></span>
          <span class="notif-count" style="display:${count > 0 ? 'flex' : 'none'}">${count}</span>
        </button>
        <div class="notif-panel" id="notifPanel"></div>
      </div>
      <div class="user-info" onclick="window.location.href='profil.html'" style="cursor:pointer">
        <div class="user-avatar" style="font-size:13px;font-weight:700;background:var(--green);color:white">${initials}</div>
        <div>
          <div class="user-name">${nama}</div>
          <div class="user-role">${role}</div>
        </div>
      </div>
    </div>`;
}

function handleSearch(e) {
  if (e.key === 'Enter') {
    const q = e.target.value.trim().toLowerCase();
    if (!q) return;
    const map = [
      { keys: ['fikih','thaharah','wudhu','shalat','zakat','puasa','haji'], href: 'belajar-thaharah.html' },
      { keys: ['akidah','rukun iman','tauhid','malaikat','hari akhir','takdir'], href: 'belajar-akidah.html' },
      { keys: ['akhlak','jujur','sabar','syukur','tawadhu','ghibah'], href: 'belajar-akhlak.html' },
      { keys: ['qurdis','quran','hadits','tajwid','asbabun nuzul'], href: 'belajar-qurdis.html' },
      { keys: ['sejarah','nabi','hijrah','khulafaur','wali songo'], href: 'belajar-sejarah.html' },
      { keys: ['kelas'], href: 'kelas.html' },
      { keys: ['diskusi'], href: 'diskusi.html' },
      { keys: ['kuis'], href: 'kuis.html' },
      { keys: ['tugas'], href: 'tugas.html' },
      { keys: ['sertifikat'], href: 'sertifikat.html' },
      { keys: ['live'], href: 'live-class.html' },
    ];
    for (const m of map) {
      if (m.keys.some(k => q.includes(k))) { window.location.href = m.href; return; }
    }
    window.location.href = 'materi.html';
  }
}

async function initLayout(activeKey, adminOnly = false) {
  // Auth guard async — cek session dulu sebelum render apapun
  if (_supabase) {
    const { data: { session } } = await _supabase.auth.getSession();
    if (!session) {
      window.location.href = 'index.html';
      return;
    }
    if (!_currentUserCache) {
      await _fetchAndCacheProfile(session.user.id, session.user.email);
    }
    if (adminOnly && _currentUserCache?.role !== 'Admin') {
      window.location.href = 'dashboard.html';
      return;
    }
    loadNotifCache().then(() => updateNotifBadge());
    loadAllProgress();
  }

  // Render sidebar/topbar setelah session & profile siap
  const sidebar = document.getElementById('sidebar');
  const topbar = document.getElementById('topbar');
  if (sidebar) sidebar.innerHTML = buildSidebar(activeKey);
  if (topbar) topbar.innerHTML = buildTopbar();
  document.addEventListener('click', (e) => {
    const wrapper = document.getElementById('notifWrapper');
    if (wrapper && !wrapper.contains(e.target)) {
      const panel = document.getElementById('notifPanel');
      if (panel) panel.classList.remove('open');
    }
  });
}

function initTabs(containerSelector) {
  const tabs = document.querySelectorAll(containerSelector + ' .tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
}

function initToggles() {
  document.querySelectorAll('.toggle').forEach(t => {
    t.addEventListener('click', () => t.classList.toggle('on'));
  });
}

// ============================================================
// PROGRESS & SCORE HELPERS (Supabase)
// ============================================================
async function saveProgressToCloud(courseKey, pct) {
  localStorage.setItem('progress_' + courseKey, pct);
  const cu = getCurrentUser();
  if (!_supabase || !cu) return;
  await _supabase.from('user_progress').upsert({ user_username: cu.username, course_key: courseKey, progress: pct, updated_at: new Date().toISOString() }, { onConflict: 'user_username,course_key' });
}

async function getScoreFromCloud(courseKey) {
  const cu = getCurrentUser();
  if (!_supabase || !cu) return parseInt(localStorage.getItem('score_' + courseKey) || '0') || null;
  const { data } = await _supabase.from('user_progress').select('score').eq('user_username', cu.username).eq('course_key', courseKey).single();
  return data?.score ?? null;
}

async function saveScoreToCloud(courseKey, score) {
  localStorage.setItem('score_' + courseKey, score);
  const cu = getCurrentUser();
  if (!_supabase || !cu) return;
  const pct = score >= 70 ? 100 : parseInt(localStorage.getItem('progress_' + courseKey) || '0');
  await _supabase.from('user_progress').upsert({ user_username: cu.username, course_key: courseKey, score, progress: pct, updated_at: new Date().toISOString() }, { onConflict: 'user_username,course_key' });
}

async function loadAllProgress() {
  const cu = getCurrentUser();
  if (!_supabase || !cu) return;
  const { data } = await _supabase.from('user_progress').select('*').eq('user_username', cu.username);
  (data || []).forEach(row => {
    localStorage.setItem('progress_' + row.course_key, row.progress);
    if (row.score !== null) localStorage.setItem('score_' + row.course_key, row.score);
  });
}
