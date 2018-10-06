// Immediate Invoked Function Expression (IIFE)
// An IIFE is a function expression that is called immediately after you define it. It is usually used when you want to
// create a new constiable scope.
// The (surrounding parenthesis) prevents from treating it as a function declaration.
// The final parenthesis() are executing the function expression.
// On IIFE you are calling the function exactly when you are defining it.

// var scope
let result = [];
for (var i=0; i < 5; i++) {
    result.push( function() { return i } );
}
console.log( result[1]() ); // 5
console.log( result[3]() ); // 5

// iife
result = [];
for (var i=0; i < 5; i++) {
    (function () {
        const j = i; // copy current value of i
        result.push( function() { return j } );
    })();
}
console.log( result[1]() ); // 1
console.log( result[3]() ); // 3

// Using IIFE:
// Enables you to attach private data to a function.
// Creates fresh environments.
// Avoids polluting the global namespace.