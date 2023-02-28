// function fun(url){
// //funtion to download data from url and return to the user after data
//     console.log("downloading started");
//     setTimeout(function process(){
//         console.log("Download Completed");
//         let response= "Dummy data";
//         return response;
//     },3000);
    
// }

// let data = fun("www.google.com");
// console.log(data);

//! Hence we return the data from timeout fxn.we get undefined  in data. Soln use callback funtion to recieve response.
// TODO: Task1: write a funtion to download data from url.
// TODO: Task2: write a funtion to save the downloading data from url into a file/variable.
//TODO: Task3: Write a funtion to upload the data recieved from previous url to new url.

function fun(url,fn){
    //funtion to download data from url and return to the user after data
        console.log("downloading started");
        setTimeout(function process(){
            console.log("Download Completed");
            let response= "Dummy data";
            fn(response);
            console.log("Ending Function");
        },3000);
        
    }

fun("www.google.com",function callbackRes(response){
    console.log("Response Data : ",response);
});