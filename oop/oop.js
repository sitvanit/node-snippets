/*** Object Oriented Programming ***/

/** Inheritance **/
// in practice you rarely use inheritance. Instead, composition is often used.

class Square {}
class Rectangle extends Square {}

// criticism:
// Any internal function of the base class is now actually an API. It can no longer change. Any protected variables of
// the base controller will now be more or less part of the API.

// with composition

class Rectangle {
    Square () {
    }
}

/** Encapsulation **/
// the data and functionality are delivered together and the internal state of a class is hidden from the outside world.


/** Abstraction **/
// you should only create an interface, if you are actually going to take the time to document the behavior that is
// expected from an implementing class.


/** Polymorphism **/
// When talking about polymorphism, one should think about behavior instead of code.
