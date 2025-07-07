var istatus = document.querySelector("h5");

var btn = document.querySelector("#add");

var check = 0;
// var removeFrd=document.querySelector("#remove"); //This has to be done from a single button


var emojiOverlay = document.querySelector("#emoji-overlay"); // Define the emoji overlay

btn.addEventListener("click",function(){
    if(check == 0){
        istatus.innerHTML=" Now Freinds"; 
        istatus.style.color="green";
        btn.innerHTML="Remove Friend";
        showEmojiBackground(emojiOverlay, [ "💖"]);
       
        check = 1;


    }else { 
        istatus.innerHTML="  Strangers";
        istatus.style.color="red";
        btn.innerHTML="Add Friend";
        // removeImage();
        check = 0;
    }
});

// removeFrd.addEventListener("click",function(){
//     istatus.innerHTML=" Strangers";
//     istatus.style.color="Red";
// });

function showEmojiBackground(container, emojis) {
    container.innerHTML = ""; // Clear previous emojis
    container.style.display = "block";

    // Generate 100 emojis randomly
    for (let i = 0; i < 100; i++) {
        let span = document.createElement("span");
        span.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        span.classList.add("emoji");

        // Randomize position
        span.style.left = Math.random() * 100 + "vw";
        span.style.top = Math.random() * 100 + "vh";

        container.appendChild(span);
    }

    // Remove emojis after animation
    setTimeout(() => {
        container.style.display = "none";
    }, 2000);
}