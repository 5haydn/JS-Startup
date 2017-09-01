function soldierA(number,allCount) {
    console.log('1到');

    if(number < allCount){
       return soldierB(number + 1, allCount);
    }else{
        return 'finished';
    }
  }
  
  function soldierB(number,allCount) {
    console.log('2到');

    if(number < allCount){
        return soldierC(number + 1, allCount);
     }else{
         return 'finished';
     }
  }
  
  function soldierC(number,allCount) {
    if(number < allCount){
        return soldierD(number + 1, allCount);
     }else{
         return 'finished';
     }
  }
  
  function soldierD(number,allCount) {
    console.log('4到');
    if(number < allCount){
        return soldierE(number + 1, allCount);
     }else{
         return 'finished';
     }
  }
  
  function soldierE(number,allCount) {
    console.log('5到');
    if(number < allCount){
        return soldierE(number + 1, allCount);
     }else{
         return 'finished';
     }    
  }
  
  // 按顺序调用士兵函数韩式报数
  // 这是一种顺序调用函数的方式，由startSoundOff内部设计好调用的执行流程
  function startSoundOff() {
      var allCount = 5;
      var result = soldierA(1,allCount);
      if (result === 'finished'){
          console.log('OK');
      }else{
          console.log('是谁没报数，给我站出来');
      }
  }
  
  // 执行报数函数startSoundOff()
  
  startSoundOff();