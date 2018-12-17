/** Challenge **/
// Write a script to continuously print the message “Hello World” with varying delays.

const greeting = delayInSec => setTimeout(() => {
    console.log(`Hello World ${delayInSec}`);
    greeting(delayInSec + 1)
}, delayInSec * 1000);

greeting(1);
