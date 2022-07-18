const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".container");

const mainSlide = document.querySelector(".main-slide");
const slidesCount = mainSlide.querySelectorAll("div").length;
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

const height = container.clientHeight;
let activeSlideIndex = 0;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    changeSlide("up");
  } else if (e.key === "ArrowDown") {
    changeSlide("down");
  }
});
upBtn.addEventListener("click", () => {
  changeSlide("up");
});
downBtn.addEventListener("click", () => {
  changeSlide("down");
});

function changeSlide(direction) {
  if (direction === "up") {
    activeSlideIndex += 1;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  }
  if (direction === "down") {
    activeSlideIndex -= 1;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }
  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}
