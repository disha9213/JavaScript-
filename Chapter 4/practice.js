// // ARRAY PRACTICE QUES
// // Ques 1 //To find average
// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let val of marks){
//     sum+=val;
//     console.log(val);
// }
// console.log(sum);
// let ave=sum/marks.length;
// console.log(ave);
// console.log(`The average marks is = ${ave}`);

// Ques 2
// Final price after applyin the offer
// let price=[250,645,300,900,50];
// let i=0;
// for(let value of price){
//     // console.log(`value at index ${i} = ${value}`);
//     let offer= value/10;
//     price[i]=price[i]-offer;
//     console.log(`value after offer = ${price[i]}`);
//     i++;
// }
// console.log(price);
//OR WITH FOR LOOP
// for(let i=0;i<price.length;i++){
//     let offer=price[i]/10;
//     price[i]-=offer;
// }
// console.log(price);

// // Ques3
// // array to store ->"Bloomberg","Microsoft","Uber","Google","IBM","Netflix"

// let company=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// // a part ->remove the first company from the array
// console.log(company.splice(0,1)); //OR
// console.log(company.shift()); 

// // // // b part ->remove uber and add ola in its place
// console.log(company.splice(2,1,"Ola"));
// // // // c part ->Add amazon at the end
// console.log(company.splice(6,1,"Amazon"));