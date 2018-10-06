/** closures **/
// A closure is a function that has access to its outer function scope even after the outer function has returned.
// This means a closure can remember and access variables and arguments of its outer function even after the function
// has finished.

// lexical scope
// A lexical scope or static scope in JavaScript refers to the to the accessibility of the variables, functions, and
// objects based on their physical location in the source code.

/** example 1 **/
function person() {
    let name = 'Peter';

    return function displayName() {
        console.log(name);
    };
}

let peter = person();
peter(); // prints 'Peter'

// In this code, we are calling person function which returns inner function displayName and stores that inner function
// in peter variable. When we call peter function (which is actually referencing the displayName function),
// the name ‘Peter’ is printed to the console.
// But we don’t have any variable named name in displayName function, so this function can somehow access the variable
// of its outer function person even after that function has returned. So the displayName function is actually a closure.

/** example 2 **/
function getCounter() {
    let counter = 0;
    return function() {
        return counter++;
    }
}
let count = getCounter();
console.log(count());  // 0
console.log(count());  // 1
console.log(count());  // 2

// How do Closures Work?
// Execution Context
// An execution context is an abstract environment where the JavaScript code is evaluated and executed. When the global
// code is executed, it’s executed inside the global execution context, and the function code is executed inside the
// function execution context.
// There can only be one currently running execution context (Because JavaScript is single threaded language),
// which is managed by a stack data structure known as Execution Stack or Call Stack.
// The currently running execution context will be always on the top of the stack, and when the function which is
// currently running completes, its execution context is popped off from the stack and the control reaches to the
// execution context below it in the stack.
// Every time the JavaScript engine creates an execution context to execute the function or global code, it also creates
// a new lexical environment to store the variable defined in that function during the execution of that function.
// A lexical environment is a data structure that holds identifier-variable mapping. (here identifier refers to the name
// of variables/functions, and the variable is the reference to actual object [including function type object] or
// primitive value).
// A Lexical Environment has two components: (1) the environment record and (2) a reference to the outer environment.
// The environment record is the actual place where the variable and function declarations are stored.
// The reference to the outer environment means it has access to its outer (parent) lexical environment.
// This component is the most important in order to understand how closures work.
// When a function completes, its execution context is removed from the stack, but its lexical environment may or may
// not be removed from the memory depending on if that lexical environment is referenced by any other lexical
// environments in their outer lexical environment property.

