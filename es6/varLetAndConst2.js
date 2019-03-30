/*** var, let and const ***/

// Var keyword declares a variable which is scoped to its current execution context, optionally initializing to a value.
// Let keyword declares a block scoped variable, optionally initializing it to a value.
// Const keyword declares constants which are block scoped much like variables defined using let but the value of a
// constant cannot change. The const declaration creates a read-only reference to a value.

/** hoisting **/
// Conceptually, hoisting suggests that variables and function declarations are physically moved to the top of your code.
// Technically, what happens is that the variable and function declarations are put into memory during the compilation
// phase but stay exactly where you typed them in your code.
// The primary importance of hoisting is that it allows you to use functions before you declare them in your code.

// What gets moved around is variable and function declarations. Variable assignments or initialization are never moved around.
// The declarations are not exactly moved to the top of your code; instead, they are put into memory.

//  all variables defined with the var keyword have an initial value of undefined. This is due to hoisting which puts the variable declarations in memory and initializes them with the value of undefined.
console.log(x);
var x = 1; // undefined

// let - they are in a state called the Temporal Dead Zone and are not initialized until their definitions are evaluated.
// console.log(y);
let y; // ReferenceError: y is not defined

/** scope **/
// var - current execution context; global - the variable gets attached to the global context (window in the browser and global in node)
// let and const - block scope;

/** When you don’t declare a variable but assign a value to the variable **/
// the variable gets created and is attached to its current execution context (the current value of this);
a = 2;
console.log(a); // 2;
// Variables declared with var keyword can be redeclared at any point in the code even within the same execution context.
var b = 11;
var b = 22;
console.log(b); // 22;

let c = 33;
// let c = 44; // SyntaxError: Identifier 'c' has already been declared
console.log(c);

