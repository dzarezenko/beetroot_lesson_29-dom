let makeGreen = () => {
  let sq = document.getElementById("sqrt");

  sq.classList.replace("red", "green");
}

let makeRed = () => {
  let sq = document.getElementById("sqrt");

  sq.classList.replace("green", "red");
}

let square = document.createElement("div");

square.id = "sqrt";
square.style = "width: 300px;height:300px;";
square.classList.add("red");

square.setAttribute("onMouseOver", "makeGreen()");
square.setAttribute("onMouseOut", "makeRed()");

document.body.appendChild(square);
