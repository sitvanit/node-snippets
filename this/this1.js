// 'this' — a variable with the value of the object that invokes the function where this is used.
// The 'this' reference ALWAYS refers to (and holds the value of) an object—a singular object—and it is usually used inside a function or a method
// 'this' is really just a shortcut reference for the invoking object.
// 'this' is not assigned a value until an object invokes the function where 'this' is defined.
// the value it is assigned is based exclusively on the object that invokes the 'this' Function.
// 'this' has the value of the invoking object in most circumstances.
// However, there are a few scenarios where 'this' does not have the value of the invoking object.

// the biggest concept you need to understand with this is execution context. That is what determines the value of this.

/** 1 **/
function foo1() {
    console.log(`this: ${this}, a1 is ${this.a1}`); // a
    console.log(`this: ${this}, a2 is ${this.a2}`); // undefined - because of the strict mode
}

global.a1 = 'a1';
const a2 = 'b2';

foo1();


/** 2 **/
function bar2() {
    console.log(`this: ${this}, b is ${this.b}`); // undefined
    // 'this' searches for object context (object scope) or global context (global scope)
}

function foo2() {
    const b = 2; // this is foo2
    return bar2();
}

foo2(); // undefined

// Functions are objects in JavaScript, And as objects, functions have methods, including the powerful Apply, Call, and Bind methods.
// On the one hand, Apply and Call are nearly identical and are frequently used in JavaScript for borrowing methods and for setting the this value explicitly.


// implicit binding
function foo3() {
    // Here before going to global object properties, this goes into its object context to which it has binding
    console.log(`this: ${this}, c is ${this.c}`);
}

const obj3 = {
    c: 2,
    foo3
};

obj3.foo3();


// explicit binding
function foo4() {
    // Here before going to global object properties, this goes into its object context to which it has binding
    console.log(`this: ${this}, d is ${this.d}`);
}

const obj4 = {
    d: 2,
};

foo4.call(obj4);