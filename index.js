import * as myPoly from './my-map.js';
myPoly.myMapPolyphile();

//// test 1
const res1 = [3, 4, 5].myMap((value, index, array) => {
  console.log(value, index, array);
  return value + 1;
});
console.log('1 - resalt:', res1);

//// test 2
const res2 = Array.prototype.myMap.call(
  new String('test'),
  (value) => `${value}a,`
);
console.log('2 - result:', res2);

//// test 3
// const res3 = Array.prototype.myMap.call('test', (value) => `${value},`);
// console.log('3 - result:', res3);
