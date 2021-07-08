import {newOffer} from './util.js';

const cardElement = document.querySelector('#card')
  .content
  .querySelector('.popup');

const genMapCanvas = document.querySelector('#map-canvas');
const newCard = newOffer();
const similarPopupFragment = document.createDocumentFragment();

newCard.forEach((card) => {
  const newCardElement = cardElement.cloneNode(true);
  newCardElement.querySelector('.popup__avatar').src = card.avatar;
  if (!card.avatar) {
    newCardElement.querySelector('.popup__avatar').classList.add('hidden');
  }
  newCardElement.querySelector('.popup__title').textContent = card.title;
  if (!card.title) {
    newCardElement.querySelector('.popup__title').classList.add('hidden');
  }
  newCardElement.querySelector('.popup__text--address').textContent = card.adress;
  if (!card.adress) {
    newCardElement.querySelector('.popup__text--address').classList.add('hidden');
  }
  newCardElement.querySelector('.popup__text--price').textContent = `${card.price}₽/ночь.`;
  if (!card.price) {
    newCardElement.querySelector('.popup__text--price').classList.add('hidden');
  }
  newCardElement.querySelector('.popup__type').textContent = card.type;
  if (!card.type) {
    newCardElement.querySelector('.popup__type').classList.add('hidden');
  }
  newCardElement.querySelector('.popup__text--capacity').textContent = `${card.rooms}комнаты для` `${card.guests}гостей`;
  if (!card.rooms || !card.guests, !card.rooms && !card.guests ) {
    newCardElement.querySelector('.popup__text--capacity').classList.add('hidden');
  }
  newCardElement.querySelector('.popup__text--time').textContent = `${card.checkin},Заезд после`; `${card.checkout}, выезд до`;
  if (!card.checkin || !card.checkout, !card.checkin && !card.checkout) {
    newCardElement.querySelector('.popup__text--time').classList.add('hidden');
  }
  newCardElement.querySelector('.popup__features').textContent = card.features;
  if (!card.features || card.features.length === 0) {
    newCardElement.querySelector('.popup__features').classList.add('hidden');
  }
  newCardElement.querySelector('.popup__description').textContent = card.description;
  if (!card.description || card.description.length === 0) {
    newCardElement.querySelector('.popup__description').classList.add('hidden');
  }
  newCardElement.querySelector('.popup__photos').src = card.photos;
  if (!card.photos || card.photos.length === 0) {
    newCardElement.querySelector('.popup__photos').classList.add('hidden');
  }
  similarPopupFragment.appendChild(newCardElement);
});

genMapCanvas.appendChild(similarPopupFragment);
