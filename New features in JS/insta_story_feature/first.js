var arr= [
    {dp:"https://images.unsplash.com/photo-1742426426875-4c16b5f4e95e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1742538703467-00cd49d8a8d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"},
    {dp:"https://plus.unsplash.com/premium_photo-1669842613506-17be9014659c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",story:"https://images.unsplash.com/photo-1742391661940-eb4463e7c032?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"},
    {dp:"https://plus.unsplash.com/premium_photo-1673028716408-51942fd0b117?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1742505709683-e9aa7b51a699?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://plus.unsplash.com/premium_photo-1719930219273-db33c6d5f320?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",story:"https://images.unsplash.com/photo-1742321162269-b68f2d95367a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"}
]

var storie = document.querySelector("#stories") //Now don't require to write the doc.querySelector("#stories") again and again
var clutter = ""
arr.forEach(function(elem,idx){
    // console.log(elem,idx)
    clutter +=`<div class="story">
    <img id="${idx}" src="${elem.dp}"> </div>`
})
// console.log(clutter)
storie.innerHTML = clutter
storie.addEventListener("click",function(dets){
    document.querySelector("#full_screen").style.display="block";
    document.querySelector("#full_screen").style.backgroundImage=`url(${arr[dets.target.id].story})`;
//   arr[dets.target.id].story //This is known as Golden Value

setTimeout(() => {
    document.querySelector("#full_screen").style.display="none";
}, 2000);
});
