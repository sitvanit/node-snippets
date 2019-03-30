/** threads **/

/* How Node.js really works? */
// Node.js uses two kinds of threads: a main thread handled by event loop and several auxiliary threads in the worker pool.
// Event loop is the mechanism that takes callbacks (functions) and registers them to be executed at some point in the future.
// It operates in the same thread as the proper JavaScript code. When a JavaScript operation blocks the thread,
// the event loop is blocked as well.

// Worker pool is an execution model that spawns and handles separate threads, which then synchronously perform the task
// and return the result to the event loop. The event loop then executes the provided callback with said result.
// In short, it takes care of asynchronous I/O operations — primarily, interactions with the system’s disk and network.
// It is mainly used by modules such as fs (I/O-heavy).
//  Worker pool is implemented in libuv.

// The aforementioned fs module tells the worker pool to use one of its threads to read the contents of a file and
// notify the event loop when it is done. The event loop then takes the provided callback function and executes it with
// the content of the file.

// Above is an example of a non-blocking code; as such, we don’t have to wait synchronously for something to happen.
// We tell the worker pool to read the file and call the provided function with the result. Since worker pool has its
// own threads, the event loop can continue executing normally while the file is being read.

// It’s all good until there’s a need to synchronously execute some complex operation: any function that takes too long
// to run will block the thread. If an application has many such functions, it could significantly decrease the
// throughput of the server or freeze it altogether. In this case, there’s no way of delegating the work to the worker pool.
