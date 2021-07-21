import {DATA_SERVER_GET, DATA_SERVER_SEND, OBJECT_COUNT} from './data.js';
import {createNewCards} from './map.js';
import {resetForm} from './form.js';
import {showErrorMessage, showSuccessMessage} from './messages.js';
import {renderCards} from './filter.js';

const form = document.querySelector('.ad-form');

let allCards;

const getCardsOnMap = () => {
  createNewCards(allCards.slice(0, OBJECT_COUNT));
};

fetch(DATA_SERVER_GET)
  .then((response) => {
    if(!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then((data) => {
    allCards = data;
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
      resetForm();
      showSuccessMessage();
    })
    .catch(() => {
      showErrorMessage();
    });
});

export {getCardsOnMap};
