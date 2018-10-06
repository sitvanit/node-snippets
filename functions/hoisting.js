// The behavior of “moving” var and function declarations to the top of their respective scopes during the compilation
// phase is called hoisting.

// Function declarations are completely hoisted. This means that a declared function can be called before it is defined.

cowSays('moo'); // moo

function cowSays(sound){
    console.log(sound);
}


// Variables are partially hoisted. var declarations are hoisted but not its assignments.
// let and const are not hoisted.

console.log(i);  // undefined
var i = 10;
console.log(i);  // 10

console.log(j);  // ReferenceError: j is not defined
const j = 10;


// What’s actually happening is that your function and variable declarations are added to memory during the compile phase.