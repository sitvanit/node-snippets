/** Filter Unique Values **/
const array1 = [1, 1, 2, 3, 5, 5, 1];
const uniqueArray = [...new Set(array1)];
console.log(uniqueArray); // [ 1, 2, 3, 5 ]


/** Cache Array Length in Loops **/
// no run-time is lost to re-calculating array.length
for (let i = 0, length = array1.length; i < length; i++){
    console.log(i);
}


/** Convert to Boolean **/
const falseVar = !!0;
console.log(falseVar); // false
console.log(typeof falseVar); // boolean


/** Convert to String **/
const val = 1 + '';
console.log(val); // 1
console.log(typeof val); // string


/** Convert to Number **/
const int1 = +'15';
console.log(int1); // 15
console.log(typeof int1); // number
console.log(+true); // 1
console.log(+false); // 0

const int2 = ~~'15';
console.log(int2); // 15
console.log(typeof int2); // number


/** Quick Powers **/
// The following expressions are equivalent:
const n = 4;
console.log(Math.pow(2, n)); // 16
console.log(2 << (n - 1)); // 16
console.log(2**n); // 16


/** Quick Rounding **/
console.log(23.9 | 0); // 23
console.log(-23.9 | 0); // -23
console.log(~~23.9); // 23
console.log(~~-23.9); // -23


/** Truncate an Array **/
// If you want to remove values from the end of an array destructively, there’s no need to use slice() or splice().
let array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
array2.length = 4;
console.log(array2); // [ 0, 1, 2, 3 ]


/** Get the Last Item(s) in an Array **/
let array3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array3.slice(-1)); // [ 9 ]
console.log(array3.slice(-2)); // [ 8, 9 ]



