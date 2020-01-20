// In node 12 we can create a stream from a generator
const { Readable, pipeline } = require('stream');
const { createWriteStream } = require('fs');

function* generate() {
    yield 'hello';
    yield ' ';
    yield 'world';
}

const stream = Readable.from(generate());

pipeline(stream, createWriteStream('./dest'), err => {
    if (err) console.log(err);
});
