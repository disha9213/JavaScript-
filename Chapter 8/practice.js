// let modeBtn=document.querySelector("#mode");
// let currMode="Light"; 
// modeBtn.addEventListener("click",()=>{
//     if(currMode==="light"){
//         currMode="dark";
//         document.querySelector("body").style.backgroundColor="black";
//     }else{
//         currMode="light";
//         document.querySelector("body").style.backgroundColor="white";

//     }
//     // console.log("You are trying to change mode");
//     console.log("My current mode is",currMode);
// })

// OR 
let modeBtn=document.querySelector("#mode");

let currMode="Light"; 
let body=document.querySelector("body");
modeBtn.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currMode="light";
       body.classList.add("light");
       body.classList.remove("dark");

    }
    // console.log("You are trying to change mode");
    console.log("My current mode is",currMode);
})