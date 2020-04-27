/** Functions and function calls **/

 const numbers = [1, 2, 3, 4, 5];

// old way
function sumOld() {
    return Array.apply(null, arguments).reduce((a, b) => a + b);
}

sumOld.apply(null, numbers);

// new way
function sumNew(...numbers) {
    return numbers.reduce((a, b) => a + b)
}

sumNew(...numbers);

// The new way makes the code shorter, readable and easier to maintain.
// But the new way causes a huge performance drop.


/** Arrays **/

const a = [1, 2, 3, 4, 5];
const b = [6, 7, 8, 9, 10];

// old way
const c = [].concat(a, b);

// new way
const d = [...a, ...b];

// Here as well the new way causes a huge performance drop.

