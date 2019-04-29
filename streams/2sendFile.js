const http = require('http');
const fs = require('fs');

// req readable stream
// res writable stream
const server = http.createServer((req, res) => {
    const readStream = fs.createReadStream('file', { highWaterMark: 1024 });
    readStream.on('data', chunk => {
        res.write(`\n\n***************** new chunk has been received: *****************\n\n${chunk}`);
    });
});

const port = 3000;
server.listen(port, 'localhost');
console.log(`server is listening on port ${port}`);
