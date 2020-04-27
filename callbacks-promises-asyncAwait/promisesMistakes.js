/** Mistake #1: Using try/catch inside the Promise block **/
// It's redundant to use try/catch inside a Promise block
// If your code throws an error inside the Promise block, it'll automatically be handled by the catch scope.

// The try catch is redundant
new Promise((resolve, reject) => {
    try {
        const data = someFunction();
        // your logic
        resolve();
    } catch (e) {
        reject(e);
    }
})
    .then(data => console.log(data))
    .catch(error => console.log(error));

// It should be:
new Promise((resolve, reject) => {
    const data = someFunction();
    // your logic
    resolve();
})
    .then(data => console.log(data))
    .catch(error => console.log(error));

// It will always work, except in the case below.


/** Mistake #2: Using async function inside your Promise block **/
// There are some side effects of an async function inside a Promise block
// Now, you cannot handle this error even if there is a .catch() block or you await your promise inside a try/catch block.

// This code can't handle this error
new Promise(async () => {
    throw new Error('message');
})
    .catch(e => console.log(e.message));

// Whenever I see async functions inside a Promise block, I always try to separate the async logic outside the Promise block to make that block synchronous.

new Promise(async (resolve, reject) => {
    try {
        throw new Error('message');
    } catch (error) {
        reject(error);
    }
}).catch(e => console.log(e.message));


/** Mistake #3: Forgetting .catch() block **/


/** Mistake #4: Not using Promise.all() **/
// Promise.all() is your friend


/** Mistake #5: Using Promise.race() without complete understanding **/
// This is useful if you want to run your code immediately after any one of your Promises resolves. But that doesn't
// mean that it will exit the code immediately after that. It will wait until all the promises get resolved and only
// after that, it will release the thread.


/** Mistake #6: Overuse of Promises **/
// We generally see developers using a long chain of .then() just to make their code look elegant. You won't notice any
// difference until this chain is too long.
