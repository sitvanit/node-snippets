/*** Timers ***/
// JavaScript is a single-threaded language, which makes use of asynchronous constructs to handle tasks concurrently.

/** Event Loop **/
// Whether it’s a browser environment or Node.js, JavaScript is asynchronous due to the fact that it’s using the event loop.
// In the Node environment, it’s implemented using a libuv library.

/* Phases in event loops */
// - timers
// - pending callbacks
// - idle, prepare
// - poll (i/o callbacks: connections, data, etc.)
// - check
// - close callbacks

// Event loops can be divided into a few phases as illustrated above. Each phase will be executed in each iteration.

// One such iteration is called a tick in the event loop. Every phase has a first in first out queue (FIFO) which will
// register different tasks.

/** Timers phase - setTimeout, setInterval **/
// Callbacks registered by setTimeout and setInterval will be executed in this phase. It’s important to notice that
// callbacks will not be executed immediately but rather after a certain threshold of the time expiring.

/** Check phase - setImmediate **/
// If the poll phase which handles I/O callbacks becomes idle or the maximum number of executions exceed it will move to
// check phase, where it’ll execute callbacks registered by setImmediate.

/** Microtask queue and macrotask queue **/
// These two queues are important to understand the order of tasks executed through different APIs. Macrotasks are
// executed in each of the phases shown in the diagram above.
// setImmediate is part of the macrotask queue. Microtasks will be executed until the queue is empty before moving on
// to the next iteration or the tick of the event loop.

// process.nextTick callbacks will be registered in the microtask queue and they will be executed until it is empty.
// Therefore, having recursive calls in the process.nextTick can starve the event loop, prevent it from going to the
// next tick. Macro tasks won’t starve the event loop as it will move on the next tick once the maximum number of
// executions is reached.
