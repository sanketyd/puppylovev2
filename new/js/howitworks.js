(function(){
  var socket=io('http://172.24.32.43');
  socket.emit('howitworks',{});
  socket.on('fraud',function(){
    document.getElementById('log').innerHTML="Login";
  });
})();
