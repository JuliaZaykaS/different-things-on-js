const startBtn = document.getElementById("start");
const screens = document.querySelectorAll(".screen");
const timeList = document.getElementById("time-list");
const timeEl = document.getElementById("time");
const board = document.getElementById("board");
const newGame = document.getElementById("new-game");

let time = 0;

let score = 0;
let intervalId = 0;

startBtn.addEventListener("click", (e) => {
  e.preventDefault();
  screens[0].classList.add("up");
});

timeList.addEventListener("click", (e) => {
  if (!e.target.classList.contains("time-btn")) return;
  time = parseInt(e.target.dataset.time);
  screens[1].classList.add("up");
  startGame();
});

board.addEventListener("click", (e) => {
  if (e.target.classList.contains("circle")) {
    score += 1;
    e.target.remove();
    createRandomCircle();
  }
});

newGame.addEventListener("click", (e) => {
  //   screens.forEach((el) => el.classList.remove("up"));
  screens[1].classList.remove("up");
  timeEl.parentNode.classList.remove("hide");
  newGame.classList.add("hide");
  board.innerHTML = "";
  score = 0;
});

function startGame() {
  intervalId = setInterval(decreaseTime, 1000);

  setTime(time);
  createRandomCircle();
}

function decreaseTime() {
  //   let current = --time;
  if (time === 0) {
    finishGame();
  } else {
    time -= 1;
    let current = time;

    if (current < 10) {
      current = `0${current}`;
    }
    setTime(current);
  }
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`;
}

function finishGame() {
  timeEl.parentNode.classList.add("hide");
  newGame.classList.remove("hide");
  board.innerHTML = `<h1>Cчет <span class='primary'>${score}</span></h1>`;
  clearInterval(intervalId);
}

function createRandomCircle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  const size = getRandomNumber(10, 60);
  const { width, height } = board.getBoundingClientRect();
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  board.append(circle);
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
