let totalLevel = 8;
let range = 2;
let stages = 1;
let score = 0;
function game(range) {
  const username = prompt("enter username");

  while (score != totalLevel) {
    let input = parseInt(
      prompt(`welcome ${username} guess a num from 1-${range}`)
    );
    let number = Math.floor(Math.random() * range) + 1;
    if (!input) {
      input = parseInt(prompt("enter a valid number"));
    } else if (number == input) {
      stages++;
      range++;
      score++;
      alert(`stage ${stages}, score: ${score} guess a num from 1-${range}`);
    } else {
      alert(`Game Over`);
      return;
    }
  }
}

game(range);

/*const username = prompt("enter username");
    if (username.length === 0 || username == Number) {
      prompt("enter valid username");
    }
let stage = 1;

function range() {
  let input = parseInt(prompt(`welcome ${username} guess a num from 1-2`));
  while (!input) {
    input = parseInt(prompt("enter a valid number"));
  }

  function game() {
    let number = Math.floor(Math.random() * 3);
    if (input == number) {
      alert("correct");
    } else {
      alert("game over");
    }
  }
  function stages() {}
  game();
}
range();
*/
/*

let totalLevel = 7;
let range = 2;
let stages = 1;
let score = 0;
function game(range) {
  const username = prompt("enter username");

  while (score != totalLevel) {

    let input = parseInt(
      prompt(`welcome ${username} guess a num from 1-${range}`)
    );
    if (!input) {
      input = parseInt(prompt("enter a valid number"));
    }
    let number = Math.floor(Math.random() * range) + 1;
    console.log(number);
    if (number == input) {
      stages++;
      range++;
      score++;
      alert(`stage ${stages}, score: ${score} guess a num from 1-${range}`);
    } else {
      alert(`Game Over`);
      return;
    }
  }
}

game(range);

 {
  let number = Math.floor(Math.random() * range) + 1;
  console.log(number);
  stages++;
  range++;
  score++;
  input = parseInt(prompt(`stage ${stages}, score: ${score} guess a num from 1-${range}`));
  if (input !== number) {
    input = prompt(`try again guess a num from 1-${range}`);
    }
  }

   stages++;
  range++;
  score++;

      input = parseInt(
      prompt(`stage ${stages}, score: ${score} guess a num from 1-${range}`)
    );
*/
