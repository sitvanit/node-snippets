/** Deep copying vs Shallow copying **/
// A deep copy means that all of the values of the new variable are copied and disconnected from the original variable.
// A shallow copy means that certain (sub-)values are still connected to the original variable.

/* primitives */
// When you create primitive values, they are tightly couples with the variable they are assigned to.
// They only exist once.
// That means you do not really have to worry about copying primitive data types in JS.

const a = 5;
let b = a; // This is a copy
b = 6;

console.log(a); // 5
console.log(b); // 6


/* objects */
// In objects and arrays it's a shallow copy.
const c = {
    en: 'Hello',
    de: 'Hallo',
    es: 'Hola'
};

let d = c;
d.pt = 'Oi';

console.log(c.pt); // Oi
console.log(d.pt); // Oi

// There are multiple ways to make copies of objects

// spread operator
const e = {
    en: 'Bye',
    de: 'Tschuss'
};

let f = {...e};
f.de = 'Ciao';

console.log(e.de); // Tschuss
console.log(f.de); // Ciao

// you can also use it to merge two objects
const g = {...e, ...f};

console.log(g); // { en: 'Bye', de: 'Ciao' }

// Object.assign is exactly as the spread operator.
f = Object.assign({}, e);

// nested objects
// When you have a nested object (or array) and you copy it, nested objects inside that object will not be copied,
// since they are only pointers/references.
const h = {
    foods: {
        dinner: 'Pasta'
    }
};

let i = {...h};
h.foods.dinner = 'Soup'; // changes for both objects.

console.log(h); // { foods: { dinner: 'Soup' } }
console.log(i); // { foods: { dinner: 'Soup' } }

// To make a deep copy of nested objects
let k = { foods: { ...h.foods }};
k.foods.dinner = 'Salad';

console.log(h); // { foods: { dinner: 'Soup' } }
console.log(k); // { foods: { dinner: 'Salad' } }

// or
k = JSON.parse(JSON.stringify(h));


/* array */

// Copying arrays is just as common as copying objects. A lot of the logic behind it is similar, since arrays are also
// just objects under the hood.

const l = [1, 2, 3];
let m = [...l];

m[1] = 4;

console.log(l[1]); // 2
console.log(m[1]); // 4

