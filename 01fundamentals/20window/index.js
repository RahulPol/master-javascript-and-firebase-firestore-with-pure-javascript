// window object methods
// Alert
alert("Hello"); // same as window.alert("Hello")

// Prompt
const name = prompt("What is your name?");
alert(`Hello ${name}`);

// Confirm
if (confirm("Are you sure to delete?")) {
  alert("deleted successfully");
} else {
  alert("Your data is safe with us!!");
}

// window object properties
// outer width and height
let oh = window.outerHeight;
let ow = window.outerWidth;
console.log(oh, ow);

// inner width and height
let ih = window.innerHeight;
let iw = window.innerWidth;
console.log(ih, iw);

// scroll points
let sy = window.scrollY;
let sx = window.scrollX;
console.log(sy, sx);

// location object
let val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.protocol;
val = window.location.href;
val = window.location.search; // gives you query parameter
console.log(val);

// redirect
window.location.href = "http://www.google.com";

// reload
window.location.reload();

// history
window.history().go(-1);

// navigation object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
console.log(val);
