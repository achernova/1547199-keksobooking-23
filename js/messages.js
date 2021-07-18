const ERROR_TIME = 5000;
const mainBody = document.querySelector('main');


const isEscEvent = (evt) => {
  evt.key === 'Escape' || evt.key === 'Esc';
};

const showError = (message) => {
  const errorElement = document.createElement('div');
  errorElement.style.zIndex = 100;
  errorElement.style.position = 'absolute';
  errorElement.style.left = 0;
  errorElement.style.top = 0;
  errorElement.style.right = 0;
  errorElement.style.padding = '10px 3px';
  errorElement.style.fontSize = '30px';
  errorElement.style.textAlign = 'center';
  errorElement.style.backgroundColor = 'white';
  errorElement.textContent = message;
  document.body.append(errorElement);

  setTimeout(() => {
    errorElement.remove();
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

export {showError, showErrorMessage, showSuccessMessage, isEscEvent};
