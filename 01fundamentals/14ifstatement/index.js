let mark = "50";

// Abstract equality operator
if (mark == 50) {
  // this gets printed
  console.log("Mark is 50");
} else {
  console.log("Mark is NOT 50");
}

if (mark != 40) {
  // this gets printed
  console.log("Mark is NOT 50");
} else {
  console.log("Mark is 40");
}

// Strict equality operator
if (mark === 50) {
  console.log("Mark is 50");
} else {
  // this gets printed
  console.log("Mark is NOT 50");
}

if (mark !== 40) {
  console.log("Mark is NOT 50");
} else {
  // this gets printed
  console.log("Mark is 40");
}

let mark1;
// check undefined
if (typeof mark1 !== "undefined") {
  console.log(`mark1 is ${mark1}`);
} else {
  // this gets printed
  console.log("mark1 is undefined");
}
