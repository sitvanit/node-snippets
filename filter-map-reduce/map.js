// The map() method is used to apply a function on every element in an array. A new array is then returned.
// You can think of map() as a for loop, that is specifically for transforming values.

const arr = [1, 2, 3, 4];

/* 1 */
const plus5 = [];
for(let i = 0; i < arr.length; i++) {
    plus5[i] = arr[i] + 5;
}
console.log(plus5); // [ 6, 7, 8, 9 ]

/* 2 */
const plus10 = arr.map((val) => {
    return val + 10;
});
console.log(plus10); // [ 11, 12, 13, 14 ]

/* 3 */
const newArr = arr.map((val, i, arr) => {
    return {
        value: val,
        index: i,
        length: arr.length
    };
});
console.log(newArr);
