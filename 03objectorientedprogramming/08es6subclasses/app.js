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

// Previously to create inheritance in js we had to do a lot of stuff, please refer 05inheritance
// code, but with es6 its quite simple
class Customer extends Person {
  constructor(firstName, lastName, dob, email) {
    // this lets you construct your super class by calling its constructor
    super(firstName, lastName, dob);
    this.email = email;
  }
  // The static keyword defines a static method or property for a class. Neither static methods
  // nor static properties can be called on instances of the class.Instead, they're called on
  // the class itself. Static methods are often utility functions, such as functions to create
  // or clone objects, whereas static properties are useful for caches, fixed - configuration,
  // or any other data you don't need to be replicated across instances.
  static cloneCustomer(customer) {
    return new Customer(
      customer.firstName,
      customer.lastName,
      customer.dob,
      customer.email
    );
  }
}

const Alan = new Customer("Alan", "Smith", "11-13-1990", "email@email");
console.log(Alan.calculateAge());

const Peter = Customer.cloneCustomer(Alan);
console.log(Peter);
