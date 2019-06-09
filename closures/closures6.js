/** What is a closure? **/

// A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables 
// — a scope chain.

// The closure has three scope chains:
// it has access to its own scope — variables defined between its curly brackets
// it has access to the outer function’s variables
// it has access to the global variables


/** A simple closure **/

function outer() {
    const b = 10;

    function inner() {
        const a = 20;
        console.log(a + b);
    }

    return inner;
}

const x = outer();
const y = outer();

// what happens when the outer() function is first invoked?
// 1. b is created - its scope is limited to the outer() function.
// 2. inner function declaration, nothing to execute.
// 3. return inner.
// 4. x will store inner function.
// 5. function outer() finishes execution, and all variables within the scope of outer now no longer exist.

// This last part is important to understand. Once a function completes its execution, any variables that were defined
// inside the function scope cease to exist.
// The lifespan of a variable defined inside of a function is the lifespan of the function execution.
// What this means is that in console.log(a+b), the variable b exists only during the execution of the the outer()
// function. Once the outer function has finished execution, the variable b no longer exists.

// The important point here is that when the outer() function is invoked the second time, the variable b is created anew.
// Also, when the outer() function finishes execution the second time, this new variable b again ceases to exist.

console.log(typeof(x)); //X is of type function
console.log(typeof(y)); //Y is of type function

x(); // 30
y(); // 30

// The inner function can access the variables of the enclosing function due to closures in JavaScript.
// In other words,the inner function preserves the scope chain of the enclosing function at the time the enclosing
// function was executed, and thus can access the enclosing function’s variables.

