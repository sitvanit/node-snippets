// null !== undefined
// null == undefined

/** Null **/
// Null means nothing! means an empty or non-existent value. Null must be assigned, and explicitly means nothing.
// null is also an object.
const emptyVar = null;
console.log(typeof emptyVar); // object - This has occurred since the beginning of JavaScript and is generally regarded as a mistake in the original JavaScript implementation.

/** undefined **/
// 1 - declaration without definition
let undedinedVar;
console.log(undedinedVar); // undefined
console.log(typeof undedinedVar); // undefined

// define as undefined
undedinedVar = 2;
console.log(typeof undedinedVar); // number
undedinedVar = undefined;
console.log(typeof undedinedVar); // undefined

const undefinedPropInObject = {};
console.log(undefinedPropInObject.prop1); // undefined


/* In JavaScript there are only six falsy values. Both null and undefined are two of them.
   Here’s a full list:

   false
   0 (zero)
   “” (empty string)
   null
   undefined
   NaN (Not A Number)

   Any other value in JavaScript is considered truthy.

   Also in JavaScript, there are six primitive values. Both null and undefined are primitive values.
   Here is a full list:

   Boolean
   Null
   Undefined
   Number
   String
   Symbol

   All other values in JavaScript are objects (objects, functions, arrays, etc.).
*/

// With default parameters, undefined will use the default while null does not.
let logHi = (str = 'you') => {
    console.log(`Hi ${str}!`);
};

logHi();            // Hi you!
logHi(undefined);   // Hi you!
logHi(null);        // Hi null!
