/** Number Truncation in JavaScript **/

const number = 80.6;

// Old Way
const es5 = number < 0 ? Math.ceil(number) : Math.floor(number);
console.log(es5); // 80

// New Way
const es6 = Math.trunc(number);
console.log(es6); // 80

// we can also do it with parseInt
console.log(parseInt(number)); // 80

// Math.trunc() vs parseInt()
// parseInt is mainly used for a string argument. So if you're dealing with numbers, it's way better to use Math.trunc().

// Most modern browsers support Math.trunc(). EXCEPT, Internet Explorer. I know 😞 So if you need support for older browsers, use the old way 😕
