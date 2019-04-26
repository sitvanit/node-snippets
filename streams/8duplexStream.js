/** Duplex Stream - echo server **/

const net = require('net');

// socket is a duplex stream
net.createServer(socket => {
    socket.pipe(socket)
}).listen(8001);

// nc localhost 8001
