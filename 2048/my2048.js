document.addEventListener("DOMContentLoaded", () => {
  const gridDispay = document.querySelector(".grid");
  const scoredisplay = document.querySelector("#score");
  var result = document.querySelector("#result");
  let squares = [];
  let score = 0;

  function Board() {
    for (let i = 0; i < 16; i++) {
      square = document.createElement("div");
      square.innerHTML = ".";
      gridDispay.appendChild(square);
      squares.push(square);
    }
    random();
    random();
  }
  Board();
  function random() {
    let randomno = Math.floor(Math.random() * squares.length);
    if (squares[randomno].innerHTML == ".") {
      squares[randomno].innerHTML = 2;
      gameover();
    } else random();
  }

  function right() {
    for (let i = 0; i < 16; i++) {
      if (i % 4 === 0) {
        let first = squares[i].innerHTML;
        let second = squares[i + 1].innerHTML;
        let third = squares[i + 2].innerHTML;
        let fourth = squares[i + 3].innerHTML;
        let fullrow = [
          parseInt(first),
          parseInt(second),
          parseInt(third),
          parseInt(fourth),
        ];

        let rowswithtwo = fullrow.filter((num) => num);
        let empty = 4 - rowswithtwo.length;
        let zeroes = Array(empty).fill(".");
        let newrow = zeroes.concat(rowswithtwo);
        squares[i].innerHTML = newrow[0];
        squares[i + 1].innerHTML = newrow[1];
        squares[i + 2].innerHTML = newrow[2];
        squares[i + 3].innerHTML = newrow[3];
      }
    }
  }

  function left() {
    for (let i = 0; i < 16; i++) {
      if (i % 4 === 0) {
        let first = squares[i].innerHTML;
        let second = squares[i + 1].innerHTML;
        let third = squares[i + 2].innerHTML;
        let fourth = squares[i + 3].innerHTML;
        let fullrow = [
          parseInt(first),
          parseInt(second),
          parseInt(third),
          parseInt(fourth),
        ];

        let rowswithtwo = fullrow.filter((num) => num);
        let empty = 4 - rowswithtwo.length;
        let zeroes = Array(empty).fill(".");
        let newrow = rowswithtwo.concat(zeroes);

        squares[i].innerHTML = newrow[0];
        squares[i + 1].innerHTML = newrow[1];
        squares[i + 2].innerHTML = newrow[2];
        squares[i + 3].innerHTML = newrow[3];
      }
    }
  }
  function down() {
    for (i = 0; i < 4; i++) {
      let first = squares[i].innerHTML;
      let second = squares[i + 4].innerHTML;
      let third = squares[i + 8].innerHTML;
      let fourth = squares[i + 12].innerHTML;
      let fullcol = [
        parseInt(first),
        parseInt(second),
        parseInt(third),
        parseInt(fourth),
      ];

      let rowswithtwo = fullcol.filter((num) => num);
      let empty = 4 - rowswithtwo.length;
      let zeroes = Array(empty).fill(".");
      let newcol = zeroes.concat(rowswithtwo);

      squares[i].innerHTML = newcol[0];
      squares[i + 4].innerHTML = newcol[1];
      squares[i + 8].innerHTML = newcol[2];
      squares[i + 12].innerHTML = newcol[3];
    }
  }

  function up() {
    for (i = 0; i < 4; i++) {
      let first = squares[i].innerHTML;
      let second = squares[i + 4].innerHTML;
      let third = squares[i + 8].innerHTML;
      let fourth = squares[i + 12].innerHTML;
      let fullcol = [
        parseInt(first),
        parseInt(second),
        parseInt(third),
        parseInt(fourth),
      ];

      let rowswithtwo = fullcol.filter((num) => num);
      let empty = 4 - rowswithtwo.length;
      let zeroes = Array(empty).fill(".");
      let newcol = rowswithtwo.concat(zeroes);

      squares[i].innerHTML = newcol[0];
      squares[i + 4].innerHTML = newcol[1];
      squares[i + 8].innerHTML = newcol[2];
      squares[i + 12].innerHTML = newcol[3];
    }
  }
  function combinerow() {
    for (let i = 0; i < 15; i++) {
      if (squares[i].innerHTML === squares[i + 1].innerHTML) {
        if (squares[i].innerHTML !== "." && squares[i + 1].innerHTML !== ".") {
          let add =
            parseInt(squares[i].innerHTML) + parseInt(squares[i + 1].innerHTML);
          squares[i].innerHTML = add;
          squares[i + 1].innerHTML = ".";
          score += add;
          scoredisplay.innerHTML = score;
        }
      }
    }
  }

  function combinecol() {
    for (let i = 0; i < 12; i++) {
      if (squares[i].innerHTML === squares[i + 4].innerHTML) {
        if (squares[i].innerHTML !== "." && squares[i + 4].innerHTML !== ".") {
          let add =
            parseInt(squares[i].innerHTML) + parseInt(squares[i + 4].innerHTML);

          squares[i].innerHTML = add;

          squares[i + 4].innerHTML = ".";

          score += add;

          scoredisplay.innerHTML = score;
        }
      }
    }
  }

  document.addEventListener("keyup", control);

  function control(e) {
    if (e.keyCode === 37) {
      leftkey();
    } else if (e.keyCode === 39) {
      rightkey();
    } else if (e.keyCode === 38) {
      upkey();
    } else if (e.keyCode === 40) {
      downkey();
    }
  }
  function rightkey() {
    right();
    combinerow();
    right();
    random();
  }
  function leftkey() {
    left();
    combinerow();
    left();
    random();
  }
  function downkey() {
    down();
    combinecol();
    down();
    random();
  }
  function upkey() {
    up();
    combinecol();
    up();
    random();
  }
  function gameover() {
    let ctr = 0;
    for (let i = 0; i < 15; i++) {
      if (squares[i].innerHTML == ".") {
        ctr++;
      }
    }
    if (ctr === 0) {
      result.innerHTML = "Game Over!";
      document.removeEventListener("keyup", control);
    }
  }
});
