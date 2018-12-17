let array1 = [1, 2, 3, "hello world", 4.12, true];
let array2 = [1, 2, 3, "hello world", 4.12, true];
let array3 = [1, 2, 3, "hello world", 4.12, true];

/** slice **/
// The slice( ) method copies a given part of an array and returns that copied part as a new array.
// It doesn’t change the original array.
// array.slice(from, until);
let newArray = array1.slice(0, 3);

console.log(array); //  [ 1, 2, 3, 'hello world', 4.12, true ]
console.log(newArray); // [ 1, 2, 3 ]

/** splice **/
// The splice( ) method changes an array, by adding or removing elements from it.

// removing elements
// array.splice(index, number of elements);
array2.splice(2); // Every element starting from index 2, will be removed
console.log(array2); // [ 1, 2 ]

array3.splice(2, 1); // elements starting from index 2 will be removed one by one each time we call the splice ( )

// adding elements
// array.splice(index, number of elements, element, element);
array.splice(0, 0, 'a', 'b'); // adding a and b in the very beginning of the array

/** split **/
// divides a string into substrings and returns them as an array.
// Doesn’t change the original string
// string.split(separator, limit);
// Separator: Defines how to split a string… by a comma, character etc.
// Limit: Limits the number of splits with a given number