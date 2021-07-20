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

const minPrices = {
  'bungalow':0,
  'flat':1000,
  'hotel':3000,
  'house':5000,
  'palace':10000,
};
const timeInInput = document.querySelector('#timein');
const timeOutInput= document.querySelector('#timeout');


const getDisable = () => {
  const elementsForDisable = document.querySelectorAll('option, input, textarea');
  for (let i = 0; i < elementsForDisable.length; i++) {
    elementsForDisable[i].disable = true;
  }
  informForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');
};

const getEnable = () => {
  const elementsForDisable = document.querySelectorAll('fieldset, select');
  for (let i = 0; i < elementsForDisable.length; i++) {
    elementsForDisable[i].disable = false;
  }
  informForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');
};

titleInput.addEventListener('input', () => {
  const valueTitle = titleInput.value.length;
  if (valueTitle < MIN_TITLE_LENGTH){
    titleInput.setCustomValidity(`Еще${MIN_TITLE_LENGTH - valueTitle} симв.`);
  }
  else if (valueTitle > MAX_TITLE_LENGTH){
    titleInput.setCustomValidity(`Удалите лишние${ valueTitle - MAX_TITLE_LENGTH} симв.`);
  }
  else {
    titleInput.setCustomValidity('');
  }
  titleInput.reportValidity();
});

const onGuestsRoomChanged = () => {
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
};

const validatePrice = () => {
  const minPrice = minPrices[typeOfRooms.value];
  const valuePrice = Number(priceInput.value);
  const ValuePriceMax = Number(priceInput.max);
  if (minPrice > Number(priceInput.value)) {
    priceInput.setCustomValidity(`минимальная цена${minPrice}`);
  } else if (valuePrice > ValuePriceMax){
    priceInput.setCustomValidity('Максимальная цена 1000000');
  } else {
    priceInput.setCustomValidity('');
  }
  priceInput.reportValidity();
};

roomNumber.addEventListener('change', onGuestsRoomChanged);
roomCapacity.addEventListener('change', onGuestsRoomChanged);

priceInput.placeholder = minPrices[typeOfRooms.value];
typeOfRooms.addEventListener('change', () => {
  priceInput.placeholder = minPrices[typeOfRooms.value];
  validatePrice();
});

priceInput.addEventListener('input', () => validatePrice());

timeInInput.addEventListener('change', (evt) => {
  const valueTime = evt.target.value;
  timeOutInput.value = valueTime;
});

timeOutInput.addEventListener('change', (evt) => {
  const valueTime = evt.target.value;
  timeInInput.value = valueTime;
});


const resetForm = (e) => {
  e.preventDefault;
  informForm.reset();
  setDefaultMarkerState();
  priceInput.placeholder = minPrices[typeOfRooms.value];
  mapFilters.reset();
  removeMarkers();
  getCardsOnMap();
  setValueAddress();
};

informForm.addEventListener('reset', resetForm);


export {getDisable, getEnable, resetForm};
