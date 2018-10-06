// 'this' keyword
// The value of this is usually determined by a functions execution context.
// Execution context simply means how a function is called.
// The keyword this acts as a placeholder, and will refer to whichever object called that method when the method is
// actually used.

/** new binding **/
// When using the new keyword to call a function, this is the newly constructed object.
function Person(name, age) {
    this.name = name;
    this.age =age;
    console.log(this);
}
const Rachel = new Person('Rachel', 30);   // { age: 30, name: 'Rachel' }

/** Explicit binding **/
// When call or apply are used to call a function, this is the object that is passed in as the argument.
// Note: .bind() works a little bit differently. It creates a new function that will call the original one with the
// object that was bound to it.
function fn() {
    console.log(this);
}
const agent = {id: '007'};
fn.call(agent);    // { id: '007' }
fn.apply(agent);   // { id: '007' }
const boundFn = fn.bind(agent);
boundFn();         // { id: '007' }

/** Implicit binding **/
// When a function is called with a context (the containing object), this is the object that the function is a property of.
// This means that a function is being called as a method.
const building = {
    floors: 5,
    printThis: function () {
        console.log(this);
    }
};
building.printThis();  // { floors: 5, printThis: function() {…} }

/** Default binding **/
// If none of the above rules applies, this is the global object.
// A function that is not declared as a method automatically becomes a property of the global object.
function printWindow() {
    console.log(this)
}
printWindow();  // window object


/** Lexical this **/
// When a function is called with an arrow function =>, this receives the this value of its surrounding scope at the
// time it’s created. this keeps the value from its original context.

function Cat(name) {
    this.name = name;
    console.log(this);   // { name: 'Garfield' }
    ( () => console.log(this) )();   // { name: 'Garfield' }
}
var myCat = new Cat('Garfield');
