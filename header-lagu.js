// ===== INJECT HEADER KE HALAMAN LAGU =====
document.addEventListener('DOMContentLoaded', function() {
  const header = document.getElementById('header-lagu');
  if (!header) return;

  header.innerHTML = `
    <!-- TOMBOL BACK + SETTINGS -->
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
      
      <!-- TOMBOL BACK -->
      <a href="../index.html" style="text-decoration: none; color: #888aaa; font-size: 28px;">&#11013;</a>

      <!-- TOMBOL SETTINGS -->
      <div style="position: relative;">
        <button class="btn-settings" id="btn-settings" onclick="toggleSettings()" aria-label="Pengaturan">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
        <div class="settings-panel" id="settings-panel">
          <div class="settings-title">Pengaturan</div>
          <div class="settings-row">
            <div class="settings-label"><span>🌙</span> Mode Gelap</div>
            <div class="toggle-wrap" onclick="toggleMode()" id="toggle-wrap">
              <div class="toggle-ball" id="toggle-ball"></div>
            </div>
          </div>
          <div class="settings-row">
            <div class="settings-label"><span>A</span> Ukuran Font</div>
            <div class="font-ctrl">
              <button class="fc-btn" onclick="changeFont(-1)" id="fc-min">−</button>
              <span class="fc-val" id="fc-val">12</span>
              <button class="fc-btn" onclick="changeFont(1)" id="fc-plus">+</button>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- JUDUL LAGU -->
    <div class="song-title">${songInfo.title}</div>
    <div class="song-artist">${songInfo.artist}</div>

    <!-- TOMBOL TRANSPOSE -->
    <div style="margin-top: 12px; display: flex; flex-wrap: wrap; gap: 6px;">
      <button onclick="setKey('A')"  class="key-btn" id="key-A">A</button>
      <button onclick="setKey('Bb')" class="key-btn" id="key-Bb">Bb</button>
      <button onclick="setKey('B')"  class="key-btn" id="key-B">B</button>
      <button onclick="setKey('C')"  class="key-btn" id="key-C">C</button>
      <button onclick="setKey('C#')" class="key-btn" id="key-C#">C#</button>
      <button onclick="setKey('D')"  class="key-btn" id="key-D">D</button>
      <button onclick="setKey('D#')" class="key-btn" id="key-D#">D#</button>
      <button onclick="setKey('E')"  class="key-btn" id="key-E">E</button>
      <button onclick="setKey('F')"  class="key-btn" id="key-F">F</button>
      <button onclick="setKey('F#')" class="key-btn" id="key-F#">F#</button>
      <button onclick="setKey('G')"  class="key-btn" id="key-G">G</button>
      <button onclick="setKey('G#')" class="key-btn" id="key-G#">G#</button>
    </div>
  `;
});