import {getRandomElement} from './data.js';

const TITLE = ['Отель', 'Аппартаменты', 'Гостевой дом', 'Хостел'];
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTION = ['Чистые комнаты', 'Просторная гостинная', 'Большая терраса', 'Двухуровневая квартира'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const OBJECT_COUNT = 10;

//author
const avatars = [];

export {TITLE, CHECKIN, CHECKOUT, FEATURES, DESCRIPTION, PHOTOS, TYPES, OBJECT_COUNT, avatars};

const newPopup = () => {
  return {
    title: getRandomElement(TITLE),
    checkin: getRandomElement(CHECKIN),
    checkout: getRandomElement(CHECKOUT),
    features: getRandomElement(FEATURES),
    description: getRandomElement(DESCRIPTION),
    photos: getRandomElement(PHOTOS),
    types: getRandomElement(TYPES),
    avatar: getRandomElement(avatars),
  };
};

export {newPopup};
