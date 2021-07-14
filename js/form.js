const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE_LENGTH = 1000000;
const informForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
//const mapWindow = document.querySelector('.map');
const titleInput = document.querySelector('#title');
const typeOfRooms = document.querySelector('#type');
//const typeOfRoomsValue = typeOfRooms.querySelector('option');
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
const timeOutInput = document.querySelector('#timeout');
//const buttonSubmit = document.querySelector('.ad-form__submit');
const mapLeaflet = L.map('mapid').setView([35.50000, 139.80000], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'your.mapbox.access.token',
}).addTo(mapLeaflet);

const getDisable = () => {
  const elementsForDisable = document.querySelectorAll('option, input, textarea');
  for (let i = 0; i < elementsForDisable.length; i++) {
    elementsForDisable[i].disable = true;
  }
  informForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');
  mapLeaflet.disable = true;
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
  if (minPrice > Number(priceInput.value)) {
    priceInput.setCustomValidity(`минимальная цена${minPrice}`);
  } else if (valuePrice > MAX_PRICE_LENGTH){
    priceInput.setCustomValidity(`Максимальная цена${MAX_PRICE_LENGTH}`);
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

/*priceInput.addEventListener('input', () => {
  const valuePrice = Number(priceInput.value);
  if (valuePrice > MAX_PRICE_LENGTH){
    priceInput.setCustomValidity(`Удалите лишние${ valuePrice - MAX_PRICE_LENGTH} симв.`);
  }
  else {
    priceInput.setCustomValidity('');
  }
  priceInput.reportValidity();
});*/


timeInInput.addEventListener('change', (evt) => {
  const valueTime = evt.target.value;
  timeOutInput.value = valueTime;
});

timeOutInput.addEventListener('change', (evt) => {
  const valueTime = evt.target.value;
  timeInInput.value = valueTime;
});

export {getDisable, getEnable};
