/*** pure functions ***/

/** pure function definition **/
// A pure function is a function that given the same input always returns the same output and has no side effects.

/** side effects **/
// any interaction with the outside world is a side-effect.
// Here are some examples of side-effects:
// reading and changing of state out of local scope
// network calls
// reading and writing to DOM
// listening for user events
// writing to console
// reading and writing to local storage
// using timers (they change the JavaScript Event Loop)

/** free variables **/
// A free variable is a variable used in a function that is neither a local variables nor a parameter of the function.
// Pure functions don’t access free variable unless this free variables are constants.
// A constant is a variable declared with const storing an immutable value.

/** immutability **/
// An immutable value is a value that, once created, cannot be changed.
// Pure functions treat input values as immutable. Ideally input values should be immutable values. It is a good
// practice to return an immutable value.

/** this **/
// When this is used and we invoke it with the function form, we create a side effect. In this case the function may
// give different results based on the environment where it is run. this becomes a free variable.
// When this is used, we need to always call the function with call() or apply() and pass in the context object.
// We want explicit inputs on functions. If we want to compose functions easily, this should not be used.

/** A deterministic function **/
// A pure function is deterministic function. For a specific input it always returns the same output.
// Math.random() or Date.now() will not be used in pure function as they give different results on each call.

/** Referential transparency **/
// An function has referential transparency if it can be replaced with its output value and the application behavior doesn’t change.
// Because we can replace the function with its result it means the function had no side-effects.
// A function that has referential transparency is a pure function.

/** Using other impure functions **/
// Calling an impure function inside a function makes the current function impure.

/** The problem **/
// The problem with pure functions is that we can’t write the whole application using pure functions.
// The benefits of pure functions are significant and we should write as many pure functions as we can. At the same time
// we need impure code to communicate with the environment.
// I suggest to aim for purity and encapsulate impure code.
// Collecting the impure code together will make it easier to investigate these parts when bugs arise. By isolating
// side-effects we know where to look for unexpected issues.

/** Encapsulate impure code **/
// Encapsulation means hiding. The simplest way to encapsulate things in JavaScript is with closures.

/** Encapsulation with objects **/
// The state in this example is a list of books. It can only be modified through the add() and remove() methods of the bookStore object. State is encapsulated.

const { List } = require('immutable');
const _ = require('lodash');

function BookStore(){
    let books = List();

    function add(book) {
        return books.push(book);
    }

    function remove(books, book) {
        const index = books.findIndex(_.matchesProperty("id", book.id));
        return books.delete(index);
    }
    return Object.freeze({
        add,
        remove
    });
}

const bookStore = BookStore();
bookStore.add({ id: 1, title: "How JavaScript Works" });

/** Encapsulate with a library **/
// A better way is to encapsulate the impure code behind a library.
