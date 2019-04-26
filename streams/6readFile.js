const fs = require('fs');

const readStream = fs.createReadStream('file', { highWaterMark: 1024 }); // 1 kb (the default is 64 kb)
const writeStream = fs.createWriteStream('file-copy');

readStream.on('data', chunk => {
    writeStream.write(`\n\n*********** new chunk has been received: ***********\n\n${chunk}`);
});
