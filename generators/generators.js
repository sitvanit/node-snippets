// A function can stop execution in one of the following scenarios:
// 1. The compiler reaches the end of the function.
// 2. It encounters the return keyword.
// 3. The function throws an error or exception.

// In the case of generators, these functions are capable of returning multiple values, and they may not execute
// completely. Function execution can be triggered in parts.

/** Getting Values Back From Generators **/
// The * after the function keyword indicates that it’s a generator and an iterator is returned from the function.
function* customGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

// When a generator is called, it returns an iterator.
// This iterator won’t fetch results by itself. It needs to be triggered from outside.
const iterator = customGenerator();

const firstValue = iterator.next();
console.log(firstValue); // { value: 1, done: false }

const secondValue = iterator.next();
console.log(secondValue); // { value: 2, done: false }

const thirdValue = iterator.next();
console.log(thirdValue); // { value: 3, done: true }

const forthValue = iterator.next();
console.log(forthValue); // { value: undefined, done: true }

/** Using the Return Keyword in Generators **/
// A generator function can have a return statement. As soon as the generator function encounters the return keyword,
// it updates the done flag to true, and even if we have more yield keywords in the function, the generator will be
// considered complete.
// Once the return keyword is executed, all other yields would return undefined with the done flag set to true.
function* customGeneratorWithReturn() {
    yield 1;
    return 5;
    yield 2;
}

const iterator2 = customGeneratorWithReturn();

const firstValue2 = iterator2.next();
console.log(firstValue2); // { value: 1, done: false }

const secondValue2 = iterator2.next();
console.log(secondValue2); // { value: 5, done: true }

const thirdValue2 = iterator2.next();
console.log(thirdValue2); // { value: undefined, done: true }

/** Passing Values to the “Next” Function **/
function* customGeneratorWithValues() {
    let x = yield 1;
    yield x + 1
}

const iterator3 = customGeneratorWithValues();
let nextValue = null;

nextValue = iterator3.next();
console.log(nextValue); // { value: 1, done: false }

nextValue = iterator3.next(10);
console.log(nextValue); // { value: 11, done: false }

nextValue = iterator3.next();
console.log(nextValue); // { value: undefined, done: true }

// Below are the events when the first call to next() is made:
// 1. When next is called the first time on the iterator, the generator starts execution.
// 2. The generator code executes until encountering the first yield keyword.
// 3. It returns what is passed to the yield function.

// When next(10) is invoked:
// The parameter passed is substituted in place of yield 1.
// 1. So effectively, line 3 in the generator becomes let x = 10.
// 2. It further executes the function until encountering the next yield.
// 3. It substitutes the value of x with 10 and returns the resulting value (10 +1).

/** Working With for … of Loops **/
function *iterateGenerator() {
    yield "1";
    yield "2";
    yield "3";
    yield "4";
    yield "5";
    yield "6";
}

for(let val of iterateGenerator()) {
    console.log(val);
}
