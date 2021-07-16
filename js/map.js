import {getEnable} from './form.js';
import {createNewOffer} from './util.js';

const newCards = createNewOffer();

const map = L.map('map-canvas')
  .on('load', () => {
    getEnable();
  })

  .setView({
    lat: 35.67950,
    lng: 139.69171,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.67950,
    lng: 139.69171,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },

);
mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  const addressInput = document.querySelector('#address');
  addressInput.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});


newCards.forEach((card) => {
  const balloonTemplate = document.querySelector('#card')
    .content
    .querySelector('.popup');
  const newCardElement = balloonTemplate.cloneNode(true);

  const getHiddenData = (incomingData, popupClass) => {
    if (incomingData === undefined) {
      newCardElement.querySelector(`.${popupClass}`).classList.add('hidden');
    }
  };
  newCardElement.querySelector('.popup__avatar').src = card.author.avatar;
  getHiddenData(card.author.avatar, 'popup__avatar');

  newCardElement.querySelector('.popup__title').textContent = card.offer.title;
  getHiddenData(card.offer.title, 'popup__title');

  newCardElement.querySelector('.popup__text--address').textContent = card.offer.address;
  getHiddenData(card.offer.address, 'popup__text--address');

  newCardElement.querySelector('.popup__text--price').textContent = `${card.offer.price}₽/ночь.`;
  getHiddenData(card.offer.price, 'popup__text--price');

  newCardElement.querySelector('.popup__type').textContent = card.offer.types;
  getHiddenData(card.offer.type, 'popup__type');

  newCardElement.querySelector('.popup__text--capacity').textContent = `${card.offer.rooms} комнаты для ${card.offer.guests} гостей`;
  getHiddenData(card.offer.rooms, 'popup__text--capacity');


  newCardElement.querySelector('.popup__text--time').textContent = `Заезд после${card.offer.checkin}, выезд до ${card.offer.checkout}`;
  getHiddenData(card.offer.checkin, 'popup__text--time');

  for (let i = 0; i < card.offer.features.length; i++){
    const featureTag = document.createElement('li');
    const className = `popup__feature--${card.offer.features[i]}`;
    featureTag.classList.add(className);
    featureTag.classList.add('popup__feature');
    newCardElement.querySelector('.popup__features').appendChild(featureTag);
  }
  if (!card.offer.features || card.offer.features.length === 0) {
    newCardElement.querySelector('.popup__features').classList.add('hidden');
  }

  newCardElement.querySelector('.popup__description').textContent = card.offer.description;
  getHiddenData(card.offer.description, 'popup__description');

  for (let i = 0; i < card.offer.photos.length; i++){
    const photoTag = document.createElement('img');
    photoTag.classList.add('popup__photos');
    photoTag.src = card.offer.photos[i];
    photoTag.style.width = '45px';
    photoTag.style.height = '40px';
    newCardElement.querySelector('.popup__photos').appendChild(photoTag);
  }
  if (!card.offer.photos || card.offer.photos.length === 0) {
    newCardElement.querySelector('.popup__photos').classList.add('hidden');
  }

  card['html'] =newCardElement;
});

const markers = L.layerGroup();

markers.remove();

const createNewCards = (cards) => {

  cards.forEach((card) => {
    const icon = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });
    const marker = L.marker(
      {
        lat: card.location.lat,
        lng: card.location.lng,
      },
      {
        icon,
      });
    marker
      .addTo(markers)
      .bindPopup(card['html'],
        {
          keepInView: true,
        });
  });
  markers.addTo(map);
  return createNewCards;
};

createNewCards(newCards);
export {newCards, createNewCards};
