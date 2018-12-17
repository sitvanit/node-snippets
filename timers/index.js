/*** Timers ***/
// Timer functions are implemented by browsers and their implementations will be different among different browsers.
// Timers are also implemented natively by the Node.js runtime itself.
// NOT by V8 (or other VMs)!!
// In Node, timers are part of the global object, which behaves similarly to the browser’s Window interface.

/** A timer delay is not a guaranteed thing **/
setTimeout(
    () => console.log('Hello after 0.5 seconds. MAYBE!'),
    500,
);
// The 1e10 is 1 with 10 zeros in front of it, so the loop is a 10 Billion ticks loop (which basically simulates a busy
// CPU). Node can do nothing while this loop is ticking.
// for (let i = 0; i < 1e10; i++) {
//     // Block Things Synchronously
// }
// setTimeout delay is not a guaranteed thing, but rather a minimum thing.
// It will have to wait on the blocking loop to finish first.

/** Who exactly “calls” the delayed functions? **/
// When you use the JavaScript this keyword inside a regular function, The value inside the this keyword will represent
// the caller of the function.
// If you define the function above inside a Node REPL, the caller will be the global object. If you define the function
// inside a browser’s console, the caller will be the window object.

