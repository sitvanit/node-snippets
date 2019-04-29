const { Writable } = require('stream');
// Writable streams are an abstraction for a destination to which data is written.

/** Implementing Writable Stream **/
class MyWritable extends Writable {
    constructor(options) {
        super(options);
    }

    _write(chunk, encoding, callback) {
        const formattedChunk  = this._writableState.objectMode === true ? JSON.stringify(chunk) : chunk;
        console.log(`Writing to stream: ${formattedChunk}`);
        callback(); // flushes the buffer and emits 'drain' event
    }
}

module.exports = MyWritable;
