/** Primitives **/
// Number - double precision floating point (decimal numbers' arithmetic is inexact)
// Boolean
// String - A string stores a series of Unicode characters.
// undefined
// null

/* Number */
console.log(0.1 + 0.2); // 0.30000000000000004 - inexact with decimals
console.log(1 + 2); // 3 - exact with integer
// Numbers inherit methods from the Number.prototype object.
console.log((123).toString()); // "123"
console.log((1.23).toFixed()); // 1
console.log(parseInt("10110", 2)); // 22 - parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
console.log(parseInt("10110")); // 10110 - the default base is 10
console.log(parseInt("text")); // NaN
console.log(parseFloat("1.234")); // 1.234 - parses an argument and returns a floating point number.
console.log(Number("1")); //1
console.log(Number("1.234")); //1.234
// Invalid arithmetic operations or invalid conversions will not throw an exception, but will result in the NaN “Not-a-Number” value. isNaN() can detect NaN .
console.log(isNaN("fdsfds")); // true
console.log(isNaN(1)); // false
// The + operator can add or concatenate.
console.log(1 + 1); // 2
console.log("1" + "1"); // "11"
console.log(1 + "1"); // "11"
console.log("1" + 1); // "11"

/* String */
// Strings inherit methods from String.prototype
console.log("text".substring(1, 3)); //"ex"
console.log("text".indexOf('x')); // 2
console.log("text".concat(" end")); //"text end"
// Strings, like all primitives, are immutable. For example concat() doesn’t modify the existing string but creates a new one.

/* Boolean */
// The language has truthy and falsy values.
// falsy:
// 1) false
// 2) null
// 3) undefined
// 4) '' (empty string)
// 5) 0
// 6) NaN
// All other values, including all objects, are truthy.


/** Objects **/
// An object is a dynamic collection of key-value pairs. A key is a string. The value can be a primitive, object, or function.

// object literal
// let obj = {
//     message : "A message",
//     doSomething : function() {}
// }

// We can read, add, edit and remove an object’s properties at any time. (get, set, delete)
let obj = {};
obj.message = "A message"; // add
obj.message = "A new message"; // edit
delete obj.message; // delete

// Objects can be used as hash-maps.
let french = Object.create(null);
french["yes"] = "oui";
french["no"] = "non";
console.log(french["yes"]); // oui

// If you want to make the object immutable, use Object.freeze() .
Object.freeze(french);
french["yes"] = "ci";
console.log(french["yes"]); // oui


/** Primitives vs. Objects **/
// Primitives are immutable, and objects are mutable.


/** Variables **/
// var - function scope
// let - block scope
// const - block scope (freeze the variable)


/** Array **/
// An array is implemented using an object.
// Elements are accessed using their indices.
// Indices are converted to strings and used as names for retrieving values. arr[1] === arr['1']

// let arr = ['A', 'B', 'C']
// is emulated using an object:
// {
//     '0': 'A',
//     '1': 'B',
//     '2': 'C'
// }

// Removing values from the array with delete will leave holes. splice() can be used to avoid the problem.
let arr = ['A', 'B', 'C'];

delete arr[1];
console.log(arr); // ['A', empty, 'C']
console.log(arr.length); // 3

arr.splice(1, 1); // replaces 1 element at 1st index
console.log(arr); // ['A', 'C']
console.log(arr.length); // 2

// JavaScript’s arrays don’t throw index out of range exceptions. If the index is not available, it will return undefined.
console.log(arr[2]); // undefined

// Stack and queue can easily be implemented using the array methods:
let stack = [];
stack.push(1);           // [1]
stack.push(2);           // [1, 2]
let last = stack.pop();  // [1]
console.log(last);       // 2

let queue = [];
queue.push(1);           // [1]
queue.push(2);           // [1, 2]
let first = queue.shift();//[2]
console.log(first);      // 1


/** Functions **/
// Functions are objects.
// Functions can be assigned to variables, stored in objects or arrays, passed as an argument to other functions, and returned from functions.

// There are three ways to define a function:

// 1) Function Declaration (aka Function Statement)
// it can be used before definition. Function declarations are moved, or “hoisted”, to the top of their scope.
function doSomething1(){}

// 2) Function Expression (aka Function Literal)
// the name is optional.
// it can auto-execute after definition (called “IIFE” Immediately Invoked Function Expression)
let doSomething2 = function(){};

// 3) Arrow Function
// Arrow functions don’t have their own this and arguments.
let doSomething3 = () => {};

// Functions can be invoked with more or fewer arguments than declared in the definition. The extra arguments will be ignored, and the missing parameters will be set to undefined.
// Functions have two pseudo-parameters: this and arguments.

// this
// this represents the function’s context. Only functions defined with the function keyword have their own this context.
// Its value depends on how the function was invoked.

// arguments
// The arguments pseudo-parameter gives all the arguments used at invocation. It’s an array-like object, but not an array. It lacks the array methods.
// if we call the ...args we'll get an array
function sum(...args){
    return args.reduce(reduceToSum, 0);
}

// return
// A function with no return statement returns undefined.
// Pay attention to the automatic semi-colon insertion when using return.
function getObject1(){
    return // will return undefined and not an empty object
    {
    }
}

function getObject2(){
    return { // will return an empty object
    }
}

// closure
// Closure is an inner function that has access to the parent function’s variables, even after the parent function has executed.