// Falsy(false) values in JavaScript
// undefined
// null
// 0
// false
// ''
// NaN

// Bitwise Operators

// showNumber(20);

// function showNumber(limit) {
//     let number;
//     for (let n = 2; limit !== 0; --limit) {
//         if (limit % 2 === 0) {
//             number = limit;
//             console.log('EVEN', number);
//         }
//         if (limit % 2 !== 0) {
//             number = limit;
//             console.log('Odd', number);
//         }
//     }
// }

// const movie = {
//     title: 'a',
//     releasingYear: 2018,
//     rating: 4.5,
//     director: 'b'
// };

// showProperties(movie);

// function showProperties(obj) {
//     for (let key in obj)
//         if (typeof obj[key] === 'string')
//             console.log(key, obj[key])

// }


// console.log(sum(10));

// function sum(limit) {
//     let sum = 0;

//     for (i = 0; i <= limit; i++)
//         if (i % 3 === 0 || i % 5 === 0)
//             sum += i;

//     return sum;
// }

// const marks = [80, 89, 90, 45]
// calculationMarks(marks);

// function calculationMarks(marks) {
//     let sum = 0;
//     for (let mark of marks)
//         sum += marks;

//     console.log(sum);
// }

// let obj = { value: 10 };
// function increases(obj) {
//     obj.value++;
// }

// increases(obj);
// console.log(obj);

// // This is the difference between Value Type and Reference type

// let number = 10;
// function increment(number) {
//     number++;
// }

// increment(number);
// console.log(number);
// console.log("2"===2)
let a = 10
let b = "aa"
let c = "b"-b
console.log(a,b,c)
console.log(isNaN(a)) 
console.log(isNaN(b)) 
console.log(isNaN(c)) 

console.log(Number.isNaN(NaN))
console.log(Number.isNaN("abcn"))
let x = ""
console.log((typeof(x)=='number' && isNaN(x)) ? "Nan value" : "Not Nan value")
let z = "Heloo"

function  checkDirection(){
 var y=10
    function test(){
        console.log(y)
    }
 console.log(y)

}
checkDirection()
test()
console.log(y);

{
    let car= 23
    var o=12
}