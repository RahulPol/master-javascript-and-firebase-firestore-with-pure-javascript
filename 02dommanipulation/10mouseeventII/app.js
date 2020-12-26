const form = document.querySelector(".form");
const submitButton = document.querySelector(".submit-btn");

const header = document.querySelector("h3");
// submitButton.addEventListener("click", run);
// submitButton.addEventListener("dblclick", run);
// submitButton.addEventListener("mousedown", run);
// submitButton.addEventListener("mouseup", run);
submitButton.addEventListener("mousemove", run);
function run(e) {
  e.preventDefault();
  console.log("event:type: " + e.type);
  header.textContent = `x: ${e.offsetX} y: ${e.offsetY}`;
}
