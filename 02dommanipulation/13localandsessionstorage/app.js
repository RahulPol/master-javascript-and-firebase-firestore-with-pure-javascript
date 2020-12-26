//set local storage item
// this will stay even after you close the browser and reopen it again
localStorage.setItem("name", "localName");
localStorage.setItem("age", 17);

// set session storage item
// this will be wiped out after page session end such as hard refresh or closing the browser
sessionStorage.setItem("name", "sessionName");

// get local storage item
const age = localStorage.getItem("age");

// get session storage item
const name = sessionStorage.getItem("name");

// remove item
localStorage.removeItem("name");
