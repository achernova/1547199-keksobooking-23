import {DATA_SERVER_GET, DATA_SERVER_SEND} from './data.js';
import {resetForm} from './form.js';
import {showMessage, showErrorMessage, showSuccessMessage} from './messages.js';
import {renderCards} from './filter.js';


const form = document.querySelector('.ad-form');

fetch(DATA_SERVER_GET)
  .then((response) => {
    if(!response.ok) {
      throw new Error(response.status);}
    return response.json();
  })
  .then((data) => {
    renderCards(data);
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
      resetForm();
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
