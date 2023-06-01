import * as myPoly from './my-map.js';

//// test

const t = [3, 4, 5].myMap((value, index, array) => {
  console.log(value, index, array);
  return value + 1;
});

console.log('map:', t);
