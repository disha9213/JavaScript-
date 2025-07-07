var con = document.querySelector("#container");
var ilove = document.querySelector("i");


con.addEventListener("dblclick",function(){
  
ilove.style.transform="translate(-50%,-50%) scale(1)";
ilove.style.opacity="0.8";
setTimeout(function(){
    ilove.style.opacity=0;
},1000)
setTimeout(function(){
    ilove.style.transform="translate(-50%,-50%) scale(1)";
},2000)
})
 