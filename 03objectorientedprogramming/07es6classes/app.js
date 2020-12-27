// Previously before ES6 we used to create constructor functions like this
// which then be used with new keyword to create object
function Person1(name, dob) {
  this.name = name;
  this.dob = new Date(dob);
  this.calculateAge = function () {
    var diff_ms = Date.now() - this.dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  };
  console.log(this.calculateAge());
}

// However with ES6 we can create a class directly
// An awesome article on ES6 classes here, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }
  // Note that your methods goes directly into prototype object
  message() {
    return `Hello, I am ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    var diff_ms = Date.now() - this.dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
  setNewLastName(newLastName) {
    this.lastName = newLastName;
  }
}

const Alan = new Person("Alan", "Smith", "11-13-1990");
console.log(Alan.calculateAge());

Alan.setNewLastName("Doe");
console.log(Alan);
