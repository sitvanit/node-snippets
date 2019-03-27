const stream = require('stream');

/** Implementing Writable Stream **/
const writable = new stream.Writable();

writable._write = (chunk, encoding, callback) => {
    console.log('Writing to stream', chunk.toString());
    callback();
};


/** Consuming Writable Stream **/

/* With write function */
const written = writable.write('Hey there');
console.log(written);

/* With pipe */
const readableFeed = () => {
    const readableStream = new stream.Readable();

    const updates = [
        'My Apple Pie',
        'The best chorizo ever'
    ];

    readableStream._read = () => {
        if (updates.length) {
            return readableStream.push(updates.shift() + '\n')
        }

        readableStream.push(null);
    };

    return readableStream;
};

const feed = readableFeed();
feed.pipe(writable);
