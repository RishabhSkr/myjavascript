function fun(){
    console.log("fun called");
}

// function gun(){
//     console.log("gun called");
// }

function gun(fn){
    console.log("inside gun");
    fn();
    console.log("leaving gun");
    // console.trace();
}
gun(function (){
    console.log("new funtion passed");
    console.trace();
});

gun(fun);
/**
 * function expressions: defn
 * !two types of fxn : 1. Anonymous Fxn (hard to debug you dont see name,recursion is hard to db)2.Named Fxn
//  * Ex.1.1 var x = funtion(){} its scope inside the varible x
 * Ex.1.2.gun(funtion(){
 * })
 *  console.trace():It is used to trace stack call.
 * arguments.callee()
 * funtions expression Scope : Are inside the scope of global varibles
 */