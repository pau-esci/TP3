'use strict';

function loadChat() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        const text = this.responseText.split("\n");
        let html = "";
        for (let i = 0; i < text.length; i++) {
            if(len(text[i])!=0){
                html += `<p style="color:${color}">${text[i]}</p>`;
            }
        }
        document.getElementById("ta").innerHTML = html;
      }
    };
    xhttp.open("GET", "chatlog.txt", true);
    xhttp.send();
    setTimeout(loadChat, 1000);
  }

  function sendChat(){
    var text = document.getElementById("textedit").value
    var params = 'phrase='+text;
    var newUrl = window.location.pathname + '?' + params;
    history.pushState(null, null, newUrl);
    text="" //delete the text
}
