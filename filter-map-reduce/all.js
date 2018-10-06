const assert = require('assert');

const data = [
    {
        name: 'Butters',
        age: 3,
        type: 'dog'
    },
    {
        name: 'Lizzy',
        age: 6,
        type: 'dog'
    },
    {
        name: 'Red',
        age: 1,
        type: 'cat'
    },
    {
        name: 'Joey',
        age: 3,
        type: 'dog'
    },
];

const dogs = data.filter(val => val.type === 'dog');
const dogYears = dogs.map(val => val.age * 7);
const allDogsAgesInDogYears = dogYears.reduce((val, acc) => acc + val, 0);

const expected = (3 + 6 + 3) * 7;
console.log((allDogsAgesInDogYears - expected) === 0 ? 'succeed' : 'fail');

