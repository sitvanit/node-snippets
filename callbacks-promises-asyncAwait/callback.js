// A callback is a function that is to be executed after another function has finished executing — hence the name ‘call back’.
// In JavaScript, functions are objects. Because of this, functions can take functions as arguments, and can be returned
// by other functions. Any function that is passed as an argument is called a callback function.

// For one very important reason — JavaScript is an event driven language. This means that instead of waiting for a
// response before moving on, JavaScript will keep executing while listening for other events.

/* 1 */
function first1(){
    console.log(1);
}
function second1(){
    console.log(2);
}
// first1();
// second1();
// 1
// 2

/* 2 */
function first2(){
    // Simulate a code delay
    setTimeout( function(){
        console.log(1);
    }, 500 );
}
function second2(){
    console.log(2);
}
// first2();
// second2();
// 2
// 1

//  Callbacks are a way to make sure certain code doesn’t execute until other code has already finished execution.

/* 3 */
function doHomework(subject, callback) {
    console.log(`Starting my ${subject} homework.`);
    callback();
}
doHomework('math', () => console.log('finished my homework'));

// The challenges with callbacks:
// it is easy to build callback hells or spaghetti code with them if not used properly
// error handling is easy to miss
// can't return values with the return statement, nor can use the throw keyword.


// It’s important to understand that callbacks do not indicate an asynchronous call in the code. A function can call
// the callback both synchronously and asynchronously.
function fileSize (fileName, cb) {
    if (typeof fileName !== 'string') {
        return cb(new TypeError('argument should be string')); // Sync
    }
    fs.stat(fileName, (err, stats) => {
        if (err) { return cb(err); } // Async
        cb(null, stats.size); // Async
    });
}
// Note that this is a bad practice that leads to unexpected errors. Design host functions to consume callback either
// always synchronously or always asynchronously.