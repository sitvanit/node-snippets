/** Why JavaScript is so hated? **/

/* IEEE754 */
// JavaScript designers decided to use IEEE 754 Double Precision and you have only one number type ‘Number’.

console.log(9999999999999999 === 10000000000000000); // true
console.log(0.1 + 0.2 === 0.3); // false

const x = 1.0000000000000001;
console.log(x === 1); // true

console.log(typeof NaN); // number
console.log(NaN !== NaN); // true

/* Browser Dependency */
// Many functions and properties are executed differently across browsers.

/* Weak-Typing and Aggressive Coercion */
//  JavaScript practices an extremely aggressive type coercion doctrine.

const a = '1';
const b = 2;

const c = a + b;
console.log(c); // '12'

const d = b + a;
console.log(d); // '21'

const e = +a + b; // 3
console.log(e);

console.log([] + []); // ''
console.log([] + {}); // [object Object]
console.log({} + []); // [object Object]
console.log({} + {}); // [object Object][object Object]

console.log(19 == [19]); // true
console.log('1,9' == [1, 9]); // true

/* Annoying Global Variables */

function foo() {
    let bam = 'This is a not a global variable';
    //
    // [... Some code...]
    //
    ban = 'Typo and now you have a global variable';
}

function myLoop() {
    let sum = 0;
    for(i = 0; i < 10; i++) {
        sum += i;
    }
    return sum;
}


/** Why JavaScript is still So Popular **/
// There is no better alternative than JavaScript especially in web development, as JavaScript is one of the three core
// components of world wide web alongside HTML and CSS;
// JavaScript is very easy to learn and to use;
// JavaScript is very highly flexible. It can be used for many different tasks thanks to many useful frameworks and libraries;
// Its community is large and thus, it is easy to get support.
