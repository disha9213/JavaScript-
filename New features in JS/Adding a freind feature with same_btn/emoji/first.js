function toggleFriend() {
    let status = document.getElementById("friend-status");
    let button = document.getElementById("friend-button");
    let emojiOverlay = document.getElementById("emoji-overlay");

    if (status.innerText === "Strangers") {
        status.innerText = "Now Friends";
        status.classList.replace("strangers", "friends");
        button.innerText = "Remove Friend";

        // Show emoji background effect
        showEmojiBackground(emojiOverlay, [ "💖"]);
    } else {
        status.innerText = "Strangers";
        status.classList.replace("friends", "strangers");
        button.innerText = "Add Friend";
    }
}

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
