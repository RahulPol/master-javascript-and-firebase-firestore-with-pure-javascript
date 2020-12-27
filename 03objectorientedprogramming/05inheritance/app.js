function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.message = function () {
  return `Hello, ${this.firstName} ${this.lastName}`;
};

const Alan = new Person("Alan", "Smith"); // Creates new object of type Person
console.log(Alan.message()); // Hello, Alan Smith

// Now lets try to create inheritance
function Customer(firstName, lastName, email) {
  Person.call(this, firstName, lastName);
  this.email = email;
}

const customer = new Customer("Peter", "William", "email@email.com");
// here if you check customer you will NOT find message function of Person class
// also you will
console.log(customer);

// so following statement result in error
// console.log(customer.message()); // error

// In order to inherit person prototype method use following
Customer.prototype = Object.create(Person.prototype);
const customer1 = new Customer("Pranali", "Pol", "email@email.com");
console.log(customer1.message()); // Hello, Peter William
