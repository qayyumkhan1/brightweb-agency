let contactForm = document.getElementById('contact-form');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let messageInput = document.getElementById('msg');
let successMessage = document.getElementById('success-message');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        alert('Please fill in all required fields.');
        return;
    }
    successMessage.textContent = 'Form submitted successfully!';
    contactForm.reset();

});