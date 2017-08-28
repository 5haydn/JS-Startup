/*
* 模拟报数过程 - 调用对象方法
*
* 对象soldierA 表示士兵A， 以此类推。
* startSoundOff()函数是开始报数的处理函数
*/

//定义对象soldierA
var soldierA = {
    soundOff: function(){
        console.log('1到');
    }
}

//定义对象soldierB
var soldierB = {
    soundOff: function(){
        console.log('2到');
    }
}

//定义对象soldierC
var soldierC = {
    soundOff: function(){
        console.log('3到');
    }
}

//定义对象soldierD
var soldierD = {
    soundOff: function(){
        console.log('4到');
    }
}

//定义对象soldierE
var soldierE = {
    soundOff: function(){
        console.log('5到');
    }
}

//报数流程控制函数
function startSoundOff(){
    soldierA.soundOff();
    soldierB.soundOff();
    soldierC.soundOff();
    soldierD.soundOff();
    soldierE.soundOff();
    console.log(soldierA.soundOff);
}

// 执行命令，开始报数
startSoundOff();