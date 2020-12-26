let val;

// String to number
val = "8";
val = Number(val);

// Boolean to number
val = true;
val = Number(val); // in case of false it return 0

// null number number
val = null;
val = Number(val); // returns 0

// you can use parseInt or parseFloat for number conversion
val = parseInt("12.34"); // returns 12 instead of 12.34
val = parseFloat("12.34"); // returns 12.34

console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));
