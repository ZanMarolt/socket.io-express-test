// Setup the express app
const express = require('express');
const app = express();

// Setup socket.io
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(3033);

io.on('connection', (socket)=>{

  socket.emit('message', {hello: 'Hello from the server :)'});

  socket.on('message', (data)=>{

    console.log(data);

  })

});
