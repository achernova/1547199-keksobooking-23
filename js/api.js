import {showMessage, showErrorMessage, showSuccessMessage} from './messages.js';
import {createNewCards} from './map';
import {DATA_SERVER_GET, DATA_SERVER_SEND} from './data.js';

const form = document.querySelector('.ad-form');

fetch(DATA_SERVER_GET)
  .then((response) => {
    if(!response.ok) {
      throw new Error(response.status);}
    return response.json();
  })
  .then((data) => {
    createNewCards(data);
  })
  .catch(() => {
    showErrorMessage();
  });

form.addEventListener('submit', function(e){
  e.preventDefault();
  const formData = new FormData(this);
  fetch(DATA_SERVER_SEND, {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      if(!response.ok){
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(() => {
      showSuccessMessage();
      this.reset();
    })
    .catch((error) => {
      if (400 === error.message) {
        showMessage('#required');
      }
      else {
        showMessage('#to_server');
      }
    });
});
