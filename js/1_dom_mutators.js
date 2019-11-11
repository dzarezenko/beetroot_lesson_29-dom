let p = document.createElement("p");
p.innerHTML = "Text <a href='#'>New Link</a>";

p.setAttribute("title", "Test");
//p.setAttribute("style", "color: red;");
p.style = "color: red;";
p.classList.add("some-class");
p.classList.add("some-else-class");
console.log(Array.from(p.classList));
p.classList.replace("some-class", "some-new-class");

let form = document.getElementById("form2");

form.appendChild(p);

console.log(p);
