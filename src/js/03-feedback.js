import throttle from 'lodash.throttle';

const formRef = document.querySelector('form');
const emailFormRef = document.querySelector('[name="email"]');
const textFormRef = document.querySelector('[name="message"]');

populateTextarea();

function populateTextarea() {
  const savedMessages = localStorage.getItem('feedback-form-state');

  if (savedMessages) {
    emailFormRef.value = JSON.parse(savedMessages).email;
    textFormRef.value = JSON.parse(savedMessages).message;
  }
}

const onFormRefInput = event => {
  const email = event.currentTarget.elements.email.value;
  const message = event.currentTarget.elements.message.value;
  const formElData = {
    email,
    message,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formElData));
};

const onFormRefSubmit = event => {
  event.preventDefault();

  if (
    event.currentTarget.elements.email.value === '' ||
    event.currentTarget.elements.message.value === ''
  ) {
    alert('Type something!');
  } else {
    const email = event.currentTarget.elements.email.value;
    const message = event.currentTarget.elements.message.value;

    const formElData = {
      email,
      message,
    };

    console.log(formElData);
    formRef.reset();
    localStorage.removeItem('feedback-form-state');
  }
};

formRef.addEventListener('input', throttle(onFormRefInput, 500));
formRef.addEventListener('submit', onFormRefSubmit);
