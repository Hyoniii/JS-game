const oneBtn = document.getElementById("JS_shirts");
const twoBtn = document.getElementById("JS_pants");
const thrBtn = document.getElementById("JS_skirt");
const fourBtn = document.getElementById("JS_blue");
const fiveBtn = document.getElementById("JS_yellow");
const sixBtn = document.getElementById("JS_pink");
const listBox = document.getElementById("JS_list");

function handleShirts() {
  const li = document.createElement("li");
  li.innerText = "hi";
  listBox.appendChild(li);
}

function init() {
  oneBtn.addEventListener("click", handleShirts);
}

init();
