import {newOffer} from './util.js';
import {PHOTOS} from './data.js';
import {avatars} from './data.js';
import {FEATURES} from './data.js';

const cardElement = document.querySelector('#card')
  .content
  .querySelector('.popup');

const genMapCanvas = document.querySelector('#map-canvas');
const newCard = newOffer();
const similarPopupFragment = document.createDocumentFragment();

newCard.forEach((card) => {
  const newCardElement = cardElement.cloneNode(true);
  /*newCardElement.querySelector('.popup__avatar').src = card.avatar;*/
  for (let i = 0; i <= avatars.length; i++){
    const avatarTag = document.createElement('img');
    avatarTag.classList.add('.popup__avatar');
    avatarTag.src = avatars[i];
    newCardElement.querySelector('.popup__avatar').appendChild(avatarTag);
  }
  if (!card.avatar) {
    newCardElement.querySelector('.popup__avatar').classList.add('hidden');
  }
  newCardElement.querySelector('.popup__title').textContent = card.offer.title;
  if (!card.offer.title) {
    newCardElement.querySelector('.popup__title').classList.add('hidden');
  }
  newCardElement.querySelector('.popup__text--address').textContent = card.offer.adress;
  if (!card.offer.adress) {
    newCardElement.querySelector('.popup__text--address').classList.add('hidden');
  }
  newCardElement.querySelector('.popup__text--price').textContent = `${card.offer.price}₽/ночь.`;
  if (!card.offer.price) {
    newCardElement.querySelector('.popup__text--price').classList.add('hidden');
  }
  newCardElement.querySelector('.popup__type').textContent = card.offer.type;
  if (!card.offer.type) {
    newCardElement.querySelector('.popup__type').classList.add('hidden');
  }
  newCardElement.querySelector('.popup__text--capacity').textContent = `${card.offer.rooms}комнаты для ${card.offer.guests}гостей`;
  if (!card.offer.rooms || !card.offer.guests) {
    newCardElement.querySelector('.popup__text--capacity').classList.add('hidden');
  }
  newCardElement.querySelector('.popup__text--time').textContent = `${card.offer.checkin},Заезд после ${card.offer.checkout}, выезд до`;
  if (!card.offer.checkin || !card.offer.checkout) {
    newCardElement.querySelector('.popup__text--time').classList.add('hidden');
  }
  //newCardElement.querySelector('.popup__features') = card.offer.features;
  for (let i = 0; i <= FEATURES.length; i++){
    const featureTag = document.createElement('li');
    const className = `popup__feature--${FEATURES[i]}`;
    //console.log(className);
    featureTag.classList.add(className);
    featureTag.classList.add('popup__feature');
    //newCardElement.querySelector('.popup__features').appendChild(featureTag);
  }
  if (!card.offer.features || card.offer.features.length === 0) {
    newCardElement.querySelector('.popup__features').classList.add('hidden');
  }
  newCardElement.querySelector('.popup__description').textContent = card.offer.description;
  if (!card.offer.description || card.offer.description.length === 0) {
    newCardElement.querySelector('.popup__description').classList.add('hidden');
  }
  /*newCardElement.querySelector('.popup__photos').src = card.offer.photos;*/
  for (let i = 0; i <= PHOTOS.length; i++){
    const photoTag = document.createElement('img');
    photoTag.classList.add('popup__photos');
    photoTag.src = PHOTOS[i];
    newCardElement.querySelector('.popup__photos').appendChild(photoTag);
  }
  if (!card.offer.photos || card.offer.photos.length === 0) {
    newCardElement.querySelector('.popup__photos').classList.add('hidden');
  }
  similarPopupFragment.appendChild(newCardElement);
});

genMapCanvas.appendChild(similarPopupFragment);
