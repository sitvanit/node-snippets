/*** Diving Deeper in JavaScripts Objects ***/

/** Accessor Properties **/

const dataObj = {
    name: 'Arfat'
};

console.log(dataObj.name); // Arfat

const accessorObj = {
    get name() {
        return 'Arfat';
    }
};

// Reading accessor properties do not need to use parentheses to invoke the function. That is, accessorObj.name(); is wrong.
// If you update accessorObj.name = 'New Person’;, the update won’t happen.
console.log(accessorObj.name); // Arfat

accessorObj.name = 'Jack';

console.log(accessorObj.name); // Arfat

const accessorObjWithSetter = {
    _name: 'Arfat',

    get name() {
        return this._name;
    },

    set name(value) {
        this._name = value;
    }
};

console.log(accessorObjWithSetter.name); // Arfat

accessorObjWithSetter.name = 'Jack';

console.log(accessorObjWithSetter.name); // Jack


/** Object Property Descriptors **/

// Every key of an object contains a set of property attributes that define the characteristics of the value associated
// with the key. They can also be thought of as meta-data describing the key-value pair.
// The set of property attributes is called the property descriptor.
// In total, there are six property attributes. They are —

// [[Value]]
// [[Get]] It stores the reference to the function that we declare while making a getter property.
// [[Set]] It stores the reference to the function that we declare while making a setter property.
// [[Writable]] It tells whether we can overwrite the value or not. If false, attempts to change the property’s value will not succeed.
// [[Enumerable]] This attribute dictates whether the property is going to appear in for-in loops or not.
// [[Configurable]]
// When it is false —
// Attempts to delete the property will fail.
//     Also, converting a Data Property to be an Accessor Property or vice-versa will fail too. That is, inter-conversion between two property types will not be possible.
//     It will also prevent further changing the attributes values. That is, current values of enumerable, configurable, get or set will become fixed.
//     The effect of this property is also dependent on the property type. Apart from the above effects, it also does the following.
//
//     When the property is a Data Property, you can only set writable from true to false.
//     Before writable becomes false, you can also change its [[Value]] attribute. However, once writable is false, and configurable is false too, the property becomes unwritable, undeletable and unchangeable.
//     All six properties do not exist for each property type.
//
//     For Data Properties, only value, writable, enumerable and configurable exists.
//     For Accessor Properties, instead of value and writable, we have get and set.


// Double square brackets mark internal properties used by the ECMA specifications. These are properties that JS
// programmer cannot touch directly from within the code. To manipulate internal properties, we’d need to use methods
// provided to us by the language.

const object = {
    x: 5,
    y: 6
};

console.log(Object.getOwnPropertyDescriptor(object, 'x'));
// { value: 5, writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptors(object));
// { x:
//    { value: 5, writable: true, enumerable: true, configurable: true },
//   y:
//    { value: 6, writable: true, enumerable: true, configurable: true }
// }

const obj = {};

Object.defineProperty(obj, 'name', {
    value: 'Arfat',
    writable: false,
    enumerable: true,
    configurable: true
});


/** Protecting Objects **/

/* Object.preventExtensions */
// The Object.preventExtensions method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object). It takes an object and makes it non-extensible.
// Note that the properties can be deleted though.
// You can check whether an object is non-extensible or not by using Object.isExtensible.

/* Object.seal */
// The seal method seals an object. It means —
// It prevents new properties from being added just like Object.preventExtensions.
// It marks all existing properties as non-configurable.
// Values of present properties can still be changed as long as they are writable.
// In short, it prevents adding and/or removing properties.

/* Object.freeze */
// freeze is the maximum protection any object can have in JavaScript. It —
// seals the object using Object.seal
// It also prevents modifying any existing properties at all.
// It also prevents the descriptors from being changed as the object is already sealed.
// You can check whether an object is frozen or not using the Object.isFrozen function.

/* Summarize */

//                              CREATE      READ        UPDATE      DELETE
// Object.preventExtensions     X           V           V           V
// Object.seal                  X           V           V           X
// Object.freeze                X           V           X           X
