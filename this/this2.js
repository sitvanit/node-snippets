// The value of this is usually determined by a functions execution context. Execution context simply means how a function is called.
// It’s important to know that this may be different (refer to something different) each time the function is called.
// in the global scope: the keyword this returns to global (window) object.
// When the keyword this is used inside of a declared object, the value of this is set to the closest parent object the method is called on.

/* 1 */
const person = {
    first: 'John',
    last: 'Smith',
    full: function() {
        console.log(this.first + ' ' + this.last);
    },
    this: function() {
        console.log(this);
    },
    thisArrowFunction: () => {
        console.log(this);
    }
};

const anotherPerson = {
    first: 'Sitvanit',
    last: 'Meltzer'
};

// person.full();
// person.this();
// person.thisArrowFunction();
// person.full.call(anotherPerson); // call() accepts an argument list
// person.full.apply(anotherPerson); // apply() accepts a single array of arguments
person.full.bind(anotherPerson)(); // bind returns a function with the bound this.

/* 2 */
// When the new keyword is used(a constructor), this is bound to the new object being created.
// this is bound to the global object until we add in the keyword new.
// When we use new the value of this is set to an empty object.
// function Car(make, model) {
//     this.make = make;
//     this.model = model;
// }
//
// const myCar = new Car('Ford', 'Escape');
// console.log(myCar); // logs => Car {make: "Ford", model: "Escape"}
