// // For understanding the object concept
// const student={
// fullName:"Disha",
// marks:99,
// printMarks: function(){
//     console.log("marks=",this.marks); //students marks
// },
// };

// const employee= {
//     calcTax(){
//         console.log("Tax is 10%",salary);
//     },
//     calcTax2: function() {   //this format is also correct to write the function
//         console.log("Tax is 20%");

//     }
// };
// const karanArjun={
//     salary:50000,
// };
// karanArjun.__proto__= employee;

// // To understand the classes
// class ToyotaCar{
//     constructor(brand,mileage){   //intializing using constructor
//         console.log("Creating new object");
//         this.brand = brand; // calling the brand 
//         this.mileage = mileage; // mileage
//     }
//     start(){
//         console.log("Start");
//     }
//     stop(){
//         console.log("Stop");
//     }
//     setBrand(brand){
//         this.brand=brand;
//     }
// };
// let fortuner =new ToyotaCar("fortuner",100);  //fortuner becomes a new car on the above template
// // fortuner.setBrand("fortuner");
// console.log(fortuner);
// let lexus = new ToyotaCar("lexus",20);
// // lexus.setBrand("lexus");
// console.log(lexus);


// // INHERITANCE
// class parent{   //1
//  hello(){
//     console.log("Hello JavaScript")
//  }
// }
// class child extends parent{

// }
// let obj = new child();
 
// class person{              //2
//     constructor(name){
//         console.log("Enter parent constructor")
//         this.species="homo-sapiens"
//         this.name=name;
//     }
//     eat(){
//         console.log("Eat");
//     }
//     // sleep(){
//     //     console.log("Sleep");
//     // }
// }
// class engineer extends person {
//     constructor(name){
//         console.log("Enter child constructor");
//         super(name); //to invoke parent class constructor first
//     //     this.branch = branch;
//     //    console.log("Exit child constructor");
//     }
//     work(){
//         super.eat(); //first eat and then work =>el.work()
//         console.log("Work 24*7")
//     }
// }
// // let el = new engineer("Chemical Engineer");  //using constructor this property in inherited
// let el = new engineer("Disha prajapati");  
// console.log(el);

// ERROR HANDLING
let a=5;
let b=10;
console.log("a=",a);
console.log("b=",b);
try{
    console.log("a+b=",a+c);

}catch(err){
    console.log(err);
}
console.log("a+b=",a+b);
console.log("a+b=",a+b);
console.log("a+b=",a+b);
console.log("a+b=",a+b);