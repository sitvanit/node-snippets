// There are two ways to create a regular expression in Javascript
// No matter which method you choose, the result is going to be a regex object. Both regex objects will have same
// methods and properties attached to them.

// 1. Regular Expression Constructor
const regex1 = new RegExp('hello');

// 2. Regular Expression Literal
const regex2 = /hello/;

const str = 'hello world';

console.log(regex1.test(str));
console.log(regex1.exec(str));

console.log(regex2.test(str));
console.log(regex2.exec(str));

/** flags - g - Global search, don’t return after the first match **/
const regexGlobal1 = new RegExp('abc','g')
const regexGlobal2 = /abc/g;
console.log(regexGlobal1.test('abc abc'));
console.log(regexGlobal2.test('abc abc'));

/** flags - i - Case-insensitive search **/
const regexInsensitive = /abc/i;
console.log(regexInsensitive.test('Abc'));

/** Character groups **/

// A character set is a way to match different characters in a single position
const regex3 = /[bt]ear/;
console.log(regex3.test('tear')); // true
console.log(regex3.test('bear')); // true
console.log(regex3.test('fear')); // false

// All the special characters except for caret (^) (Which has entirely different meaning inside the character set)
// lose their special meaning inside the character set.
// Negated character set [^xyz] — It matches anything that is not enclosed in the brackets.
const regex4 = /[^bt]ear/;
console.log(regex4.test('tear')); // false
console.log(regex4.test('bear')); // false
console.log(regex4.test('fear')); // true

// Ranges
const regex5 = /[a-z]ear/;
console.log(regex5.test('fear')); // true
console.log(regex5.test('tear')); // true

// Meta-characters
// \d - Match any digit character ( same as [0-9] ).
// \w - Match any word character. A word character is any letter, digit, and underscore. (Same as [a-zA-Z0–9_] ) i.e alphanumeric character.
// \s - Match a whitespace character (spaces, tabs etc).
// \t - Match a tab character only.
// \b - Find a match at beginning or ending of a word. Also known as word boundary.
// .  - (period) Matches any character except for newline.
// \D - Match any non digit character (same as [^0–9]).
// \W - Match any non word character (Same as [^a-zA-Z0–9_] ).
// \S - Match a non whitespace character.

// Quantifiers
// +  - Matches the preceding expression 1 or more times.
const regex6 = /\d+/;
console.log(regex6.test('8')); // true
console.log(regex6.test('88899')); // true
console.log(regex6.test('8888845')); // true
// *  - Matches the preceding expression 0 or more times.
const regex7 = /go*d/;
console.log(regex7.test('gd')); // true
console.log(regex7.test('god')); // true
console.log(regex7.test('good')); // true
console.log(regex7.test('goood')); // true
// ?  - Matches the preceding expression 0 or 1 time, that is preceding pattern is optional.
const regex8 = /goo?d/;
console.log(regex8.test('god')); // true
console.log(regex8.test('good')); // true
console.log(regex8.test('goood')); // false
// ^  - matches the start of string.
const regex9 = /^g/;
console.log(regex9.test('good')); // true
console.log(regex9.test('bad')); // false
console.log(regex9.test('tag')); // false
// $  - matches the end of the string.
const regex10 = /.com$/;
console.log(regex10.test('test@testmail.com')); // true
console.log(regex10.test('test@testmail')); // false
// {N}- Matches exactly N occurrences of the preceding regular expression.
const regex11 = /go{2}d/;
console.log(regex11.test('good')); // true
console.log(regex11.test('god')); // false
//{N,}- Matches at least N occurrences of the preceding regular expression.
const regex12 = /go{2,}d/;
console.log(regex12.test('god')); // false
console.log(regex12.test('goood')); // true
console.log(regex12.test('gooood')); // true
//{N,M}-Matches at least N occurrences and at most M occurrences of the preceding regular expression (where M > N).
const regex13 = /go{1,2}d/;
console.log(regex13.test('god')); // true
console.log(regex13.test('good')); // true
console.log(regex13.test('goood')); // false
// x|y- Matches either X or Y
const regex14 = /(green|red) apple/;
console.log(regex14.test('green apple')); // true
console.log(regex14.test('red apple')); // true
console.log(regex14.test('blue apple')); // false

// special characters - use '\'
const regex15 = /a+b/;  // This won't work
const regex16 = /a\+b/; // This will work
console.log(regex15.test('a+b')); // false
console.log(regex16.test('a+b')); // true

// capturing groups
// (x) Matches x and remembers the match.
const regex17 = /(foo)bar\1/; // \1 remembers and uses that match from first subexpression within parentheses.
console.log(regex17.test('foobarfoo')); // true
console.log(regex17.test('foobar')); // false

// non capturing groups
// (?:x) Matches x and does not remember the match.
// Here \1 won’t work, it will match the literal \1.
const regex18 = /(?:foo)bar\1/;
console.log(regex18.test('foobarfoo')); // false
console.log(regex18.test('foobar')); // false
console.log(regex18.test('foobar\1')); // true

// positive look ahead
// x(?=y)  Matches x only if x is followed by y.
const regex19 = /Red(?=Apple)/;
console.log(regex19.test('RedApple')); // true
console.log(regex19.test('GreenApple')); // false


/** Practicing Regex **/

// Match any 10 digit number
const regex20 = /^\d{10}$/;
console.log(regex20.test('9995484545')); // true
console.log(regex20.test('999548454')); // false
console.log(regex20.test('99954845451')); // false
// If we want to enforce that the match must span the whole string, we can add the quantifiers ^ and $. The caret ^
// matches the start of the input string, whereas the dollar sign $ matches the end. So it would not match if string
// contains less or more than 10 digits.
// \d matches any digit character.
// {10} matches the previous expression, in this case \d exactly 10 times. So if the test string contains less than or
// more than 10 digits, the result will be false.

// Match a date with following format DD-MM-YYYY or DD-MM-YY
const regex21 = /^(\d{1,2}-){2}\d{2}(\d{2})?$/;
console.log(regex21.test('01-01-1990')); // true
console.log(regex21.test('01-01-90')); // true
console.log(regex21.test('01-01-190')); // false
// Again, we have wrapped the entire regular expression inside ^ and $, so that the match spans entire string.
// ( start of first subexpression.
// \d{1,2} matches at least 1 digit and at most 2 digits.
// - matches the literal hyphen character.
// ) end of first subexpression.
// {2} match the first subexpression exactly two times.
// \d{2} matches exactly two digits.
// (\d{2})? matches exactly two digits. But it’s optional, so either year contains 2 digits or 4 digits.

// Matching Anything But a Newline - format abc.def.ghi.jkl
const regex22 = /^(.{3}\.){3}.{3}$/;
console.log(regex22.test('123.456.abc.def')); // true
console.log(regex22.test('1243.446.abc.def')); // false
console.log(regex22.test('abc.def.ghi.jkl')); // true
// We have wrapped entire regular expression inside ^ and $, so that the match spans entire string.
// ( start of first sub expression
// .{3} matches any character except new line for exactly 3 times.
// \. matches the literal . period
// ) end of first sub expression
// {3} matches the first sub expression exactly 3 times.
// .{3} matches any character except new line for exactly 3 times.