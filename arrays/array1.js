let tasks = [];
const projects1 = new Array(); // we can set an initial length

console.log(tasks.length); // 0
console.log(projects1.length); // 0

const projects2 = new Array(10);

console.log(projects2.length); // 10

// Recommended way is to use [] notation to create arrays.

/** push **/
// add items to the end of an array - push
tasks.push('do homework');
tasks = [...tasks, 'go to sleep'];

/** unshift **/
// add items to the beginning of an array - unshift
tasks.unshift('go to run', 'brush your teeth');
tasks = ['take care of yourself', ...tasks];

console.log(tasks);

/** shift **/
// remove first item from the array
const firstItem = tasks.shift();
console.log(tasks);
console.log(firstItem);

/** slice **/
// choose a slice from an array
const slicedTasks = tasks.slice(1, 3); // end not included
console.log(slicedTasks);
console.log(tasks); // The original array will not be modified.

/** splice **/
// remove/add portion of an array
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// 1 - inserts at 1st index position
// 0 - don't remove elements at all
// insert 'Feb'
console.log(months); // [ 'Jan', 'Feb', 'March', 'April', 'June' ]

months.splice(4, 1, 'May');
console.log(months); // [ 'Jan', 'Feb', 'March', 'April', 'May' ]

months.splice(3, 2);
console.log(months); // [ 'Jan', 'Feb', 'March' ]

/** pop **/
// remove last item
months.pop();
console.log(months); // [ 'Jan', 'Feb' ]

/** concat **/
// merging to arrays
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const mergedArrays1 = array1.concat(array2);
console.log(mergedArrays1); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
const mergedArrays2 = [...array1, ...array2];
console.log(mergedArrays2); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

/** join **/
// join array's elements to a string
const join1 = array1.join();
console.log(join1); // a,b,c
const join2 = array1.join('');
console.log(join2); // abc
const join3 = array1.join('-');
console.log(join3); // a-b-c

/** forEach **/
// looping
const toDo = ['going to yoga', 'build a site', 'find someone'];

toDo.forEach(element => {
    console.log(element);
});

toDo.forEach((element, index) => {
    console.log(index + " " + element);
});

/** for in **/
for(let index in toDo) {
    console.log(toDo[index]);
}

/** map **/
// map - returns a new array - not changing the original
const num = [1, 2, 3, 4, 5];
const squared = num.map((value, index, originalArray) => value * value);
console.log(squared); // [ 1, 4, 9, 16, 25 ]
console.log(num); // [ 1, 2, 3, 4, 5 ]

// map return a new object
const toDoObj = toDo.map((element, index) => {
    return {
        [index]: element
    }
});
console.log(toDoObj);

/** find **/
// find - returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
const data = [51, 12, 8, 130, 44];
const found = data.find(element => element > 10);
console.log(found); // 51

/** filter **/
const filteredData = data.filter(element => element > 10);
console.log(filteredData); // [ 51, 12, 130, 44 ]

/** reduce **/
// 1
const arr = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(arr.reduce(reducer));       // 1 + 2 + 3 + 4 = 10
console.log(arr.reduce(reducer, 5));    // 5 + 1 + 2 + 3 + 4 = 15

const data1 = [
    {name: "Raphel", gender: "male"},
    {name: "Tom", gender: "male"},
    {name: "Jerry", gender: "male"},
    {name: "Dorry", gender: "female"},
    {name: "Suzie", gender: "female"},
    {name: "Dianna", gender: "female"},
    {name: "Prem", gender: "male"}
];

// 2 - Using reduce to categorize data
const genderwise = data1.reduce((acc, item, index) => {
    acc[item.gender].push(item);
    return acc
}, { male: [], female: [] });

console.log(genderwise);
// { male:
//    [ { name: 'Raphel', gender: 'male' },
//      { name: 'Tom', gender: 'male' },
//      { name: 'Jerry', gender: 'male' },
//      { name: 'Prem', gender: 'male' } ],
//   female:
//    [ { name: 'Dorry', gender: 'female' },
//      { name: 'Suzie', gender: 'female' },
//      { name: 'Dianna', gender: 'female' } ] }

// 3 - Using reduce to implement custom map() function
function map(arr, fn) {
    return arr.reduce((acc, item) => [...acc, fn(item)], []);
}

// 4 - Using reduce to implement custom filter() function
function filter (arr, fn) {
    return arr.reduce(function (acc, item, index) {
        if (fn(item, index)) {
            acc.push(item);
        }
        return acc;
    }, []);
}

// 5 - Using reduce to implement custom forEach function
function forEach(arr, fn) {
    arr.reduce((acc, item, index) => {
        item = fn(item, index);
    }, [])
}

/** holes in arrays **/
// having ‘holes’ in array is not good from performance perspective.
// do not use delete method on array, unless you know what you are doing. delete method doesn’t alter the length of the array.

// changing array length
const num1 = [1, 2, 3, 4, 5];
num1.length = 3;
console.log(num1); // The last two elements are deleted

num1.length = 10;
console.log(num1);

/** min / max **/
const arrMin = arr => Math.min(...arr);
const arrMax = arr => Math.max(...arr);
console.log(arrMin([20, 10, 5, 10])); // 5
console.log(arrMax([20, 10, 5, 10])); // 20

/** sum **/
const arrSum = arr => arr.reduce((a, b) => a + b, 0); // a is the accumulator, b is the current value being processed.
console.log(arrSum([20, 10, 5, 10])); // 45

/** average **/
const arrAvg = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
console.log(arrAvg([20, 10, 5, 10])); // 11.25
