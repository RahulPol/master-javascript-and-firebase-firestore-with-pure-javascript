function userInfoVer1(name, age) {
  console.log(`Hello, my name is ${name}. I am ${age} years old`);
}

userInfoVer1("Alan", 18);
userInfoVer1();

function userInfoVer2(name, age) {
  if (typeof name === "undefined") {
    name = "John";
  }
  if (typeof age == undefined) {
    age = 18;
  }
  console.log(`Hello, my name is ${name}. I am ${age} years old`);
}

userInfoVer2("Alan", 18);
userInfoVer2();

function userInfoVer3(name = "Mary", age = 19) {
  console.log(`Hello, my name is ${name}. I am ${age} years old`);
}

userInfoVer3("Alan", 18);
userInfoVer3();
