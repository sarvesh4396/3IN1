numsquares = 6;
var colors = generateRandomColor(numsquares);
var square = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var colordisplay = document.querySelector("#colordisplay");
var msg = document.querySelector("#msg");
var h1 = document.querySelector("h1");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");
var reset = document.querySelector("#reset");

easybtn.addEventListener("click", function () {
  hardbtn.classList.remove("selected");
  easybtn.classList.add("selected");
  numsquares = 3;
  colors = generateRandomColor(numsquares);
  pickedcolor = pickcolor();
  colordisplay.textContent = pickedcolor;
  for (var i = 0; i < square.length; i++) {
    if (colors[i]) {
      square[i].style.backgroundColor = colors[i];
    } else {
      square[i].style.display = "none";
    }
  }
});

hardbtn.addEventListener("click", function () {
  easybtn.classList.remove("selected");
  hardbtn.classList.add("selected");
  numsquares = 6;
  colors = generateRandomColor(numsquares);
  pickedcolor = pickcolor();
  colordisplay.textContent = pickedcolor;
  for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colors[i];

    square[i].style.display = "block";
  }
});
reset.addEventListener("click", function () {
  colors = generateRandomColor(numsquares);
  pickedcolor = pickcolor();
  colordisplay.textContent = pickedcolor;
  msg.textContent = "";
  reset.textContent = "New colors";
  for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colors[i];
  }

  h1.style.backgroundColor = "steelblue";
});
colordisplay.textContent = pickedcolor;
for (var i = 0; i < square.length; i++) {
  square[i].style.backgroundColor = colors[i];
  square[i].addEventListener("click", function () {
    var clickedcolor = this.style.backgroundColor;
    if (clickedcolor === pickedcolor) {
      msg.textContent = "Correct!!";
      reset.textContent = "Play Again";
      changeColor(clickedcolor);
      h1.style.backgroundColor = clickedcolor;
    } else {
      this.style.backgroundColor = "#232323";
      msg.textContent = "Try Again";
    }
  });
}
function changeColor(color) {
  for (var i = 0; i <= square.length - 1; i++) {
    square[i].style.backgroundColor = color;
  }
}
function pickcolor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColor(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
