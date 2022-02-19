import throttle from 'lodash.throttle';

const formRef = document.querySelector('form');
const emailFormRef = document.querySelector('[name="email"]');
const textFormRef = document.querySelector('[name="message"]');
let formData = {};

populateTextarea();

function populateTextarea() {
  const savedMessages = localStorage.getItem('feedback-form-state');

  if (savedMessages) {
    formData = JSON.parse(savedMessages);
    console.log(formData);
    emailFormRef.value = formData.email;
    textFormRef.value = formData.message;
  }
}

const onFormRefInput = event => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFormRefSubmit = event => {
  event.preventDefault();

  if (
    event.currentTarget.elements.email.value === '' ||
    event.currentTarget.elements.message.value === ''
  ) {
    alert('Type something!');
  } else {
    console.log(formData);
    formRef.reset();
    localStorage.removeItem('feedback-form-state');
  }
};

formRef.addEventListener('input', throttle(onFormRefInput, 500));
formRef.addEventListener('submit', onFormRefSubmit);
