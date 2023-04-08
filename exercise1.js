"use strict";

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("ta").value = this.responseText;
      }
    };
    xhttp.open("GET", "text.txt", true);
    xhttp.send();
  }

  function loadDoc2() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        const text = this.responseText.split("\n");
        const colors = ["red", "green", "blue", "orange", "purple", "yellow"];
        let html = "";
        for (let i = 0; i < text.length; i++) {
          const color = colors[i % colors.length];
          html += `<p style="color:${color}">${text[i]}</p>`;
        }
        document.getElementById("ta2").innerHTML = html;
      }
    };
    xhttp.open("GET", "text.txt", true);
    xhttp.send();
  }
  