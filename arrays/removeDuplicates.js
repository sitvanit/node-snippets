const array1 = ['1', '2', '2', '3', '3', '3'];
const array2 = ['1', '2', '2', '3', '3', '3'];
const array3 = ['1', '2', '2', '3', '3', '3'];
const array4 = ['1', '2', '2', '3', '3', '3'];

/** set **/
// Set only lets you store unique values. When you pass in an array, it will remove any duplicate values.
// We are using [...] in order to convert the set back to array.
console.log([...new Set(array1)]); // [ '1', '2', '3' ]
console.log(Array.from(new Set(array2))); // [ '1', '2', '3' ]

/** filter **/
// The indexOf method returns the first index it finds of the provided element from our array.
console.log(array3.filter((item, index) => array3.indexOf(item) === index)); // [ '1', '2', '3' ]

/** reduce **/
console.log(array4.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])); // [ '1', '2', '3' ]



