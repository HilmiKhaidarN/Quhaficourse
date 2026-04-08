// DISKUSI.JS — Supabase version

// ============================================================
// INIT SUPABASE CLIENT
// ============================================================
let supabaseClient;
try {
  supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} catch (e) {
  document.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('threadList');
    if (el) el.innerHTML = '<div class="empty-state"><p>Gagal terhubung ke server. Coba refresh halaman.</p></div>';
  });
}

// ============================================================
// STATE
// ============================================================
let threads = [];
let activeFilter = 'terbaru';
let currentThreadId = null;
let activeChannel = null;
let userLikedSet = new Set();

// ============================================================
// LABEL & HELPERS
// ============================================================
const LABEL_COLORS = {
  'Pertanyaan': { bg: '#e8f4fd', color: '#2980b9' },
  'Diskusi':    { bg: '#e8f5ee', color: '#1a6b3c' },
  'Pengumuman': { bg: '#fef9e7', color: '#c9a227' },
};

function labelBadge(label) {
  if (!label) return '';
  const c = LABEL_COLORS[label] || { bg: '#f0f0f0', color: '#888' };
  return `<span style="font-size:11px;padding:2px 8px;border-radius:20px;background:${c.bg};color:${c.color};font-weight:600">${label}</span>`;
}

function getInitials(name) {
  return (name || '').split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
}

function timeAgo(ts) {
  if (!ts) return '';
  const diff = Date.now() - new Date(ts).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return 'Baru saja';
  if (m < 60) return m + ' menit lalu';
  const h = Math.floor(m / 60);
  if (h < 24) return h + ' jam lalu';
  const d = Math.floor(h / 24);
  if (d < 30) return d + ' hari lalu';
  return new Date(ts).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
}

function isLiked(type, id) {
  return userLikedSet.has(type + '_' + id);
}


// ============================================================
// LOAD USER LIKES
// ============================================================
async function loadUserLikes(username) {
  if (!username) return;
  const { data, error } = await supabaseClient
    .from('discussion_likes')
    .select('target_type, target_id')
    .eq('user_username', username);
  if (error) { console.error('loadUserLikes error:', error); return; }
  userLikedSet = new Set((data || []).map(r => r.target_type + '_' + r.target_id));
}

// ============================================================
// LOAD THREADS
// ============================================================
async function loadThreads() {
  const container = document.getElementById('threadList');
  if (container) container.innerHTML = '<div class="empty-state"><p>Memuat diskusi...</p></div>';

  const { data: threadData, error } = await supabaseClient
    .from('discussion_threads')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    showToast('Gagal memuat diskusi.', true);
    return;
  }

  // Fetch reply counts
  const { data: replyCounts } = await supabaseClient
    .from('discussion_replies')
    .select('thread_id');

  const countMap = {};
  (replyCounts || []).forEach(r => {
    countMap[r.thread_id] = (countMap[r.thread_id] || 0) + 1;
  });

  threads = (threadData || []).map(t => ({
    ...t,
    reply_count: countMap[t.id] || 0,
  }));

  renderThreadList();
}

// ============================================================
// FILTER & RENDER THREAD LIST
// ============================================================
function filterThread(f, el) {
  activeFilter = f;
  document.querySelectorAll('.dtab').forEach(t => t.classList.remove('active'));
  if (el) el.classList.add('active');
  renderThreadList();
}

function renderThreadList() {
  const search = (document.getElementById('searchInput')?.value || '').toLowerCase();
  const kat = document.getElementById('filterKategori')?.value || '';
  let list = [...threads];

  if (kat) list = list.filter(t => t.kategori === kat);
  if (search) list = list.filter(t =>
    t.title.toLowerCase().includes(search) || t.body.toLowerCase().includes(search)
  );

  if (activeFilter === 'populer') {
    list.sort((a, b) => (b.likes_count + b.reply_count * 2) - (a.likes_count + a.reply_count * 2));
  } else if (activeFilter === 'belum') {
    list = list.filter(t => t.reply_count === 0);
  } else if (activeFilter === 'terjawab') {
    list = list.filter(t => t.has_best);
  } else {
    // terbaru: pinned di atas, lalu created_at desc
    list.sort((a, b) => {
      if (a.is_pinned !== b.is_pinned) return b.is_pinned ? 1 : -1;
      return new Date(b.created_at) - new Date(a.created_at);
    });
  }

  const container = document.getElementById('threadList');
  if (!list.length) {
    container.innerHTML = `<div class="empty-state"><div class="es-icon">💬</div><h3>Belum ada diskusi</h3><p>Jadilah yang pertama memulai diskusi!</p></div>`;
    return;
  }

  container.innerHTML = list.map(t => {
    const liked = isLiked('thread', t.id);
    return `<div class="thread-card ${t.is_pinned ? 'pinned' : ''}" onclick="openThread('${t.id}')">
      <div class="tc-header">
        <div class="tc-avatar">${t.author_initials}</div>
        <div class="tc-meta">
          <div class="tc-name">${t.author_name}</div>
          <div class="tc-time">${timeAgo(t.created_at)} · ${t.kategori}</div>
        </div>
        <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap">
          ${labelBadge(t.label)}<span class="tc-badge">${t.kategori}</span>
          ${t.is_pinned ? '<span class="tc-badge pinned-badge">📌 Pinned</span>' : ''}
        </div>
      </div>
      <div class="tc-title">${t.title}</div>
      <div class="tc-body">${t.body}</div>
      <div class="tc-footer">
        <span class="tc-stat"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>${t.reply_count} Balasan</span>
        <span class="tc-stat"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>${t.views} Dilihat</span>
        <button class="tc-like-btn ${liked ? 'liked' : ''}" onclick="event.stopPropagation();likeThread('${t.id}')">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="${liked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>${t.likes_count}
        </button>
        ${t.has_best ? '<span class="tc-answered">✅ Terjawab</span>' : ''}
      </div>
    </div>`;
  }).join('');
}


// ============================================================
// OPEN THREAD DETAIL
// ============================================================
async function openThread(id) {
  currentThreadId = id;
  document.getElementById('viewList').style.display = 'none';
  document.getElementById('viewThread').style.display = 'block';
  document.getElementById('threadDetail').innerHTML = '<div class="empty-state"><p>Memuat thread...</p></div>';
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Fetch thread
  const { data: t, error: tErr } = await supabaseClient
    .from('discussion_threads')
    .select('*')
    .eq('id', id)
    .single();
  if (tErr || !t) { showToast('Gagal memuat thread.', true); return; }

  // Fetch replies
  const { data: replies, error: rErr } = await supabaseClient
    .from('discussion_replies')
    .select('*')
    .eq('thread_id', id)
    .order('created_at', { ascending: true });
  if (rErr) { showToast('Gagal memuat balasan.', true); return; }

  // Increment views
  await supabaseClient
    .from('discussion_threads')
    .update({ views: t.views + 1 })
    .eq('id', id);
  t.views = t.views + 1;

  t.replies = replies || [];
  renderThreadDetail(t);
  subscribeToReplies(id);
}

function renderThreadDetail(t) {
  const liked = isLiked('thread', t.id);
  const cu = getCurrentUser();
  const isOwner = cu && (cu.username === t.author_username);
  const sorted = [...(t.replies || [])].sort((a, b) => {
    if (a.is_best !== b.is_best) return b.is_best ? 1 : -1;
    return new Date(a.created_at) - new Date(b.created_at);
  });

  document.getElementById('threadDetail').innerHTML = `
    <div class="thread-detail-wrap">
      <button class="td-back" onclick="backToList()">← Kembali ke Diskusi</button>
      <div class="td-main">
        <div class="td-header">
          <div class="td-avatar">${t.author_initials}</div>
          <div class="td-meta"><h4>${t.author_name}</h4><p>${timeAgo(t.created_at)} · ${t.kategori}</p></div>
          <div style="display:flex;gap:6px">${labelBadge(t.label)}<span class="tc-badge">${t.kategori}</span></div>
        </div>
        <div class="td-title">${t.title}</div>
        <div class="td-body">${t.body}</div>
        <div class="td-actions">
          <button class="td-action-btn ${liked ? 'liked' : ''}" onclick="likeThread('${t.id}')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${liked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>Suka (${t.likes_count})
          </button>
          <button class="td-action-btn" onclick="reportThread('${t.id}')" style="color:#e74c3c">🚩 Laporkan</button>
          <span style="font-size:13px;color:var(--text-light);margin-left:auto">👁 ${t.views} · 💬 ${(t.replies || []).length}</span>
        </div>
      </div>
      <div class="replies-section" id="repliesSection">
        <div class="replies-header">Balasan <span class="replies-count">${(t.replies || []).length}</span></div>
        <div id="repliesList">
          ${renderRepliesHTML(sorted, t.id, isOwner)}
        </div>
      </div>
      <div class="reply-form">
        <h4>Tulis Balasan</h4>
        <textarea id="replyInput" placeholder="Tulis balasan Anda..." maxlength="800" oninput="document.getElementById('replyCharCount').textContent=this.value.length+'/800'"></textarea>
        <div class="reply-form-footer">
          <span class="reply-char" id="replyCharCount">0/800</span>
          <button class="btn-reply-submit" onclick="submitReply('${t.id}')">Kirim Balasan</button>
        </div>
      </div>
    </div>`;
}

function renderRepliesHTML(replies, threadId, isOwner) {
  if (!replies.length) {
    return '<div class="empty-state" style="padding:30px"><div class="es-icon">💬</div><p>Belum ada balasan.</p></div>';
  }
  return replies.map(r => {
    const rl = isLiked('reply', r.id);
    return `<div class="reply-card ${r.is_best ? 'best' : ''}" id="reply-${r.id}">
      <div class="reply-header">
        <div class="reply-avatar">${r.author_initials}</div>
        <div class="reply-meta"><h4>${r.author_name}</h4><p>${timeAgo(r.created_at)}</p></div>
        ${r.is_best ? '<span class="reply-best-badge">✅ Jawaban Terbaik</span>' : ''}
      </div>
      <div class="reply-body">${r.body}</div>
      <div class="reply-actions">
        <button class="reply-like-btn ${rl ? 'liked' : ''}" onclick="likeReply('${threadId}','${r.id}')">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="${rl ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>Suka (${r.likes_count})
        </button>
        ${isOwner && !r.is_best ? `<button class="reply-like-btn" onclick="markBest('${threadId}','${r.id}')" style="color:#1a6b3c">✅ Tandai Terbaik</button>` : ''}
        <button class="reply-like-btn" onclick="reportReply('${threadId}','${r.id}')" style="color:#e74c3c;margin-left:auto">🚩</button>
      </div>
    </div>`;
  }).join('');
}


// ============================================================
// SUBMIT THREAD
// ============================================================
async function submitThread() {
  const title = document.getElementById('newTitle').value.trim();
  const body = document.getElementById('newBody').value.trim();
  const kat = document.getElementById('newKategori').value;
  const label = document.getElementById('newLabel')?.value || '';

  const cu = getCurrentUser();
  if (!cu) { showToast('Silakan login terlebih dahulu.', true); return; }
  if (!title || title.length < 5) { showToast('Judul minimal 5 karakter.', true); return; }
  if (!kat) { showToast('Pilih kategori.', true); return; }
  if (!body || body.length < 20) { showToast('Isi minimal 20 karakter.', true); return; }

  const payload = {
    author_name: cu.nama,
    author_initials: getInitials(cu.nama),
    author_username: cu.username,
    kategori: kat,
    title,
    body,
    label: label || null,
  };

  const { error } = await supabaseClient.from('discussion_threads').insert(payload);
  if (error) { showToast('Gagal menyimpan diskusi. Coba lagi.', true); return; }

  closeModal();
  showToast('Diskusi berhasil diposting!');
  await loadThreads();
}

// ============================================================
// SUBMIT REPLY
// ============================================================
async function submitReply(threadId) {
  const input = document.getElementById('replyInput');
  const body = input.value.trim();
  const cu = getCurrentUser();

  if (!cu) { showToast('Silakan login terlebih dahulu.', true); return; }
  if (!body) { showToast('Balasan tidak boleh kosong.', true); return; }
  if (body.length < 10) { showToast('Min. 10 karakter.', true); return; }

  const payload = {
    thread_id: threadId,
    author_name: cu.nama,
    author_initials: getInitials(cu.nama),
    author_username: cu.username,
    body,
  };

  const { error } = await supabaseClient.from('discussion_replies').insert(payload);
  if (error) { showToast('Gagal mengirim balasan. Coba lagi.', true); return; }

  input.value = '';
  document.getElementById('replyCharCount').textContent = '0/800';
  showToast('Balasan berhasil dikirim!');
}

// ============================================================
// MARK BEST
// ============================================================
async function markBest(threadId, replyId) {
  // Reset semua reply is_best = false
  await supabaseClient
    .from('discussion_replies')
    .update({ is_best: false })
    .eq('thread_id', threadId);

  // Set target reply is_best = true
  const { error } = await supabaseClient
    .from('discussion_replies')
    .update({ is_best: true })
    .eq('id', replyId);

  if (error) { showToast('Gagal menandai jawaban terbaik.', true); return; }
  showToast('Jawaban terbaik ditandai!');
  await openThread(threadId);
}

// ============================================================
// LIKE SYSTEM
// ============================================================
async function likeThread(id) {
  const cu = getCurrentUser();
  if (!cu) { showToast('Silakan login untuk menyukai.', true); return; }

  const liked = isLiked('thread', id);
  const thread = threads.find(t => t.id === id);

  if (liked) {
    await supabaseClient.from('discussion_likes')
      .delete()
      .eq('target_type', 'thread')
      .eq('target_id', id)
      .eq('user_username', cu.username);
    await supabaseClient.from('discussion_threads')
      .update({ likes_count: Math.max(0, (thread?.likes_count || 1) - 1) })
      .eq('id', id);
    userLikedSet.delete('thread_' + id);
  } else {
    await supabaseClient.from('discussion_likes')
      .insert({ target_type: 'thread', target_id: id, user_username: cu.username });
    await supabaseClient.from('discussion_threads')
      .update({ likes_count: (thread?.likes_count || 0) + 1 })
      .eq('id', id);
    userLikedSet.add('thread_' + id);
  }

  await loadThreads();
  if (currentThreadId === id) await openThread(id);
}

async function likeReply(threadId, replyId) {
  const cu = getCurrentUser();
  if (!cu) { showToast('Silakan login untuk menyukai.', true); return; }

  const liked = isLiked('reply', replyId);

  if (liked) {
    await supabaseClient.from('discussion_likes')
      .delete()
      .eq('target_type', 'reply')
      .eq('target_id', replyId)
      .eq('user_username', cu.username);
    const { data: r } = await supabaseClient.from('discussion_replies').select('likes_count').eq('id', replyId).single();
    await supabaseClient.from('discussion_replies')
      .update({ likes_count: Math.max(0, (r?.likes_count || 1) - 1) })
      .eq('id', replyId);
    userLikedSet.delete('reply_' + replyId);
  } else {
    await supabaseClient.from('discussion_likes')
      .insert({ target_type: 'reply', target_id: replyId, user_username: cu.username });
    const { data: r } = await supabaseClient.from('discussion_replies').select('likes_count').eq('id', replyId).single();
    await supabaseClient.from('discussion_replies')
      .update({ likes_count: (r?.likes_count || 0) + 1 })
      .eq('id', replyId);
    userLikedSet.add('reply_' + replyId);
  }

  await openThread(threadId);
}


// ============================================================
// REALTIME
// ============================================================
function subscribeToReplies(threadId) {
  unsubscribeActive();
  activeChannel = supabaseClient
    .channel('replies-' + threadId)
    .on('postgres_changes', {
      event: 'INSERT',
      schema: 'public',
      table: 'discussion_replies',
      filter: 'thread_id=eq.' + threadId,
    }, async (payload) => {
      const newReply = payload.new;
      const cu = getCurrentUser();
      const isOwner = cu && cu.username === newReply.author_username;

      // Append to repliesList
      const list = document.getElementById('repliesList');
      if (list) {
        // Remove empty state if present
        const empty = list.querySelector('.empty-state');
        if (empty) empty.remove();

        const div = document.createElement('div');
        div.innerHTML = renderRepliesHTML([newReply], threadId, isOwner);
        list.appendChild(div.firstElementChild);

        // Update count
        const countEl = document.querySelector('.replies-count');
        if (countEl) countEl.textContent = parseInt(countEl.textContent || '0') + 1;
      }
    })
    .subscribe((status) => {
      if (status === 'CHANNEL_ERROR') console.error('Realtime channel error for replies');
    });
}

function subscribeToThreads() {
  unsubscribeActive();
  activeChannel = supabaseClient
    .channel('threads-list')
    .on('postgres_changes', {
      event: 'INSERT',
      schema: 'public',
      table: 'discussion_threads',
    }, async (payload) => {
      const newThread = { ...payload.new, reply_count: 0, has_best: false };
      // Only prepend if not already in list
      if (!threads.find(t => t.id === newThread.id)) {
        threads.unshift(newThread);
        renderThreadList();
      }
    })
    .subscribe((status) => {
      if (status === 'CHANNEL_ERROR') console.error('Realtime channel error for threads');
    });
}

function unsubscribeActive() {
  if (activeChannel) {
    supabaseClient.removeChannel(activeChannel);
    activeChannel = null;
  }
}

// ============================================================
// NAVIGATION
// ============================================================
function backToList() {
  unsubscribeActive();
  document.getElementById('viewList').style.display = 'block';
  document.getElementById('viewThread').style.display = 'none';
  currentThreadId = null;
  subscribeToThreads();
  renderThreadList();
}

// ============================================================
// MODAL
// ============================================================
function openModal() {
  document.getElementById('modalOverlay').classList.add('show');
  document.getElementById('newTitle').focus();
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('show');
  ['newTitle', 'newBody', 'newKategori', 'newLabel'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  document.getElementById('titleChar').textContent = '0/120';
  document.getElementById('bodyChar').textContent = '0/1000';
}

// ============================================================
// REPORT
// ============================================================
function reportThread(threadId) {
  if (!confirm('Laporkan thread ini?')) return;
  const reports = JSON.parse(localStorage.getItem('diskusi_reports') || '[]');
  const cu = getCurrentUser();
  reports.push({ id: Date.now(), type: 'thread', targetId: threadId, reporter: cu?.nama || 'Anonim', time: new Date().toLocaleString('id-ID'), status: 'pending' });
  localStorage.setItem('diskusi_reports', JSON.stringify(reports));
  showToast('Laporan terkirim.');
}

function reportReply(threadId, replyId) {
  if (!confirm('Laporkan balasan ini?')) return;
  const reports = JSON.parse(localStorage.getItem('diskusi_reports') || '[]');
  const cu = getCurrentUser();
  reports.push({ id: Date.now(), type: 'reply', targetId: replyId, threadId, reporter: cu?.nama || 'Anonim', time: new Date().toLocaleString('id-ID'), status: 'pending' });
  localStorage.setItem('diskusi_reports', JSON.stringify(reports));
  showToast('Laporan terkirim.');
}

// ============================================================
// TOAST
// ============================================================
function showToast(msg, isError = false) {
  const t = document.getElementById('diskusiToast');
  t.textContent = (isError ? '❌ ' : '✅ ') + msg;
  t.className = 'diskusi-toast show';
  t.style.background = isError ? '#c0392b' : 'var(--green-dark)';
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ============================================================
// MIGRATION CHECK (localStorage → Supabase)
// ============================================================
function checkAndOfferMigration() {
  const old = JSON.parse(localStorage.getItem('diskusi_threads') || '[]');
  if (!old.length) return;

  const banner = document.createElement('div');
  banner.id = 'migrationBanner';
  banner.style.cssText = 'background:#fef9e7;border:1px solid #c9a227;border-radius:8px;padding:12px 16px;margin-bottom:16px;display:flex;align-items:center;gap:12px;font-size:13px';
  banner.innerHTML = `
    <span>📦 Kamu punya ${old.length} diskusi lama di browser ini.</span>
    <button onclick="migrateLocalStorageToSupabase()" style="background:#c9a227;color:white;border:none;border-radius:6px;padding:6px 12px;cursor:pointer;font-size:12px">Migrasikan ke Cloud</button>
    <button onclick="document.getElementById('migrationBanner').remove()" style="background:none;border:none;cursor:pointer;color:#888;font-size:16px">✕</button>`;

  const viewList = document.getElementById('viewList');
  if (viewList) viewList.insertBefore(banner, viewList.firstChild);
}

async function migrateLocalStorageToSupabase() {
  const old = JSON.parse(localStorage.getItem('diskusi_threads') || '[]');
  if (!old.length) return;

  showToast('Migrasi dimulai...');
  let failed = 0;

  for (const t of old) {
    const threadPayload = {
      author_name: t.author || 'Anonim',
      author_initials: t.initials || 'AN',
      author_username: t.authorUsername || '',
      kategori: t.kategori || 'Fikih',
      title: t.title,
      body: t.body,
      label: t.label || null,
      views: t.views || 0,
      likes_count: t.likes || 0,
      is_pinned: t.pinned || false,
    };

    const { data: inserted, error: tErr } = await supabaseClient
      .from('discussion_threads')
      .insert(threadPayload)
      .select()
      .single();

    if (tErr) { failed++; continue; }

    for (const r of (t.replies || [])) {
      await supabaseClient.from('discussion_replies').insert({
        thread_id: inserted.id,
        author_name: r.author || 'Anonim',
        author_initials: r.initials || 'AN',
        author_username: r.authorUsername || '',
        body: r.body,
        likes_count: r.likes || 0,
        is_best: r.best || false,
      });
    }
  }

  if (failed > 0) {
    showToast(`Migrasi selesai dengan ${failed} thread gagal.`, true);
    return;
  }

  localStorage.removeItem('diskusi_threads');
  localStorage.removeItem('diskusi_liked');
  const banner = document.getElementById('migrationBanner');
  if (banner) banner.remove();
  showToast('Migrasi berhasil! Semua diskusi sudah di cloud.');
  await loadThreads();
}

// ============================================================
// INIT
// ============================================================
initLayout('diskusi');
document.getElementById('iconPlus').innerHTML = IC.plus;
document.getElementById('iconSearch').innerHTML = IC.search;
document.getElementById('newTitle').addEventListener('input', function () {
  document.getElementById('titleChar').textContent = this.value.length + '/120';
});
document.getElementById('newBody').addEventListener('input', function () {
  document.getElementById('bodyChar').textContent = this.value.length + '/1000';
});

(async () => {
  const cu = getCurrentUser();
  if (cu) await loadUserLikes(cu.username);
  await loadThreads();
  subscribeToThreads();
  checkAndOfferMigration();
})();
