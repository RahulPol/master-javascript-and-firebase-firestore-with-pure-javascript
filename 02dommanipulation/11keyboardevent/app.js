const firstNameInput = document.querySelector("#first_name");
const heading = document.querySelector("h3");
// firstNameInput.addEventListener("keydown", run);
// firstNameInput.addEventListener("keyup", run);
// firstNameInput.addEventListener("keypress", run);

// firstNameInput.addEventListener("focus", run);
// firstNameInput.addEventListener("blur", run);
// firstNameInput.addEventListener("cut", run);
// firstNameInput.addEventListener("copy", run);
// firstNameInput.addEventListener("paste", run);
firstNameInput.addEventListener("input", run);

function run(e) {
  console.log("event type: " + e.type + e.keyCode);
  heading.innerText = e.target.value;
}
