// // Question 1
// function countVowels(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
// //   console.log(count);
// return count;
// }

// // Question 2
// const countVowels=(str)=>{
//     let count=0;
//     for(const char of str){
//         if(
//       char === "a" ||
//       char === "e" ||
//       char === "i" || 
//       char === "o" ||
//       char === "u"
//     ){
//         count++;
//     }
//     }
//     return count;
// }

// // Ques 3
// let nums=[1,2,3,4,];
// nums.forEach((val,idx)=>{
//     console.log(val*val,idx);
// }); 
// // OR
//  let calSquare=(val)=>{   //stores value into different function
//     console.log(val*val);
//  }
//  nums.forEach(calSquare); 

// // Ques 4
// let marks=[97,94,13,46,70,50,100];
// let toppers=marks.filter((val)=>{
//      return val > 90;
// });
// console.log(toppers);

// Ques 5
let n=prompt("Enter a number:");
let arr=[];
for(let  i=1;i<=n;i++){
    arr[i=1]=i;
}
console.log(arr);
let sum=arr.reduce((prev,curr)=>{ // to calculate sum of all  element in the array
    return prev+curr;
})
console.log(sum);

let product=arr.reduce((prev,curr)=>{ // to calculate product of all  element in the array= basically factorial
    return prev*curr;
})
console.log(product);