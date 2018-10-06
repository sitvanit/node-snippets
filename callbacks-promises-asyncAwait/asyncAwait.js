// Running things in parallel with async functions is possible by using Promise.all.

// With promises we write asynchronous code that emulates synchronous code but with async/await we write asynchronous
// code that looks like synchronous code.

const delay = (duration) =>
    new Promise(resolve => setTimeout(resolve, duration))

async function asyncWithAwait(prefix) {
    console.log(prefix + ' before await');
    await delay(1000);
    console.log(prefix + ' after await');
}

function asyncWithPromise(prefix) {
    console.log(prefix + ' before promise');
    return delay(1000)
        .then(_ => console.log(prefix + ' after promise'));
}

async function run1() {
    const prefix = '(1)';
    console.log(prefix + ' with await');
    asyncWithAwait(prefix);
    console.log(prefix + ' with promise');
    asyncWithPromise(prefix);
    console.log(prefix + ' after all');
}

run1();

async function run2() {
    let prefix = '(2)';
    console.log(prefix + ' with await');
    await asyncWithAwait(prefix);
    console.log(prefix + ' with promise');
    asyncWithPromise(prefix).then(_ => console.log(prefix + ' after all'));
}

run2();

// If the caller does not make use of await(respectively then with promises) then your code will not run synchronously.
// That’s the reason why async/await does not work as expected with constructs like forEach.


// Async/Await with Destructuring
async function x() {
    const [user, account] = await Promise.all([
        fetch('/user'),
        fetch('/account')
    ])
}