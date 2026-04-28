// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '1rem 0';
        navbar.style.background = 'rgba(10, 10, 12, 0.95)';
        navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
    } else {
        navbar.style.padding = '1.5rem 0';
        navbar.style.background = 'rgba(10, 10, 12, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple intersection observer for reveal animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .matching-text, .profile-card').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});
