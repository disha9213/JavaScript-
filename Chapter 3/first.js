// // LOOPS
// // for loop 
// for(let count=1;count<=5;count++){ //(1) to print 5 times
//     console.log("Dp is here");
// }
 
// //Calculate the sum of  first n numbers
// let num=prompt("Enter the number:");
// let sum=0;
// for(let i=0;i<=num;i++){
//     sum=sum+i;
// }
// console.log("The sum of numbers is",sum);


// // while loop
// let i=5;   //(1)
// while(i<=10){
//     console.log("Dp is here");
//     i++;
// }

// //this will not run atleast once
// let i=20;    //(2)
// while(i<=10){
//     console.log("Dp is here");
//     i++;
// }


// // do-while loop
// let i=20;    (1)
// do{
//     console.log("Dp is here");
//     i++;
// }while(i<=10);  //write semi colon  

// let i=1;   //(2)
// do{
//     console.log(i);
//     i++;
// }while(i<=10);


// // for-of loop
// let str="JavaScript";
// let size=0;
//  for(let i of str){  //iterator->character
//     console.log("i",i);
//     size++;
// }
// console.log("The size of the string is",size);


// // for in loop
// const student={
// fullNmae:"Disha",
// roolNo:171,
// class:"CSE-A",
// year:2+"nd",
// }
// for(let key in student){
//     console.log("key=",key,"value",student[key]);
// }


// // STRINGS
// let str="dp";
// let str2='apnacllg';
// console.log(str[0]);

// // TEMLATES LITERALS
// let specialStr=`This is a template literal ${1+2+3}`; //(1) //STRING INTERPOLATION ${1+2+3}
// console.log(specialStr);
// console.log(typeof specialStr);

// let obj={    //(2)
//     item:"pen",
//     price:10,
// };
// // console.log("The cost of",obj.item ,"is",obj. price,"rupees"); //(i)
// // to print both item name and price
// // to combine all string and value into a single string 
// let output = `the cost of ${obj.item} is ${obj.price} rupees`;   //(ii)
// console.log(output)

// console.log("DP is\nhere"); //(3) ESCAPE CHARACTERS
// console.log("DP is\there"); 

// STRING METHODS
// let str="    Apna    College   "; 
// console.log(str.toUpperCase()); //(1) UPPER CASE
// // OR
// str=str.toUpperCase();
// console.log(str);

// let str="    Apna    College   "; 
// str=str.toLowerCase();  //(2) LOWER CASE
// console.log(str);

// let str="    Apna    College   "; 
// str=str.trim();  //(3) trim white spaces
// console.log(str);

// let str="01234567"; //(4) SLICE(START,END) and end index is non inclusive
// let str2="hello";
// console.log(str.slice(1,3));
// console.log(str2.slice(1,3));

// let str1="apna" ; //(5)concatenation :joining of two strings
// let str2="College";
// console.log(str1.concat(str2));
// console.log("I am learning coding from "+str1+str2); //this is also concatenation 
// console.log("hello"+123) //this is also concatenation meaning joining of two strings

// let str="hellololo"; //(6) REPLACE  
// console.log(str.replace("lo","p")); //only at first time
// console.log(str.replaceAll("lo","p")); //replace for all

let str="ILoveJS";
console.log(str.charAt(2)) ; //o