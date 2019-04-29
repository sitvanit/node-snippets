const MyReadable = require('./1MyReadable');
const MyWritable = require('./3MyWritable');

const data = [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }, { e: 5 }];

const readable = new MyReadable(data, { objectMode:true, highWaterMark: 2 });
const writable = new MyWritable({ objectMode:true });

readable.pipe(writable);

// pipe mechanism:
// The writable subscribes to 'data' event leading the readable to start emitting data.
// The readable binds its resume() method to the 'drain' event.
// When on 'data' the readable receives false from write(chunk) method it pauses itself.
// As soon as there is a free space in the buffer, the writable emits 'drain' leading to resuming of the readable
