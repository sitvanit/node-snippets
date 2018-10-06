const Promise = require('bluebird');

let keepHisWord = true;

/** promise that resolved right away **/
const promise1 = new Promise((resolve, reject) => {
    if (keepHisWord) {
        resolve("The man likes keep his word");
    } else {
        reject("The man doesn't want to keep his word");
    }
});
console.log(promise1); // Promise { 'The man likes keep his word' }

/** promise that takes some time to be resolved **/
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            message: "The man likes keep his word",
            code: "aManKeepsHisWord"
        });
    }, 1000);
});
console.log(promise2); // Promise { <pending> }

/** promise that will reject **/
keepHisWord = false;
const promise3 = new Promise((resolve, reject) => {
    if (keepHisWord) {
        resolve("The man likes keep his word");
    } else {
        reject("The man doesn't want to keep his word");
    }
});
console.log(promise3); // Promise { <rejected> 'The man doesn\'t want to keep his word' }


// promise status can have 3 different values: pending, resolved, rejected.
// When a promise is in resolved or rejected states, a promise is said to be settled.
// So a promise generally transitions from pending state to settled state.


/** promise prototype methods **/
// One or more of the following three methods will be run when a promise is settled based on whether they are fulfilled or rejected.
// Promise.prototype.catch(onRejected)
// Promise.prototype.then(onFulfilled, onRejected)
// Promise.prototype.finally(onFinally)


/** A Promise Story **/
// You are a school going kid and you ask your mom for a phone. She says “If our savings are greater than the cost of the phone then I will buy it for you.”

const momsPromise = new Promise((resolve, reject) => {
    momsSavings = 20000;
    priceOfPhone = 60000;

    if (momsSavings > priceOfPhone) {
        reolve({
            beand: "iphone",
            model: "6s"
        })
    } else {
        reject("We don't have enough savings. Let us save some more money.");
    }
});

momsPromise.then((value) => {
    console.log("Hurray I git this phone as a gift", JSON.stringify(value));
}).catch((reason) => {
    console.log("Mom couldn't buy me phone because", reason);
}).finally(() => { // finally doesn't work in native promises
    console.log("Irrespective of whether my mom buy me a phone or not, I still love her");
});


/** Promise Static Methods **/

// reject
const promise4 = Promise.reject("Not interested");
promise4.then(function(value){
    console.log("This will not run as it is a resolved promise. The resolved value is ", value);
}).catch(function(reason){
    console.log("This run as it is a rejected promise. The reason is ", reason);
});

// resolve
const promise5 = Promise.resolve(1);
promise5.then(function(value){
    console.log("This will run as it is a resovled promise. The resolved value is ", value);
    return value;
}).then(function(value){
    console.log("This will also run as multiple handlers can be added. Printing twice the resolved value which is ", value * 2);
}).catch(function(reason){
    console.log("This will not run as it is a resolved promise", reason);
});