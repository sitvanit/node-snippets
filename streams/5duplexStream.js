/** Duplex Stream **/

const net = require('net');

// tcp socket is instance of duplex stream
net.createServer(socket => {
    // readable
    socket.on('readable', function () {
        process.stdout.write(this.read())
    });
}).listen(8080);

const client = new net.Socket();
client.connect(8080, '127.0.0.1', function() {
    process.stdout.write('Connected\n');
    // writable
    client.write('Hello, server! Love, Client.');
});
