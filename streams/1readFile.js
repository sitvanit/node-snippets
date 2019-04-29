const fs = require('fs');

const readStream = fs.createReadStream('file', { highWaterMark: 1024 });
const writeStream = fs.createWriteStream('file-copy');

// 'data' - the stream is abandoned ownership of a chunk of data to a consumer.
readStream.on('data', chunk => {
    writeStream.write(`\n\n*********** new chunk has been received: ***********\n\n${chunk}`);
});
