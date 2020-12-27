// though below statement creates an object its not convenient
// or rather a blueprint to create new objects of a type
const smith = {
  name: "Smith",
  age: 20,
};

console.log(smith);

// lets create a function that will act as a factory/constructor for creation
// of type(person, in this case), in following case Person factory creates persons type object
// above code is similar to ES6 class with constructor function
function Person(name, age) {
  // this refers to its "caller or how it is called"
  this.name = name;
  this.age = age;
  console.log(this);
}

// in most outer scope this refers to global object
console.log(this);

const Alan = new Person("Alan", 20);
const Peter = new Person("Peter", 50);
