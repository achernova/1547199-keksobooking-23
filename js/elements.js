import {newPopup} from './data.js';

const cardElement = document.querySelector('#card');
const popupElement = cardElement.querySelector('.popup');
const genMapCanvas = document.querySelector('#map-canvas');

const newCard = newPopup();
const similarPopupFragment = document.createDocumentFragment();


newCard.forEach((title, adress, price, type, rooms, guests, checkin, checkout, features, description, photos, avatar) => {
  const newCardElement = popupElement.cloneNode(true);
  newCardElement.document.querySelector('.popup_title').textContent = title;
  newCardElement.document.querySelector('.popup__text--address').textContent = adress;
  newCardElement.document.querySelector('.popup__text--price').textContent = price + '₽/ночь.';
  newCardElement.document.querySelector('.popup__type').textContent = type;
  newCardElement.document.querySelector('.popup__text--capacity').textContent = rooms + 'комнаты для' + guests + 'гостей';
  newCardElement.document.querySelector('.popup__text--time').textContent = 'Заезд после' + checkin + ', выезд до' + checkout;
  newCardElement.document.querySelector('.popup__features').textContent = features;
  newCardElement.document.querySelector('.popup__description').textContent = description;
  newCardElement.getElementById('.popup__photos').src = photos;
  newCardElement.getElementById('.popup__avatar').src = avatar;

});

genMapCanvas.appendChild(newCard);
