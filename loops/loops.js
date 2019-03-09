/** for loop **/

// 0-index based counter
for (let i = 0;; i++) {
    console.log('loop, i = ' + i);
    if (i > 1) {
        break;
    }
}

// The Infinite for Loop
// for(;;)

// Multiple Statements
let counter1 = 0;
function inc() { counter1 ++ }
for (let i = 0; i < 10; i++, inc());
console.log(counter1); // 10

// Increment Numbers
let counter2 = 0;
for (let i = 0; i < 10; i++)
    counter2++;
console.log(counter2);

// Skipping Steps
for (let i = 0; i < 3; i++) {
    if (i == 1) continue;
    console.log( i );
}

// Breaking Early
for (let i = 0;; i++) {
    console.log("loop");
    break;
}


/** for ... of loop **/
// Using indexed iterators can become a hassle when dealing with arrays or object properties. Especially when their number is not known.

// for…of Loops And Generators
// Sometimes you might want to use a for loop with a generator.
function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

for (let value of generator())
    console.log( value );

// for…of Loops And Strings
// Strings are iterable.
let string = 'text';

for (let value of string)
    console.log( value );

// for…of Loops And Arrays
let array = [0, 1, 2];

for (let value of array)
    console.log( value );

// for…of Loops And Objects (won’t work)
// But for…of loops work only with iterable values. An object is not an iterable.

// for…of loops and objects that were converted to iterables
// As a remedy you can first convert an object to an iterable using some of the built-in Object methods:
// .keys(), .values() or .entries():

// for…in loops and enumerable object properties
// A for…in loop will display only enumerable object properties:
let object = { a: 1, b: 2, c: 3, method: () => { } };
for (let value in object)
    console.log(value, object[value]);
