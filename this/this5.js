/** this **/
// JavaScript borrows this keyword from C++, where it is used to point to an instance of an object from within its own
// class definition. There is absolutely no confusion about this keyword in C++ because this keyword is never used for
// any other intent than to point to an instance of an object from its constructor!
// The original designer of JavaScript decided to tie a secondary feature to this keyword. Not only is it used to point
// to an instance of an object from its own constructor or its methods (hence, this) it is also used to keep track of
// execution context — which is often based on where a function was called from.

// 1. The this keyword is used to point to the instance of an object from its own constructor and methods (when used
// inside function or class scope.)

// 2. The this keyword also keeps track of execution context also often referred to by some as the lexical scope or
// lexical environment. Think of lexical scope as location in memory allocated for all local variables to that scope.

// 3. The link to the execution context can change: for example using this inside an arrow function is not the same as
// using this in ES-style function. Arrow functions are not constructors and cannot be used to instantiate an object.
// So they don’t even have their own this context. But they do have this keyword. So what does it point to? It is likely
// to be the parent context just outside of it. It has a “transparent” scope, I guess you can say.

// The link to execution context is also established when this is referred by a callback function, even if that function
// was defined inside an object’s constructor (when function or class is used as an object constructor.)


/**  The this keyword is used to point to the instance of an object **/
// In this example function Cat is used as a constructor for the object of type Cat.
function Cat() {
    this.name = 'felix'; // this = this object
    console.log(this); // Cat { name: 'felix' }
}
new Cat();

// The same goes for class keyword
class Mouse {
    constructor() {
        this.name = 'mappy';
        console.log(this); // Mouse { name: 'mappy' }
    }
}
new Mouse();


/** the this keyword was also chosen to carry a link to execution context **/

function abc() {
    console.log(this); // global scope
}

abc();
// create an object of type abc
const abcObject = new abc(); // abc {} - now 'abcObject' is the context
console.log(typeof abcObject); // object


/** a problem **/

function food(kind) {
    this.kind = kind;
    this.cook = cook; // functions are hoisted; so we can call them before they define.

    function cook(sec) {
        const that = this; // this still points to food object and not the window object
        setTimeout(function() {
            // this in setTimeout has its own context
            console.log(`${this.kind} cooked for ${sec} seconds.`); // undefined cooked for 2 seconds.
            console.log(`${that.kind} cooked for ${sec} seconds.`); // soup cooked for 2 seconds.
        }, sec * 1000);
    }
}

const soup = new food('soup');
soup.cook(2);

// another way to solve it is arrow function, because arrow function has the context of outside of it.

function foodArrow(kind) {
    this.kind = kind;
    this.cook = cook;

    function cook(sec) {
        setTimeout(() => {
            console.log(`${this.kind} cooked for ${sec} seconds.`); // soup cooked for 2 seconds.
        }, sec, 1000);
    }
}

const soupArrow = new foodArrow('soup');
soupArrow.cook(2);
