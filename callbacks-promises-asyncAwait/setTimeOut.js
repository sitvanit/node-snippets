// console.log('hi');
// setTimeout(function cb1() { //
//     console.log('cb1');
// }, 5000);
// console.log('bye');

// console.log('hi');
// 1. added to the call stack
// 2. executed
// 3. removed from call stack

// setTimeout
// 4. added to the call stack
// 5. executed - the timer started
// 6. removed from call stack

// console.log('bye');
// 7. added to the call stack
// 8. executed
// 9. removed from call stack

// after 5000 ms
// 10. the callback has been pushed to the callback queue
// 11. the event loop takes the callback from the callback queue and pushes it to the call stack
// 12. callback executed
// 13. removed from call stack

// It’s important to note that setTimeout(…) doesn’t automatically put your callback on the event loop queue. It sets up
// a timer. When the timer expires, the environment places your callback into the event loop, so that some future tick
// will pick it up and execute it.

// calling setTimeout with 0 as a second argument just defers the callback until the Call Stack is clear.

console.log('Hi');
setTimeout(function() {
    console.log('callback');
}, 0);
console.log('Bye');
