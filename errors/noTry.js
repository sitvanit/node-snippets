const { noTry, noTryAsync } = require('no-try');

const myThrowableMethod = () => {
    throw new Error('some error')
};

// with try catch
// try {
//     const myVar = myThrowableMethod();
// } catch (e) {
//     console.log(e);
// }

// with no try
const { result, error } = noTry(() => myThrowableMethod());
if (error) {
    console.log(error);
}
