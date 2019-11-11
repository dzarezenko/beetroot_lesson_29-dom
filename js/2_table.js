let table = document.createElement("table");
for (let i = 0; i < 4; i++) {
  let tr = document.createElement("tr");
  for (let j = 0; j < 4; j++) {
    let td = document.createElement("td");
    let text = i * 4 + j + 1;

    if (text != 16) {
      let btn = document.createElement("button");
      btn.innerText = text;
      td.appendChild(btn);
    }

    tr.appendChild(td);
  }

  table.appendChild(tr);
}

document.body.appendChild(table);
