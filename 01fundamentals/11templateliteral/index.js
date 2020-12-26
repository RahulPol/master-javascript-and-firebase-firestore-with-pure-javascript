let name = "Alan";
let age = 30;
let message;

function myPlace() {
  return "Mumbai";
}

// message =
//   "Hello, my name is " +
//   name +
//   ". I live at " +
//   myPlace() +
//   ". I love drinking " +
//   (age > 18 ? "beer" : "coke");

message = `Hello, my name is ${name}. I live at ${myPlace()}. I love drinking ${
  age > 18 ? "beer" : "coke"
}`;
console.log(message);
