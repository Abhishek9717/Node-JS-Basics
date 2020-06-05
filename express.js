var fs = require('fs');
var http = require('http');
var express = require('express');

var app = express();  //server is created and will work even without http.createServer in next line

var server = http.createServer(app);    //server is created using express

app.get('/',function(req,res){
    res.send("<h1>Welcome to express.js</h1>");
})

app.get('/tasks',function(req,res){
    fs.readFile('text.json',function(err,data){
        if(!err){
            console.log(data.toString());
            var tasks = JSON.parse(data.toString()).tasks;
            res.send(tasks);
        }
    })
})

server.listen(3000,function(){
    console.log('Server is live');
});