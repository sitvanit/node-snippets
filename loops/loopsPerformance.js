// of the four loop types provided by JavaScript, only one of them is significantly slower than the others — for-in loop.
// The choice of loop type should be based on your requirements rather than performance concerns.

// There are two main factors that contribute to loop performance — work done per iteration and number of iterations.

/** For Loop **/

/* Dissection */
// The for loop consists of four parts: initialization, pretest condition, loop body, and post-execute. The way it works
// is the following: first, the initialization code is executed (let i = 0;). Then the pretest condition (i < 10;). If
// the pretest condition evaluates to true, then the body of the loop is executed. After that the post-execute code (i++) is run.

/* Optimizations */

// original loop
for (let i = 0; i < items.length; i++){
    process(items[i]);
}
// minimizing property lookups
for (let i = 0, len = items.length; i < len; i++){
    process(items[i]);
}
// minimizing property lookups and reversing
for (let i = items.length; i--; ){
    process(items[i]);
}


/** While Loop **/

/* Optimizations */

// original loop
let j = 0;
while (j < items.length){
    process(items[j++]);
}
// minimizing property lookups
let j = 0, count = items.length;
while (j < count){
    process(items[j++]);
}
// minimizing property lookups and reversing
let j = items.length;
while (j--){
    process(items[j]);
}

/** Do-While Loop **/
// do-while is the third type of loop and it’s the only post-test loop in JavaScript.

/* Optimizations */

// original loop
var k = 0;
do {
    process(items[k++]);
} while (k < items.length);
// minimizing property lookups
var k = 0, num = items.length;
do {
    process(items[k++]);
} while (k < num);
// minimizing property lookups and reversing
var k = items.length - 1;
do {
    process(items[k]);
} while (k--);


/** For-In Loop **/
// It has a very special purpose — enumerates the named properties of any JavaScript object.
// You should never use “for-in” to iterate over members of an array.

// Each iteration through this loop causes a property lookup either on the instance or on the prototype, which makes the
// for-in loop much slower than the other loops. For the same number of iterations, it could be seven-time slower than the rest.


/** Conclusion **/
// The for, while, and do-while loops all have similar performance characteristics, and so no one loop type is significantly faster or slower than the others.
// Avoid the for-in loop unless you need to iterate over a number of unknown object properties.
// The best ways to improve loop performance are to decrease the amount of work done per iteration and decrease the number of loop iterations.
