var fs = require('fs');
var path = './result.txt';

console.log(typeof console);

fs.readdir('.',function(err,content){
    if(err){
        console.log(err);
        return;
    }
    if(content.length > 0){
        console.log(typeof content);
        fs.writeFile(path,content,function(err){
            if(err){
                console.log(err);
            }else{
                console.log('Finish Write File ' + path);
            }
        });
    }else{
        console.log('没找到任何文件');
    }
});

var result = readdirSync()