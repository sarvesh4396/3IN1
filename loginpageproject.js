var btn = document.getElementById("btn");
var display = document.querySelector(".display");

function save() {
  var input = document.getElementById("input").value;
  onclick = function () {
    display.innerHTML = `Hey ${input}!!! Which game would you like to play!?`;
  };
}
