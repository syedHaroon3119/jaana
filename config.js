/**
 * =========================================================================
 * 💖 BIRTHDAY WEBSITE CONFIGURATION FOR SHABINA (JAANA)
 * =========================================================================
 * - Tone: "Aap / Aapki / Aapko"
 * - Pet Name: "Jaana" (NOT Jaan)
 * - Vocabulary: Urdu / English / Casual Hindustani (ZERO Hindi words)
 * - Card 1: Tareef-E-Shabina with easy image mapping (images/photo1.jpg - photo6.jpg)
 * - Card 2: 3D Wax-sealed Love Letter with dual classical Shayaris
 * - Card 3: 7 Wada-E-Wafa (7 Sacred Lifetime Vows) & VIP Love Coupons
 * - Card 4: Grand 3D Cake, Lanterns & Loud Celebration
 * =========================================================================
 */

const BIRTHDAY_CONFIG = {
  // 🌸 Personal Details
  girlfriendName: "Shabina",
  nickname: "Meri Jaana ❤️",

  // 🔐 1. Main Website Entry Password & Gate Shayari
  mainGate: {
    password: "29102004", 
    hint: "Aapka sabse khaas din (Aapki date of birth: DDMMYYYY) 🎂❤️",
    welcomeTitle: "Happy Birthday Shabina! 🎂✨",
    welcomeSubtitle: "Aapke liye ek be-inteha khoobsurat surprise... Apna birthday date enter kijiye to unlock! 💖",
    gateShayari: `Chehre pe noor aur aankhon mein pyaar hai,
Aapki ek hasi pe yeh dil sau baar nisaar hai.
Aaya hai aapka birthday banke ek jashn-e-bahaar,
Meri pyari Shabina, aapko Salgirah Mubarak hazaar baar! 🌸✨`
  },

  // 💖 Main Page Love Highlights
  loveHighlights: [
    {
      icon: "👑",
      title: "Meri Zindagi Ki Malika",
      desc: "Aap meri rooh ka sukoon aur meri har khushi ki wajah hain, Jaana."
    },
    {
      icon: "✨",
      title: "Aapki Masoomiyat",
      desc: "Aapka woh bacho jaisa muskurana aur bina baat ke rooth jana meri sabse pasandeeda ada hai."
    },
    {
      icon: "🤍",
      title: "Hamesha Ka Saath",
      desc: "Zindagi ke har mod par, har lamhe mein mera haath hamesha aapke haath mein rahega."
    },
    {
      icon: "🌹",
      title: "Sirf Aur Sirf Aap",
      desc: "Aap jaisi khoobsurat aur be-misaal shakhsiyat is poori kainaat mein doosri koi nahi ho sakti."
    }
  ],

  // 🎁 The 4 Unique Surprise Cards
  cards: [
    // -----------------------------------------------------------------------
    // CARD 1: TAREEF-E-SHABINA
    // -----------------------------------------------------------------------
    {
      id: 1,
      cardTitle: "Tareef-E-Shabina ✨",
      cardSubtitle: "A special surprise dedicated to Shabina... Unlock to see what's inside. 💖",
      tag: "Surprise #1",
      password: "love",
      hint: "Woh ehsaas jo har pal mujhe aapke liye mehsoos hota hai 💕",
      features: [
        {
          id: "feature-1",
          feature: "Aapki Nasheeli Aankhein 👀",
          icon: "✨",
          quote: "Aapki aankhon mein aisi kashish hai jo dil jeet leti hai.",
          description: "Shabina, jab bhi aap meri taraf dekhti hain na, toh sach keh raha hoon mera dil be-qaboo ho jaata hai. Aapki aankhon mein ek aisi masoomiyat aur chamak hai jisme main zindagi bhar khona chahta hoon. Aapki palak jhapakte hi saari duniya thum si jaati hai.",
          image: "images/photo1.jpg",
          fallbackImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "feature-2",
          feature: "Aapki Cute Si Naak 👃",
          icon: "🐰",
          quote: "Duniya ki sabse pyari aur cute naak!",
          description: "Aapki woh choti si pyaari naak jo gusse mein aur hasne par aisi cute lagti hai ki bas dekhte hi reh jao! Dil karta hai bas pyaar se usko boop karun aur aapko gale se laga loon, Jaana.",
          image: "images/photo2.jpg",
          fallbackImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "feature-3",
          feature: "Aapke Gulabi Hoth 💋",
          icon: "🍒",
          quote: "Aapki muskaan jo mere din ko roshan kar de.",
          description: "Aapke hothon ki woh meethi muskurahat meri sabse badi taqat hai. Jab aap muskurati hain toh lagta hai jaise bahaar aa gayi ho. Dil karta hai bas un hothon ki har hasi ko chura loon aur be-panaah pyaar doon.",
          image: "images/photo3.jpg",
          fallbackImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "feature-4",
          feature: "Aapke Reshmi Baal 💇‍♀️",
          icon: "🌸",
          quote: "Zulfon ki chhaon mein dil ko sukoon milta hai.",
          description: "Aapke baal jab aapke chehre pe aate hain aur aap unko pyaar se peeche karti hain, toh aap kisi pari se kam nahi lagti hain. Mera dil karta hai bas aapke baalon mein ungliyan phero aur aapko dekhta rahoon.",
          image: "images/photo4.jpg",
          fallbackImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "feature-5",
          feature: "Aapki Meethi Awaaz & Hasi 🗣️",
          icon: "🎶",
          quote: "Mera sabse pasandeeda gaana aapki aawaz hai.",
          description: "Aapka woh pyaar se baat karna, hasna aur 'Suniye na' kehna... sach mein mere dil ki har bechaini ko khatam kar deta hai. Aapki aawaz sun kar din ki saari thakaan pal bhar mein door ho jaati hai, Jaana.",
          image: "images/photo5.jpg",
          fallbackImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "feature-6",
          feature: "Aapka Paak Dil 🤍",
          icon: "👑",
          quote: "Sabse khoobsurat chehra aur sabse paak dil.",
          description: "Jitni aap bahar se khoobsurat hain, usse kahin zyada aapka dil paak aur saaf hai. Aapki fikar, aapka pyaar aur aapki wafa hi toh hai jisne mujhe aapka deewaana bana diya hai, Shabina.",
          image: "images/photo6.jpg",
          fallbackImage: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80"
        }
      ]
    },

    // -----------------------------------------------------------------------
    // CARD 2: THE LOVE LETTER TO MY JAANA
    // -----------------------------------------------------------------------
    {
      id: 2,
      cardTitle: "Letter to Meri Jaana 💌",
      cardSubtitle: "Straight from my heart to yours... Unlock with the secret password. 💕",
      tag: "Surprise #2",
      password: "forever",
      hint: "Kab tak main aapka saath nibhaunga? 💍",
      letter: {
        date: "Aapke Birthday Par, Sirf Aapke Liye",
        salutation: "Meri Sabse Pyaari Shabina (Meri Jaana),",
        startShayari: `Kuch is tarah se aapne mere dil ko chhu liya,
Har khushi se zyada aapko maang liya.
Khuda ne jab banaya hoga aapko fursat se,
Uss rab ne bhi aapki tareef mein jhook ke salaam kiya... ✨🌹`,
        paragraphs: [
          "Birthday bohot bohot mubarak ho, meri Jaana! 🎂✨ Aaj ka din mere liye saal ka sabse haseen aur barkat wala din hai, kyunki aaj ke din khuda ne aapko is jahan mein bheja, aur meri zindagi ko mukammal kar diya.",

          "Shabina, sach kahun toh jab se aap meri zindagi mein aayi hain, har subah meethi lagne lagi hai aur har raat aapke khayalon se mehki rehti hai. Aap meri aadat nahi, meri rooh ban chuki hain. Main lafzon mein bayaan nahi kar sakta ki aap mere liye kya mayne rakhti hain. Jab bhi aap udaas hoti hain toh mera dil baith jaata hai, aur jab aap khul ke hasti hain toh lagta hai duniya ki saari daulat mil gayi.",

          "Aapki tareef mein jitna likhun utna kam hai..."
        ],
        middleShayari: `Aapki hasi mein basti hai meri saari jannat,
Aapko paakar poori ho gayi meri har ek mannat.
Husn toh bohot dekhe hain is jahan mein humne,
Magar aapki masoomiyat jaisa koi nahi is qadar haseen... 💕🌸`,
        middleParagraphs: [
          "Aur haan, rona bilkul nahi hai abhi! 🥺 Kyunki jitni aap meri pari hain, utni hi aap meri sabse pyaari aafat bhi hain! 😂 Kaun hai woh jo bina baat ke achanak gusse mein muh phula leti hai aur kehti hai 'Aap mujhse pyaar nahi karte'? (Batao zara, kab nahi kiya maine pyaar?!). Kaun hai woh jo subah uth kar sleepy eyes ke saath aadhi neend mein aisi shakal banati hai jaise saari duniya ki hukumraan wahi ho? Lekin sach kahun na, Jaana? Mujhe aapke yeh nakhre aur drama sabse zyada pasand hain. Aapka har nakhra uthana meri sabse badi khushi hai!",

          "Shabina, main aapse wada karta hoon ki zindagi mein chahe kitne bhi imtehaan aayein, mera haath hamesha aapke haath mein rahega. Main aapko har din pehle se zyada pyaar karunga, aapke aansuon ko hasi mein badal doonga, aur hamesha aapka sahara ban ke khada rahoonga.",

          "Allah aapko hamesha khush rakhe, aapki har dua qubool farmaye, aur aapko meri bhi umar lag jaaye. Salgirah Mubarak ho, meri Jaana."
        ],
        signature: "Hamesha sirf aur sirf aapka,\nAapka Deewaana, Aapka Humsafar ❤️\n(Hamesha Aapke Dil Mein Basa Hua)"
      }
    },

    // -----------------------------------------------------------------------
    // CARD 3: 7 WADA-E-WAFA (7 SACRED LIFETIME VOWS) & VIP LOVE COUPONS
    // -----------------------------------------------------------------------
    {
      id: 3,
      cardTitle: "7 Wada-E-Wafa & Love Coupons 💍",
      cardSubtitle: "A special set of promises and exclusive lifetime tokens... Unlock to open. ✨",
      tag: "Surprise #3",
      password: "promise",
      hint: "Woh pakka wada jo hamesha ke liye do dilon ko jod de 💍",
      promisesSection: {
        headingBadge: "Hamare 7 Wada-E-Wafa 💍",
        title: "7 Sacred Lifetime Promises For Meri Jaana",
        subtitle: "Shabina, yeh sirf lafz nahi hain, yeh mere dil ki sabse gehri aur sachi kasamein hain jo main aapse hamesha nibhaunga.",
        vows: [
          {
            number: "01",
            icon: "🌸",
            title: "Aapki Hasi Aur Sukoon Ka Wada",
            desc: "Zindagi chahe kisi bhi mod par le jaaye, main hamesha koshish karunga ki aapke chehre par aane wali muskurahat kabhi kam na ho. Aapka sukoon meri pehli zimmedari hoga, Jaana."
          },
          {
            number: "02",
            icon: "🥺",
            title: "Aapke Nakhre Aur Gusse Ko Manane Ka Wada",
            desc: "Jab bhi aap bina baat ke rooth jayengi ya gusse mein muh phula lengi, main kabhi aapse door nahi jaunga. Hamesha pyaar se aapke nakhre uthaunga aur gale se laga kar manaoonga."
          },
          {
            number: "03",
            icon: "🛡️",
            title: "Har Mushkil Mein Aapka Dhaal Banne Ka Wada",
            desc: "Duniya ki kisi bhi dhoop ya takleef ko aap tak aane se pehle mujhse guzarna hoga. Main hamesha aapke aage ek mazboot deewar ban kar khada rahoonga, Shabina."
          },
          {
            number: "04",
            icon: "👑",
            title: "Aapko Hamesha Pehli Tarjee Dene Ka Wada",
            desc: "Meri har baat mein, mere har faisle mein aur meri har khushi mein sabse pehla haq sirf aur sirf aapka hoga. Aap hamesha meri rani ban kar mere dil pe raaj karengi."
          },
          {
            number: "05",
            icon: "💕",
            title: "Har Nayi Subah Pehle Se Zyada Mohabbat Ka Wada",
            desc: "Waqt ke saath har cheez badal sakti hai, magar aapke liye mere dil ka pyaar har guzarne wale din ke saath aur gehra, aur paak hota chala jayega."
          },
          {
            number: "06",
            icon: "🤝",
            title: "Kabhi Aapka Haath Na Chhodne Ka Wada",
            desc: "Zindagi ke har safar mein, har mod par, khushi ho ya gham, mera haath hamesha aapke haath mein rahega. Main aakhri saans tak aapka saath nibhaunga."
          },
          {
            number: "07",
            icon: "💍",
            title: "Aapko Is Kainaat Ki Sabse Khush Ladki Banane Ka Wada",
            desc: "Khuda se meri har dua mein bas yahi maangta hoon ki aap hamesha khilkhilati rahein. Main aapki zindagi ko khushiyon se bhar doonga, meri pyari Jaana."
          }
        ]
      },
      couponsSection: {
        headingBadge: "VIP Privilege 🎟️",
        title: "Shabina's Lifetime Love Coupons",
        subtitle: "Aapke liye khaas coupons jinhe aap kabhi bhi, kisi bhi waqt redeem kar sakti hain! Tap on any coupon to redeem: 💖",
        coupons: [
          {
            id: 1,
            icon: "🍧",
            title: "Late Night Treat & Gossip Pass",
            desc: "Valid for midnight sweet cravings, 2 AM video calls, and endless dil ki baatein.",
            badge: "24/7 Unlimited Access",
            redeemedText: "REDEEMED BY SHABINA ❤️"
          },
          {
            id: 2,
            icon: "👑",
            title: "Shabina Is Always Right Free Pass",
            desc: "Kisi bhi behes ko ek second mein jeetne ka VIP pass! (Kyunki meri Jaana hamesha sahi hoti hai!)",
            badge: "Zero Questions Asked",
            redeemedText: "REDEEMED BY SHABINA ❤️"
          },
          {
            id: 3,
            icon: "🫂",
            title: "Instant Warm Cuddle & Pamper Pass",
            desc: "Jab bhi mood kharab ho ya thakaan ho, instant unlimited pampering aur pyaar guaranteed.",
            badge: "Lifetime Validity",
            redeemedText: "REDEEMED BY SHABINA ❤️"
          },
          {
            id: 4,
            icon: "✨",
            title: "Princess Treatment For Whole Day",
            desc: "Aapka jo bhi hukum hoga, bina kisi shart ke sar-aankhon par rakh kar poora kiya jayega.",
            badge: "Royal VIP Status",
            redeemedText: "REDEEMED BY SHABINA ❤️"
          }
        ]
      }
    },

    // -----------------------------------------------------------------------
    // CARD 4: GRAND 3D BIRTHDAY CAKE & WISH CELEBRATION
    // -----------------------------------------------------------------------
    {
      id: 4,
      cardTitle: "Birthday Cake & Celebration 🎂",
      cardSubtitle: "Close your eyes, make a sweet wish, and blow out the candles! 🎉",
      tag: "Grand Finale",
      password: "cake",
      hint: "Woh meetha cake jo aaj hum cut karenge! 🎂",
      wishPrompt: "Shabina, aankhein band kijiye, dil se ek khoobsurat dua maangiye, aur candles blow kijiye! 🕯️",
      wishGrantedText: "🎉 HAPPY BIRTHDAY MERI JAANA! Aapki har dua qubool ho, Shabina! Hamesha muskurati rahiye! 🎂👑✨"
    }
  ]
};
