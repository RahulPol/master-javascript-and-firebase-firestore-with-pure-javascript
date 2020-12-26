let items;
items = document.querySelector("#name-title");
items = document.querySelector(".collection-item");
items = document.querySelector("li");
items = document.querySelector("h4");
// this will change color of only first element and not all elements
document.querySelector(".collection-item").style.backgroundColor = "green";
document.querySelector(".collection-item:last-child").style.backgroundColor =
  "red";
document.querySelector(".collection-item:nth-child(3)").style.backgroundColor =
  "yellow";
console.log(items);
