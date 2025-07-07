var cont= document.querySelector("#main");
var cursor = document.querySelector(".cursor");

cont.addEventListener("mousemove",function(dets){
    // console.log(dets.y); //it will provide the info how many times the curser is moved in y axis and similar for the x axis
    // console.log(dets.x);

    cursor.style.left = dets.x+"px";
    cursor.style.top = dets.y+"px";
})