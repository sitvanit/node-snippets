/** Challenge **/
//  print the following 2 messages after their corresponding delays.
const helloAfter = delay => console.log(`Hello after ${delay} seconds`);

let seconds = 4;
setTimeout(helloAfter, seconds * 1000, seconds);

seconds = 8;
setTimeout(helloAfter, seconds * 1000, seconds);
