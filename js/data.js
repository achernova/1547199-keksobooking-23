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

const avatars = [];
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const DATA_SERVER_GET = 'https://23.javascript.pages.academy/keksobooking/data';
const DATA_SERVER_SEND = 'https://23.javascript.pages.academy/keksobooking';

const MAIN_TOKIO_COORDINATS_LAT = 35.67950;
const MAIN_TOKIO_COORDINATS_LNG = 139.69171;
const ZOOM = 13;
const ICON_SIZE_BIG_WIDTH = 52;
const ICON_SIZE_BIG_HEIGHT = 52;
const ICON_SIZE_WIDTH = 40;
const ICON_SIZE_HEIGHT = 40;
const AVATAR_URL = 'img/muffin-grey.svg';
const ERROR_TIME = 5000;

export {TITLE, CHECKIN, CHECKOUT, FEATURES, DESCRIPTION, PHOTOS, TYPES, OBJECT_COUNT, avatars, DATA_SERVER_GET, DATA_SERVER_SEND, MIN_TITLE_LENGTH, MAX_TITLE_LENGTH, MAIN_TOKIO_COORDINATS_LAT, MAIN_TOKIO_COORDINATS_LNG, ZOOM,ICON_SIZE_BIG_WIDTH, ICON_SIZE_BIG_HEIGHT, ICON_SIZE_WIDTH, ICON_SIZE_HEIGHT, AVATAR_URL, ERROR_TIME};
