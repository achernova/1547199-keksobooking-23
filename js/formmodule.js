const informForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');

const getDisable = function () {
  const mapWindow = document.querySelector('.map');
  mapWindow.style.backgroundColor = 'grey';
  const elementsForDisable = document.querySelectorAll('fieldset, select');
  for (let i = 0; i < elementsForDisable.length; i++) {
    elementsForDisable[i].disable = true;
  }
  informForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');
};

const getEnable = function () {
  const  mymap = L.map('.map').setView([35.50000, 139.80000], 13);
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token',
  }).addTo(mymap);

  const elementsForDisable = document.querySelectorAll('fieldset, select');
  for (let i = 0; i < elementsForDisable.length; i++) {
    elementsForDisable[i].disable = false;
  }
  informForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');
};

export {getDisable, getEnable};
