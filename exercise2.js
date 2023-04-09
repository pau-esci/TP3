"use strict"
function loadChat() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let chat = document.getElementById("ta");
            chat.innerHTML = "";
            let lines = this.responseText.split("\n");
            for (let i = 0; i < lines.length; i++) {
                if (lines[i]) {
                    let para = document.createElement("p");
                    para.innerText = lines[i];
                    chat.appendChild(para);
                }
            }
        }
    };
    xhr.open("GET", "chatlog.txt", true);
    xhr.send();
    setTimeout(loadChat, 1000);
}

function sendMessage() {
    let phrase = document.getElementById("textedit").value;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "chat.php?phrase=" + phrase, true);
    xhr.send();
    document.getElementById("textedit").value = "";
}

window.onload = function() {
    loadChat();
};
