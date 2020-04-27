// he method Object.is() works the same as === for almost all intents and purposes, with just two key differences.

// The unusual JavaScript number negative zero -0 is usually considered equal to positive zero +0, but they are technically different values.
console.log(Object.is(-0, +0)); // false
console.log(-0 === +0); // true

// NaN is the only number that does not equal itself in JavaScript, but NaN is considered to be the same value as itself using Object.is()
console.log(Object.is(NaN, NaN)); // true
console.log(NaN === NaN); // false

