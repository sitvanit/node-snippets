const { Writable } = require('stream');

/** Implementing Writable Stream **/
class MyWritable extends Writable {
    constructor(options) {
        super(options);
    }

    _write(chunk, encoding, callback) {
        const formattedChunk  = this._writableState.objectMode === true ? JSON.stringify(chunk) : chunk;
        console.log(`Writing to stream: ${formattedChunk}`);
        callback(); // 'drain'
    }
}

module.exports = MyWritable;
