// DAFTAR SEMUA NADA (jangan diubah)
const chords = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
const chordsBb = { };

// FUNGSI GANTI KUNCI
function setKey(key) {
  const rootIdx = chords.indexOf(rootKey);
  const targetIdx = chords.indexOf(key === 'Bb' ? 'A#' : key);
  const step = (targetIdx - rootIdx + 12) % 12;

  for (const [id, chord] of Object.entries(originalChords)) {
    const el = document.getElementById(id);
    if (!el || chord === '') continue;
    el.textContent = displayChord(transposeChord(chord, step));
  }

  document.querySelectorAll('.key-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById('key-' + key).classList.add('active');
}

// FUNGSI TAMPILKAN CHORD (Bb, Eb, Ab)
function displayChord(chord) {
  const bassRaw = chord.includes('/') ? chord.split('/')[1] : '';
  const chordOnly = chord.split('/')[0];
  
  const match = chordOnly.match(/^[A-G][#b]?/);
  if (!match) return chord;
  
  const base = match[0];
  const suffix = chordOnly.slice(base.length);
  const displayBase = chordsBb[base] || base;
  
  if (bassRaw) {
    const bassDisplay = chordsBb[bassRaw] || bassRaw;
    return displayBase + suffix + '/' + bassDisplay;
  }
  return displayBase + suffix;
}

// FUNGSI TRANSPOSE
function transposeChord(chord, steps) {
  const bassRaw = chord.includes('/') ? chord.split('/')[1] : '';
  const chordOnly = chord.split('/')[0];
  
  // Ambil base note (1-2 karakter)
  const match = chordOnly.match(/^[A-G][#b]?/);
  if (!match) return chord;
  
  const base = match[0];
  const suffix = chordOnly.slice(base.length);
  
  let idx = chords.indexOf(base);
  if (idx === -1) return chord;
  idx = (idx + steps + 120) % 12;
  const newBase = chords[idx];

  if (bassRaw) {
    let bassIdx = chords.indexOf(bassRaw);
    bassIdx = (bassIdx + steps + 120) % 12;
    return newBase + suffix + '/' + chords[bassIdx];
  }
  return newBase + suffix;
}
// FUNGSI DARK/LIGHT MODE
function toggleMode() {
  document.body.classList.toggle('light');
  const ball = document.getElementById('toggle-ball');
  const moon = document.getElementById('icon-moon');
  const sun = document.getElementById('icon-sun');
  if (document.body.classList.contains('light')) {
    ball.style.left = '21px';
    moon.style.color = '#888aaa';
    sun.style.color = '#1a1a2e';
  } else {
    ball.style.left = '3px';
    moon.style.color = '#e0e0ff';
    sun.style.color = '#888aaa';
  }
}