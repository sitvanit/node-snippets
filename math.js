/*** Numbers in JavaScript ***/

// JavaScript has just one number type. i.e5 and 5.12 are the same type (no float).
// JS uses the “double-precision 64-bit format IEEE 754” standard.
// All numbers are floats
// All numbers are the same type, ‘number’
// JS like any other language is limited in how large of a number it can represent and how accurate it can be.

const int = 1; // is an integer, but really it’s a float and equal to 1.0

/** conversion from string **/
const str = '24.23';
const short = +str; // converted to 24.23 as a Number
const n = Number(str);

/** safe numbers **/
// A “safe” number is a number whose value is guaranteed to be what you say it is. For example, if we try to use
// 900719925474099164 in our code it instead becomes 900719925474099200 This is because it’s outside of the safe number
// range.
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991
console.log(Number.isSafeInteger(9007199254740991)); // true
console.log(Number.isSafeInteger(9007199254740992)); // false

/** isInteger **/
console.log(Number.isInteger(5));     // true
console.log(Number.isInteger(5.00));  // true
console.log(Number.isInteger(5 / 2)); // false
// or
console.log(5 % 1 === 0); // true
console.log(5.5 % 1 === 0); // false

/** change the number of a decimal places **/
const a = 5.6710142;
const b = 0.993;
console.log(a.toFixed(2)); // 5.67
console.log(a.toFixed(1)); // 5.7
console.log(b.toFixed());  // 1
console.log(b.toFixed(20));// 0.99299999999999999378
// console.log(b.toFixed(30));// RangeError: toFixed() digits argument must be between 0 and 20

/** change the number of a decimal places more precisely **/
console.log(a.toPrecision(2)); // '5.7'
console.log(a.toPrecision(1)); // '6'
console.log(b.toPrecision());  // '0.993'
console.log(b.toPrecision(20));// '0.99299999999999999378'

/** convert to exponential form **/
const x = 25893210;
const p = x.toExponential();
const q = x.toExponential(2);
console.log(p);             // 2.589321e+7
console.log(q);             // 2.59e+7
console.log(Number(p));     // 25893210
console.log(parseFloat(p)); // 25893210

/** work with large numbers **/
// Until BigInt is available, use a library:
// https://github.com/MikeMcl/bignumber.js/

/** convert to string with another base **/
const num = 3241;
console.log(num.toString(2));  // 110010101001
console.log(num.toString(8));  // 6251
console.log(num.toString(16)); // ca9
console.log(num.toString(10)); // 3241

/** convert to number from a string **/
const bin = num.toString(2);
console.log(Number.parseInt(bin, 2)); // 3241

/** literal numbers **/
console.log((23).toString(2)); // 10111

/** NaN - invalid number **/
// NaN lives on the Number object, but is defined as a result of some mathematical operations that resulted in a value
// that cannot be quantified as a number.
// NaN It’s the only value not equal to itself and we can use that to our advantage by doing something like x !== x if
// that returns true then it’s NaN.
console.log(5 + NaN);             // NaN
console.log(NaN == NaN);          // false
console.log(NaN === NaN);         // false
console.log(Object.is(NaN, NaN)); // true
console.log(isNaN(NaN));          // true
console.log(isNaN('abc'));        // true
console.log(Number.isNaN(NaN));   // true
console.log(Number.isNaN('abc')); // false
console.log(Number.isNaN(+'abc'));// true - simulate the global isNaN

/** round a number **/
const f = 5.921;
console.log(Math.floor(f));    // 5
console.log(Math.ceil(f));     // 6
console.log(Math.round(f));    // 6
console.log(Math.round(5.5));  // 6
console.log(f.toFixed(2));     // 5.92
console.log(f.toPrecision(2)); // 5.9
console.log(f >> 0);           // 5 - using a bit shift

/** exponents **/
console.log(3 ** 2);         // 9
console.log(Math.pow(3, 2)); // 9

/** random number **/
// random number between 0 (inclusive) to 1 (exclusive)
console.log(Math.random()); 
// random number between 0 to 9
console.log(Math.random() * 10 >> 0); // remember >> is same as Math.floor
console.log(Math.floor(Math.random() * 10));
// random number between min and max
const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
console.log(getRandom(0, 22));
