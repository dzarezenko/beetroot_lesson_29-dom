/*3. Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.*/
let light = document.createElement("section");
light.style = "width: 100px; height:156px; border: 1px black solid;";
document.body.appendChild(light);
let button = document.createElement("button");
button.innerText = "click";
document.body.appendChild(button);
button.style = "margin-top: 20px";

let red = document.createElement("div");
red.setAttribute("class", "circle");
red.classList.add("red"); //так правильно задавать классы, а не как в пред.строке?
let yelow = document.createElement("div");
yelow.setAttribute("class", "circle");
let green = document.createElement("div");
green.setAttribute("class", "circle");

/*let circle = document.querySelectorAll("div");//ищет только по html?если в js задали div, то не найдет?
console.log(circle);*/
//как в js задать класс всем div одновременно?

light.appendChild(red);
light.appendChild(yelow);
light.appendChild(green);

button.setAttribute("onClick", "changeColor()");

function changeColor() {
  if (red.className == "circle red") {
    red.classList.remove("red");
    yelow.classList.add("yelow");
  } 
   else if (yelow.className == "circle yelow") {
    yelow.classList.remove("yelow");
    green.classList.add("green");
  } 
  else if (green.className == "circle green") {
    green.classList.remove("green");
    red.classList.add("red");
  }
}
