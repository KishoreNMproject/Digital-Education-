document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Clear previous status
        formStatus.textContent = '';

        // Form validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            formStatus.textContent = 'Please fill out all fields.';
            formStatus.style.color = 'red';
            return;
        }

        // Mock submission process
        setTimeout(() => {
            formStatus.textContent = 'Thank you for your message! We will get back to you soon.';
            formStatus.style.color = 'green';
            form.reset();
        }, 1000);
    });
});
