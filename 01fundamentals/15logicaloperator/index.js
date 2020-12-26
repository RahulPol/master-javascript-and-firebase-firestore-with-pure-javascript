// else if
let hour = 12;

if (hour < 12) {
  console.log("Good morning");
} else if (hour < 20) {
  console.log("How do you do?");
} else {
  console.log("Good evening");
}

// logical operator
let mark = 89;

// AND operator
if (mark > 80) {
  console.log("Excellent");
} else if (mark > 60 && mark < 80) {
  console.log("Good");
} else {
  console.log("Keep it up");
}

// OR operator
hour = 12;
let isWeekend = false;

if (hour < 10 || hour > 20 || isWeekend) {
  console.log("office is now closed");
} else {
  console.log("office is now open");
}

// ternary operator
let age = 17;

console.log(age > 18 ? "You can drink beer" : "You CANNOT drink beer");

// one line
if (age > 18) console.log("You can drink beer");
else console.log("YOu CANNOT drink beer");
