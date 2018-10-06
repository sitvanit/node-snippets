// When you use new, four things happen:
// It creates a new, empty object.
// It binds 'this' to our newly created object.
// It adds a property onto our newly created object called “__proto__” which points to the constructor function’s prototype object.
// It adds a return 'this' to the end of the function, so that the object that is created is returned from the function.

function Student(name, age) {
    this.name = name;
    this.age = age;
}

const first = new Student('John', 26);
console.log(first.name); // John
console.log(first.age); // 26

const firstNoNew = Student('John', 26);
// console.log(firstNoNew.name); // Cannot read property 'name' of undefined

// Every JavaScript object has a prototype. All objects in JavaScript inherit their methods and properties from their prototypes.

const second = new Student('Jeff', 50);

// .constructor: .prototype => Student constructor function has a property called .prototype.
// .prototype: .constructor => This prototype has an object on it called .constructor which points back to the constructor function.
// .__proto__ => Then, when we use the new operator to create a new object, each object has .__proto__ property which
// links the new object back to the Student.prototype.

// Prototype is a property of the constructor function that determines what will become the __proto__ property on the constructed object.
// So, __proto__ is the reference created, and that reference is known as the prototype chain bond.

// It’s important because of inheritance. The prototype object is shared among all objects created with that constructor
// function. This means we can add functions and properties to the prototype that all of our objects can use.

Student.prototype.sayInfo = function(){
    console.log(this.name + ' is ' + this.age + ' years old');
};

first.sayInfo();
second.sayInfo();

// it works because of inheritance.
// an object will first look to see if it has the property we are calling. If it doesn’t, it then moves upwards.

// Inheritance is the same reason you’ve been able to use functions like .toString().
// That’s because the method, as well as other built in JS methods are on the Object prototype. Every object we create
// ultimately delegates to the Object prototype. And sure, we could over write these methods

const name = {
    toString: function(){
        console.log('Not a good idea');
    }
};
name.toString(); // Not a good idea

