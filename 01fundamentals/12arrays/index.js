const arr1 = [1, 50, 2];
const arr2 = new Array(80, 20);
const arr3 = [1, 50, 32, 89];
const users = ["Alan", "Peter", "Ben", `John`];
const anything = [
  12,
  null,
  true,
  undefined,
  { value: 30 },
  "Rahul",
  new Date(),
];

let val;
val = arr1.length;

//check whether is array
val = Array.isArray(arr1);

arr1[2] = "last value";

console.log(val);

// Array Manipulation
// add element at the end of an array
arr3.push(76);
console.log(arr3);
// add element at the beginning of an array
arr3.unshift(200);
console.log(arr3);
// remove element from end
arr3.pop();
console.log(arr3);
// remove element from start
arr3.shift();
console.log(arr3);
// remove element at position 1,2 and add "first name" and "last name" at 1
arr3.splice(1, 2, "fist name", "last name");
console.log(arr3);
// reverse
arr3.reverse();
console.log(arr3);
// concat
val = arr1.concat(arr3);
console.log(val);
// sort
const arr4 = [40, 6, 50, 30];
arr4.sort(); // incorrect output: [ 30, 40, 50, 6 ]
// By default, the sort method sorts elements alphabetically.
// To sort numerically just add a new method which handles numeric sorts(sortNumber, shown below) -
arr4.sort(function (a, b) {
  return a - b;
});
console.log(arr4); // correct output: [ 6, 30, 40, 50]

//reverse sort
arr4.sort(function (a, b) {
  return b - a;
});
console.log(arr4);

// find: finds first element which satisfies the condition
function gt10(num) {
  return num > 10;
}
val = arr4.find(gt10);
console.log(val);

// filter: finds all matches
val = arr4.filter(gt10);
console.log(val);
