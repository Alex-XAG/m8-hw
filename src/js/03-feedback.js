const feedbackForm = document.querySelector('.feedback-form');
console.log(feedbackForm.email.value);

const FORM_KEY = 'feedback-form-state';

isLocalStorage();

feedbackForm.addEventListener('input', onFormChange);
feedbackForm.addEventListener('submit', onFormSubmit);

function onFormChange(evt) {
  const data = evt.currentTarget.elements;
  const formData = {
    email: data.email.value,
    message: data.message.value,
  };

  localStorage.setItem(FORM_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();

  const formData = {
    email: evt.currentTarget.email.value,
    message: evt.currentTarget.message.value,
  };

  feedbackForm.reset();
  localStorage.removeItem(FORM_KEY);
  console.log(formData);
}

function isLocalStorage() {
  if (!localStorage.getItem(FORM_KEY)) {
    return;
  }
  const parsedLocalStorage = JSON.parse(localStorage.getItem(FORM_KEY));

  feedbackForm.email.value = parsedLocalStorage.email;
  feedbackForm.message.value = parsedLocalStorage.message;
}
