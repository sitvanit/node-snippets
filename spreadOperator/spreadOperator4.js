// The spread operator, …, was first introduced in ES6 for arrays.
// This feature was finally introduced for objects in ES9.

// Arrays and Objects are mutable - a problem
const mySquirtle = {
    name: 'Squirtle',
    type: 'Water',
    hp: 100
};

const anotherSquirtle = mySquirtle;
anotherSquirtle.hp = 0;

console.log(mySquirtle); // { name: 'Squirtle', type: 'Water', hp: 0 }
// When we changed anotherSquirtle we also changed mySquirtle

const clonedSquirtle = { ...mySquirtle };
clonedSquirtle.hp = 30;

console.log(mySquirtle); // { name: 'Squirtle', type: 'Water', hp: 0 }
// Now when we changed clonedSquirtle we didn't1 changed mySquirtle

// To put it simply, the spread operator, …, spreads the items that are contained in an iterable (an iterable is
// anything that can be looped over, like strings, arrays, sets, etc.) inside a receiver.
// So we can copy arrays and objects.
