var express = require('express');
var app = express();

var io = require('socket.io')(3000);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/rooms', function(req, res){
  const response = [
    {
      "id": 1,
      "name": "信長交換部屋！",
      "isFull": false
    },
    {
      "id": 2,
      "name": "Commonください！",
      "isFull": false
    },
    {
      "id": 3,
      "name": "Rare交換部屋",
      "isFull": true
    }
  ]

  res.send(response);
})

app.listen(3001, function () {
  console.log('Example app listening on port 3000!');
});


//===========SocketIO===============

/**
 * connection
 */
io.sockets.on('connection', function (socket) {

  /**
   * disconnect
   */
  socket.on('disconnect', function () {
    socket.leave(socket.data.room);
  });

  /**
   * メンバーを追加　
   */
  socket.on('add:member', function(data) {
    socket.data = data;
    socket.join(data.room);
    io.sockets.to(socket.data.room).emit('insert:message', socket.data.message);
  });

  /**
   * メッセージを挿入
   */
  socket.on('insert:message', function (data) {
    console.log(data)
    console.log(socket.data)
    io.sockets.to(socket.data.room).emit('insert:message', data.message);
  });

});

