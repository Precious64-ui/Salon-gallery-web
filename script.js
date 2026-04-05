// 1. Smooth Scrolling for Navbar Links
document.querySelectorAll('.nav-links a, .footer-links a, .btn, .book-btn').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Only scroll if the link is an internal ID (starts with #)
        if (href.startsWith('#') && href.length > 1) {
            e.preventDefault();
            const targetElement = document.querySelector(href);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// 2. Simple Form Validation & Submission
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const btn = this.querySelector('.submit-btn');
        const originalText = btn.innerText;
        
        btn.innerText = "Sending...";
        btn.style.opacity = "0.7";
        btn.disabled = true;

        // Simulate a delay (like a real server would have)
        setTimeout(() => {
            alert("Thank you! Your request has been sent to Oura Studio. We will contact you shortly.");
            btn.innerText = originalText;
            btn.style.opacity = "1";
            btn.disabled = false;
            contactForm.reset(); 
        }, 2000);
    });
}

// 3. Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    // Toggles 'scrolled' class based on scroll position
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// 4. Mobile Menu Logic
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}