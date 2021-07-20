import {OBJECT_COUNT} from './data.js';
import { getEnable } from './form.js';
import {createNewCards} from './map.js';

const RERENDER_DELAY = 500;
const LOW_PRICE = 10000;
const HIGH_PRICE = 50000;

const mapFilters = document.querySelector('.map__filters');
const type = mapFilters.querySelector('#housing-type');
const price = mapFilters.querySelector('#housing-price');
const rooms = mapFilters.querySelector('#housing-rooms');
const guests = mapFilters.querySelector('#housing-guests');
const features = mapFilters.querySelector('#housing-features');


const filterType = (card) => {
  card.offer.types === type.value || type.value === 'any';
  return true;
};

const filterPrice = (card) => {
  switch(price.value) {
    case 'middle':
      return card.offer.price >= LOW_PRICE && card.offer.price < HIGH_PRICE;
    case 'low':
      return card.offer.price < LOW_PRICE;
    case 'high':
      return card.offer.price >= HIGH_PRICE;
    case 'any':
      return 'card';
  }
};

const filterRooms = (card) => {
  card.offer.rooms === Number(rooms.value) || rooms.value === 'any';
};

const filterGuests = (card) => {
  card.offer.guests === Number(guests.value) || guests.value === 'any';
};

const filterFeatures = (card) => {
  const checkedFeatures = features.querySelectorAll('input[type=checkbox]:checked');
  return Array.from(checkedFeatures).every((feature) => card.offer.features.includes(feature.value));
};

const filterCards = (cards) => {
  cards.filter((card) =>
    filterType(card) &&
    filterPrice(card) &&
    filterRooms(card) &&
    filterGuests(card) &&
    filterFeatures(card),
  );
  return true;
};

const getMapFilters = (cards) => {
  mapFilters.addEventListener('change', _.debounce(
    () => {
      createNewCards(filterCards(cards).slice(0, OBJECT_COUNT));
    },
    RERENDER_DELAY,
  ));
};

const activateMapFilters = () => {
  mapFilters.classList.remove('map__filters--disabled');
  getEnable(mapFilters);
};

const getCards = (cards) => {
  createNewCards(cards.slice(0, OBJECT_COUNT));
  activateMapFilters();
  getMapFilters(cards);
};
export {getCards};
