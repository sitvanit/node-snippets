/** Navigating Equality Comparitors and Sameness Checks in JavaScript **/

/* === aka Strict Equality */
// It compares two values as is. There is no type conversion.

console.log(1 === '1'); // false
console.log(null === undefined); // false - because null is an assignment value and undefined hasn't been declared yet.

/* == aka Loose equality */
// The big difference between strict and loose equality is that the later converts values into a common type before the comparison is made.

console.log(1 == '1'); // true - because after conversion, it is the same
console.log(null == undefined); // true - because at the end of the day, null and undefined don't exist

const thisIsAnObject1 = new String('item');
const thisIsAnObject2 = new String('item');
const thisIsAString1 = 'item';
const thisIsAString2 = 'item';

console.log(thisIsAnObject1 == thisIsAString1); // true - Because after conversion, semantically, it's the same.
console.log(thisIsAnObject1 === thisIsAString1); // false - Because there is no conversion and type is different despite having the same value.
console.log(thisIsAnObject1 === thisIsAnObject2); // false
console.log(thisIsAString1 === thisIsAString2); // true

console.log(true == 1); // true
console.log(true === 1); // false

console.log(true == 'true'); // false
console.log(true == '1'); // true

/* Object.is() */
// Object.is is similar in nature to === but does not behave in the exact same way.
// Like === it doesn’t transform the value but treats the evaluation of +0 and -0 differently from ===.
