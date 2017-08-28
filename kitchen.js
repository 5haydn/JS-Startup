function buyFoods(){
    console.log('采购原料和菜');
    var foodList = ['fish','egg','meat'];
    return foodList;
}

function prepare(){
    console.log('努力磨刀。。。努力洗碗。。。努力打扫。。。劳动最光荣');
    return true;
}

function cooking(foodList){
    console.log('今天要做这些菜' + foodList);
    console.log('做菜中...');
    console.log('大功告成，上菜');

    var feast = ['鸡蛋西红柿','红烧肉','红烧鱼'];
    return feast;
}

//流程控制函数
function startWork(){
    var success = prepare();

    if (success){
        var foodList = buyFoods();
        var feast = cooking(foodList);
        
        console.log('---酒席准备好了---');

        for(var i = 0; i < feast.length; i++){
            console.log(feast[i]);
        }
    }else{
        console.log('还没准备好');
    }
}

startWork();

console.log('la la la');