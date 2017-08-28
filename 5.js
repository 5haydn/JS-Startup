function buyFoods(callback){
    console.log("买菜去");
        
    // 模拟2秒后通过callback返回结果
    setTimeout(function() {
        console.log('买好菜了');    
        var foodList = ['虾米','鱼','蔬菜'];
        callback(foodList);
    }, 2000);        
}

function prepare(){
    console.log('努力磨刀...努力洗碗...努力打扫...劳动最光荣');
    return true;
}

function cooking(foodList,callback){
    console.log('开始做菜');

    // 模拟做菜花的时间，2秒
    setTimeout(function() {
        console.log('做好了');    
        var dishes = ['水煮鱼','凉拌折耳根','花椒鸡'];
        callback(dishes);
    }, 2000);
}

function startWork(){

    if(!prepare()){
        console.log("not ready yet");
        return;
    }

    buyFoods(function (foodList) {
        cooking(foodList,function(dishes){
            // console.log('上菜');
            // for(var i =0; i < dishes.length; i++){
            //     console.log(dishes[i]);
            // }
        });
    });

    console.log('事情安排好了，我先去抽根烟');   
}

startWork();