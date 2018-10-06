// var - function scoped
// An undeclared variable — assignment without var, let or const — creates a var variable in global scope.

function greeting() {
    console.log(s); // undefined
    if (true) {
        var s = 'Hi';
        undeclaredVar = 'I am automatically created in global scope';
    }
    console.log(s) // 'Hi'
}
// console.log(s);  // Error — ReferenceError: s is not defined
greeting();
console.log(undeclaredVar); // 'I am automatically created in global scope'


// ES6 let and const are new. They are not hoisted and block-scoped
let g1 = 'global 1';
let g2 = 'global 2';
{   /* Creating a new block scope */
    g1 = 'new global 1';
    let g2 = 'local global 2';
    console.log(g1);  // 'new global 1'
    console.log(g2);  // 'local global 2'
    // console.log(g3);  // ReferenceError: g3 is not defined
    let g3 = 'I am not hoisted';
}
console.log(g1);   // 'new global 1'
console.log(g2);   // 'global 2'


// A common misconception is that const is immutable. It cannot be reassigned, but its properties can be changed!

