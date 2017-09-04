var fs = require('fs');

var i           =     1 + 1;
var callback    =     function (){};

var arrowF      =     () => {};


fs.writeFile('./hello','hello',(err) => {
    if(err){
        console.log(err);
    }else{
        console.log("success");
    }
})

fs.writeFile('./hello','hello',function(err) {
    if(err){
        console.log(err);
    }else{
        console.log("success");
    }
})