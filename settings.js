// ===== SETTINGS PANEL =====
function toggleSettings() {
  document.getElementById('settings-panel').classList.toggle('open');
}

document.addEventListener('click', function(e) {
  const panel = document.getElementById('settings-panel');
  const btn = document.getElementById('btn-settings');
  if (panel && btn && !panel.contains(e.target) && !btn.contains(e.target)) {
    panel.classList.remove('open');
  }
});

// ===== DARK/LIGHT MODE =====
function toggleMode() {
  document.body.classList.toggle('light');
  const toggleWrap = document.getElementById('toggle-wrap');
  if (toggleWrap) toggleWrap.classList.toggle('active');
  localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
}
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light');
  const toggleWrap = document.getElementById('toggle-wrap');
  if (toggleWrap) toggleWrap.classList.add('active');
}
// ===== FONT SIZE (sistem Word) =====
const fontSizes = [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72];
let fontIdx = 4;

const savedIdx = localStorage.getItem('fontIdx');
if (savedIdx !== null) fontIdx = parseInt(savedIdx);

function applyFont() {
  document.querySelectorAll('.chord').forEach(el => el.style.fontSize = fontSizes[fontIdx] + 'px');
  document.querySelectorAll('.lyric').forEach(el => el.style.fontSize = fontSizes[fontIdx] + 'px');
  const valEl = document.getElementById('fc-val');
  if (valEl) valEl.textContent = fontSizes[fontIdx];
  const minBtn = document.getElementById('fc-min');
  const plusBtn = document.getElementById('fc-plus');
  if (minBtn) minBtn.disabled = fontIdx === 0;
  if (plusBtn) plusBtn.disabled = fontIdx === fontSizes.length - 1;
}

function changeFont(d) {
  fontIdx = Math.min(fontSizes.length - 1, Math.max(0, fontIdx + d));
  localStorage.setItem('fontIdx', fontIdx);
  applyFont();
}

applyFont();