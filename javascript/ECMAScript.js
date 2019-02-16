/*** ECMAScript ***/


/** introduction **/
// ECMAScript is the standard upon which JavaScript is based, and it’s often abbreviated to ES.
// Beside JavaScript, other languages implement(ed) ECMAScript.
// Ecma International is a Swiss standards association who is in charge of defining international standards.
// TC39 is the committee that evolves JavaScript.
// The members of TC39 are companies involved in JavaScript and browser vendors, including Mozilla, Google, Facebook,
// Apple, Microsoft, Intel, PayPal, SalesForce and others.


/** let and const - ES2015 **/

/* var */
// Until ES2015, var was the only construct available for defining variables.
// If you forget to add var you will be assigning a value to an undeclared variable, and the results might vary.
// In modern environments, with strict mode enabled, you will get an error. In older environments (or with strict mode
// disabled) this will initialize the variable and assign it to the global object.
// If you don’t initialize the variable when you declare it, it will have the undefined value until you assign a value to it.
// You can redeclare the variable many times, overriding it.
// A variable initialized with var outside of any function is assigned to the global object.
// A variable initialized with var inside a function is assigned to that function, it's local and is visible only inside
// it, just like a function parameter.
// It’s important to understand that a block (identified by a pair of curly braces) does not define a new scope.
// A new scope is only created when a function is created, because var does not have block scope, but function scope.
// Inside a function, any variable defined in it is visible throughout all the function code, even if the variable is
// declared at the end of the function it can still be referenced in the beginning, because JavaScript before executing
// the code actually moves all variables on top (something that is called hoisting). To avoid confusion, always declare
// variables at the beginning of a function.

/* let */
// it's essentially a block scoped version of var. Its scope is limited to the block, statement or expression where it's
// defined, and all the contained inner blocks.
// Modern JavaScript developers might choose to only use let and completely discard the use of var.
// Defining let outside of any function - contrary to var - does not create a global variable.

/* const */
// Variables declared with var or let can be changed later on in the program, and reassigned. Once a const is initialized,
// its value can never be changed again, and it can't be reassigned to a different value.
// const does not provide immutability, just makes sure that the reference can't be changed.
// const has block scope, same as let.
// Modern JavaScript developers might choose to always use const for variables that don't need to be reassigned later in
// the program, because we should always use the simplest construct available to avoid making errors down the road.


/** arrow functions **/

/* How this works in arrow functions */

const carRegularFunc = {
    model: 'Fiesta',
    manufacturer: 'Ford',
    fullName: function() {
        return `${this.manufacturer} ${this.model}` // in a regular function this refers to the object
    }
};

const carArrowFunc = {
    model: 'Fiesta',
    manufacturer: 'Ford',
    fullName: () => {
        return `${this.manufacturer} ${this.model}` // The this scope with arrow functions is inherited from the execution context.
    }
};

console.log(carRegularFunc.fullName()); // Ford Fiesta
console.log(carArrowFunc.fullName()); // undefined undefined

// Due to this, arrow functions are not suited as object methods.
// Arrow functions cannot be used as constructors either.

// This is where regular functions should be used instead, when dynamic context is not needed.


/** classes **/

class Person {
    constructor(name) {
        this.name = name
    }
    hello() {
        return 'Hello, I am ' + this.name + '.'
    }
}



/** Default parameters **/

const doSomething = (param1 = 'test') => {};


/** template literal **/

// they offer a great syntax to define multiline strings
// they provide an easy way to interpolate variables and expressions in strings


/** destructuring assignments **/

const person = {
    firstName: 'Tom',
    lastName: 'Cruise',
    actor: true,
    age: 54, //made up
};
const {firstName: name, age} = person;

const a = [1,2,3,4,5];
const [first, second, , , fifth] = a;


/** enhanced object literal */

/* Simpler syntax to include variables */
const something = 'y';
const x = {
    something
};

/* Prototype */
const anObject1 = { y: 'y' };
const z = {
    __proto__: anObject1
};

/* super() */
const anObject2 = { y: 'y', test: () => 'zoo' };
const w = {
    __proto__: anObject2,
    test() {
        return super.test() + 'x'
    }
};
console.log(w.test()); // zoox

/* Dynamic properties */
const e = {
    ['a' + '_' + 'b']: 'z'
};
console.log(e.a_b); // z


/** for-of loop - ES2015 **/
// combines the conciseness of forEach with the ability to break
for (const v of ['a', 'b', 'c']) {
    console.log(v);
}

// for...of iterates over the property values
// for...in iterates the property names


/** promises **/


/** New String methods **/

console.log('Ho'.repeat(3)); //'HoHoHo'
console.log("𠮷".charCodeAt(0).toString(16)); //d842)


/** New Object methods **/
// Object.is() determines if two values are the same value
// Object.assign() used to shallow copy an object
// Object.setPrototypeOf sets an object prototype


/** The spread operator **/
const g = [1, 2, 3];
const h = [...a, 4, 5, 6];

const newObj = { ...oldObj };


/** The rest element **/
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...others] = numbers;

const sum = (a, b, c, d, e) => a + b + c + d + e;
sum(...numbers);


/** Set **/


/** Map **/


/** Generators **/




