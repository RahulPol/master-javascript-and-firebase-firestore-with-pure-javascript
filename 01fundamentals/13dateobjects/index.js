let val;
const d = new Date();
val = d;

val = d.getMonth(); // months are 0 indexed
val = d.getDay(); // days are 0 indexed
val = d.getDate(); // today's date of the month (not 0 indexed)
val = d.getFullYear(); // not 0 indexed
val = d.getHours(); // hours are 0 indexed
val = d.getMinutes(); // not 0 indexed
val = d.getSeconds();
val = d.getMilliseconds();

// set date operations
// be careful while setting 0 index based date properties
d.setMonth(11);
d.setDate(25);
d.setFullYear();
d.setHours(3);
d.setMinutes(15);
d.setSeconds(30);
console.log(val);

// date initialization
let date = new Date("12-28-2020 11:30:00");
date = new Date("12/28/2022 11:30:00");
date = new Date("December 28 2021");
console.log(date);
