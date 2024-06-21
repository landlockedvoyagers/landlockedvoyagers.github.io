// scripts.js

// Scroll functionality to hide the footer
window.addEventListener('scroll', function() {
    var footer = document.querySelector('footer');
    if (window.scrollY > 100) {
        footer.style.display = 'none';
    } else {
        footer.style.display = 'block';
    }
});

// Smooth scroll only for on-page anchors
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

