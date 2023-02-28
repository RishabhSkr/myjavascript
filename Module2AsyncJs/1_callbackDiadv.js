 /**
  * 1.Callback Hell
  * 2.Inversion Of control
  */
//  Inversion of Control example
function fun(InputString,fn){
    let output = InputString.split(',');
    for (let index = 0; index < output.length; index++) {
        fn(output[index]);
        fn(output[index]);
        
    }
}

fun("name:John,subject:MCA",function process(ip){
    let arr= ip.split(":");
    console.log("{",arr[0],"=>",arr[1],"}");
});
