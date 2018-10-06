/** data types **/
// data types are instructions to a program’s compiler/interpreter that tell it how to handle a given value

// JavaScript has two types of data types:
// 1. primitive data types, which are immutable;
// 2. compound data types, which are mutable;

// The five main primitive data types are:
// 1. string;
// 2. number;
// 3. boolean;
// 4. undefined;
// 5. null;
// 6. symbol; (ECMAScript 2015 also added symbol to the list of primitives

// There are a variety of compound data types but the most common are:
// 1. object;
// 2. array;
// 3. function;
// Strictly speaking, array and function are both subtypes of object; however, they have some unique behaviors so we
// will address them separately.

// JavaScript is weakly typed, meaning that you don’t have to tell the interpreter what kind of value you plan to store
// in a particular variable.
// JavaScript is dynamically typed, meaning that the type of a value in a particular variable can be changed.

/** typeof **/
// in order to identify the data type, we should use 'typeof'
console.log("\"string\" type:", typeof "string");     // "string" type: string
console.log("7 type:         ", typeof 7);            // 7 type is: number
console.log("7.5 type:       ", typeof 7.5);          // 7.5 type is: number
console.log("true type:      ", typeof true);         // true type: boolean
console.log("undefined type: ", typeof undefined);    // undefined type: undefined
console.log("null type:      ", typeof null);         // null type: object
console.log("{} type:        ", typeof {});           // {} type: object
console.log("[] type:        ", typeof []);           // [] type: object
console.log("function type:  ", typeof function(){}); // function type: function

// arrays are typed as “object”. (which is accurate but not super helpful)
// integers and decimals are both typed as “number”.
// null types as “object” due to a legacy bug that can’t be fixed without breaking half the Internet.

/** Null testing **/
const myNullValue = null;
console.log(typeof myNullValue);          // object
console.log(myNullValue === null);        // true

/** Array testing **/
const myArray = [];
console.log(typeof myArray);              // object
console.log(Array.isArray(myArray));      // true
console.log(Array.isArray({}));           // false

/** Integer testing **/
console.log(typeof 4);                    // number
console.log(Number.isInteger(4));         // true
console.log(Number.isInteger(4.0));       // true
console.log(Number.isInteger(4.5));       // false

/** NaN testing **/
console.log(typeof NaN);                  // number
console.log(Number.isNaN(NaN));           // true
console.log(Number.isNaN(3));             // false
console.log(NaN === NaN);                 // false


/** Mutability **/
// As briefly mentioned earlier, one of the key differentiating attributes between primitive data types and compound
// data types is that the former are immutable.
// This means that you cannot change a primitive value.
// So what does it mean for a value to be immutable? Imagine that you have a variable called myInt and it holds the
// number value 5. No matter what methods you call on myInt, the value 5 itself will never change because numbers are
// one of the primitive types. 5 is always 5. This does not, however, mean that myInt the variable (as distinguished
// from the value of 5, which it happens to currently hold) can never change. You might run an expression that says
// myInt += 10, and indeed, myInt will now be 15. This is not mutation though, it is reassignment. 5 is still 5, but
// myInt is no longer pointing to it.

const someGreeting = "hello";
const otherGreeting = someGreeting;

console.log(someGreeting);              // hello
console.log(otherGreeting);             // hello

const enthusiasticGreeting = someGreeting.concat("!!!");
console.log(enthusiasticGreeting);      // "hello!!!"
console.log(someGreeting);              // hello
console.log(otherGreeting);             // hello

console.log(someGreeting[1]);           // Logs: e
someGreeting[1] = "a";
console.log(someGreeting[1]);           // Logs: e

// compound types can be mutated. Note however that compound types, as suggested by their name, are really data
// structures containing individual elements. Those individual elements could be either compound types themselves or
// primitive types.

const favoritePlanets = ["Mars", "Saturn", "Earth"];
console.log(favoritePlanets);     // [ 'Mars', 'Saturn', 'Earth' ]

favoritePlanets.sort();
console.log(favoritePlanets);     // [ 'Earth', 'Mars', 'Saturn' ]

favoritePlanets.push("Jupiter");
console.log(favoritePlanets);     // [ 'Earth', 'Mars', 'Saturn', 'Jupiter' ]

favoritePlanets[0].concat("2");
console.log(favoritePlanets);     // [ 'Earth', 'Mars', 'Saturn', 'Jupiter' ]


const lifeDiscovered = {
    "Earth": true,
    "Mars": false,
    "Titan": false,
};

console.log(lifeDiscovered); // { Earth: true, Mars: false, Titan: false }

lifeDiscovered["Mars"] = true;
console.log(lifeDiscovered); // { Earth: true, Mars: true, Titan: false }


/** Coercion **/
// Coercion comes in two forms:

// 1. implicit:
//    the interpreter looks at an expression that uses two different data types and uses a set of internal rules to
//    decide whether one or both of the values should be coerced so that they have matching rules.
console.log("20" + 18);   // 2018 - string and than + will turn the second to string.
console.log("20" * 18);   // 360  - string and than * will do the math
console.log(20 + true);   // 21   - number and than + and boolean will turn the boolean to a number
console.log("20" == 20);  // true - in == (loose equality) the string will turn to a number
console.log("20" === 20); // false- No coercion takes place when the strict equality operator is used.

// 2. explicit:
//    the source code explicitly instructs the interpreter on how it should handle coercion rather than letting it rely
//    on its internal rules.
console.log(Number("20") + 18);           // 38
console.log(String(20) + String(true));   // "20true"