function soldier1(){
    console.log('soldier1 here');
    soldier2();
}

function soldier2(){
    console.log('soldier2 here');
    soldier3();
}

function soldier3(){
    console.log('soldier3 here');
    soldier4();
}

function soldier4(){
    console.log('soldier4 here');
    soldier5();
}

function soldier5(){
    console.log('soldier5 here');
}

function startSoundOff(){
    soldier1();

}

startSoundOff();