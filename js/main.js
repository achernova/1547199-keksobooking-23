const AVATAR = [];
const TITLE = ['Отель', 'Аппартаменты', 'Гостевой дом', 'Хостел'];
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTION = ['Чистые комнаты', 'Просторная гостинная', 'Большая терраса', 'Двухуровневая квартира'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const objectCount = 10;

//Функции случайных чисел
function getRandomNumber (min, max) {
  if (min > max || min === max) {
    return undefined;
  }

  if (min >= 0 && max >= 0){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

function getRandomNumeral (min, max, fixed) {
  const randNumber = min + Math.random() * (max - min);
  if (min > max || min === max) {
    return undefined;
  }
  if (min >= 0 && max >= 0) {
    return randNumber.toFixed(fixed);
  }
}

//Функция рандомного массива
function createRandomArray (myArrayRandom) {
  let offerElements = [];
  const cloneArray = myArrayRandom.slice();
  let size = getRandomNumber(1, myArrayRandom.length);
  for (let i= 1; i<= size; i++) {
    let elementArray = cloneArray.pop();
    offerElements.push(elementArray);
  }
  return offerElements;
}

//Функция генерации элемента
let getRandomElement = function (myArray) {
  let key = Math.floor(Math.random() * myArray.length);
  return myArray[key];
};

//author
const avatarImg = 10;
for (let i = 1; i <= avatarImg; i++) {(i < 10) ? AVATAR.push(`img/avatars/user0${i}.png`):
  AVATAR.push(`img/avatars/user${i}.png`);
}

//Генерация объекта offer
const createObjectOffer = function () {
  let lat = getRandomNumeral(35.50000, 35.70000, 5);
  let lng = getRandomNumeral(139.70000, 139.80000, 5);
  return {
    author: {
      avatar: AVATAR.pop(),
    },
    offer: {
      title: getRandomElement(TITLE),
      address: `${lat}, ${lng}`,
      price: getRandomNumber (1000, 5000),
      types: getRandomElement(TYPES),
      rooms:  getRandomNumber (1, 5),
      guests: getRandomNumber (1, 5),
      checkin: getRandomElement(CHECKIN),
      checkout: getRandomElement(CHECKOUT),
      features: createRandomArray(FEATURES),
      description: getRandomElement(DESCRIPTION),
      photos: createRandomArray(PHOTOS),
    },
    location: {
      lat: lat,
      lng: lng,
    },
  };
};

//Массив объектов
const objectArray = new Array(objectCount).fill(null).map(() => createObjectOffer());

let offer = createObjectOffer();
