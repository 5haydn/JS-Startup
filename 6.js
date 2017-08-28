/*
 * 扫面一个文件夹下面的所有文件
 * 
 * 异步方案
 * 
 */

 // 引入 fs 模块
var fs = require('fs');

 // 定义要扫描的文件夹
var dirPathString = '../getting-started-with-javascript/homework/lesson1';

 // 定义callback函数，用来处理扫描到的数据
function callback(err,files){
    if(err){
        console.log('读取目录失败');
    }

    if(files.length > 0){
        console.log(files);
    }else{
        console.log('没有找到任何文件');
    }
}

 // 调用fs的readdir读取所有文件
 fs.readdir(dirPathString,callback);