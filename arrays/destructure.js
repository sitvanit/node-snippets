const thing = ['Table', 'Chair', 'Fan'];
const [a, b, c, d] = thing;
console.log(a); // Table
console.log(b); // Chair
console.log(c); // Fan
console.log(d); // undefined

const [e = 10, f = 20] = [1];
console.log(e); // 1
console.log(f); // 20

const [g = 30, h = g] = [];
console.log(g); // 30
console.log(h); // 30

const [i, , j] = thing;
console.log(i); // Table
console.log(j); // Fan


// The new (…) operator that was added in ES6 can be used in destructuring. If the (…) operator appear on the left-hand
// side in destructuring then it is a REST PARAMETER. A Rest parameter is used to map all the remaining elements in the
// array that have not been mapped to the rest variable itself. It is like gathering what is left behind. The Rest
// variable must always be the last otherwise a SyntaxError is thrown.
const [k, ...others] = thing;
console.log(k); // Table
console.log(others); // ['Chair', 'Fan']

// If the (…) operator appears on the right-hand in destructuring then it is a SPREAD SYNTAX. It takes all the other
// elements in the array which have no variable mapped to them and then maps it to the rest variable.
const planets = ['Mercury', 'Earth', 'Venus', 'Mars', 'Pluto', 'Saturn'];
const [first, second, ...rest] = ['Mercury', ...planets];
console.log(first); // Mercury
console.log(second); // Mercury
console.log(rest); // [ 'Earth', 'Venus', 'Mars', 'Pluto', 'Saturn' ]

// Interchanging Or Swapping Variables
let [l, m] = ['Male', 'Female'];
[l, m] = [m, l];
console.log(l); // Female
console.log(m); // Male

// nested array
const numbers = [8, [1, 2, 3], 10, 12];
const [n, [o, p, q]] = numbers;

console.log(n); // 8
console.log(o); // 1
console.log(p); // 2
console.log(q); // 3

