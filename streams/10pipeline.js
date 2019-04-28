const { pipeline } = require('stream');
const fs = require('fs');
const zlib = require('zlib');

pipeline(
    fs.createReadStream('file'),
    zlib.createGzip(),
    fs.createWriteStream('file.gz'),
    (err) => {
        if (err) {
            console.error('Pipeline failed.', err);
        } else {
            console.log('Pipeline succeeded.');
        }
    }
);
