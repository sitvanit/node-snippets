/** typeof **/
console.log(typeof 0);          // number
console.log(typeof true);       // boolean
console.log(typeof 'hello');    // string

/** null vs undefined **/
console.log(typeof undefined);  // undefined
// Undefined is the absence of a definition:
// 1) uninitialized variables
// 2) function arguments that were not provided
// 3) missing properties of objects
// 4) Functions return undefined when nothing has been explicitly returned

console.log(typeof null);       // object
// Null is the absence of a value:
// It is an assignment value that can be assigned to a variable as a representation of ‘no-value’.

/** Implicit coercion **/
// Falsy values: "", 0, null, undefined, NaN, false.
console.log(Boolean(null));         // false
console.log(Boolean(""));           // false
console.log(Boolean(0));            // false
console.log(Boolean(undefined));    // false
console.log(Boolean(NaN));          // false
console.log(Boolean(false));        // false

// Anything not explicitly on the falsy list is truthy — boolean coerced to true.
console.log(Boolean('hello'));      // true
console.log(Boolean('0'));          // true
console.log(Boolean(' '));          // true
console.log(Boolean([]));           // true
console.log(Boolean(function(){})); // true

const name = 'Joey';
if (name) { // the string variable name is coerced to true
    console.log(name + " doesn't share food!")  // Joey doesn’t share food!
}

/** String & Number coercion **/
// the operator + works for both number addition and string concatenation.
console.log(1 + "2");       // 12
console.log("" + 1 + 0);    // 10
console.log(4 + 5 + "px");  // 9px
console.log("$" + 4 + 5);   // $45
console.log(null + 1);      // 1
console.log(undefined + 1); // NaN

// the '*', '/' , '-' operators are exclusive for numeric operations. When these operators are used with a string,
// it forces the string to be coerced to a number.
console.log("" - 1 + 0);    // -1
console.log("-9\n" - 5);    // -14
console.log("-9\n" + 5);    // -9\n5
console.log("2" * "3");     // 6
console.log("4" - 2);       // 2
console.log("4px" - 2);     // Nan


