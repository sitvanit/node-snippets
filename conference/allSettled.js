const promise1 = Promise.resolve(1);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 2));

Promise.all([promise1, promise2])
    .then(console.log);

Promise.allSettled([promise1, promise2])
    .then(console.log);

