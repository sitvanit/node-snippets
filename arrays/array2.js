/** Array.indexOf vs Array.includes **/
// Array.indexOf - returns the first index at which a given element can be found
// Array.includes - returns boolean

const characters1 = ['ironman', 'black_widow', 'hulk', 'captain_america', 'hulk', 'thor'];

console.log(characters1.indexOf('hulk'));    // 2
console.log(characters1.indexOf('batman'));  // -1

console.log(characters1.includes('hulk'));   // true
console.log(characters1.includes('batman')); // false


/** Array.find vs Array.filter **/
// Array.filter creates a new array from another one with all items passing the callback argument. filtering, and getting a shorter array.
// Array.filter must browse the entire array.
// Array.find requires a callback argument like Array.filter, and it returns the value of the first element satisfying this callback.
// Array.find stops as soon as an item satisfies the callback.

const characters2 = [{ id: 1, name: 'ironman' }, { id: 2, name: 'black_widow' }, { id: 3, name: 'captain_america' }, { id: 4, name: 'captain_america' }];

const getCharacter = name => character => character.name === name;

console.log(characters2.filter(getCharacter('captain_america'))); // [{ id: 3, name: 'captain_america' }, { id: 4, name: 'captain_america' }]
console.log(characters2.find(getCharacter('captain_america')));   // { id: 3, name: 'captain_america' }


/** Array.find vs Array.some **/
// Array.find requires a callback as an argument and returns an element.
// Array.some returns boolean

const characters3 = [{ id: 1, name: 'ironman', env: 'marvel' }, { id: 2, name: 'black_widow', env: 'marvel' }, { id: 3, name: 'wonder_woman', env: 'dc_comics' }];

const hasCharacterFrom = env => character => character.env === env;

console.log(characters3.find(hasCharacterFrom('marvel'))); // { id: 1, name: 'ironman', env: 'marvel' }
console.log(characters3.some(hasCharacterFrom('marvel'))); // true


/** Array.reduce vs Array.filter + Array.map **/
// if we run Array.filter, then Array.map - we browse the array twice. we can use Array.reduce instead.

const characters4 = [{ name: 'ironman', env: 'marvel' }, { name: 'black_widow', env: 'marvel' }, { name: 'wonder_woman', env: 'dc_comics' },
];

console.log(
    characters4
        .filter(character => character.env === 'marvel')
        .map(character => Object.assign({}, character, { alsoSeenIn: ['Avengers'] }))
);
// [
//   { name: 'ironman', env: 'marvel', alsoSeenIn: ['Avengers'] },
//   { name: 'black_widow', env: 'marvel', alsoSeenIn: ['Avengers'] }
// ]

console.log(
    characters4
        .reduce((acc, character) => {
            return character.env === 'marvel'
                ? acc.concat(Object.assign({}, character, { alsoSeenIn: ['Avengers'] }))
                : acc;
        }, [])
);
// [
//   { name: 'ironman', env: 'marvel', alsoSeenIn: ['Avengers'] },
//   { name: 'black_widow', env: 'marvel', alsoSeenIn: ['Avengers'] }
// ]