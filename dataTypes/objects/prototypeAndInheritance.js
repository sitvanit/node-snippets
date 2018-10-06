/** Prototype relationship **/
// Each object has a prototype object, from which it inherits all of its prototype’s properties.
// .__proto__ is a non-standard mechanism (available in ES6) for retrieving the prototype of an object (*).
// It points to the object’s “parent” — the object’s prototype.
// All normal objects also inherit a .constructor property that points to the constructor of the object.
// Whenever an object is created from a constructor function, the .__proto__ property links that object to the
// .prototype property of the constructor function used to create it.
// (*) Object.getPrototypeOf()is the standard ES5 function for retrieving the prototype of an object.


/** Prototype property **/
// Every function has a .prototype property.
// It references to an object used to attach properties that will be inherited by objects further down the prototype chain.
// This object contains, by default, a .constructor property that points to the original constructor function.
// Every object created with a constructor function inherits a constructor property that points back to that function.

function Dog(breed, name){
    this.breed = breed;
    this.name = name;
}
Dog.prototype.describe = function() {
    console.log(`${this.name} is a ${this.breed}`)
};
const rusty = new Dog('Beagle', 'Rusty');

/* .prototype property points to an object which has constructor and attached
   properties to be inherited by objects created by this constructor. */
console.log(Dog.prototype);  // { describe: ƒ , constructor: ƒ }

/* Object created from Dog constructor function */
console.log(rusty);   //  { breed: "Beagle", name: "Rusty" }

/* Object inherited properties from constructor function's prototype */
console.log(rusty.describe());   // "Rusty is a Beagle"

// /* .__proto__ property points to the .prototype property of the constructor function */
console.log(rusty.__proto__);    // { describe: ƒ , constructor: ƒ }

/* .constructor property points to the constructor of the object */
console.log(rusty.constructor); // ƒ Dog(breed, name) { ... }


// Prototype Chain
// The prototype chain is a series of links between objects that reference one another.
// When looking for a property in an object, JavaScript engine will first try to access that property on the object itself.
// If it is not found, the JavaScript engine will look for that property on the object it inherited its properties from
// — the object’s prototype.
// The engine will traverse up the chain looking for that property and return the first one it finds.
// The last object in the chain is the built-in Object.prototype, which has null as its prototype. Once the engine
// reaches this object, it returns undefined.