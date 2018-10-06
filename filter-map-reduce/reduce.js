// The reduce() method is used to apply a function to each element in the array to reduce the array to a single value.

// let result = arr.reduce(callback);

// Optionally, you can specify an initial value
// let result = arr.reduce(callback, initValue);

// result — the single value that is returned.
// arr — the array to run the reduce function on.
// initValue — an optionally supplied initial value. If this value is not supplied, the 0th element is used as the initial value.
// callback — the function to execute on each element in the array.
// Our callback function can take four arguments:
// accumulator — the accumulator accumulates all of the callbacks returned values.
// val — the current value being processed
// index — the current index of the value being processed
// arr — the original array

const arr = [1, 2, 3, 4];

/* 1 */
// You can think of reduce() as a for loop, that is specifically for using the values of an array to create something new.
let sum1 = 0;
for(let i = 0; i < arr.length; i++) {
    sum1 += arr[i];
}
console.log(sum1); // 10

/* 2 */
// arr is the array we’re going to reduce.
// acc is the accumulator. the acc value will increase until the function has completed.
const sum2 = arr.reduce((acc, val) => {
    return acc + val;
});
console.log(sum2); // 10

/* 3 */
// Specifying an Initial Value (if not mention, it will be the 0th element.
const sum3 = arr.reduce((acc, val) => acc + val, 100);
console.log(sum3); // 110

/* 4 */
// sum up the population of every country except China
const data = [
    {
        country: 'China',
        pop: 1409517397,
    },
    {
        country: 'India',
        pop: 1339180127,
    },
    {
        country: 'USA',
        pop: 324459463,
    },
    {
        country: 'Indonesia',
        pop: 263991379,
    }
];
const sum4 = data.reduce((acc, val) => (val.country === 'China') ? acc : acc + val.pop, 0);
const expected = 1339180127 + 324459463 + 263991379;
console.log(`the gap is ${sum4 - expected}`);


// Using reduce to do both map and filter *simultaneously*
const numbers = [10, 20, 30, 40];
const doubledOver50 = numbers.reduce((finalList, num) => {
    // map
    num = num * 2;
    // filter
    if (num > 50) {
        finalList.push(num);
    }

    return finalList;
}, []);
const list = doubledOver50;
console.log(list);


// Using reduce to balance parentheses
// returns 0 if balanced
const isParensBalanced = (str) => {
    return str.split('').reduce((counter, char) => {
        // matched ")" before "("
        if(counter < 0) {
            return counter;
        } else if(char === '(') {
            return ++counter;
        } else if(char === ')') {
            return --counter;
        } else {
            return counter
        }
    }, 0)
};
console.log(isParensBalanced('(fdsf)(fdsf)(())')); // 0
console.log(isParensBalanced(')(')); // -1


// Counting Duplicate Array Items
const cars = ['BMW','Benz', 'Benz', 'Tesla', 'BMW', 'Toyota'];
const carsObj = cars.reduce((obj, name) => {
    obj[name] = obj[name] ? ++obj[name] : 1;
    return obj
}, {});
console.log(carsObj); // { BMW: 2, Benz: 2, Tesla: 1, Toyota: 1 }
