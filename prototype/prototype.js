/** prototype **/

/* instance function */
const foo1 = function(name) {
    this.myName = name;

    this.tellMyName = function() {
        console.log(this.myName);
    }
};

console.log(foo1.prototype); // foo1 {}

/* static function */
const foo2 = function(name) {
    this.myName = name;
};

// static function
foo2.prototype.tellMyName = function() {
    console.log(this.myName);
};

console.log(foo2.prototype); // foo2 { tellMyName: [Function] }

// the static functions will be on the prototype.
// Each and every JavaScript function will have a prototype property which is of the object type. You can define your
// own properties under prototype. When you will use the function as a constructor function, all the instances of it
// will inherit properties from the prototype object.


/** __proto__ **/

// The __proto__ is simply a reference on the instance to the prototype object from which the instance has inherited.

const arr = [1, 2, 3];

console.log(arr.__proto__ === Array.prototype); // true

// Now we shouldn’t access the prototype object with __proto__. According to MDN using __proto__ is highly discouraged
// and may not be supported in all browsers. The correct way of doing this:

const arrayPrototype = Object.getPrototypeOf(arr);

console.log(arrayPrototype === arr.__proto__); // true
console.log(arrayPrototype === Array.prototype); // true


/** Prototype chaining & Inheritance **/

// Inside the __proto__ property there might be another __proto__ - that is known as prototype chaining.
// In javascript we achieve Inheritance with the help of prototype chaining.

// Vehicle1 constructor
function Vehicle1(type) {
    this.vehicleType = type;
}

// static function - all vehicles can blow horn
Vehicle1.prototype.blowHorn = function() {
    console.log('Honk! Honk! Honk!');
};

// Bus1 constructor
function Bus1(make) {
    Vehicle1.call(this, 'Bus');
    this.make = make;
}

// Make Bus1 constructor inherit properties from Vehicle1 Prototype Object
Bus1.prototype = Object.create(Vehicle1.prototype);

Bus1.prototype.numberOfWheels = 6;

Bus1.prototype.accelerator = function() {
    console.log('Accelerating Bus1');
};

const myBus1 = new Bus1('Mercedes');

console.log(myBus1); // Vehicle1 { vehicleType: 'Bus', make: 'Mercedes' }
console.log(Bus1.prototype); // { numberOfWheels: 6, accelerator: [Function] }


/** Classes **/

// JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical sugar over JavaScript’s existing
// prototype-based inheritance. The class syntax does not introduce a new object-oriented inheritance model to JavaScript.

class Vehicle2 {
    constructor(type) {
        this.vehicleType = type;
    }

    blowHorn() {
        console.log('Honk! Honk! Honk!');
    }
}

class Bus2 extends Vehicle2 {
    constructor(make) {
        super('Bus');
        this.make = make;
    }

    accelerator() {
        console.log('Accelerating Bus1');
    }
}

Bus2.prototype.numberOfWheels = 6;

const myBus2 = new Bus2('Mercedes');

console.log(myBus2); // Bus2 { vehicleType: 'Bus', make: 'Mercedes' }
console.log(Bus2.prototype); // Bus2 { numberOfWheels: 6 }

// Inside your class body if you want to execute parent class’s method you can do that using super.parentClassMethod()
