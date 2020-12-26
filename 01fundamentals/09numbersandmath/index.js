let a = 6;
let b = 8;
let val;

// Simple mathematical functions
// Addition
val = a + b;
// Subtraction
val = a - b;
// Multiplication
val = a * b;
// Division
val = a / b;
// Modulus
val = a % b;

// Math constants
val = Math.PI;

// Math Common function
val = Math.round(8.6); // 9
val = Math.round(8.2); // 8
val = Math.ceil(8.2);
val = Math.floor(8.6);
val = Math.max(12, 4, 56);
val = Math.min(12, 4, 56);

// random function provides any number from 0(inclusive) to 1(exclusive)
val = Math.random();

// to find any random number between 1 and 5
val = parseInt(Math.random() * 5) + 1;

console.log(val);
