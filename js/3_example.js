let changeColor = () => {
  let sq = document.getElementById("sqrt");
  if (sq.className == "red") {
    sq.classList.replace("red", "green");
  } else {
    sq.classList.replace("green", "red");
  }
}

let square = document.createElement("div");

square.id = "sqrt";
square.style = "width: 300px;height:300px;";
square.classList.add("red");

square.setAttribute("onMouseOver", "changeColor()");
square.setAttribute("onMouseOut", "changeColor()");

document.body.appendChild(square);
