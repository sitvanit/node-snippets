// Simple values (also known as primitives) are always assigned by value-copy: null, undefined , boolean, number,
// string and ES6 symbol.

// Compound values always create a copy of the reference on assignment: objects, which includes arrays, and functions.

let a = 2;        // 'a' hold a copy of the value 2.
let b = a;        // 'b' is always a copy of the value in 'a'
++a;
console.log(a);   // 3
console.log(b);   // 2

const c = [1,2,3];
const d = c;        // 'd' is a reference to the shared value
d.push( 4 );      // Mutates the referenced value (object)
console.log(c);   // [1,2,3,4]
console.log(d);   // [1,2,3,4]

// Compound values are equal by reference
const e = [1,2,3,4];
console.log(c === d);  // true
console.log(c === e);  // false

// To copy a compound value by value, you need to make a copy of it.
const copy = c.slice();    // 'copy' references to a new value
console.log(c);           // [1,2,3,4]
console.log(copy);        // [1,2,3,4]
console.log(c === copy);  // false