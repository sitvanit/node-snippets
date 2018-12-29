/** rules **/
// 'const fnc = (x, y, z) => […].map(x => fnc(x, y, z))' is equal to 'const fnc = (y, z) => x => […].map(fnc(y, z))'
// 'x => plusOne(x)' is equal to 'plusOne'

/** sum **/
const sum = (a, b) => a + b;
console.log(sum(1,2));

const csum = a => b => a + b;
console.log(csum(1)(2));

const plusOne = csum(1);
console.log(plusOne(2));
console.log([1, 2, 3].map(x => plusOne(x)));
console.log([1, 2, 3].map(plusOne));

/** is bigger than **/
const isBiggerThan = (threshold, int) => int > threshold;
console.log([1, 2, 3, 4].filter( int => isBiggerThan(3, int)));

const cIsBiggerThan = threshold => int => int > threshold;
console.log([1, 2, 3, 4].filter( int => cIsBiggerThan(3)(int)));

const isBiggerThan3 = cIsBiggerThan(3);
console.log([1, 2, 3, 4].filter(isBiggerThan3));

/** keepGreatestChar **/
const keepGreatestChar = (char1, char2) => char1 > char2 ? char1 : char2;

const cKeepGreatestChar = char1 => char2 => char1 > char2 ? char1 : char2;
const keepGreatestCharBetwwenBAbd = cKeepGreatestChar('b');
console.log(keepGreatestCharBetwwenBAbd('a'));
console.log(keepGreatestCharBetwwenBAbd('c'));

const greatestCharInArray = array => array.reduce((acc, char) => acc > char ? acc : char, 'a');
console.log(greatestCharInArray(['a', 'b', 'c', 'd']));

