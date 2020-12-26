let doc;
doc = document;
doc = document.all;
doc = document.all[0];
doc = document.head;
doc = document.body;
doc = document.doctype;
doc = document.domain;
// get current url
doc = document.URL;
doc = document.characterSet; // UTF-8
// get MIME type of document
doc = document.contentType;
// all links available within document
doc = document.links;
doc = document.links[0].classList;
doc = document.links[0].className;
// all images within document
doc = document.images;
// all scripts within document
doc = document.scripts;
let scripts = Array.from(document.scripts);
scripts.forEach((script, index) => {
  console.log(index + script.getAttribute("src"));
});

console.log(doc);
