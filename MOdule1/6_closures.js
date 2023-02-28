// // set Timeout funtion executed due to closures property(due to this leixcal scope will remebered) in JS.
// function todo(task){
//     console.log("Todo Started");
//     setTimeout(function fun(){
//         console.log("SetTimeout Started");
//         console.log("print task Value : ",task);
//         console.log("setTimeout Ended");
//     },2000)
//     task="Ram";
//     console.log("End of Todo");
// }

// console.log("Stating");
// todo("Assignment");
// console.log("Ending");

// TODO : Second Demo;

// function a(name){
//     return function b(){
//         console.log(name);
//     }
// }

// let x=a("Sanket");
// for (let i = 0; i < 1e9; i++) {
    
// }
// console.log(x);
// x();

var add = (function exec(){
    let counter= 0;
    return function process(){
        counter+=1;
        return counter;
    }
})();
console.log(add());
console.log(add());
console.log(add());
