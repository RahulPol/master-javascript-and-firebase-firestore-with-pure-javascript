let a = 10;
b = a; // value copy
console.log(a); // 10
b = 20; // changes made will not affect copied object
console.log(a); // 20

let item1 = { value: 10 };
console.log(item1.value); // 10
item2 = item1; // reference copy
item2.value = 20; // changes made will affect copied object
console.log(item1.value); // 20

let userName = "Rahul";
function messagePassByValue(name) {
  name = "Pranali";
  console.log("name inside function message: " + name); // Pranali
}

messagePassByValue(userName); // changes made will not affect userName as its a primitive value which is passed by value
console.log("name outside function: " + userName); // Rahul

let user = { name: "Rahul" };
function messagePassByReference(user) {
  user.name = "Pranali";
  console.log("name inside function message: " + user.name); // Pranali
}

messagePassByReference(user); // changes made will affect user as its a reference type which is passed by value
console.log("name outside function: " + user.name); // Pranali
