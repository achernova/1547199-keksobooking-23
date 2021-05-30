function getRandomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomNumeral(0, 100);

function getRandomNumeral (min, max) {
  return min + Math.random() * (max - min);
}
getRandomNumeral(0, 10).toFixed(3);
