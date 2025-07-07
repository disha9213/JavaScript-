let btn1=document.querySelector("#btn1");
btn1.onclick=() =>{
    console.log("btn1 was clicked");
    let a=25;
    a++;
    console.log(a);
}
let box=document.querySelector("newDiv")
newDiv.onmouseover=()=>{
    console.log("you are inside div");
}

let btn2=document.querySelector("#btn2");
// btn2.onclick = (evt) => {
//     console.log("btn2 was clicked");
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
// }

// event listener
btn2.addEventListener("click",(evt)=>{  //comment out the upper portion when try to run the below code
    console.log("button1 was clicked");
    console.log(evt);
    console.log(evt.type);
});

// to remove the event listener
btn2.addEventListener("click",(evt)=>{  
    console.log("button1 was clicked-handler1");
   
});
btn2.addEventListener("click",(evt)=>{  
    console.log("button1 was clicked-handler2");
   
});
const handler3=()=>{  //declare into a const if we wanted to delete it and now it would be given same address or else it would be considered as two different address
    console.log("button1 was clicked-handler3");
};
btn2.addEventListener("click",handler3);
btn2.removeEventListener("click",handler3); //to remove the event listener

btn2.addEventListener("click",(evt)=>{  
    console.log("button1 was clicked-handler4");
   
});