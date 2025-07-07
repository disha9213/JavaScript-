// This is for 1 element only
// var elem1 = document.querySelector("#elem1");
// var elemImg = document.querySelector("#elem1 img");

// elem1.addEventListener("mousemove",function(dets){
//     elemImg.style.left = dets.x + "px";
//     elemImg.style.top = dets.y + "px";
//     // setTimeout(() => {
//     //     elemImg.style.transform ="translate(-50%, -50%)"
//     //     elemImg.style.opacity=0.8
//     // }, 1000);
   
// })
// elem1.addEventListener("mouseenter",function(){
//     elemImg.style.opacity=1;
// })
// elem1.addEventListener("mouseleave",function(){
//     elemImg.style.opacity=0;
// })

var elem = document.querySelectorAll(".elem");
// var elemImg = document.querySelectorAll(" img")

elem.forEach(function(val){
    val.addEventListener("mouseenter",function(){
        val.childNodes[3].style.opacity=1; //3rd childnode was the image so therefore the opacity of the image has been changed
    });
    val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.opacity=0;
    });
    val.addEventListener("mousemove",function(dets){
        // val.childNodes[3].style.left= dets.x +"px";  //from sheryians
        // val.childNodes[3].style.top= dets.y +"px";

        // From chatgpt
        var rect = val.getBoundingClientRect();
        val.childNodes[3].style.left= dets.clientX - rect.left + "px";
        val.childNodes[3].style.top= dets.clientY - rect.top + "px";
    });
})