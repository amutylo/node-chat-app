const path = require('path');
const http = require('http');
const publicPath = path.join(__dirname, '../public');
const express = require('express');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000
var app = express();

var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', {
    from:'john@test.com',
    text: 'See you then',
    createdAt: '123123'
  })

  socket.on('createMessage', function(message){
    console.log('Server: create message received', message);
  })

  socket.on('disconnect', function(){
    console.log('User was disconnected');
  });
});



server.listen(port, function(){
  console.log(`Server is up on ${port}`)
}) 