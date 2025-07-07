// // ARITHMATIC OPERATORS
// let a=3;
// let b=6;
// let c= a+b;
// console.log("a+b =",a+b);
// console.log(a+b);
// console.log("a=",a,"& b",b);
// console.log("a-b=",a-b);
// console.log("a*b=",a*b);
// console.log("a/b=",a/b);
// console.log("a%b=",a%b); //modulo
// console.log("a**b=",a**b); //exponent a^b =3^6

// UNARY OPERATOR
// console.log("a=",a++);
// console.log("a=",a);
// console.log("a=",a--);
// console.log("a=",a);
// console.log("a=",++a);
// console.log("a=",a);
// console.log("a=",--a);
// console.log("a=",a);

// // ASSIGNMENT OERATOR
// a+=4;                  //a=a+4
// console.log("a=",a);  //a=7

// // COMPARISON OPERATORS
// //  console.log("a==b",a==b);
// //  console.log("a!=b",a!=b);
//  let c=10;  //number
//  let d="10";  //string ->number
//  console.log("c==d",c==d);
//  console.log("c===d",c===d); //equal to and type
//  console.log("c!==d",c!==d); //not equal to and type

// //  LOGICAL OPERATORS
// // Logical AND
// let c=10;
//  let d=17;
//  let cond1=c>d; //false
//  let cond2=c<d; //true
// console.log(" cond1 && cond2 ", cond1 &&cond2 );  //OUTPUT FALSE

// // Logical OR
// let e=10;
//  let f=17;
//  let cond1=e>f; //false
//  let cond2=e<f; //true
// console.log(" cond1 || cond2 ", cond1 ||cond2 );     //OUTPUT TRUE
// console.log(" cond1 || cond2 ",e>f  ||e<f );     //OUTPUT TRUE

// // Logical NOT
// console.log("!(cond1)",!(cond1)); //true

// CONDITIONAL STATEMENTS
// if-statement
// let age=15;    (1)
// if(age>=18){
//     console.log("you can vote");
// }
// if(age<18){
//     console.log("you cannot vote");
// }

// let mode="dark";  (2)
// let color;
// if(mode==="dark"){
//     (color="black");
// }
// if(mode==="light"){
//     (color="white");
// }
// console.log(color);

// // if-else statement
//  let mode="light";  //(1)
// let color;
// if(mode==="dark"){
//     color="black";
// }
// else{
//     color="white";
// }
// console.log(color);

// let age=15;    //(2)
// if(age>=18){
//     console.log("you can vote");
// }
// else{
//     console.log("you cannot vote");
// }

// let number=12;   // (3)
// let cond;
// if(number%2===0){
//     cond="even";
// }else{
//     cond="odd";
// }
// console.log(number,cond);

// // else-if statement
// let age=19;    //(1)
// if(age<18){
//     console.log("junior");
// }else if (age>60){
//     console.log("senior");
// }else{
//     console.log("middle");
// }

// let mode = "moist"; //(2)
// if (mode === "dark") {
//   console.log("black");
// } else if (mode === "light") {
//   console.log("white");
// } else if (mode === "shadow") {
//   console.log("grey");
// } else {
//   console.log("pink");
// }


// TERNARY OPERATOR
let age=22;
let result=age>=18?"u can vote":"u can't vote";
console.log(result);
age>=18?console.log("u can vote"):("u can't vote");