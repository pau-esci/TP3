"use strict"

function sendText(){
    var text = document.getElementById("textedit").value;
    if(len(text)=!0){
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "chat.php?phrase=" + encodeURIComponent(text), true);
        xhr.send();
        text="";
    }
}


function loadChat() {
    var ta = document.getElementById("ta");
    var lastLine = "";


    // Reload chat every second
    setInterval(function() {
        getChat(function(chat) {
            // Reverse the chat array to show last message at the top
            chat.reverse();
            var html = "";
            for (var i = 0; i < chat.length && i < 10; i++) {
                html += "<p>" + chat[i] + "</p>";
            }
            ta.innerHTML = html;

            // Scroll to the top if there's a new message
            if (chat[0] !== lastLine) {
                ta.scrollTop = 0;
                lastLine = chat[0];
            }
        });
    }, 1000);
};


// Function to get the chatlog.txt content
function getChat(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "chatlog.txt", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var chat = xhr.responseText.split("\n");
            // Remove empty lines
            chat = chat.filter(function(line) {
                return line.trim() !== "";
            });
            callback(chat);
        }
    };
    xhr.send();
}
