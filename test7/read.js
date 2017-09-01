var jsonFile = require('jsonFile');
var filePath = './test_data/data.json';
jsonFile.readFile(filePath,function(err,obj){
    if(err){
        console.log(err);
    }else{
        console.log(obj.length);
        console.log(obj);
    }
});