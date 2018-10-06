const Promise = require('bluebird');

function div(a,b, cb) {
    if (b === 0) {
        cb('cannot divide by zero');
    } else {
        cb(null, a/b);
    }
}

const cb = (err, ans) => {
    err ? console.log('Error: ', err) : console.log('The answer is : ', ans);
};

div(3, 4, cb);
div(3, 0, cb);


// Returns a function that will wrap the given nodeFunction. Instead of taking a callback, the returned function will
// return a promise whose fate is decided by the callback behavior of the given node function.
// execute function without giving it callback.
function promisify(func) {
    return (...args) => {
        return new Promise((resolve, reject) => {
            const cb = (err, ans) => err ? reject(err) : resolve(ans);

            func(...args, cb);
        });
    }
}

const pDiv = promisify(div);

// now i dont need to send the callback, it will work with promises.
pDiv(1,2).then((ans) => {
    console.log('The answer is : ', ans)
}).catch((err) => {
    console.log('Error: ', err)
});

console.log('bla');


