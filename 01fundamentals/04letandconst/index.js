var name1 = "Alan";
console.log(name1);
// name1 can be changed
name1 = "John";
console.log(name1);

const name2 = "Alan";
// name1 can not be changed
name2 = "John";

// let and const are new construct in javascript.
// The major difference between var and these construct is that let and const
// are block scoped and var is function scoped

function test() {
  // a is function scoped
  var a = 60;

  if (a > 20) {
    let b = 10;
    var c = 30;
    console.log(a); // 60
    console.log(b); // 10
  }

  console.log(a); // 60
  console.log(c); // 30
  console.log(b); // reference error
}

test();
