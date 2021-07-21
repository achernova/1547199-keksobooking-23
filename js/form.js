import {/*MAIN_TOKIO_COORDINATS_LAT, MAIN_TOKIO_COORDINATS_LNG,*/ MIN_TITLE_LENGTH, MAX_TITLE_LENGTH} from './data.js';
import {setDefaultMarkerState, removeMarkers, setValueAddress} from './map.js';
import {getCardsOnMap} from './api.js';

const informForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const titleInput = document.querySelector('#title');
const typeOfRooms = document.querySelector('#type');
const priceInput = document.querySelector('#price');
const roomNumber = document.querySelector('#room_number');
const roomCapacity = document.querySelector('#capacity');

const MinPrices = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};
const timeInInput = document.querySelector('#timein');
const timeOutInput = document.querySelector('#timeout');


const getDisable = () => {
  const formElements = informForm.querySelectorAll('fieldset');
  for (let i = 0; i < formElements.length; i++) {
    formElements[i].disabled = true;
  }
  const filterElements = mapFilters.querySelectorAll('select, fieldset');
  for (let i = 0; i < filterElements.length; i++) {
    filterElements[i].disabled = true;
  }
  informForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');
};

const getEnableForm = () => {
  const formElements = informForm.querySelectorAll('fieldset');
  for (let i = 0; i < formElements.length; i++) {
    formElements[i].disabled = false;
  }
  informForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');
};

const getEnableFilters = () => {
  const filterElements = mapFilters.querySelectorAll('select, fieldset');
  for (let i = 0; i < filterElements.length; i++) {
    filterElements[i].disabled = false;
  }
};

titleInput.addEventListener('input', () => {
  const valueTitle = titleInput.value.length;
  if (valueTitle < MIN_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Еще${MIN_TITLE_LENGTH - valueTitle} симв.`);
  } else if (valueTitle > MAX_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Удалите лишние${valueTitle - MAX_TITLE_LENGTH} симв.`);
  } else {
    titleInput.setCustomValidity('');
  }
  titleInput.reportValidity();
});

const guestsRoomChange = () => {
  const valueRoomNumber = Number(roomNumber.value);
  const valueRoomCapacity = Number(roomCapacity.value);
  if (valueRoomNumber === 100 && valueRoomCapacity !== 0) {
    roomNumber.setCustomValidity('не для гостей');
  } else if (valueRoomCapacity === 0 && valueRoomNumber !== 100) {
    roomNumber.setCustomValidity('Только для гостей');
  } else if (valueRoomNumber < valueRoomCapacity) {
    roomNumber.setCustomValidity('Количество гостей превышает количество комнат');
  } else {
    roomNumber.setCustomValidity('');
  }
  roomNumber.reportValidity();

  return roomNumber.checkValidity() && roomCapacity.checkValidity();
};

const validatePrice = () => {
  const minPrice = MinPrices[typeOfRooms.value];
  const valuePrice = Number(priceInput.value);
  const ValuePriceMax = Number(priceInput.max);
  if (minPrice > Number(priceInput.value)) {
    priceInput.setCustomValidity(`минимальная цена${minPrice}`);
  } else if (valuePrice > ValuePriceMax) {
    priceInput.setCustomValidity('Максимальная цена 1000000');
  } else {
    priceInput.setCustomValidity('');
  }
  priceInput.reportValidity();
};

roomNumber.addEventListener('change', () => {
  guestsRoomChange();
});
roomCapacity.addEventListener('change', () => {
  guestsRoomChange();
});

roomNumber.addEventListener('change', () => {
  guestsRoomChange();
});
roomCapacity.addEventListener('change', () => {
  guestsRoomChange();
});

priceInput.placeholder = MinPrices[typeOfRooms.value];
typeOfRooms.addEventListener('change', () => {
  priceInput.placeholder = MinPrices[typeOfRooms.value];
  validatePrice();
});

priceInput.addEventListener('input', () => validatePrice());

timeInInput.addEventListener('change', (evt) => {
  timeOutInput.value = evt.target.value;
});

timeOutInput.addEventListener('change', (evt) => {
  timeInInput.value = evt.target.value;
});

const resetForm = () => {
  informForm.reset();
  setDefaultMarkerState();
  priceInput.placeholder = MinPrices[typeOfRooms.value];
  mapFilters.reset();
  removeMarkers();
  getCardsOnMap();
  setValueAddress();
};

informForm.querySelector('.ad-form__reset')
  .addEventListener('click', (e) => {
    e.preventDefault();
    resetForm();
  });

export {getDisable, getEnableForm, getEnableFilters, resetForm, guestsRoomChange};
