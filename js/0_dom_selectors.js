//document.write("<b>Bold Text</b>");

/*console.log(document.title);
console.log(document.forms);
console.log(document.images);*/

/*let images = document.images;
for (let i = 0; i < images.length; i++) {
  let img = images[i];
  //console.log(img.src);
  img.src = "5.jpg"
}*/

let form = document.getElementById("form1");
console.log("[LOG]", form);

let classElements = document.getElementsByClassName("test");
console.log("[LOG]", classElements);

let tagElements = document.getElementsByTagName("p");
console.log("[LOG]", tagElements);

let el = document.querySelectorAll("p > img");
console.log("[LOG]", Array.from(el).map((a) => a.src));
/*for (let i = 0; i < el.length; i++) {
  console.log(el[i].src);
}
console.log(el);
let arr = Array.from(el);
console.log(arr);*/
let bodyChildren = document.body.childNodes;
console.log(bodyChildren);
for (let childNode of bodyChildren) {
  if (childNode.nodeType != 3) {
    console.log(childNode);
    console.log(childNode.parentNode);
  }
}