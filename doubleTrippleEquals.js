// === strict equality => type and value
// ==  value

console.log(77 === '77'); // false
console.log(77 == '77');  // true; That because of type coercion. The string value of '77' can easily be converted into the number value of 77.

console.log(false === 0); // false
console.log(false == 0);  // true

// There are only six falsy values in JavaScript you should be aware of:
// false — boolean false
// 0 — number zero
// “” — empty string
// null
// undefined
// NaN — Not A Number
// all of them will be true with ==

const a = '0';
console.log(Boolean(a)); // True
const b = false;
console.log(Boolean(b)); // False

console.log(a == b); // true
// if you are comparing a boolean with something other than a boolean, JavaScript coerces that boolean to a number and
// compares. => false = 0
// now the comparison is between => '0' == 0
// JavaScript now coerces that string to a number and compares both numbers. ==> 0 = 0

console.log(false == "");  // 0 = "" => 0 = 0 => true
console.log(false == []);  // true
console.log(false == {});  // false
console.log("" == 0);      // 0 == 0 => true
console.log("" == []);     // true
console.log("" == {});     // false
console.log(0 == []);      // true
console.log(0 == {});      // false
console.log(0 == null);    // false