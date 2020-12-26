document.getElementById("first_name").addEventListener("click", (e) => {
  // e.stopPropagation();
  console.log("first name");
});

document.querySelector(".inputform").addEventListener("click", () => {
  console.log("input form");
});

document.querySelector(".container").addEventListener("click", () => {
  console.log("container");
});

document.addEventListener("click", () => {
  console.log("document");
});
