// there is one flaw in following constructor function
// that is every time you create new Person, it will have same
// calculate age function, which will take additional memory space
// it can be avoided using prototype
// The prototype object is special type of enumerable object to which additional properties can be attached to it
// which will be shared across all the instances of it's constructor function.

// function Person(name, dob) {
//     this.name = name;
//     this.dob = new Date(dob);
//     this.calculateAge = function () {
//       var diff_ms = Date.now() - this.dob.getTime();
//       var age_dt = new Date(diff_ms);

//       return Math.abs(age_dt.getUTCFullYear() - 1970);
//     };
//     console.log(this.calculateAge());
//   }

// So, we can modify above Person as follow
function Person(name, dob) {
  this.name = name;
  this.dob = new Date(dob);
}

Person.prototype.calculateAge = function () {
  var diff_ms = Date.now() - this.dob.getTime();
  var age_dt = new Date(diff_ms);

  return Math.abs(age_dt.getUTCFullYear() - 1970);
};

const peter = new Person("Peter", "12-23-1987");
const alan = new Person("Alan", "5-3-2005");

console.log(peter.calculateAge());
console.log(alan.calculateAge());

// to check whether the property is part of object or prototype you can use hasOwnProperty()
console.log(peter.hasOwnProperty("name"));
console.log(peter.hasOwnProperty("calculateAge"));
