/** Better Array check with Array.isArray **/

// In JavaScript, arrays are not true arrays. They are actually objects. So you can’t simply do a typeof check. Because it will return object.

const array = [];

console.log(typeof array); // object
console.log(Array.isArray(array)); // true
console.log(array instanceof Array); // true
