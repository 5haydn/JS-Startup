// 你的想法中，关键是下一个人怎么获知听到。对不对？
// 然后，还得是最后一位报告教官说，报数完毕。
/*
 * 尤其是军训之类，还可能打乱排位，
 * 但第一名和最后一名只要暂时定下来，就能清楚报数，
 * 获知队伍长度。而不是每个人记住自己的编号。
*/

/*
 * 排在第一名的那个人听到开始，才开始报数。
 * 他旁边那人听到，接着报数+1，
 * => 那你认为下一个人听到，应该怎么用代码表现出听到？
*/

var soldier = {
    baoshu:function(){},
    check:function
}

function soldier(){
    console.log('我听到了');
}

//集合
function jihe(){
    var soliderList = ['soldierA','soldierB','soldierC','soldierD','soldierE'];
    return soliderList;
}

// 报数
function startBaoshu(soldierList){
    for(var i = 0;  i < soldierList.length; i++){
        console.log(i);
    }
    console.log('报告教官，报数完毕');
}

function controller(){
    var soldierList = jihe();
    startBaoshu(soldierList);
}

controller();


