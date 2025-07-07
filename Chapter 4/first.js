// //  ARRAY
// let marks=[82,79,89,90,100]; //(1)
// console.log(marks);
// console.log(marks.length);
 
// let heroes=["thor","ironman","spiderman"]; //(2)
// console.log(heroes);
// console.log(typeof heroes);

// // ARRAY INDICES
// let marks=[34,24,56,78,90,100];
// console.log(marks[0]);
// console.log(marks[0]=66); //changing the value at a specific index 

// // LOOPS OVER AN ARRAY
// // FOR LOOP
// let marks=[34,24,56,78,90,100];
// for(let ind=0;ind<marks.length;ind++){
//     console.log(marks[ind]);
// } 
// // OR but above one is standard way
// for(let ind=1;ind<=marks.length;ind++){
//     console.log(marks[ind-1]);
// }

// // FOR OF LOOP
// let heroes=["thor","ironman","spiderman"];
// for(let hero of heroes){
//     console.log(hero);
// }

// let cities=["Delhi","Pune","Mumbai","Ahemdabad"];
// for(let city of cities){
//     console.log(city.toUpperCase());
// }

// ARRAY METHODS
// let foodItems=["potato","apple","chips","roti"]; 
// console.log(foodItems); //(1)(PUSH)
// foodItems.push("chocolate","brinjal","kurkure");
// console.log(foodItems);

// foodItems.pop();  //(2)(POP)
// let deletedItems=foodItems.pop();
// console.log(deletedItems);

// console.log(foodItems.toString()); //(3)(toString) to change array into the string

let junkFood=["pasta","pizza", "sandwich","frenchfries"]; //(4)(concatenate joining two array
// console.log(foodItems.concat(junkFood));

//  junkFood.unshift("hot dog");// (5) To add element at the first position
//  console.log(junkFood);
//  junkFood.shift(); //To delete first element
//  console.log(junkFood);

// console.log(junkFood.slice(0,2)); //(6) slice to print only that part (index of start, index of end(exclusive));

// console.log(junkFood.splice(1,2,"burger","chowmein")); //(7) splice (index to change,till which index to change,then what to write in place of them) then write array name in the console to see the changed array

// console.log(junkFood.splice(1,0,"banana")) // to add element 

// console.log(junkFood.splice(3,1)); //to delete

// console.log(junkFood.splice(3,1,"apple")); //to relace

console.log(junkFood.splice(3)); //it act as slice now
