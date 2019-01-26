/*** Functional Programming ***/
// Functional programming is a programming paradigm — a way of thinking about, and structuring your code.

/** Functions **/
// And in simple, mathematical terms, a function is a machine that produces an output given an input.
// The one interesting thing is that there can only be one output for a given input. Which means, if we provide the
// function with the same input, we expect it to always do the same exact thing, and return the same value.
// A function can not depend on anything except its input (arguments).
// A function has to return a single value.
// A function needs to be deterministic (can’t use random values, etc.)
// Functions that meet those criteria are called pure functions in programming, and they are crucial to the functional
// paradigm.

// not pure function -  because it doesn't always produce the same result given the same (empty) input - it's not deterministic.
function coin () {
    return Math.random() < 0.5 ? 'heads' : 'tails';
}

// not pure function - because it depends on variable that's out of its control.
const firstName = 'Christof';
function uppercaseNames () {
    return `${firstName.toUpperCase()}`
}

// not pure function - out of control variables and it does not return anything
let user = {
    firstName: 'Christof',
    age: 26
};
function happyBirthday () {
    user.age = user.age + 1;
}

// pure function
function calculatePrice (unitPrice, noOfUnits, coupunValue = 0) {
    return unitPrice * noOfUnits - coupunValue;
}

// There are a couple of reasons why pure functions are better than impure functions:
// 1. They are easier to read - in order to understand what a function does, you only need to read its body.
// 2. They are easier to reason about - there's no need to look for external dependencies.
// 3. They are easier to test.
// 4. They can be more performant - If we know that for a given input, the function will always produce the same output,
// we can cache (memoize) the result so we don’t have to recalculate it when the function is called again.

// Using pure functions makes your code more maintainable — because it makes it easier to manage side effects.

/** First-class functions **/
// a programming language has “first-class functions”, if functions can be used just like any other values, i.e.:
// they can be passed around,
// they can be assigned to variables,
// they can be stored in more complex data structures, like arrays or objects.

/** Higher-order functions **/
// Functions that “operate” on other functions are called higher-order functions. By operate, we mean they can either (or both):
// take other functions as arguments,
// return other functions.
