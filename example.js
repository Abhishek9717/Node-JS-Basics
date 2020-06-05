var http = require('http');
var events = require('events');
var emitter = new events.EventEmitter();

var server = http.createServer(function(req,res){
    emitter.emit('Server Request','test data');              //Event Trigger
    res.end('Server works');
});

emitter.on('Server Request',function(data){                     //Event Listener
    console.log('Server is emitting events',data);
})

server.listen(3000,'localhost',function(){
    console.log('Server has been started');
})

