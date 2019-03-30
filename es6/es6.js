/** let **/

// let has block scope
let x = 1;
{
    let x = 2;
}
console.log(x); // 1

// var has a function scope
var y = 1;
{
    var y = 2;
}
console.log(y); // 2


// creates five closures over five different i variables.
(() => {
    for (let i = 0; i < 5; ++i) {
        setTimeout(() => {
            console.log(i); // 0 1 2 3 4
        }, 100)
    }
})();

// create five closures, over the same variable, so all closures will display the last value of i
(() => {
    for (var i = 0; i < 5; ++i) {
        setTimeout(() => {
            console.log(i); // 5 5 5 5 5
        }, 100)
    }
})();


/** const **/
// const declares a variable that cannot be reassigned. It becomes a constant only when the assigned value is immutable.
// An immutable value is a value that, once created, cannot be changed. Primitive values are immutable, objects are mutable.
// const freezes the variable, Object.freeze() freezes the object.


/** Spread/Rest **/
// The … operator can be the spread operator or the rest parameter, depending on where it is used.

// spread
const numbers = [1, 2, 3];
const arr = ['a', 'b', 'c', ...numbers];
console.log(arr); // [ 'a', 'b', 'c', 1, 2, 3 ]

// rest - the rest parameter is an array
const process = (x, y, ...rest) => {
    console.log(rest);
};
process(1, 2, 3, 4, 5); // [ 3, 4, 5 ]


/** arguments **/
// the arguments parameter is not an array

const logArgumentsArrowFunc = (...args) => console.log('arrow function', arguments);

function logArguments(...args) {
    console.log(arguments);
}

console.log(logArgumentsArrowFunc(1, 2, 3)); // arguments of the global scope
console.log(logArguments(1, 2, 3)); // { '0': 1, '1': 2, '2': 3 }


/** cloning **/
// The spread operator makes the cloning of objects and arrays simpler and more expressive.

const book = { title: 'JavaScript: The Good Parts'};

const cloneObjectAssign = Object.assign({}, book);
console.log(cloneObjectAssign); // { title: 'JavaScript: The Good Parts' }
const cloneSpread = { ...book };
console.log(cloneSpread); // { title: 'JavaScript: The Good Parts' }

const arr1 = [1, 2, 3];

const cloneSlice = arr1.slice();
console.log(cloneSlice); // [ 1, 2, 3 ]
const cloneSpreadArr = [...arr1];
console.log(cloneSpreadArr); // [ 1, 2, 3 ]


/** concatenation **/
const part1 = [1, 2, 3];
const part2 = [4, 5, 6];

const arrConcat = part1.concat(part2);
console.log(arrConcat); // [ 1, 2, 3, 4, 5, 6 ]
const arrSpread = [...part1, ...part2];
console.log(arrSpread); // [ 1, 2, 3, 4, 5, 6 ]


/** merging objects **/

const authorGateway = {
    getAuthors: function() {},
    editAuthors: function() {}
};

const bookGateway = {
    getBooks: function() {},
    editBooks: function() {}
};

const gatewayAssign = Object.assign({}, authorGateway, bookGateway);
const gatewaySpread = { ...authorGateway, ...bookGateway };


/** property short-hands **/

function todoStore() {}
function userStore() {}

const stores = {
    todoStore,
    userStore
};


/** destructuring assignment **/

function store1(args) {
    const { helper, dataAccess, userStore } = args
}
store1({ helper: {}, dataAccess: {}, userStore: {}});

// or
function store2({ helper, dataAccess, userStore }) {}
store2({ helper: {}, dataAccess: {}, userStore: {}});


/** default parameters + template strings **/

function log(message, level = 'info') {
    console.log(`${level}: ${message}`);
}

log('An info'); // info : An info
log('An error', 'error'); // error : An error


/** proper tail calls **/
// A recursive function is tail recursive when the recursive call is the last thing the function does.
// The tail recursive functions perform better than non tail recursive functions. The optimized tail recursive call does
// not create a new stack frame for each function call, but rather uses a single stack frame.
// ES6 brings the tail-call optimization in strict mode.


/** promises **/
// A promise is a reference to an asynchronous call. It may resolve or fail somewhere in the future.


/** class **/
// Class is sugar syntax for creating objects with a custom prototype. It has a better syntax than the previous one, the
// function constructor.


/** arrow function **/
// Arrow functions can create anonymous functions on the fly. They can be used to create small callbacks, with a shorter syntax.
// Arrow functions don’t have their own this and arguments. As a result, you may see the arrow function used to fix problems
// with this losing context. I think that the best way to avoid this problem is to not use this at all.
// anonymous arrow functions will appear as (anonymous) in the Call Stack.


/** generator **/
// The ES6 generator creates an object that has the next() method. The next() method creates an object that has the value property.

function* sequence() {
    let count = 0;
    while(true) {
        count += 1;
        yield count;
    }
}

const generator = sequence();
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3

// The same generator can be simply implemented with a closure.

function sequenceClosure() {
    let count = 0;

    return function () {
        count += 1;
        return count;
    }
}

const generatorClosure = sequenceClosure();
console.log(generatorClosure()); // 1
console.log(generatorClosure()); // 2
console.log(generatorClosure()); // 3
