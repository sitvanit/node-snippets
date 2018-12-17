/** setInterval **/
const timerId = setInterval(() => console.log('Hello every 3 seconds'), 3000);

/** Cancelling Timers **/
setTimeout(clearInterval, 8000, timerId);
// we can use clearTimeout or clearImmediate as well
