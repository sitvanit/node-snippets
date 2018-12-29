/*** The Evolution of Async JS ***/

/** callbacks **/

function add (x, y) {
    return x + y;
}
function higherOrderFunction (x, callback) {
    return callback(x, 5);
}
higherOrderFunction(10, add);

[1, 2, 3].map(num => num + 5);

// callbacks allow you to delay execution of a function until a particular time

// callbacks may cause 'callback hell'
// $("#btn").on("click", () => {
//   $.getJSON({
//     url: `https://api.github.com/users/${id}`,
//     success: (user) => {
//       $.getJSON({
//         url: getLocationURL(user.location.split(',')),
//         success (weather) {
//           updateUI({
//             user,
//             weather: weather.query.results
//           })
//         },
//         error: showError,
//       })
//     },
//     error: showError
//   })
// })
// As humans, we naturally think sequentially. When you have nested callbacks inside of nested callbacks, it forces you
// out of your natural way of thinking. Bugs happen when there’s a disconnect between how your software is read and how
// you naturally think.

// The next issue of callbacks has to do with inversion of control. When you write a callback, you’re assuming that the
// program you’re giving the callback to is responsible and will call it when (and only when) it’s supposed to.
// Most of the time this isn’t an issue, but when it is, it’s a big one.


/** Promises **/
// Why do Promises exist? They exist to make the complexity of making asynchronous requests more manageable.
// a Promise can be in one of three states, pending, fulfilled or rejected. they represent the status of an asynchronous
// request.

// How do you create a Promise?
// const promise = new Promise(callback);

// How do you change the status of a promise?
// The Promise constructor function takes a single argument, a callback function, that's going to be passed 2 arguments,
// resolve and reject.
// resolve - a function that allows you to change the status of the promise to fulfilled.
// reject - a function that allows you to change the status of the promise to rejected.
const promiseResolved = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve() // Change status to 'fulfilled'
    }, 2000)
});

const promiseFailed = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject() // Change status to 'fulfilled'
    }, 2000)
});

console.log(promiseResolved); // Promise { <pending> }

setTimeout(() => {
    console.log(promiseResolved); // Promise { undefined }
}, 2000);

// How do you listen for when the status of a promise changed?
// When you create a new Promise, you’re really just creating a plain old JavaScript object. This object can invoke two
// methods, then, and catch.
// When the status of the promise changes to fulfilled, the function that was passed to .then will get invoked. When the
// status of a promise changes to rejected, the function that was passed to .catch will be invoked.
function onSuccess () {
    console.log('Success!');
}

function onError () {
    console.log('💩');
}

promiseResolved
    .then(onSuccess)
    .catch(onError);

promiseFailed
    .then(onSuccess)
    .catch(onError);

// callback vs promise

// function getUser(id, onSuccess, onFailure) {
//   $.getJSON({
//     url: `https://api.github.com/users/${id}`,
//     success: onSuccess,
//     error: onFailure
//   })
// }

// function getUser(id) {
//   return new Promise((resolve, reject) => {
//     $.getJSON({
//       url: `https://api.github.com/users/${id}`,
//       success: resolve,
//       error: reject
//     })
//   })
// }

// chaining promises
// Remember back in the callback section we talked about one of the downfalls of callbacks being that they force you
// out of your natural, sequential way of thinking.
// When you chain promises together, it doesn’t force you out of that natural way of thinking because chained promises
// are sequential.

// callbacks vs chaining promises

// getUser("tylermcginnis", (user) => {
//     getWeather(user, (weather) => {
//         updateUI({
//             user,
//             weather: weather.query.results
//         })
//     }, showError)
// }, showError)

// getUser("tylermcginnis")
//   .then(getWeather)
//   .then((data) => updateUI(data))
//   .catch(showError);

// Now it’s clear that promises drastically increase the readability of our asynchronous code


/** async await **/
// We’ve invented a reasonable way to have our asynchronous code look and behave as if it were synchronous.
// First, anytime you add async to a function, that function is going to implicitly return a promise.
// When you add async to a function it does two things. It makes it so the function itself returns (or wraps what gets
// returned in) a promise and makes it so you can use await inside of it.
