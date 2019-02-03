// this is of course the source of much confusion in JavaScript. The reason being that this depends on how the function
// was invoked, not where the function was defined.
// JavaScript without this looks like a better functional programming language.

// Methods are functions that are stored in objects. In order for a function to know on which object to work, this is used.
// this represents the function’s context.
// this loses context in many situations. It loses context inside nested functions, it loses context in callbacks.

const fetch = require('node-fetch');

// class Timer {
//     constructor(callback, interval) {
//         this.callback = callback;
//         this.interval = interval;
//         this.timerId = 0;
//     }
//
//     executeAndStartTimer() {
//         this.callback().then(function startNewTimer() {
//             this.timerId = setTimeout(this.executeAndStartTimer, this.interval);
//         });
//     }
//
//     start() {
//         if (this.timerId === 0) {
//             this.executeAndStartTimer();
//         }
//     }
//
//     stop() {
//         if (this.timerId !== 0) {
//             clearTimeout(this.timerId);
//             this.timerId = 0;
//         }
//     }
// }
//
// const timer = new Timer(getTodos, 2000);
//
// timer.start();

function getTodos() {
    console.log('call');
    return fetch('https://jsonplaceholder.typicode.com/todos');
}

// TypeError: Cannot read property 'executeAndStartTimer' of undefined
// Because 'this' loses context when the method is used as an event handler.
// There are many solutions for these issues : the bind() method, the that/self pattern, the arrow function.
// this creates security problems. All members declared on this are public.

// JavaScript is both a functional programming language and a prototype-based language. If we get rid of this, we are
// left with JavaScript as a functional programming language. That is even better.
// At the same time, without this, JavaScript offers a new, unique way, of doing Object Oriented Programming without
// classes and inheritance.

// The questions is how to build objects without this.
// There will be two kind of objects:
// - pure data objects - Pure data objects contain only data and have no behavior. Any computed field will be fill-in at creation. Pure data objects should be immutable. We need to Object.freeze() them at creation .
// - behavior objects - Behavior objects will be collections of closures sharing the same private state.

// Let’s create the Timer object in a this-less approach.

function TimerThisLess(callback, interval) {
    let timerId;

    function executeAndStartTiner() {
        callback().then(function makeNewCall() {
            timerId = setTimeout(executeAndStartTiner, interval);
        })
    }

    function stop() {
        if (timerId) {
            clearTimeout(timerId);
            timerId = 0;
        }
    }

    function start() {
        if (!timerId) {
            executeAndStartTiner();
        }
    }

    return Object.freeze({
        start,
        stop
    })
}

const timer = TimerThisLess(getTodos, 2000);
timer.start();

// The timer object has two public methods: start and stop. Everything else is private. There are no this losing context
// problems as there is no this.The timer object has two public methods: start and stop. Everything else is private.
// There are no this losing context problems as there is no this.


// Removing arguments
// If we get rid of this, we should also get rid of arguments as they have the same dynamic binding behavior.

function addNumber(total, value) {
    return total + value;
}

function sum(...args) {
    return args.reduce(addNumber, 0);
}

sum(1, 2, 3); // 6
