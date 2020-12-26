// literal
console.log("Hello");

// variable
var message = "This is a new message";
console.log(message);

// array
console.log([1, 2, 3]);

// object
console.log({
  name: "John",
  age: 18,
});

// object
console.table({
  name: "John",
  age: 18,
});

// error
console.error("Error!!");

// warning
console.warn("Warning!!");

// clear console
// console.clear();

console.log(Number.MAX_SAFE_INTEGER);

console.time("time");
for (i = 1; i < Number.MAX_SAFE_INTEGER; i * 2) {}
console.timeLog("time");

console.log("the message will print after loop completion");
