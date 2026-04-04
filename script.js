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
        
        // Basic feedback to show the user something happened
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
            contactForm.reset(); // Clears the form
        }, 2000);
    });
}

// 3. Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(255, 255, 255, 0.95)";
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    } else {
        navbar.style.background = "transparent";
        navbar.style.boxShadow = "none";
    }
});

// Add this to your script to test if the click is even happening
hamburger.addEventListener('click', () => {
    console.log("Hamburger was clicked!"); // Check your browser console (F12) for this message
    navLinks.classList.toggle('active');
});