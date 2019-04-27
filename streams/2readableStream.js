const MyReadable = require('./1MyReadable');

const data = [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }, { e: 5 }];
const readable = new MyReadable(data, { objectMode: true, highWaterMark: 2 });

/** Consuming Readable Stream **/
readable.on('readable', () => {
    readable.read();
});

readable.on('data', chunk => {
    console.log(chunk);
});

readable.on('end', () => console.log('No more data!'));













/** events **/
// 'close'    - the stream and any of its underlying resources (a file descriptor, for example) have been closed.
// 'data'     - The 'data' event is emitted whenever the stream is abandoned ownership of a chunk of data to a consumer.
//              This may occur whenever the stream is switched in flowing mode by calling readable.pipe(), readable.resume(), readable.read().
// 'end'      - The 'end' event is emitted when there is no more data to be consumed from the stream.
//              The 'end' event will not be emitted unless the data is completely consumed. This can be accomplished by switching the
//              stream into flowing mode, or by calling stream.read() repeatedly until all data has been consumed (stream.push(null). or with stream.end().
// 'error'    - this may occur if the underlying stream is unable to generate data due to an underlying internal failure.
// 'pause'    - The 'pause' event is emitted when stream.pause() is called and readableFlowing is not false.
// 'readable' - The 'readable' event is emitted when there is data available to be read from the stream. stream.push().
// 'resume'   - The 'resume' event is emitted when stream.resume() is called and readableFlowing is not true.

