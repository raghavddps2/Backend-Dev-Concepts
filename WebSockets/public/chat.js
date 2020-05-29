//This will establish the connection between the server.
//We have access to the io variable as we loaded the library
//This is running oon the frontend
var socket = io.connect('http://localhost:3000');

//Query dom.

var message = document.getElementById('message')
var handle = document.getElementById('handle');
var btn = document.getElementById('send')
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');

//Emit events
btn.addEventListener('click',function(){
    //emit takes two parameters, what are we sending to the server, with chat as a ref for the server.
    socket.emit('chat',{
        message: message.value,
        handle: handle.value
    });
});

message.addEventListener('keypress',function(){
    socket.emit('typing',handle.value);
});


//Now, we need to handle this at the server.
//Listen for events, if received with this chat ref from server.
//We append iit to the output window.
socket.on('chat',(data)=>{
    feedback.innerHTML = "";
    output.innerHTML += '<p><strong>'+ data.handle+':<strong>'+ data.message + '</p>';
});

//listening for the typing message
socket.on('typing',function(data){
    feedback.innerHTML = '<p><em>'+data+' is typing a message.. </em></p>'
});

