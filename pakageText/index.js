// 引入jsonfile 模块
var jsonFile = require('jsonfile');

var file = './test_data/data.json'

var testJSONData = [{
    name:'xugaoyang',
    avatar: 'https://ws1.sinaimg.cn/large/006tKfTcgy1fi7s7vo8y0j30hs0hsaay.jpg',
    words: '我想带领大家感受编程语言JavaScript的魅力，与同学们一起成长我感到非常的荣幸'
 },{
     name: "蓉儿",
     words: "成为屌屌的全栈设计师",
     avatar: "https://avatars0.githubusercontent.com/u/384727?v=4&s=460"
 }];


 jsonFile.writeFile(file,testJSONData,{spaces:2},function(err){
    if (err){
        console.log(err);
    }else{
        console.log('write ok.');
    }
 });