# 🎂 Birthday Gift Webpage For Her 💖

A romantic, pink-aesthetic interactive gift website crafted with love for your girlfriend's special day.

---

## ✨ Features Included

1. **🌸 Aesthetic Feminine Theme**:
   - Soft strawberry milk & pastel pink gradients (`#FFF0F5`, `#FFE4E8`, `#FF6584`).
   - Floating hearts and glowing ambient sparkles.
   - Glassmorphic translucent cards with golden pink highlights.
   - Soft romantic background music toggle (Music Box chime) and sound effects.

2. **🔐 Initial Pop-Up & Password Gate**:
   - Title: *"Happy Birthday Cutie! 🎂✨"*
   - Subtitle: *"Please enter the secret password to open your special birthday gift 🎁"*
   - Hint: *"Special day of a special person (e.g. your birthdate: DDMM) 🎂❤️"*
   - Shake animation & gentle feedback if an incorrect password is typed.

3. **🐻 Dudu & Bubu Drag-Away Animation**:
   - The famous adorable bear couple Dudu & Bubu appear holding ropes.
   - With bouncy animations, they pull and heave the pop-up card off-screen to the right!
   - Corner party popper cannons blast festive confetti and hearts from both bottom corners into the center!

4. **🎁 4 Mystery Cards (Each with its Own Password & Unique Reveal)**:
   - **Card 1: 📸 Our Memory Lane**: Interactive Polaroid photo gallery with sweet captions and washi tape.
   - **Card 2: 💌 The Love Letter**: A wax-sealed envelope that she can tap to unfold a heartfelt romantic letter.
   - **Card 3: 🎟️ Girlfriend VIP Coupons**: 6 redeemable golden tickets (e.g., *Late Night Snack Run*, *Unlimited Cuddles*, *One Free Birthday Wish*) that get stamped with *"REDEEMED WITH LOVE ❤️"*.
   - **Card 4: 🎂 Birthday Wish & Cake**: An interactive 3-tier birthday cake with glowing candles that she can click to blow out, triggering fireworks and a wish-granted celebration!

---

## 🛠️ How to Customize (`config.js`)

You can easily change **passwords, hints, names, messages, and photos** inside `config.js`:

```javascript
// Change her name
girlfriendName: "Cutie",

// Change the main entry password & hint (e.g. her birthdate "1410")
mainGate: {
  password: "1410", 
  hint: "Special day of a special person (e.g. your birthdate: DDMM) 🎂❤️"
},

// The 4 Card Passwords (defaults: "love", "forever", "sweet", "cake")
cards: [
  { id: 1, password: "love", hint: "What I feel for you every day 💕" },
  { id: 2, password: "forever", hint: "How long I promise to hold your hand 💍" },
  { id: 3, password: "sweet", hint: "The sweetest word to describe you 🍬" },
  { id: 4, password: "cake", hint: "The dessert we cut today! 🎂" }
]
```

---

## 🚀 How to Run & View

Simply double-click [`index.html`](file:///c:/Users/Admin/Desktop/birthday%20gift%20for%20her/index.html) in your file explorer, and it will immediately open in Google Chrome, Microsoft Edge, or any web browser!
