/*** Immutability ***/
// An immutable value is a value that, once created, cannot be changed.
// Primitive values are immutable, objects are not.
// The best example of a immutable primitive is string. Any modification to a string will result in a new string.
// array is a mutable data structure in JavaScript.
// const declares a variable that cannot be reassigned. It becomes a constant only when the assigned value is immutable.
// using const with a primitive value defines a constant. Using const with an object value doesn’t necessarily defined a constant.

/** Freezing Objects **/

const book = Object.freeze({
    title : "How JavaScript Works",
    author : "Douglas Crockford"
});
book.title = "Other title";
// Cannot assign to read only property 'title'

// Object.freeze() does a shallow freeze. The nested objects can be changed. For deep freeze we need to recursively
// freeze each property of type object. Here is how we can create a deepFreeze() implementation.

function deepFreeze(object) {
    Object.keys(object).forEach(function freezeNestedObjects(name){
        const value = object[name];
        if(typeof value === "object") {
            deepFreeze(value);
        }
    });
    return Object.freeze(object);
}

// Consider book as an immutable object. Any change will require to create a new object.

// edit property
const title = "JavaScript The good parts";
const newBook = { ...book, title };

// add property
const description = "Looking at JavaScript";
const newBook = { ...book, description };

// remove property
const { title, ...newBook } = book;

/** Array **/
// The array data structure is not immutable in JavaScript. In order to work with arrays as immutable data structures
// we need to use only the pure array methods and the spread operator.
// The pure array methods are the ones that create a new array when something changes.
// not pure - pop, push, splice
// pure - concat, slice

/** Immutable Library **/
// Immutable.js provides immutable data structures like List and Map.
// Converting back to JavaScript objects can be done with methods like toJS(), toArray(). However, these methods can be slow.
// I like the List data structure interface so I would go with it for managing immutable arrays.
// Immutability is not about variables that cannot change, but about values that cannot change.


