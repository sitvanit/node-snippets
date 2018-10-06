// In JavaScript, a regular expression is simply a type of object that is used to match character combinations in strings.

// Regular Expression Literal - Uses slashes ( / ) to enclose
// if your regular expression will remain constant, it is best to use a regex literal.
const option1 = /cat/;

// Regular Expression Constructor
// If your regular expression will be changing, or relying on other variables, it is better to use the constructor method.
const option2 = new RegExp("cat");

console.log(/cat/.test("the cat says meow")); // true
console.log(/cat/.test("the dog says bark")); // false

// . — (period) Matches any single character, except for line breaks.
// * — Matches the preceding expression 0 or more times.
// + — Matches the preceding expression 1 or more times.
// ? — Preceding expression is optional (Matches 0 or 1 times).
// ^ — Matches the beginning of the string.
// $ — Matches the end of the string.

// \d — Matches any single digit character. === [0-9]
// \w — Matches any word character (alphanumeric & underscore). === [A-Za-z0-9_]
// [XYZ] — Character Set: Matches any single character from the character within the brackets. You can also do a range such as [A-Z]
// [XYZ]+ — Matches one or more of any of the characters in the set.
// [^A-Z] — Inside a character set, the ^ is used for negation. In this example, match anything that is NOT an uppercase letter.

// There are five optional flags. They can be used separately or together and are placed after the closing slash.
// Example: /[A-Z]/g I’ll only be introducing 2 here.
// g — Global search
// i — case insensitive search

// (x) — Capturing Parenthesis: Matches x and remembers it so we can use it later.
// (?:x) — Non-capturing Parenthesis: Matches x and does not remembers it.
// x(?=y) — Lookahead: Matches x only if it is followed by y.

// test a string for any numeric digits.
console.log(/\d/.test('12-34')); // true

console.log(/\d\d-\d\d/.test('12-34')); // true
console.log(/\d\d-\d\d/.test('1234')); // false

console.log(/\d+-\d+/.test('12-34')); // true
console.log(/\d+-\d+/.test('1-234')); // true
console.log(/\d+-\d+/.test('-34')); // false

console.log(/me+(ow)+w/.test('meeeeowowoww')); // true

console.log(/cats? says?/i.test('the Cat says meow')); // true
console.log(/cats? says?/i.test('the Cats say meow')); // true

const slashSearch = /\//;
const questionSearch = /\?/;


// tired of camelCase and need a way to add spaces between words.
function removeCc(str){
    // /[A-Z]/g  => This will match the C in 'camelCase'
    // /([A-Z])/ => Use capturing parenthesis to remember our matched capital letter
    // $1        => Access the captured value later with. if we have more parenthesis we should use $2, and so on...
    return str.replace(/([A-Z])/g, ' $1');
}

const noCamelCase = removeCc('camelCase'); // => should return 'camel Case'
console.log(noCamelCase);

const longStr = removeCc('weWereNeverBeingBoring');
console.log(longStr);


// Remove Capital Letters
function removeCapitalLetters(str) {
    // When using a function with replace() the function will be invoked after the match has been performed, and the
    // function’s result will be used as the replacement string. Better yet, if the match is global and multiple matches
    // are found, the function will be invoked for each match that is found.
    return str.replace(/([A-Z])/g, (capitalLetter) => capitalLetter.toLowerCase());
}
const capitalRemoved = removeCapitalLetters(longStr);
console.log(capitalRemoved);

// Capitalize First Letter
function capitalizedFirst(str) {
    return str.replace(/(^[a-z])/, (firstLetter) => firstLetter.toUpperCase());
}
console.log(capitalizedFirst(capitalRemoved));