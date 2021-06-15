//author
const avatar = [];
let avatarImg = 10;
for (let i = 1; i <= avatarImg; i++) { (i < 10) ? avatar.push(img/avatars/user0$(i).png):
avatar.push(img/avatars/user$(i).png)
}

//offer

let title = ['Отель', 'Аппартаменты', 'Гостевой дом', 'Хостел']
let address = {
};

let price = getRandomNumber (1000, 5000);

const types = ['palace', 'flat', 'house', 'bungalow', 'hotel']

let rooms =  getRandomNumber (1, 5);

let guests = getRandomNumber (1, 5);

const checkin = ['12:00', '13:00', '14:00'];

const checkout = ['12:00', '13:00', '14:00'];

let features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner']
let randomFeaturesLenght = Math.floor(Math.random() * features.length);
console.log(randomFeaturesLenght, features[randomFeaturesLenght]);

let description = ['Чистые комнаты', 'Просторная гостинная', 'Большая терраса', 'Двухуровневая квартира'];

let photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg]']

//location
let lat = getRandomNumeral(36.50000, 35.70000, 5);
let lng = getRandomNumeral(139.70000, 139.80000, 5);

function getRandomNumber (min, max) {
  if (min > max || min === max) {
    return undefined;
  }

  if (min >= 0 && max >= 0){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
getRandomNumber(30, 100);

function getRandomNumeral (min, max, fixed) {
  const randNumber = min + Math.random() * (max - min);
  if (min > max || min === max) {
    return undefined;
  }
  if (min >= 0 && max >= 0) {
    return randNumber.toFixed(fixed);
  }
}
getRandomNumeral(5, 10, 3);
