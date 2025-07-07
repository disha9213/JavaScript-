// // FUNCTIONS
// // Function defination -> function function name(){}
// function myFunction(){   //(1)
//     console.log("Hello Dp");
//     console.log("Hello Vineet");
// }
// // Function Call OR INVOKE FUNCTION -> function name();
// myFunction();

// function impFunction(msg){  //(2) Using parameters
//  console.log(msg);
// }
// impFunction("I love JS");   //ARGUMENT

// function impFunction(msg,n){  //(3) ->function function name(para1, para2...){ do some work}
//     console.log(msg+n);
//    }
//    impFunction("I love JS",100);

// //    Function to calculate the sum of two numbers
// function sumNum(a,b){   //(4)
//  console.log(a+b);
// }
// sumNum(2,4);

// function sum(x,y){    //(5) x,y will act as local variable ->scope (kaha tak jinda hai)
//     s=x+y;
//     console.log("before return");
//     return s;
//     console.log("After return"); //this line will never be executed bcz once the value is return then nothing will be printed
// }
// let val=sum(3,4);
// console.log(val);

// // ARROW FUNCTIONS
// // sum function
// function sum(a,b){   // (1) normal function
//     return a+b;
// }
// const arrowSum=(a,b) => {  //(1) arrow version
//     console.log(a+b);
// }
// arrowSum(2,4);

// // Multiplication function
// function mul(x,y){  //(2) normal function
//     return x*y;
// }
// const arrowMul=(x,y)=>{   //(2) arrow version
// console.log(x*y);
// }
// arrowMul(2,3);

// // Single line of code without any parameters
// const printHello=()=>{     //(3)
//     console.log("Hello world");
// }
// printHello();

// // forEACH LOOP FOR ARRAY
// let arr=[1,2,3,4,5];  //(1)
// arr.forEach(function printVal(val){
//     console.log(val);
// });

// // In arrow function
// arr.forEach((val) =>  {
//  console.log(val);
// });

// let city=["pune","delhi","hyderabad"]; //(2) printing the value,index and the array itself
// city.forEach((val,idx,city)=>{
//     console.log(val.toUpperCase(),idx,city);
// });

// // Some more methods for the array
// // 1) MAP
// let nums=[1,2,3,4];
// let newArr=nums.map((val)=>{
//     return val*2;
// });
// console.log(newArr);


// // 2) FILTER
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNum = arr.filter((val) => {  //(1)
//  return val % 2 === 0;
// });
// let oddNum = arr.filter((val) => {  //(2)
//   return val % 2 !== 0;
// });
// let greaterNum = arr.filter((val) => {  //(3)
//   return val > 3;
// });
// console.log(evenNum);
// console.log(oddNum);
// console.log(greaterNum);


// // 3) REDUCE
// let arr=[1,2,3,4];  //result=previous   (1)
// const output=arr.reduce((result,current)=>{
//    return  result+ current;  //1+2=3 +3=6  +4=10
// })
// console.log(output);

let largestNum=[23,12,45,10];      //(2)
const greatest=largestNum.reduce((prev,curr)=>{
    return prev<curr? prev:curr;
    // for smallest-> return prev>curr? prev:curr;
})
console.log(greatest);