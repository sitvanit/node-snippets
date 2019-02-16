/** Generators **/

// Generators are a special kind of function with the ability to pause itself, and resume later, allowing other code to run in the meantime.

function *calculator(input) {
    const doubleThat = 2 * (yield (input / 2));
    const another = yield (doubleThat);
    return input * doubleThat * another;
}

// initialize
const calc = calculator(10);

// start the iteratot
console.log(calc.next()); // { value: 5, done: false }
console.log(calc.next(7)); // { value: 14, done: false } 7 was placed as the value of doubleThat. Important: you might read like input / 2 was the argument
console.log(calc.next(100)); // { value: 14000, done: true } 10 * 14 * 100;

