const form = document.querySelector('form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm_password');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  if (passwordInput.value !== confirmPasswordInput.value) {
    alert('Passwords do not match!');
  } else {
    alert(`Username: ${usernameInput.value}\nEmail: ${emailInput.value}\nPassword: ${passwordInput.value}`);
    form.reset();
  }
});