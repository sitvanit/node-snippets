// A closure is a function that has access to the parent scope, even after the scope has closed.
// Scope is essentially the lifespan of a variable in JavaScript.

// When you create a function in JavaScript, it has access to variables created inside and outside the function.
function speak1(){
    const words = 'hi';
    console.log(words);
}
speak1(); // 'hi'
// console.log(words); // Uncaught ReferenceError: words is not defined

// nested functions
function speak2() {
    return function logIt() {
        const words = 'hi';
        console.log(words);
    }
}
const sayHello = speak2();
sayHello();
// In this case our speak() function’s scope has closed. This means the const words = 'hi' should also be gone.
// However, in JavaScript we have this cool little concept called closures: Our inner function maintains a reference
// to the scope in which it was created. This allows the logIt() function to still access the words variable — even
// after speak() has closed.


function name(name) {
    return function(hobby) {
        console.log(`${name} likes ${hobby}`);
    };
}

const person = name('yossi');
person('cooking');
