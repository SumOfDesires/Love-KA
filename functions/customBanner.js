const phrases = [ 
    "How's your day going?",
    "Are you feeling well?",
    "Hi Love!",
];

setInterval(() => { 
    const greeting = document.querySelector('.stp-animated-banner h2');
    if (greeting&&features.customBanner) greeting.textContent = phrases[Math.floor(Math.random() * phrases.length)];
}, 3000);