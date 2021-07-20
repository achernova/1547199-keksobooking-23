import {ERROR_TIME} from './data.js';

const mainBody = document.querySelector('main');

const isEscEvent = (evt) => {
  evt.key === 'Escape' || evt.key === 'Esc';
};

const showMessage = (selector) => {
  const templateElement = document.querySelector(selector).content;
  const elementMessage = templateElement.querySelector('div.content').cloneNode(true);
  document.body.appendChild(elementMessage);

  document.addEventListener('keydown', () => {
    if (isEscEvent) {
      elementMessage.remove();
    }
  });

  document.addEventListener('click', () => {
    elementMessage.remove();
  });

  setTimeout(() => {
    elementMessage.remove();
  }, ERROR_TIME);
};

const showErrorMessage = () => {
  const errorTemplate = document.querySelector('#error').content;
  const errorMessage = errorTemplate.querySelector('.error').cloneNode(true);
  mainBody.appendChild(errorMessage);

  document.addEventListener('keydown', () => {
    if (isEscEvent) {
      errorMessage.remove();
    }
  });

  document.addEventListener('click', () => {
    errorMessage.remove();
  });

  const closeButton = errorMessage.querySelector('.error__message');
  closeButton.addEventListener('click', () => {
    errorMessage.remove();
  });
};

const showSuccessMessage = () => {
  const successTemplate = document.querySelector('#success').content;
  const successMessage = successTemplate.querySelector('.success').cloneNode(true);
  mainBody.appendChild(successMessage);

  document.addEventListener('keydown', () => {
    if (isEscEvent) {
      successMessage.remove();
    }
  });

  document.addEventListener('click', () => {
    successMessage.remove();
  });
};

export {showMessage, showErrorMessage, showSuccessMessage, isEscEvent};
