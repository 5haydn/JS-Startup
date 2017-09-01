var jsonFile = require('jsonfile');
var fs = require('fs');

var path = "./words_data/";

//同步读取全部文件名
var fileNames = fs.readdirSync(path);

//过滤文件名
var jsonFileNames = [];
for(var i = 0; i < fileNames.length;i++){
    if(fileNames[i].endsWith('.json')){
        jsonFileNames.push(fileNames[i]);
    }
}
console.log(jsonFileNames.length);

//读取全部json文件
var result = [];
for(var i = 0; i < jsonFileNames.length;i++){

        var obj = null;

        try {
            var obj = jsonFile.readFileSync(path + jsonFileNames[i]);
        } catch (error) {

        }

        if(obj){
            result.push(obj);
        }       
}

jsonFile.writeFile('./result.json',result,{spaces:2},function(err){
    if(err){
        console.log(err);        
    }else{
        console.log('success');
        console.log(result.length);
    }
});

