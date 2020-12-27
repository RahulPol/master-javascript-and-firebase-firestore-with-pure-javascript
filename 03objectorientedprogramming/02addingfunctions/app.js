function Person(name, dob) {
  this.name = name;
  this.dob = new Date(dob);
  this.calculateAge = function () {
    var diff_ms = Date.now() - this.dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  };
  console.log(this.calculateAge());
}

const peter = new Person("Peter", "12-23-1987");
const alan = new Person("Alan", "5-3-2005");
