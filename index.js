import * as myPoly from './my-map.js';
myPoly.myMapPolyphile();

//// test

const t = [3, 4, 5].myMap((value, index, array) => {
  console.log(value, index, array);
  return value + 1;
});

console.log('resalt:', t);

Array.prototype.myMap.call('12345', (value) => `${value},`);
