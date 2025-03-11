const $inputSubmit = document.querySelector('.input-submit');
const $inputEmail = document.querySelector('.input');
const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

let $errorIcon = document.createElement('span');
let $errorMessage = document.createElement('span');

document.addEventListener('click', (e) => {
  if (e.target.matches('#input-btn')) {
    validateEmail($inputEmail.value);
  }
  return;
});

let validateEmail = (emailValue) => {

  if (!emailValue) {
    errorState();
  }

  validEmail.test(emailValue)
    ? alert("Everything OK")
    : errorState();
}

let errorState = () => {
  $errorIcon.classList.add('icon-error');
  $inputEmail.style.borderColor = 'var(--soft-red)';

  $errorMessage.textContent = 'Please provide a valid email';
  $errorMessage.classList.add('error-message');
  $inputEmail.insertAdjacentElement('afterend', $errorMessage);
  $inputEmail.insertAdjacentElement('beforebegin', $errorIcon);

  setTimeout(() => {

    $inputEmail.value = '';
    $inputEmail.style.borderColor = 'initial';
    $errorIcon.parentNode.removeChild($errorIcon);
    $errorMessage.parentNode.removeChild($errorMessage);
  }, 4000);
}