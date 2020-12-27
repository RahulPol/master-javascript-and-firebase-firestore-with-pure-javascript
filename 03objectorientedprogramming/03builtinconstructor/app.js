function areTwoTypesEqual(type1, type2) {
  if (type1 === type2) {
    console.log("equal");
  } else {
    console.log("different");
  }
}

const name1 = "Smith";
const name2 = new String("Smith");

console.log(name1, typeof name1); // Smith string
console.log(name2, typeof name2); // {String: 'Smith'} object
areTwoTypesEqual(name1, name2); // different

const num1 = 10;
const num2 = new Number(10);

console.log(num1, typeof num1); // 10 'number'
console.log(num2, typeof num2); // [Number: 10] 'object'
areTwoTypesEqual(num1, num2); // different

const bool1 = true;
const bool2 = new Boolean(true);

console.log(bool1, typeof bool1); // true 'boolean'
console.log(bool2, typeof bool2); // [Boolean: true] 'object'
areTwoTypesEqual(bool1, bool2); // different

const item1 = { value: 10 };
const item2 = new Object({ value: 2 });

console.log(item1, typeof item1); // { value: 10 } 'object'
console.log(item1, typeof item2); // { value: 10 } 'object'
areTwoTypesEqual(item1, item2); // different

const arr1 = [10, 20];
const arr2 = new Array([10, 20]);

console.log(arr1, typeof arr1); // { value: 10 } 'object'
console.log(arr2, typeof arr2); // { value: 10 } 'object'
areTwoTypesEqual(arr1, arr2); // different

const func1 = function (x, y) {
  return x + y;
};
const func2 = new Function("x", "y", "return x+y");

console.log(func1, typeof func1); // [Function: func1] 'function'
console.log(func2, typeof func2); // [Function: anonymous] 'function'
areTwoTypesEqual(func1, func2); // different
