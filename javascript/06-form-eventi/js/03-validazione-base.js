const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', e => {
    e.preventDefault();

    // Validazione
    let username = form.username.value;
    const USERNAMEPATTERN = /^[a-zA-Z]{6,}$/;

    if (USERNAMEPATTERN.test(username)) {
        // Feedback positivo
        feedback.textContent = 'Lo username è valido';
        feedback.classList.add('text-success');
        feedback.classList.remove('text-danger');
        form.username.style.borderColor = 'rgb(25, 135, 84)';
    } else {
        // Feedback errore
        feedback.textContent = 'Lo username deve contenere solo lettere e deve essere di almeno 6 caratteri';
        feedback.classList.add('text-danger');
        feedback.classList.remove('text-success');
        form.username.style.borderColor = 'rgb(220, 53, 69)';
    }
});