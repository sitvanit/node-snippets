// when the plus operator is placed between a number and a boolean, the boolean is converted to a number.
// false == 0 and true == 1
console.log(3 + true); // 4
console.log(true + false); // 1

// When the plus operator is placed between to operands, and one is a string, it will convert the other number or
// boolean to a string and concatenate them.
console.log(4 + '8'); // 48
console.log(true + '4'); //
// JavaScript evaluates the first + before anything else.
console.log(1 + 1 + '1'); // 21
// The minus sign before '69' is a unary minus operator that will actually convert the string to a number and make it negative.
console.log('1' + 1 + 1); // 0
// When JavaScript fails to produce a number, we are left with NaN (Not A Number).
console.log(-'giddyup' + 409); // Nan

