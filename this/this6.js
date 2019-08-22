'use strict';
// what is this?
// an automatically created keyword that points to something, that something usually being an object.

// How is This Created?
// this is created when JavaScript first executes and every time a function is called.

// What does This Point to?
// this is usually determined by how a function is called at runtime.

function logThis() {
    console.log('this =', this);
}

logThis(); // this is the global object or undefined in strict mode, similar to console.log(this)

const objThree = {
    name: 'Object Three',
    logThisMethod: logThis
};

objThree.logThisMethod(); // this = { name: 'Object Three', logThisMethod: [Function: logThis] }

const methodRef = objThree.logThisMethod;

methodRef(); // undefined
// When you call a function as a method (object.method()) this is set to the preceding object. We call this implicit binding.



