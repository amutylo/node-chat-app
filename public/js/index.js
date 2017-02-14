var socket = io();

socket.on('connect', function () {
    console.log('connected to a server');

    socket.emit('createMessage', {
      from: 'mike@test.com',
      text: "Yup! this is text from client"
    })
})



socket.on('disconnect', function () {
  console.log('Disconnected fron server');
});

socket.on('newMessage', function(message){
  console.log('new message received', message);
})
