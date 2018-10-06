// Promises (like callbacks) allow us to wait on certain code to finish execution prior to running the next bit of code.
// a Promise represents the eventual result of an asynchronous operation. Think of it as a placeholder. This placeholder
// is essentially an object on which we can attach callbacks.

// Our Promise can have one of three states:
//
// Pending — Asynchronous operation has not completed yet
// Fulfilled — Operation has completed and the Promise has a value
// Rejected — Operation has completed with an error or failed.

function delay(ms){
    return new Promise(function(resolve){
        return setTimeout(resolve, ms)
    });
}

function logHi(){
    console.log('hi');
}

delay(2000).then(logHi);



new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 2000);
}).then((result) => {
    console.log(result);
    return result + 2;
}).then((result) => {
    console.log(result);
    throw new Error('FAILED HERE');
    return result + 2;
}).then((result) => {
    console.log(result);
    return result + 2;
}).catch((e) => {
    console.log('error: ', e)
});