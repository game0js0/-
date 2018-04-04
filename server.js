var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require("fs");

app.get('/', function(req, res){
	 res.sendFile(__dirname + '/index.html');
});

app.get('/message', function(req, res){
	 res.sendFile(__dirname + '/index2.html');
             });


     io.on('connection', function(socket){

   socket.on('chat message', function(msg){
     if (msg == '') {
       console.log('error no msg')
     } else {
        io.emit('chat message', msg);
     }
    });
   socket.on('chat name', function(name){
     if (name == '') {
      console.log('error no name')
     } else {
        io.emit('chat name', name);
     }
    });
       });

	io.on('connection', function (socket){
});


http.listen(5555, function(){
  console.log('Сервер заработал');
});
