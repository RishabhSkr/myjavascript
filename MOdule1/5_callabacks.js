function fun(x,fn){
    // statements logic
    for(let i=0;i<x;i++){
        console.log(i);
    }
    fn();
    // statements
}

fun(10,function logger(){
    console.log("Custom logger fxn");
});