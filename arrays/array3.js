/** Arrays **/
// Array is an object whose keys are indexes and elements as values.

/** Array Creation **/
const arr1 = [];
const arr2 = [1, 2, 3];
const arr3 = Array(3); // new is not required, but you can use it.

console.log(arr1); // []
console.log(arr2); // [ 1, 2, 3 ]
console.log(arr3); // [ <3 empty items> ]

/** Copy Without Mutating **/
const arr4 = [1, 2, 3, 4, 5];
const newArr1 = arr4;
newArr1[0] = 5;

console.log(newArr1); // [ 5, 2, 3, 4, 5 ]
console.log(arr4);    // [ 5, 2, 3, 4, 5 ]
// This is because objects are copied by reference not by value

const arr5 = [1, 2, 3, 4, 5];
const newArr2 = arr5.slice(0, 5);
newArr2[0] = 5;
console.log(newArr2); // [ 5, 2, 3, 4, 5 ]
console.log(arr5);    // [ 1, 2, 3, 4, 5 ]

const newArr3 = [...arr5];
newArr3[0] = 5;
console.log(newArr3); // [ 5, 2, 3, 4, 5 ]
console.log(arr5);    // [ 1, 2, 3, 4, 5 ]

/** No Duplicates **/
const dups = [1, 1, 2, 2, 3, 3];
const uniqueArray = [...new Set(dups)]; // [1, 2, 3]
console.log(uniqueArray);

/** Populate an Array of Emptiness **/
const emptyArr = Array(5).fill(0); // [ 0, 0, 0, 0, 0 ]
console.log(emptyArr);

/** Sort **/
const arr6 = [10, 5, 3, 11];
const sorted = arr6.sort(); 
console.log(sorted); // [ 10, 11, 3, 5 ]
// By default sort sorts strings.

// sort ascending
const sortedAscending = arr6.sort((a, b) => a - b);
console.log(sortedAscending); // [ 3, 5, 10, 11 ]

// sort descending
const sortedDescending = arr6.sort((a, b) => b - a);
console.log(sortedDescending); // [ 11, 10, 5, 3 ]

/** Reverse a String **/
// Strings are immutable, first convert it to an array, then use Array.reverse;
const str = 'abc';
const reversed = str.split('').reverse().join('');
console.log(reversed); // cba

/** Convert Array into an Object **/
const arr7 = [['key', 'value'], ['x', 500]];

const obj = arr7.reduce((accumulator, element) => {
    const [key, value] = element;
    accumulator[key] = value;
    return accumulator
}, {});

console.log(obj); // { key: 'value', x: 500 }

/** Loops **/
const arr8 = ['a', 'b', 'c'];

arr8.forEach((val, index, array) => {
    console.log(val, index);
});
// a 0
// b 1
// c 2

for (const [index, val] of arr8.entries()) {
    console.log(val, index);
}
// a 0
// b 1
// c 2

for (const key in arr8) {
    console.log(key);
}
// 0
// 1
// 2

/** Multi-Dimensional Array Manipulation **/
const arr9 = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
];

arr9.map((row, y) => {
    console.log('--- ROW', y, '---');
    
    row.map((col, x) => {
        console.log('COL', x, col);
    })
});
// --- ROW 0 ---
// COL 0 a
// COL 1 b
// COL 2 c
// --- ROW 1 ---
// COL 0 d
// COL 1 e
// COL 2 f
// --- ROW 2 ---
// COL 0 g
// COL 1 h
// COL 2 i

/** Get the Diagonal ( multi-dimension array ) **/
const arr10 = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
];

const diagonal = arr10.reduce((acc, row, y, array) => {
    const len = row.length;
    const rightDiag = row[len - y - 1];
    const leftDiag = row[y];

    acc[0].push(leftDiag);
    acc[1].push(rightDiag);

    return acc;
}, [[],[]]);

console.log(diagonal); // [ [ 'a', 'e', 'i' ], [ 'c', 'e', 'g' ] ]

