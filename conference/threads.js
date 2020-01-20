const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
    // the constructor of the worker should get the path of the Worker's main script
    const worker = new Worker(__filename);
    // listen for messages from the worker
    worker.on('message', console.log);
} else {
    // This code is executed in the worker and not in the main thread
    parentPort.postMessage('Hello World!')
}



