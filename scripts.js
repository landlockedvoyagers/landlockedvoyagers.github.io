// scripts.js

// Existing functionality
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll functionality to hide the footer
window.addEventListener('scroll', function() {
    var footer = document.querySelector('footer');
    if (window.scrollY > 100) {
        footer.style.display = 'none';
    } else {
        footer.style.display = 'block';
    }
});

