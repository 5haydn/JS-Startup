var jsonFile = require('jsonfile');
var filePathStr = './test_data/data.json';
var content = [
  {
    name:'周丽',
    arvatar:'http://upload-images.jianshu.io/upload_images/6581981-58c3a896aeabbb62.jpg',
    words:'lalala lalal lalala '
  },
  {
    name:'Elizabeth',
    arvatar:'',
    words:'2017年最重要的三件事之一就是学习编程，今年的目标是在年底时候成为高级新手，做出自己的网站。感谢新大开设的JavaScript，帮助我逐步打开编程世界的大门，让我有勇气在老师和同学们的陪伴下进入新的世界～ Hello,world!'
  }
];
jsonFile.writeFile(filePathStr,content,{spaces:2},function(err){
    if(err){
        console.log(err);
    }else{
        console.log("sucess");
    }
});

