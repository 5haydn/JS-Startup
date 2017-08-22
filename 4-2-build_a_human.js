// declare a variable and define it
var name = 'xiaoming';
var age = 18;
var height = 170, weight = 130.1;
var isMan = true;
var student = false;
var xinshengUserName = 'xiaoming';
var wechat_user_name = 'xiaoming';
var locationBase = '北京';
var company = locationBase + '新生大学';
var myLikeColorList = ['blue','green','black','white'];
var myLikeFoods = ['刀削面','拉面','牛肉面','杂酱面','麻辣面'];

// 定义一个函数变量 buildPerson (表达式函数定义法)
var buildPerson = function(){
    var xiaoming = {
        name:name,
        config:{
            height,
            isMan,
            haveGrilFriend:true,
            bloodType:'A'
        },
        like:{myLikeColorList},
        work:{company}
    }
    return xiaoming;
}

//调用（执行）buildPerson函数，根据基本信息构建
var personObj = buildPerson();
console.log(personObj);