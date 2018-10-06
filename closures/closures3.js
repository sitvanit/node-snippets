// A closure is the combination of a function and the lexical environment from which it was declared. Closure allows a
// function to access constiables from an enclosing scope — environment — even after it leaves the scope in which it was
// declared.

function sayHi(name){
    const message = `Hi ${name}!`;
    function greeting() {  // The greeting function maintains a reference to its outer scope — environment — in which message exists.
        console.log(message)
    }
    return greeting
}
const sayHiToJon = sayHi('Jon'); // sayHiToJon is a reference to the greeting function
console.log(sayHiToJon);     // [Function: greeting]
console.log(sayHiToJon());   // 'Hi Jon!'


// One of the main benefits of closures is that it allows data encapsulation. This refers to the idea that some data
// should not be directly exposed.


function SpringfieldSchool() {
    let staff = ['Seymour Skinner', 'Edna Krabappel'];
    return {
        getStaff: function() { console.log(staff) },
        addStaff: function(name) { staff.push(name) }
    }
}

let elementary = SpringfieldSchool(); // By the time elementary is created, the outer function has already returned.
console.log(elementary);        // { getStaff: ƒ, addStaff: ƒ }
// console.log(staff);             // ReferenceError: staff is not defined
/* Closure allows access to the staff variable */
elementary.getStaff();          // ["Seymour Skinner", "Edna Krabappel"]
elementary.addStaff('Otto Mann');
elementary.getStaff();         // ["Seymour Skinner", "Edna Krabappel", "Otto Mann"]



// common interview problems
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
    setTimeout(function() {
        console.log(`The value ${arr[i]} is at index: ${i}`);
    }, (i + 1) * 1000);
}
// The value undefined is at index: 4
// The value undefined is at index: 4
// The value undefined is at index: 4
// The value undefined is at index: 4

// This happens because each function executed within the loop will be executed after the whole loop has completed,
// referencing to the last value stored in i, which was 4.

// #1 solution - using IIFE, which creates a unique scope for each iteration and storing each value within its scope.
const arr1 = [10, 12, 15, 21];
for (var i = 0; i < arr1.length; i++) {
    (function(j) {
        setTimeout(function() {
            console.log(`The value ${arr1[j]} is at index: ${j}`);
        }, j * 1000);
    })(i)
}

// #2 solution - using 'let' that also creates a unique scope
const arr2 = [10, 12, 15, 21];
for (let i = 0; i < arr2.length; i++) {
    setTimeout(function() {
        console.log(`The value ${arr2[i]} is at index: ${i}`);
    }, (i) * 1000);
}