const informForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const mapWindow = document.querySelector('.map');
const mapLeaflet = L.map('.mapid').setView([35.50000, 139.80000], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'your.mapbox.access.token',
}).addTo(mapWindow);

const getDisable = () => {
  const elementsForDisableMap = mapFilters.querySelectorAll('map__filter', '.map__features');
  const elementsForDisableForm = informForm.querySelectorAll('input, textarea');
  for (let i = 0; i < elementsForDisableMap.length; i++) {
    elementsForDisableMap[i].disable = true;
  }
  for (let i = 0; i < elementsForDisableForm.length; i++) {
    elementsForDisableForm[i].disable = true;
  }
  informForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');
  mapLeaflet.disable = true;
};

const getEnable = () => {
  const elementsForDisableMap = mapFilters.querySelectorAll('map__filter', '.map__features');
  const elementsForDisableForm = informForm.querySelectorAll('input, textarea');
  for (let i = 0; i < elementsForDisableMap.length; i++) {
    elementsForDisableMap[i].disable = false;
  }
  for (let i = 0; i < elementsForDisableForm.length; i++) {
    elementsForDisableForm[i].disable = false;
  }
  informForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');
};

export {getDisable, getEnable};

