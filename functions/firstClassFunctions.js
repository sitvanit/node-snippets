/** First Class Functions **/

// What Functional Programming is?
// In most simple term, Functional Programming is a form of programming in which you can pass functions as parameters
// to other functions and also return them as values. In functional programming, we think and code in terms of functions.

// JavaScript treats functions as first-class citizens.
// That’s because in JavaScript functions are objects.
// In JavaScript functions are a special type of objects. They are Function objects.

// In JavaScript, functions are first-class objects, which means they can be:
// (1) stored in:
//     a variable - let fn = function doSomething() {}
//     object     - let obj = { doSomething : function(){} }
//     or array   - arr.push(function doSomething() {})
// (2) passed as an argument to a function - doAction(function doSomething(){}); - doSomething is a callback. A callback is a function passed as an argument to another function.
// (3) returned from a function

// A Higher-Order function is a function that receives a function as an argument or returns the function as output.
// For example, Array.prototype.map, Array.prototype.filter and Array.prototype.reduce are some of the Higher-Order
// functions built into the language.

// A function is an object, so it has fields like name and length or methods like toString(), bind(), apply() and call().