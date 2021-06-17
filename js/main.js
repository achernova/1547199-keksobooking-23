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
for (let i = 1; i <= OBJECT_COUNT; i++) {(i < 10) ? avatars.push(`img/avatars/user0${i}.png`):
  avatars.push(`img/avatars/user${i}.png`);
}

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
  const offerElements = [];
  const cloneArray = myArrayRandom.slice();
  const size = getRandomNumber(1, myArrayRandom.length);
  for (let i= 1; i<= size; i++) {
    const elementArray = cloneArray.pop();
    offerElements.push(elementArray);
  }
  return offerElements;
}

//Функция генерации элемента
const getRandomElement = function (myArray) {
  const key = Math.floor(Math.random() * myArray.length);
  return myArray[key];
};

//Генерация объекта offer
const createObjectOffer = function (index) {
  const lat = getRandomNumeral(35.50000, 35.70000, 5);
  const lng = getRandomNumeral(139.70000, 139.80000, 5);
  return {
    author: {
      avatar: avatars[index],
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
new Array(OBJECT_COUNT).fill(null).map((value, i) => createObjectOffer(i));
