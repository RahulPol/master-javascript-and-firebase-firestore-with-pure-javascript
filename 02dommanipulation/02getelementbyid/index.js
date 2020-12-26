let title;
title = document.getElementById("name-title");
title = document.getElementById("name-title").id;

//change the style
document.getElementById("name-title").style.background = "red";
document.getElementById("name-title").style.color = "blue";
document.getElementById("name-title").style.padding = "15px";
document.getElementById("name-title").textContent = "New title";
document.getElementById("name-title").innerText = "Another new title";

const nameTitle = document.getElementById("name-title");
nameTitle.style.background = "green";
console.log(title);
