var fs = require('fs')
fs.readFile('text.txt',function(err,data){
    if(err){
        console.log(err)
    }
    setTimeout(()=> {
        console.log(data.toString());
        console.log('Display after 2 seconds')},
        2000);
});
var d = _dirname;
console.log(d)
console.log(_filename)
console.log('End here')