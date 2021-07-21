import {ERROR_TIME} from './data.js';

const ESC_EVENTS = ['Escape', 'Esc'];

const mainBody = document.querySelector('main');
const successMessage = document.querySelector('#success').content
  .querySelector('.success').cloneNode(true);
const errorMessage = document.querySelector('#error').content
  .querySelector('.error').cloneNode(true);
const serverErrorMessage = document.querySelector('#server__error').content
  .querySelector('.error').cloneNode(true);

const isEscEvent = (evt) => ESC_EVENTS.includes(evt.key);

const onEscKeyDownSuccess = (evt) => {
  if (isEscEvent(evt)) {
    successMessage.remove();
    document.removeEventListener('keydown', onEscKeyDownSuccess);
  }
};

const onEscKeyDownError = (evt) => {
  if (isEscEvent(evt)) {
    errorMessage.remove();
    document.removeEventListener('keydown', onEscKeyDownError);
  }
};

const showSuccessMessage = () => {
  document.body.appendChild(successMessage);

  document.addEventListener('keydown', onEscKeyDownSuccess);

  successMessage.addEventListener('click', () => {
    successMessage.remove();
  });

  setTimeout(() => {
    successMessage.remove();
  }, ERROR_TIME);
};

const showErrorMessage = () => {
  mainBody.appendChild(errorMessage);

  document.addEventListener('keydown', onEscKeyDownError);

  errorMessage.addEventListener('click', () => {
    errorMessage.remove();
  });
};

const onEscKeyDownServerError = (evt) => {
  if (isEscEvent(evt)) {
    serverErrorMessage.remove();
    document.removeEventListener('keydown', onEscKeyDownServerError);
  }
};

const showServerErrorMessage = () => {
  mainBody.appendChild(serverErrorMessage);

  document.addEventListener('keydown', onEscKeyDownServerError);

  serverErrorMessage.addEventListener('click', () => {
    serverErrorMessage.remove();
  });
};

export {showErrorMessage, showSuccessMessage, showServerErrorMessage, isEscEvent, onEscKeyDownServerError};
