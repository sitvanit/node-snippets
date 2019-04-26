const MyWritable = require('./3MyWritable');

const data = ['first element', 'second element', 'last element'];
const writable = new MyWritable({ highWaterMark: data[0].length });

/** Consuming Writable Stream **/
const written = writable.write(data[0]);
writable.write(data[1]);
writable.end(data[2]); // 'finish'

console.log(written);
























/** events **/
// 'close'  - The event indicates that no more events will be emitted, and no further computation will occur.
// 'drain'  - If a call to stream.write(chunk) returns false, the 'drain' event will be emitted when it is appropriate to resume writing data to the stream.
// 'error'  - The 'error' event is emitted if an error occurred while writing or piping data. The stream is not closed when the 'error' event is emitted.
// 'finish' - The 'finish' event is emitted after the stream.end() method has been called, and all data has been flushed to the underlying system.
// 'pipe'   - The 'pipe' event is emitted when the stream.pipe() method is called on a readable stream.
// 'unpipe  - The 'unpipe' event is emitted when the stream.unpipe() method is called on a Readable stream, removing this Writable from its set of destinations.

// The order of the events - finish, end, close
