let fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("red");
    break;
  case "orange":
    console.log("orange");
    break;
  case "banana":
    console.log("banana");
    break;
  default:
    console.log("I don't know");
}

let day = new Date().getDay();
switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
}

let age = 15;
switch (true) {
  case age < 17:
    console.log("You CANNOT drink beer");
    break;
  default:
    console.log("You can drink beer");
}
