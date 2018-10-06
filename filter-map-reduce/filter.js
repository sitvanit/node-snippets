// The filter() method returns a new array created from all elements that pass a certain test preformed on an original array.

const arr = [1, 2, 3, 4, 5, 6];

/* 1 */
const even1 = [];
for(let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) even1.push(arr[i]);
}
console.log(even1); // [ 2, 4, 6 ]

/* 2 */
const even2 = arr.filter(val => val % 2 === 0);
console.log(even2); // [ 2, 4, 6 ]

/* 3 */
const data = [
    {
        country: 'China',
        population: 1409517397,
    },
    {
        country: 'India',
        population: 1339180127,
    },
    {
        country: 'USA',
        population: 324459463,
    },
    {
        country: 'Indonesia',
        population: 263991379,
    }
];

const greaterThan500m = data.filter(country => country.population > 500000000);
console.log(greaterThan500m); // china and india


