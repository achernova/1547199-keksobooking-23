const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE_LENGTH = 1000000;
const informForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
//const mapWindow = document.querySelector('.map');
const titleInput = document.querySelector('#title');
const priceInput = document.querySelector('#price');

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

priceInput.addEventListener('input', () => {
  const valuePrice = priceInput.value.length;
  if (valuePrice > MAX_PRICE_LENGTH){
    priceInput.setCustomValidity(`Удалите лишние${ valuePrice - MAX_PRICE_LENGTH} симв.`);
  }
  else {
    priceInput.setCustomValidity('');
  }
  priceInput.reportValidity();
});

const roomNumbers = document.querySelector('#room_number');
const roomCapacity = document.querySelector('#capacity');

roomNumbers.addEventListener('change', () => {
  const optionValue = this.value;
  if (optionValue === '0') {
    for (let i = 0; i < roomCapacity.children.length; i++) {
      roomCapacity.children[i].disabled = true;
    }
    roomCapacity.children[roomCapacity.children.length - 1].disabled = false;
    roomCapacity.children[roomCapacity.children.length - 1].disabled = true;
  } else {
    for (let i = 0; i < roomCapacity.children.length; i++) {
      if (i < optionValue) {
        roomCapacity.children[i].disabled = false;
      } else {
        roomCapacity.children[i].disabled = true;
      }
    }
    roomCapacity.children[0].selected = true;}

});

export {getDisable, getEnable};
