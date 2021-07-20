import {OBJECT_COUNT, RERENDER_DELAY, LOW_PRICE, HIGH_PRICE, ANY_VALUE} from './data.js';
import { getEnable } from './form.js';
import {createNewCards, removeMarkers} from './map.js';
import {debounce} from './utils/debounce.js';

const FilterPrices = {
  low: 'low',
  middle: 'middle',
  high: 'high',
};

const mapFilters = document.querySelector('.map__filters');
const type = mapFilters.querySelector('#housing-type');
const price = mapFilters.querySelector('#housing-price');
const rooms = mapFilters.querySelector('#housing-rooms');
const guests = mapFilters.querySelector('#housing-guests');
const features = mapFilters.querySelector('#housing-features');


const filterType = (card) => card.offer.type === type.value || type.value === ANY_VALUE;

const filterPrice = (card) => {
  switch(price.value) {
    case FilterPrices.middle:
      return card.offer.price >= LOW_PRICE && card.offer.price < HIGH_PRICE;
    case FilterPrices.low:
      return card.offer.price < LOW_PRICE;
    case FilterPrices.high:
      return card.offer.price >= HIGH_PRICE;
    case ANY_VALUE:
      return true;
  }
};

const filterRooms = (card) => card.offer.rooms === Number(rooms.value) || rooms.value === ANY_VALUE;

const filterGuests = (card) => card.offer.guests === Number(guests.value) || guests.value === ANY_VALUE;

const filterFeatures = (card) => {
  const checkedFeatures = features.querySelectorAll('input[type=checkbox]:checked');
  return Array.from(checkedFeatures).every((feature) => card.offer.features && card.offer.features.includes(feature.value));
};

const filterCards = (cards) => cards.filter((card) =>
  filterType(card) &&
  filterPrice(card) &&
  filterRooms(card) &&
  filterGuests(card) &&
  filterFeatures(card),
);

const getMapFilters = (cards) => {
  mapFilters.addEventListener('change', debounce(
    () => {
      removeMarkers();
      createNewCards(filterCards(cards).slice(0, OBJECT_COUNT));
    },
    RERENDER_DELAY,
  ));
};

const activateMapFilters = () => {
  mapFilters.classList.remove('map__filters--disabled');
  getEnable(mapFilters);
};

const renderCards = (cards) => {
  createNewCards(cards.slice(0, OBJECT_COUNT));
  activateMapFilters();
  getMapFilters(cards);
};

export {renderCards};
