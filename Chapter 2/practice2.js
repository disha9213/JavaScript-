// // QUES 1
// let num=prompt("Enter a number:");
// console.log(num);  //not neccary to write
// if(num%5===0){
//     console.log(num,"is Multiple of 5")
// }else{
//     console.log(num,"is Not a multiple of 5")
// }

// Ques2
let marks= prompt("Enter the scores between 0-100:");
let grade;
if(marks>=90 && marks<=100){
 grade="A";
 }else if(marks>=70 && marks<=89){
    grade="B";
 }else if(marks>=60 && marks<=69){
    grade="C";
 }else if(marks>=50 && marks<=59){
    grade="D";
 }else if(marks>0&& marks<49){
    grade="F";
 }
 console.log(marks,"will fall in the grade ",grade);