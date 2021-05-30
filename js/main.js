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
