const fs = require('fs');

const readStream = fs.createReadStream('file');
const writeStream = fs.createWriteStream('file-copy');

// The 'data' event will be emitted whenever the readable.read() method is called and a chunk of data is available to be returned.
readStream.on('data', (chunk) => { // default size of chunk 64kb=65536chars
    writeStream.write(`\n\n****************************** new chunk received: *****************************\n\n${chunk}`);
});
