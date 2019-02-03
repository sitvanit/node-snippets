// reduce() and reduceRight() works in the same way except that reduce() starts from the first item in the array to the
// last while reduceRight() starts from the last item to the first.

const numbers1 = [2, 4, 6, 7, 8];

const sum1 = numbers1.reduce((acc, cur) => acc + cur);
console.log(sum1); // 27

const sum2 = numbers1.reduce((acc, cur) => acc + cur, 20);
console.log(sum2); // 47


const numbers2 = [20, 22, 50, 60, 12];

const largestNumber = numbers2.reduce((max, num) => num > max ? num : max);
console.log(largestNumber); // 60


const numbers3 = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];

const distinctNumbers = numbers3.reduce((distinct, num) => distinct.indexOf(num) !== -1 ? distinct : [...distinct, num], []);
console.log(distinctNumbers); // [ 1, 2, 3, 5, 4 ]


const numbers4 = [3, 3, 2]; // 3^(3^2)

const answer = numbers4.reduceRight((ans, num) => Math.pow(num, ans));
console.log(answer); // 19683
