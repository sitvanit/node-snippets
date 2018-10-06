// forEach() — executes a provided function once for each array element.
// forEach() method doesn’t actually return anything (undefined). It simply calls a provided function on each element
// in your array. This callback is allowed to mutate the calling array.
// map() — creates a new array with the results of calling a provided function on every element in the calling array.
// map() utilizes return values and actually returns a new Array of the same size.

const arr1 = [1, 2, 3, 4, 5];
arr1.forEach((num, index) => {
    return arr1[index] = num * 2;
});

console.log(arr1);    // [ 2, 4, 6, 8, 10 ]

const arr2 = [1, 2, 3, 4, 5];
let doubled = arr2.map(num => {
    return num * 2;
});

console.log(arr2);    // [ 1, 2, 3, 4, 5 ]
console.log(doubled); // [ 2, 4, 6, 8, 10 ]

// forEach is faster than map:
// https://jsperf.com/map-vs-foreach-speed-test

// Just about anything you can do with forEach() you can do with map(), and vise versa.
// map() allocates memory and stores return values. forEach() throws away return values and always returns undefined.
// forEach() will allow a callback function to mutate the current array. map() will instead return a new array.
