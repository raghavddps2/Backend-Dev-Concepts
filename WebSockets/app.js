const express = require('express')
const socket = require('socket.io')

app = express()

//static files
app.use(express.static('public'))


var server = app.listen(3000,(err)=>{
    if(err){
        console.log('Some error occured');
    }
    else{
        console.log("Server started at PORT 3000");
    }
});

//Socket setup(Getting io instance)
const io = socket(server);

//Once, the connection is made, the callback function is fired, 
//We have to setup the socket even at the frontend.
//EVerytime a computer connects, they get their own unique ID.
io.on('connection',function(socket){
    console.log("made socket connection",socket.id);
    //This is on receving a message(the ref sent from there)
    //io.sockets give me all the sockets tthat are connected.
    //And we emit it to all the connected devices.
    socket.on('chat',(data)=>{
        console.log(data);
        io.sockets.emit('chat',data);
    }); 

    //This will broadcast to every other except the original one.
    socket.on('typing',(data)=>{
        socket.broadcast.emit('typing',data);
    })
});


