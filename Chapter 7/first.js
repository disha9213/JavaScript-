// // getAttribute
// let div=document.querySelector("div");
// console.log(div);
// let id=div.getAttribute("id"); // It will display the value of id
// console.log(id);

// let img=document.querySelector("img");
// console.log(img);
// let source=img.getAttribute("src");
// console.log(source);

// let paragraph=document.querySelector("p");
// console.log(paragraph.getAttribute("class"));

// // setAttribute
// let para=document.querySelector("p"); //changing the name of class
// console.log(para.setAttribute("class","new class"));

// // style attribute and comment out the upper portion
// let div=document.querySelector("div");
// div.style.backgroundColor="purple";
// div.style.fontSize="20px";
// div.innerText="HELLO!";
// div.style.color="white";
// //div.style.visibility="hidden"; // to hide the element

// // insert attribute
// let newBtn=document.createElement("button");
// newBtn.innerText="Button"
// console.log(newBtn);

// let divs=document.querySelector("#new"); //div of class new
// divs.append(newBtn); //adding button at last
// divs.prepend(newBtn); //adding button at starting
// divs.before(newBtn); //adding button  just before the node
// divs.after(newBtn); //adding button just after the node

let newHeading=document.createElement("h1");
newHeading.innerHTML="<i>Hii! I am new</i>";
document.querySelector("body").prepend(newHeading);

// delete attribute
let paragraph=document.querySelector(".newPara");
paragraph.remove();