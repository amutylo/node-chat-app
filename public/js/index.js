var socket = io();

socket.on('connect', function () {
    console.log('connected to a server');

})

socket.on('disconnect', function () {
  console.log('Disconnected fron server');
});

socket.on('newMessage', function(message){
  console.log('new message received', message);
})
