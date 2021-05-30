function getRandomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomNumber(0, 100);

function getRandomNumeral (min, max) {
  let round = min + Math.random() * (max - min);
    return round.toFixed(3);
  }
getRandomNumeral(0, 10);
