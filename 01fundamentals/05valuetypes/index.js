// There are two main types of data types in javascript
// 1 Primitive
//Undefined
let item;
//String
item = "Hello"; // string
//Number
item = 1; // number
//      Boolean
item = true; // boolean
//      Null
item = null; // object. Even though null is primitive type type of gives object, cause its a long existing bug in javascript
//      Symbol (ES6)
item = Symbol(); // symbol

// 2 Reference
//      Array
item = [1, 2, 3]; // object
//      Object
item = {
  name: "Rahul", // object
};
//      Function
item = function () {}; //function
//      Dates
item = new Date(); // object
//      Anything

console.log("type ", typeof item);
