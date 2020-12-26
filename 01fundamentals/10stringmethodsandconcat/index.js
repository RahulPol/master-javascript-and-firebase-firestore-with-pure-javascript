const firstName = "Rahul";
const lastName = "Pol";

let val;

// concatenate
val = firstName + lastName;
val = firstName + " " + lastName;

// append
val = "Rahul";
val += " Pol";

// escaping
val = "That's great you've got a job";
val = "That's great you\ve got a job";

// length
val = val.length;
// concat
val = firstName.concat(" ", lastName);

// change case
val = val.toUpperCase();
val = val.toLowerCase();

console.log(val);
