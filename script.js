// script.js
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded');

    // Handle form submission for the contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission
            alert('Thank you for reaching out!');
        });
    }

    // Handle form submission for the tribute form (if added in index.html)
    const tributeForm = document.getElementById('tributeForm');
    if (tributeForm) {
        tributeForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission
            alert('Thank you for your tribute!');
        });
    }
});

