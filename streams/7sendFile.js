const http = require('http');
const fs = require('fs');

// res writable stream
// req readable stream
const server = http.createServer((req, res) => {
    const readStream = fs.createReadStream('file', { highWaterMark: 1024 }); // 1 kb (the default is 64 kb)
    readStream.on('data', chunk => {
        res.write(`\n\n***************** new chunk has been received: *****************\n\n${chunk}`);
    });
});

const port = 3000;
server.listen(port, 'localhost');
console.log(`server is listening on port ${port}`);
