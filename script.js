/**
 * =========================================================================
 * 💖 LUXURY ROMANTIC BIRTHDAY GIFT - SHABINA & JAANA EDITION (IPHONE 11)
 * =========================================================================
 */

const appState = {
  activeCardToUnlock: null,
  unlockedCards: { 1: false, 2: false, 3: false, 4: false },
  musicPlaying: false,
  candlesBlown: false,
  mousePos: { x: window.innerWidth / 2, y: window.innerHeight / 2 }
};

// =========================================================================
// 🌸 1. SAKURA PETALS & BOKEH CANVAS
// =========================================================================
const particleCanvas = document.getElementById('particleCanvas');
const pCtx = particleCanvas ? particleCanvas.getContext('2d') : null;
let sakuraParticles = [];

function initSakuraCanvas() {
  if (!particleCanvas || !pCtx) return;

  function resize() {
    particleCanvas.width = window.innerWidth;
    particleCanvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  sakuraParticles = [];
  const totalPetals = window.innerWidth < 600 ? 30 : 60;

  for (let i = 0; i < totalPetals; i++) {
    const isHeart = Math.random() > 0.65;
    sakuraParticles.push({
      x: Math.random() * particleCanvas.width,
      y: Math.random() * particleCanvas.height,
      size: isHeart ? (Math.random() * 8 + 8) : (Math.random() * 8 + 6),
      speedX: Math.random() * 1.2 - 0.6,
      speedY: isHeart ? (-Math.random() * 0.9 - 0.4) : (Math.random() * 1.2 + 0.8),
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 1.8,
      opacity: Math.random() * 0.55 + 0.35,
      color: isHeart ? (Math.random() > 0.5 ? '#FF4D6D' : '#FF8DA1') : (Math.random() > 0.4 ? '#FFCCD5' : '#FFA5BA'),
      isBokeh: !isHeart && Math.random() > 0.7,
      isHeart: isHeart
    });
  }

  function renderSakura() {
    pCtx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);

    for (let p of sakuraParticles) {
      p.x += p.speedX;
      p.y += p.speedY;
      p.rotation += p.rotationSpeed;

      if (p.isHeart) {
        if (p.y < -30) {
          p.y = particleCanvas.height + 20;
          p.x = Math.random() * particleCanvas.width;
        }
      } else {
        if (p.y > particleCanvas.height + 20) {
          p.y = -20;
          p.x = Math.random() * particleCanvas.width;
        }
      }
      if (p.x > particleCanvas.width + 20) p.x = -20;
      if (p.x < -20) p.x = particleCanvas.width + 20;

      pCtx.save();
      pCtx.translate(p.x, p.y);
      pCtx.rotate((p.rotation * Math.PI) / 180);
      pCtx.globalAlpha = p.opacity;

      if (p.isHeart) {
        pCtx.fillStyle = p.color;
        pCtx.beginPath();
        const d = p.size;
        pCtx.moveTo(0, 0);
        pCtx.bezierCurveTo(-d / 2, -d / 2, -d, d / 3, 0, d);
        pCtx.bezierCurveTo(d, d / 3, d / 2, -d / 2, 0, 0);
        pCtx.fill();
      } else if (p.isBokeh) {
        const grad = pCtx.createRadialGradient(0, 0, 0, 0, 0, p.size * 1.8);
        grad.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
        grad.addColorStop(0.5, 'rgba(255, 182, 193, 0.4)');
        grad.addColorStop(1, 'rgba(255, 182, 193, 0)');
        pCtx.fillStyle = grad;
        pCtx.beginPath();
        pCtx.arc(0, 0, p.size * 1.8, 0, Math.PI * 2);
        pCtx.fill();
      } else {
        pCtx.fillStyle = p.color;
        pCtx.beginPath();
        pCtx.moveTo(0, 0);
        pCtx.bezierCurveTo(-p.size / 2, -p.size / 2, -p.size / 2, -p.size, 0, -p.size * 1.3);
        pCtx.bezierCurveTo(p.size / 2, -p.size, p.size / 2, -p.size / 2, 0, 0);
        pCtx.fill();
      }

      pCtx.restore();
    }

    requestAnimationFrame(renderSakura);
  }

  renderSakura();
}

// =========================================================================
// ✨ 2. SPARKLE MAGIC CURSOR TRAIL CANVAS
// =========================================================================
const cursorCanvas = document.getElementById('cursorTrailCanvas');
const cCtx = cursorCanvas ? cursorCanvas.getContext('2d') : null;
let cursorSparkles = [];

function initCursorTrail() {
  if (!cursorCanvas || !cCtx) return;

  function resizeCursor() {
    cursorCanvas.width = window.innerWidth;
    cursorCanvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCursor);
  resizeCursor();

  function addSparkle(x, y) {
    cursorSparkles.push({
      x: x + (Math.random() - 0.5) * 10,
      y: y + (Math.random() - 0.5) * 10,
      size: Math.random() * 5 + 3,
      alpha: 1,
      speedX: (Math.random() - 0.5) * 1.2,
      speedY: (Math.random() - 0.5) * 1.2 - 0.5,
      color: ['#FF2E63', '#FFD166', '#FFFFFF', '#FF8DA1'][Math.floor(Math.random() * 4)],
      shape: Math.random() > 0.5 ? 'heart' : 'star'
    });
  }

  window.addEventListener('mousemove', (e) => {
    appState.mousePos = { x: e.clientX, y: e.clientY };
    for (let i = 0; i < 2; i++) addSparkle(e.clientX, e.clientY);
  });

  window.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      const t = e.touches[0];
      for (let i = 0; i < 2; i++) addSparkle(t.clientX, t.clientY);
    }
  }, { passive: true });

  function renderSparkles() {
    cCtx.clearRect(0, 0, cursorCanvas.width, cursorCanvas.height);

    for (let i = cursorSparkles.length - 1; i >= 0; i--) {
      const s = cursorSparkles[i];
      s.x += s.speedX;
      s.y += s.speedY;
      s.alpha -= 0.025;

      if (s.alpha <= 0) {
        cursorSparkles.splice(i, 1);
        continue;
      }

      cCtx.save();
      cCtx.translate(s.x, s.y);
      cCtx.globalAlpha = s.alpha;
      cCtx.fillStyle = s.color;

      if (s.shape === 'heart') {
        cCtx.font = `${s.size * 2.2}px serif`;
        cCtx.fillText('💖', -s.size, s.size);
      } else {
        cCtx.beginPath();
        cCtx.arc(0, 0, s.size, 0, Math.PI * 2);
        cCtx.fill();
      }

      cCtx.restore();
    }

    requestAnimationFrame(renderSparkles);
  }

  renderSparkles();
}

// =========================================================================
// 🎵 3. RETRO VINYL TURNTABLE & AUDIO SYNTHESIZER
// =========================================================================
let audioCtx = null;
let bgmTimeout = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) audioCtx = new AudioContextClass();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Romantic Background Melody
const ROMANTIC_MELODY = [
  { f: 261.63, d: 0.45 }, { f: 329.63, d: 0.45 }, { f: 392.00, d: 0.45 }, { f: 523.25, d: 0.9 },
  { f: 440.00, d: 0.45 }, { f: 349.23, d: 0.45 }, { f: 392.00, d: 0.9 },
  { f: 261.63, d: 0.45 }, { f: 293.66, d: 0.45 }, { f: 349.23, d: 0.45 }, { f: 329.63, d: 0.9 },
  { f: 261.63, d: 0.45 }, { f: 329.63, d: 0.45 }, { f: 440.00, d: 0.45 }, { f: 523.25, d: 1.2 },
  { f: 493.88, d: 0.45 }, { f: 440.00, d: 0.45 }, { f: 392.00, d: 0.9 },
  { f: 349.23, d: 0.45 }, { f: 392.00, d: 0.45 }, { f: 523.25, d: 1.4 }
];

function playMelodyStep(noteIndex = 0) {
  if (!appState.musicPlaying) return;
  const ctx = getAudioContext();
  if (!ctx) return;
  
  const note = ROMANTIC_MELODY[noteIndex % ROMANTIC_MELODY.length];
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  
  osc.type = 'sine';
  osc.frequency.setValueAtTime(note.f, ctx.currentTime);
  gain.gain.setValueAtTime(0.14, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + note.d * 0.95);
  
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + note.d);

  bgmTimeout = setTimeout(() => {
    playMelodyStep(noteIndex + 1);
  }, note.d * 720);
}

function toggleMusic() {
  const widget = document.getElementById('vinylPlayer');
  const record = document.getElementById('vinylRecord');
  const statusText = document.getElementById('vinylStatusText');

  if (appState.musicPlaying) {
    appState.musicPlaying = false;
    clearTimeout(bgmTimeout);
    if (widget) widget.classList.remove('playing');
    if (record) record.classList.remove('spinning');
    if (statusText) statusText.textContent = "Play Song 🎵";
  } else {
    getAudioContext();
    appState.musicPlaying = true;
    if (widget) widget.classList.add('playing');
    if (record) record.classList.add('spinning');
    if (statusText) statusText.textContent = "Playing For Jaana 💕";
    playMelodyStep(0);
  }
}

// LOUD, ENERGETIC HAPPY BIRTHDAY CELEBRATION SONG (HIGH VOLUME & BRASS CHORDS)
function playLoudHappyBirthdaySong() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const notes = [
      { f: 261.63, d: 0.35 }, { f: 261.63, d: 0.35 }, { f: 293.66, d: 0.7 }, { f: 261.63, d: 0.7 }, { f: 349.23, d: 0.7 }, { f: 329.63, d: 1.2 },
      { f: 261.63, d: 0.35 }, { f: 261.63, d: 0.35 }, { f: 293.66, d: 0.7 }, { f: 261.63, d: 0.7 }, { f: 392.00, d: 0.7 }, { f: 349.23, d: 1.2 },
      { f: 261.63, d: 0.35 }, { f: 261.63, d: 0.35 }, { f: 523.25, d: 0.7 }, { f: 440.00, d: 0.7 }, { f: 349.23, d: 0.7 }, { f: 329.63, d: 0.7 }, { f: 293.66, d: 1.2 },
      { f: 466.16, d: 0.35 }, { f: 466.16, d: 0.35 }, { f: 440.00, d: 0.7 }, { f: 349.23, d: 0.7 }, { f: 392.00, d: 0.7 }, { f: 349.23, d: 1.8 }
    ];

    let startTime = ctx.currentTime + 0.1;

    notes.forEach((n) => {
      // Lead melody
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(n.f, startTime);
      gain1.gain.setValueAtTime(0.5, startTime);
      gain1.gain.exponentialRampToValueAtTime(0.01, startTime + n.d * 0.92);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(startTime);
      osc1.stop(startTime + n.d);

      // Harmony brass layer
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'sawtooth';
      osc2.frequency.setValueAtTime(n.f * 0.5, startTime);
      gain2.gain.setValueAtTime(0.26, startTime);
      gain2.gain.exponentialRampToValueAtTime(0.001, startTime + n.d * 0.88);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(startTime);
      osc2.stop(startTime + n.d);

      // High sparkle layer
      const osc3 = ctx.createOscillator();
      const gain3 = ctx.createGain();
      osc3.type = 'sine';
      osc3.frequency.setValueAtTime(n.f * 2, startTime);
      gain3.gain.setValueAtTime(0.18, startTime);
      gain3.gain.exponentialRampToValueAtTime(0.001, startTime + n.d * 0.6);
      osc3.connect(gain3);
      gain3.connect(ctx.destination);
      osc3.start(startTime);
      osc3.stop(startTime + n.d * 0.6);

      startTime += n.d * 0.84;
    });

  } catch (e) {
    console.warn("Audio play error", e);
  }
}

function playChimeSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const notes = [587.33, 659.25, 783.99, 1046.50, 1318.51];
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.07);
      gain.gain.setValueAtTime(0.2, ctx.currentTime + idx * 0.07);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.07 + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + idx * 0.07);
      osc.stop(ctx.currentTime + idx * 0.07 + 0.35);
    });
  } catch (e) {}
}

function playPopperSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(320, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(70, ctx.currentTime + 0.16);
    gain.gain.setValueAtTime(0.45, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.16);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.16);
  } catch (e) {}
}

function playBlowSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const bufferSize = ctx.sampleRate * 0.5;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, ctx.currentTime);
    filter.frequency.linearRampToValueAtTime(120, ctx.currentTime + 0.45);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.35, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.45);
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    noise.start(ctx.currentTime);
  } catch (e) {}
}

// =========================================================================
// 🎉 4. GRAND CORNER POPPERS & IPHONE 11 UNLOCK TRANSITION
// =========================================================================
function fireGrandCornerPoppers() {
  const popperLeft = document.getElementById('popperLeft');
  const popperRight = document.getElementById('popperRight');

  if (popperLeft) popperLeft.classList.add('pop-blast');
  if (popperRight) popperRight.classList.add('pop-blast');

  playPopperSound();

  if (typeof confetti === 'function') {
    confetti({
      particleCount: 110,
      angle: 55,
      spread: 75,
      origin: { x: 0.05, y: 0.94 },
      colors: ['#FF2E63', '#FF8DA1', '#FFD166', '#FFFFFF', '#C77DFF', '#FF5E8E']
    });

    confetti({
      particleCount: 110,
      angle: 125,
      spread: 75,
      origin: { x: 0.95, y: 0.94 },
      colors: ['#FF2E63', '#FF8DA1', '#FFD166', '#FFFFFF', '#C77DFF', '#FF5E8E']
    });

    setTimeout(() => {
      confetti({
        particleCount: 65,
        spread: 120,
        origin: { x: 0.5, y: 0.35 },
        shapes: ['circle'],
        colors: ['#FF5E8E', '#FFA5BA', '#FFD166', '#FFFFFF']
      });
    }, 400);
  }
}

function triggerIPhoneGateUnlock() {
  const gateModal = document.getElementById('gateModal');
  const gateScreen = document.getElementById('gateScreen');
  const mainApp = document.getElementById('mainApp');

  playChimeSound();
  gateModal.classList.add('gift-unlocked-burst');

  setTimeout(() => {
    fireGrandCornerPoppers();
  }, 400);

  setTimeout(() => {
    gateScreen.classList.add('fade-out');
    mainApp.classList.remove('hidden-app');
    mainApp.classList.add('reveal-app');

    if (!appState.musicPlaying) toggleMusic();
  }, 900);
}

// =========================================================================
// 🔐 5. GATE SCREEN PASSWORD VERIFICATION & SHAYARI
// =========================================================================
function setupGateScreen() {
  const form = document.getElementById('gateForm');
  const input = document.getElementById('gatePasswordInput');
  const errorMsg = document.getElementById('gateErrorMsg');
  const hintBtn = document.getElementById('hintToggleBtn');
  const hintContent = document.getElementById('hintContent');
  const hintArrow = document.getElementById('hintArrow');
  const visibilityBtn = document.getElementById('togglePasswordVisibilityBtn');

  if (window.BIRTHDAY_CONFIG) {
    const mainGate = BIRTHDAY_CONFIG.mainGate;
    const titleEl = document.getElementById('gateTitle');
    const subtitleEl = document.getElementById('gateSubtitle');
    const hintTextEl = document.getElementById('gateHintText');
    const nameEl = document.getElementById('displayGirlfriendName');
    const shayariEl = document.getElementById('gateShayariText');

    if (titleEl && mainGate.welcomeTitle) titleEl.textContent = mainGate.welcomeTitle;
    if (subtitleEl && mainGate.welcomeSubtitle) subtitleEl.textContent = mainGate.welcomeSubtitle;
    if (hintTextEl && mainGate.hint) hintTextEl.textContent = mainGate.hint;
    if (nameEl && BIRTHDAY_CONFIG.girlfriendName) nameEl.textContent = BIRTHDAY_CONFIG.girlfriendName;
    if (shayariEl && mainGate.gateShayari) shayariEl.innerHTML = mainGate.gateShayari.replace(/\n/g, '<br>');
  }

  if (visibilityBtn && input) {
    visibilityBtn.addEventListener('click', () => {
      if (input.type === 'password') {
        input.type = 'text';
        visibilityBtn.textContent = '🙈';
      } else {
        input.type = 'password';
        visibilityBtn.textContent = '👁️';
      }
    });
  }

  if (hintBtn && hintContent && hintArrow) {
    hintBtn.addEventListener('click', () => {
      hintContent.classList.toggle('open');
      hintArrow.classList.toggle('open');
    });
  }

  if (form && input) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const enteredPass = input.value.trim().toLowerCase();
      const correctPass = (BIRTHDAY_CONFIG?.mainGate?.password || '29102004').toLowerCase();

      if (enteredPass === correctPass) {
        errorMsg.textContent = "";
        triggerIPhoneGateUnlock();
      } else {
        errorMsg.textContent = "Oops! Yeh sahi secret code nahi hai, Jaana! 🥺 Hint dekhiye! 💕";
        const modal = document.getElementById('gateModal');
        modal.classList.add('shake');
        input.focus();
        input.select();
        setTimeout(() => modal.classList.remove('shake'), 500);
      }
    });
  }
}

// =========================================================================
// 🎴 6. 3D CARD TILT, TYPEWRITER HERO & HIGHLIGHTS
// =========================================================================
function init3DCardTilt() {
  const cards = document.querySelectorAll('.tilt-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
    });
  });
}

function initTypewriterHero() {
  const quotes = [
    "\"Aapki ek muskaan mere poore din ko roshan kar deti hai, Shabina.\"",
    "\"Aap mere dil ka sukoon aur meri har khushi ki wajah hain, Meri Jaana.\"",
    "\"Aap jaisi khoobsurat aur be-misaal ladki is poori kainaat mein koi nahi hai.\"",
    "\"Happy Birthday to the most breathtaking girl in the entire universe! 💖\""
  ];

  let quoteIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const quoteEl = document.getElementById('typewriterQuote');
  if (!quoteEl) return;

  function type() {
    const currentQuote = quotes[quoteIdx];
    if (isDeleting) {
      charIdx--;
      quoteEl.textContent = currentQuote.substring(0, charIdx);
    } else {
      charIdx++;
      quoteEl.textContent = currentQuote.substring(0, charIdx);
    }

    let typeSpeed = isDeleting ? 25 : 50;

    if (!isDeleting && charIdx === currentQuote.length) {
      typeSpeed = 3200;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      quoteIdx = (quoteIdx + 1) % quotes.length;
      typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

function renderLoveHighlights() {
  const container = document.getElementById('highlightsGridContainer');
  if (!container || !BIRTHDAY_CONFIG.loveHighlights) return;

  container.innerHTML = BIRTHDAY_CONFIG.loveHighlights.map(item => `
    <div class="highlight-item-card">
      <div class="highlight-icon">${item.icon}</div>
      <h4 class="highlight-title">${item.title}</h4>
      <p class="highlight-desc">${item.desc}</p>
    </div>
  `).join('');
}

function sendMissYouHearts() {
  playChimeSound();
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 50,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#FF2E63', '#FF5E8E', '#FFA5BA', '#FFD166']
    });
  }
}

// =========================================================================
// 🎁 7. 4 MYSTERY CARDS SYSTEM & UNLOCKS
// =========================================================================
function openCardAction(cardId) {
  if (appState.unlockedCards[cardId]) {
    openContentModal(cardId);
    return;
  }

  appState.activeCardToUnlock = cardId;
  const cardConfig = BIRTHDAY_CONFIG.cards.find(c => c.id === cardId);
  if (!cardConfig) return;

  const modal = document.getElementById('cardPasswordModal');
  const title = document.getElementById('cardPassTitle');
  const subtitle = document.getElementById('cardPassSubtitle');
  const hintText = document.getElementById('cardHintText');
  const input = document.getElementById('cardPassInput');
  const error = document.getElementById('cardPassError');

  title.textContent = `Unlock ${cardConfig.cardTitle}`;
  subtitle.textContent = cardConfig.cardSubtitle || "Enter the special password for this card";
  hintText.textContent = cardConfig.hint || "Think of something sweet 💕";
  error.textContent = "";
  input.value = "";

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  setTimeout(() => input.focus(), 150);
}

function closeCardPasswordModal() {
  const modal = document.getElementById('cardPasswordModal');
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  appState.activeCardToUnlock = null;
}

function setupCardPasswordForm() {
  const form = document.getElementById('cardPassForm');
  const input = document.getElementById('cardPassInput');
  const error = document.getElementById('cardPassError');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const cardId = appState.activeCardToUnlock;
    if (!cardId) return;

    const cardConfig = BIRTHDAY_CONFIG.cards.find(c => c.id === cardId);
    const entered = input.value.trim().toLowerCase();
    const correct = (cardConfig.password || '').toLowerCase();

    if (entered === correct) {
      appState.unlockedCards[cardId] = true;
      playChimeSound();

      const cardEl = document.getElementById(`cardElement-${cardId}`);
      const lockBadge = document.getElementById(`lockBadge-${cardId}`);
      if (cardEl) {
        cardEl.classList.remove('locked');
        cardEl.classList.add('unlocked');
        const btnText = cardEl.querySelector('.btn-text');
        const btnIcon = cardEl.querySelector('.btn-icon');
        if (btnText) btnText.textContent = "Open Surprise";
        if (btnIcon) btnIcon.textContent = "✨";
      }
      if (lockBadge) lockBadge.textContent = "✨ Unlocked";

      closeCardPasswordModal();
      
      if (typeof confetti === 'function') {
        confetti({ particleCount: 60, spread: 65, origin: { y: 0.6 } });
      }

      setTimeout(() => openContentModal(cardId), 350);

    } else {
      error.textContent = "Galat password hai, Jaana! Hint check kijiye 💡";
      const box = document.querySelector('.card-pass-box');
      if (box) {
        box.classList.add('shake');
        setTimeout(() => box.classList.remove('shake'), 500);
      }
      input.select();
    }
  });
}

// =========================================================================
// 🌟 8. CARD CONTENT MODALS RENDER & INTERACTIONS
// =========================================================================
function openContentModal(cardId) {
  const modal = document.getElementById(`modalCard-${cardId}`);
  if (!modal) return;

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');

  if (cardId === 1) renderTareef();
  if (cardId === 2) renderLoveLetter();
  if (cardId === 3) renderPromisesAndCoupons();
  if (cardId === 4) initCakeStage();
}

function closeContentModal(cardId) {
  const modal = document.getElementById(`modalCard-${cardId}`);
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }
  const centerPop = document.getElementById('centerBirthdayPop');
  if (centerPop) centerPop.classList.remove('active');
}

/* --- Card 1: Tareef-E-Shabina with Picture Frames --- */
const featureHeartCounts = {};

function renderTareef() {
  const container = document.getElementById('tareefGridContainer');
  const cardConfig = BIRTHDAY_CONFIG.cards.find(c => c.id === 1);
  if (!container || !cardConfig || !cardConfig.features) return;

  container.innerHTML = cardConfig.features.map((f, idx) => {
    const count = featureHeartCounts[idx] || 0;
    return `
      <div class="tareef-item-card" id="tareefCard-${idx}">
        <div class="tareef-img-frame">
          <img 
            src="${f.image}" 
            alt="${f.feature}" 
            class="tareef-img" 
            id="tareefImg-${idx}"
            onerror="this.onerror=null; this.src='${f.fallbackImage}';"
          >
        </div>
        <div class="tareef-header-row">
          <span class="tareef-icon">${f.icon}</span>
          <h4 class="tareef-title">${f.feature}</h4>
        </div>
        <div class="tareef-quote">"${f.quote}"</div>
        <p class="tareef-desc">${f.description}</p>
        <button class="tareef-react-btn" onclick="reactToFeature(${idx}, '${f.feature}')">
          <span>Aapki Yeh Ada Sabse Pyaari Hai ❤️</span>
          <span id="tareefHeartCount-${idx}" class="tareef-count-badge">${count > 0 ? `(${count})` : ''}</span>
        </button>
      </div>
    `;
  }).join('');
}

function reactToFeature(idx, name) {
  playChimeSound();
  featureHeartCounts[idx] = (featureHeartCounts[idx] || 0) + 1;
  const countBadge = document.getElementById(`tareefHeartCount-${idx}`);
  if (countBadge) {
    countBadge.textContent = `(${featureHeartCounts[idx]})`;
  }

  if (typeof confetti === 'function') {
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.65 },
      colors: ['#FF2E63', '#FF5E8E', '#FFA5BA']
    });
  }
}

/* --- Card 2: 3D Wax Seal Love Letter with Dual Shayaris --- */
function renderLoveLetter() {
  const cardConfig = BIRTHDAY_CONFIG.cards.find(c => c.id === 2);
  if (!cardConfig || !cardConfig.letter) return;

  const letter = cardConfig.letter;
  const salutation = document.getElementById('letterSalutation');
  const startShayari = document.getElementById('letterStartShayari');
  const body = document.getElementById('letterBody');
  const middleShayari = document.getElementById('letterMiddleShayari');
  const middleBody = document.getElementById('letterMiddleBody');
  const sig = document.getElementById('letterSignature');
  const dateEl = document.getElementById('letterDate');

  if (salutation) salutation.textContent = letter.salutation || "Meri Sabse Pyaari Shabina (Meri Jaana),";
  if (dateEl) dateEl.textContent = letter.date || "Aapke Birthday Par";
  if (startShayari) startShayari.innerHTML = (letter.startShayari || "").replace(/\n/g, '<br>');
  if (body) body.textContent = (letter.paragraphs || []).join('\n\n');
  if (middleShayari) middleShayari.innerHTML = (letter.middleShayari || "").replace(/\n/g, '<br>');
  if (middleBody) middleBody.textContent = (letter.middleParagraphs || []).join('\n\n');
  if (sig) sig.innerHTML = (letter.signature || "Hamesha sirf aapka ❤️").replace(/\n/g, '<br>');
}

function openLoveLetterEnvelope() {
  const front = document.getElementById('envelopeFront');
  const paper = document.getElementById('letterPaper');
  playChimeSound();

  if (front && paper) {
    front.style.display = 'none';
    paper.classList.add('open');

    if (typeof confetti === 'function') {
      confetti({
        particleCount: 50,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#FF2E63', '#FF8DA1', '#FFD166']
      });
    }
  }
}

/* --- Card 3: 7 Wada-E-Wafa (7 Sacred Promises) & Shabina's VIP Love Coupons --- */
function renderPromisesAndCoupons() {
  const container = document.getElementById('promisesCardContainer');
  const cardConfig = BIRTHDAY_CONFIG.cards.find(c => c.id === 3);
  if (!container || !cardConfig || !cardConfig.promisesSection) return;

  const pSec = cardConfig.promisesSection;
  const cSec = cardConfig.couponsSection;

  container.innerHTML = `
    <!-- Section 1: 7 Sacred Lifetime Promises -->
    <div class="vows-section-wrapper">
      <div class="section-subheading-group">
        <span class="section-pill-tag">${pSec.headingBadge}</span>
        <h3>${pSec.title}</h3>
        <p>${pSec.subtitle}</p>
      </div>

      <div class="vows-list-grid">
        ${pSec.vows.map(v => `
          <div class="vow-card-item">
            <div class="vow-number-badge">${v.number}</div>
            <div class="vow-content-box">
              <div class="vow-title-row">
                <span class="vow-icon">${v.icon}</span>
                <h4 class="vow-title">${v.title}</h4>
              </div>
              <p class="vow-desc">${v.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Section 2: Shabina's VIP Lifetime Love Coupons -->
    <div class="coupons-section-wrapper">
      <div class="section-subheading-group">
        <span class="section-pill-tag">${cSec.headingBadge}</span>
        <h3>${cSec.title}</h3>
        <p>${cSec.subtitle}</p>
      </div>

      <div class="vip-coupons-grid">
        ${cSec.coupons.map(coupon => `
          <div class="vip-coupon-ticket" id="couponTicket-${coupon.id}">
            <div class="coupon-header-row">
              <span class="coupon-icon">${coupon.icon}</span>
              <span class="coupon-badge-pill">${coupon.badge}</span>
            </div>
            <h4 class="coupon-title">${coupon.title}</h4>
            <p class="coupon-desc">${coupon.desc}</p>
            <div id="couponAction-${coupon.id}">
              <button class="coupon-redeem-btn" onclick="redeemLoveCoupon(${coupon.id}, '${coupon.title.replace(/'/g, "\\'")}')">
                <span>Redeem Pass</span>
                <span>🎟️✨</span>
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function redeemLoveCoupon(couponId, title) {
  playChimeSound();
  const actionDiv = document.getElementById(`couponAction-${couponId}`);
  if (actionDiv) {
    actionDiv.innerHTML = `
      <div class="coupon-redeemed-seal">
        <span>👑</span>
        <span>REDEEMED BY SHABINA ❤️</span>
      </div>
    `;
  }

  if (typeof confetti === 'function') {
    confetti({
      particleCount: 55,
      spread: 85,
      origin: { y: 0.65 },
      colors: ['#FF2E63', '#FFD166', '#FF8DA1', '#FFFFFF']
    });
  }
}

/* --- Card 4: 3D Grand Cake, Center Heart Pop & Loud Celebration --- */
function initCakeStage() {
  const cardConfig = BIRTHDAY_CONFIG.cards.find(c => c.id === 4);
  const promptEl = document.getElementById('cakePromptText');
  const wishMessageEl = document.getElementById('wishGrantedMessage');

  if (cardConfig) {
    if (promptEl && cardConfig.wishPrompt) promptEl.textContent = cardConfig.wishPrompt;
    if (wishMessageEl && cardConfig.wishGrantedText) wishMessageEl.textContent = cardConfig.wishGrantedText;
  }
}

function blowOutCandles() {
  if (appState.candlesBlown) return;
  appState.candlesBlown = true;

  playBlowSound();

  // 1. Extinguish flames with smoke puff
  const flames = document.querySelectorAll('.flame');
  flames.forEach(flame => flame.classList.add('blown-out'));

  // 2. Twilight night sky transition
  const cakeModal = document.getElementById('cakeModalContainer');
  if (cakeModal) cakeModal.classList.add('night-sky-active');

  // 3. Launch glowing sky lanterns
  launchSkyLanterns();

  // 4. Hide blow button & show center pop celebration!
  const guide = document.getElementById('cakeActionGuide');
  const banner = document.getElementById('wishCelebrationBanner');
  const centerPop = document.getElementById('centerBirthdayPop');
  if (guide) guide.style.display = 'none';

  setTimeout(() => {
    if (centerPop) centerPop.classList.add('active');
    if (banner) banner.classList.remove('hidden');

    // 5. LOUD, UPBEAT, JOYFUL HAPPY BIRTHDAY SONG!
    playLoudHappyBirthdaySong();

    // Show slice cut guide after celebration pop
    setTimeout(() => {
      const sliceGuide = document.getElementById('cakeSliceGuide');
      if (sliceGuide) sliceGuide.style.display = 'block';
    }, 1500);

    // 6. Huge fireworks celebration!
    if (typeof confetti === 'function') {
      const duration = 5.0 * 1000;
      const animationEnd = Date.now() + duration;

      const fireworksInterval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(fireworksInterval);

        confetti({
          particleCount: 65,
          startVelocity: 40,
          spread: 360,
          origin: {
            x: Math.random(),
            y: Math.random() * 0.45 + 0.15
          },
          colors: ['#FF2E63', '#FFD166', '#FF8DA1', '#845EC2', '#FFFFFF', '#00F5D4']
        });
      }, 250);
    }
  }, 700);
}

function cutCakeSlice() {
  playChimeSound();
  const sliceGuide = document.getElementById('cakeSliceGuide');
  const deliveredBox = document.getElementById('cakeSliceDelivered');
  if (sliceGuide) sliceGuide.style.display = 'none';
  if (deliveredBox) deliveredBox.style.display = 'block';

  if (typeof confetti === 'function') {
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#FF2E63', '#FFD166', '#FF8DA1', '#845EC2', '#FFFFFF']
    });
  }
}

function launchSkyLanterns() {
  const container = document.getElementById('skyLanternsContainer');
  if (!container) return;

  const wishes = ['Shabina ❤️', 'Meri Jaana', 'Together Forever', 'Infinite Love', 'All Dreams Come True', 'My Queen'];

  for (let i = 0; i < 9; i++) {
    const lantern = document.createElement('div');
    lantern.className = 'sky-lantern';
    lantern.style.left = (Math.random() * 85 + 5) + '%';
    lantern.style.animationDelay = (i * 0.7) + 's';
    lantern.style.animationDuration = (Math.random() * 4 + 7) + 's';
    lantern.textContent = wishes[i % wishes.length];
    container.appendChild(lantern);
  }
}

// Global modal dismiss handlers
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeCardPasswordModal();
    [1, 2, 3, 4].forEach(closeContentModal);
  }
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('popup-modal-backdrop')) {
    e.target.classList.remove('active');
    e.target.setAttribute('aria-hidden', 'true');
    const centerPop = document.getElementById('centerBirthdayPop');
    if (centerPop) centerPop.classList.remove('active');
  }
});

// =========================================================================
// 🚀 DOM INITIALIZATION
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initSakuraCanvas();
  initCursorTrail();
  setupGateScreen();
  setupCardPasswordForm();
  init3DCardTilt();
  initTypewriterHero();
  renderLoveHighlights();
});
