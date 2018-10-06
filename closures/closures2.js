// When code is run in JavaScript, the environment in which it is executed is very important,
// and is evaluated as 1 of the following:
// Global code — The default environment where your code is executed for the first time.
// Function code — Whenever the flow of execution enters a function body.

// When a function ends, the following happens:
// The local execution context is destroyed. This is important. Destroyed. All the variables that were declared within
// the local execution context are erased. They are no longer available. That’s why they’re called local variables.

const a = 3;
function addTwo(x) {
    const ret = x + 2;
    return ret
    }
const b = addTwo(a);
console.log(b);

// 1. a is declared and assigned in the global scope
// 2. addTwo declared and assigned in the global scope. the code inside the function is not evaluated or executed, just
//    stored into a variable for future use.
// 3. b is declared and assigned to undefined. the return value from addTwo will assigned to be later.
// 4. Now the execution context will switch. A new local execution context is created.
// 5. A new variable x (the parameter) is declared in the local execution context. and assigned to 3.
// 6. A new variable ret is declared in the local execution context. Its value is set to undefined.
// 7. ret is assigned to 5.
// ...

// A function that returns a function
// every time a function gets called, a local execution context is (temporarily) created.
// A function is done when it encounters return or the closing bracket }.
const val = 7;
function createAdder() {
    function addNumbers(a, b) {
        const ret = a + b;
            return ret
        }
    return addNumbers
}
const adder = createAdder();
const sum = adder(val, 8);
console.log('example of function returning a function: ', sum);

// a closure
function createCounter() {
    let counter = 0;
    const myFunction = function() {
         counter = counter + 1;
         return counter
    };
    return myFunction
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log('example increment', c1, c2, c3);
// Here is how it works. Whenever you declare a new function and assign it to a variable, you store the function
// definition, as well as a closure. The closure contains all the variables that are in scope at the time of creation of
// the function.
// When a function returns a function, that is when the concept of closures becomes more relevant. The returned function
// has access to variables that are not in the global scope, but they solely exist in its closure.

const c = 4;
const addX = x => n => n + x;
const addThree = addX(3);
const d = addThree(c);
console.log('example partial application', d);
// is equal to:
// const c = 4
// function addX(x) {
//     return function(n) {
//         return n + x
//     }
// }
// const addThree = addX(3)
// const d = addThree(c)
// console.log('example partial application', d)