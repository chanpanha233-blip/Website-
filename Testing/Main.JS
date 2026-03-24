// Road to Cultivation - Main Script

console.log('🌿 Road to Cultivation website loaded!');

const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('mainNav');
const actionBtn = document.getElementById('actionBtn');
const joinBtn = document.getElementById('joinBtn');
const subscribeBtn = document.getElementById('subscribeBtn');
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
});

// Close mobile menu when clicking nav links
document.querySelectorAll('.nav a').forEach((link) => {
    link.addEventListener('click', () => {
        if (nav.classList.contains('open')) {
            nav.classList.remove('open');
        }
    });
});

// Play Now button - redirects to Roblox game
actionBtn.addEventListener('click', () => {
    // Replace with actual Roblox game URL
    window.open('https://www.roblox.com/games/0', '_blank');
});

// Join Community button
joinBtn.addEventListener('click', () => {
    // Replace with actual Discord server URL
    window.open('https://discord.gg/', '_blank');
});

// Newsletter subscription
subscribeBtn.addEventListener('click', () => {
    const emailInput = document.getElementById('newsletterEmail');
    const email = emailInput.value.trim();

    if (!email) {
        alert('Please enter your email address');
        return;
    }

    if (!email.includes('@')) {
        alert('Please enter a valid email address');
        return;
    }

    alert('✨ Thank you for subscribing! Check your email for exclusive content.');
    emailInput.value = '';
});

// Contact form submission
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        formStatus.textContent = '⚠️ Please complete all fields before sending.';
        formStatus.style.color = '#fff';
        formStatus.style.background = '#8b4513';
        formStatus.style.padding = '1rem';
        formStatus.style.borderRadius = '6px';
        return;
    }

    formStatus.textContent = '✨ Thank you! Your message has been sent. We\'ll get back to you soon!';
    formStatus.style.color = '#fff';
    formStatus.style.background = '#047857';
    formStatus.style.padding = '1rem';
    formStatus.style.borderRadius = '6px';

    contactForm.reset();

    setTimeout(() => {
        formStatus.textContent = '';
    }, 5000);
});

