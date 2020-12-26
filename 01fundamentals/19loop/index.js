const users = ["Alan", "Peter", "John"];

console.log("simple for");
for (i = 0; i < users.length; i++) {
  console.log(users[i]);
}

console.log("foreach");
users.forEach((user, index) => {
  console.log(index, user);
});

console.log("for..in");
for (const key in users) {
  console.log(key);
  console.log(users[key]);
}

console.log("for...of");
for (const user of users) {
  console.log(user);
}
