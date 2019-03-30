/** callbacks **/

// While callbacks are commonly thought of as asynchronous, they’re also able to be executed synchronously

const executeSynchronously = (callback) => {
    callback();
};

executeSynchronously(() => console.log('hello world!'));
