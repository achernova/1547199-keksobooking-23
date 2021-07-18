//import {newCards} from './map.js';
//import {setUserFormSubmit} from '.form.js';
//import {showError, showErrorMessage, showSuccessMessage, isEscEvent} from './messages.js';

const DATA_SERVER_GET = 'https://23.javascript.pages.academy/keksobooking/data.';
const DATA_SERVER_SEND = 'https://23.javascript.pages.academy/keksobooking';

const getData = (onSuccess) => {
  fetch(DATA_SERVER_GET)
    .then((response) => response.json())
    .then((newCards) => {
      onSuccess(newCards);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    DATA_SERVER_SEND,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export {getData, sendData};
