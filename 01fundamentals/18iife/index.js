// Function expression
const sum = function (x, y) {
  return x + y;
};

// calling function expression
console.log(sum(2, 3));

// Immediately invoked function expression
// syntax
//(your_function)(function_parameters_if_any)

// It is a design pattern which is also known as a Self-Executing Anonymous Function
// Iife allows to run anonymous function immediately and protect your scope variables form being modified

(function () {
  var num = 3;
  console.log(num);
})();

// functions inside object
const person = {
  hello: function () {
    console.log("Hello");
  },
  age: function (age) {
    console.log(`I am ${age} years old`);
  },
};

person.laugh = function () {
  console.log("Ha ha ");
};

person.hello();
person.age(18);
person.laugh();
