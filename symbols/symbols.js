/*** Symbols ***/

/** Primitives **/
// 1. numbers (integers, floats, Infinity, NaN)
// 2. booleans
// 3. strings
// 4. undefined
// 5. null (even though typeof null === 'object', null is primitive)
// 6. symbpl

// Primitive values are also immutable. They can’t be changed.
// If you ever pass a value into a function, reassigning that value will not modify the value in the calling location.
// However, if you modify a non-primitive value, the modified value will also be modified where it has been called from.

function primitiveMutator(val) {
    val = val + 1;
}

let x = 1;
primitiveMutator(x);
console.log(x); // 1

function objectMutator(val) {
    val.prop = val.prop + 1;
}

let obj = { prop: 1 };
objectMutator(obj);
console.log(obj.prop); // 2


// Primitive values (except for the mystical NaN value) will always be exactly equal to another primitive with an equivalent value.

const first = 'abc' + 'def';
const second = 'ab' + 'cd' + 'ef';

console.log(first === second); // true


// However, constructing equivalent non-primitive values will not result in values which are exactly equal.

const obj1 = { name: "Intrinsic" };
const obj2 = { name: "Intrinsic" };

console.log(obj1 === obj2); // false
console.log(obj1.name === obj2.name); // true - because name is a primitive


/** What is a Symbol? **/
// A symbol is a primitive which cannot be recreated. it's cannot be mutated.
const s1 = Symbol();
const s2 = Symbol();
console.log(s1 === s2); // false

// The string argument that we can call with a Symbol, it's only for debugging, it's not affect the symbol.
const s3 = Symbol('debug');
const str = 'debug';
const s4 = Symbol('xxyy');

console.log(s3 === str); // false
console.log(s3 === s4); // false
console.log(s3); // Symbol(debug)

// Symbols can be used as keys in objects
const object = {};
const sym = Symbol();
object[sym] = 'foo';
object.bar = 'bar';

console.log(object); // { bar: 'bar', [Symbol()]: 'foo' }
console.log(sym in object); // true;
console.log(object[sym]); // foo
console.log(Object.keys(object)); // [ 'bar' ] - Notice how they are not returned in the result of Object.keys()
console.log(Reflect.ownKeys(object)); // [ 'bar', Symbol() ]

// Symbols are useful in situations where disparate libraries want to add properties to objects without the risk of having name collisions.
