let img = new Image();
// img.src = "./img/istockphoto-917310910-170667a.jpg";
img.src = "./img/butterfly.png";
// img.src = "./img/b49845d28401378711d4f10524a4bb52.png";
// img.src =
//   "./img/animation-flaing-butterfly-cartoon-explosion-600w-367845854.webp";
img.onload = function () {
  init();
};
let imgFlowers = new Image();
imgFlowers.src = "./img/a8f6ef5d64d210926d5c762f474abcc0.jpg";
// imgFlowers.onload = function () {
//   ctx.drawImage(imgFlowers, 0, 0, 200, 300, 0, 0, 200, 300);
// };
let canvas = document.querySelector("#butterfly");
let ctx = canvas.getContext("2d");

// const scale = 0.5;
// const scale = 1;
const width = 146; //ширина кадра
// const width = 150; //ширина кадра
const height = 124; //высота кадра
// const height = 250; //высота кадра
const stepWidth = 47;
// const scaleWidth = scale * width; //ширина+ кадра
// const scaleHeight = scale * height; //высота+ кадра

function init() {
  //   ctx.drawImage(img, 0, 0, width, height, 0, 0, scaleWidth, scaleHeight); //1 кадр
  //   ctx.drawImage(
  //     img,
  //     width,
  //     0,
  //     width,
  //     height,
  //     scaleWidth,
  //     0,
  //     scaleWidth,
  //     scaleHeight
  //   );
  //   ctx.drawImage(img, 0, 0, width, height, 0, 0, width, height); //1 кадр
  //   ctx.drawImage(
  //     img,
  //     width + stepWidth,
  //     0,
  //     width,
  //     height,
  //     width,
  //     0,
  //     width,
  //     height
  //   );
  //   ctx.drawImage(
  //     img,
  //     width * 2 + stepWidth * 2,
  //     0,
  //     width,
  //     height,
  //     width + stepWidth * 2,
  //     0,
  //     width,
  //     height
  //   );
  //   ctx.drawImage(
  //     img,
  //     (width + stepWidth) * 3,
  //     0,
  //     width,
  //     height,
  //     width + stepWidth * 4,
  //     0,
  //     width,
  //     height
  //   );
  window.requestAnimationFrame(step);

  //   drawFrame(0, 0, 0, 0);
  //   drawFrame(1, 0, width, 0);
  //   drawFrame(2, 0, width * 2, 0);
  //   drawFrame(3, 0, width * 3, 0);
  //   drawFrame(4, 0, width * 4, 0);
  //   drawFrame(0, 1, 0, 0);
  //   drawFrame(1, 1, width, 0);
  //   drawFrame(2, 1, width * 2, 0);
  //   drawFrame(3, 1, width * 3, 0);
  //   drawFrame(4, 1, width * 4, 0);
}

function drawFrame(frameX, frameY, canvasX, canvasY) {
  //   console.log("🚀 ~ file: butterfly.js:84 ~ drawFrame ~ canvasX", canvasX);
  ctx.drawImage(
    img,
    frameX * width,
    frameY * height,
    width,
    height,
    canvasX,
    canvasY,
    width,
    height
    // scaleWidth,
    // scaleHeight
  );
}

const cycleLoop = [0, 1, 2, 3, 4, 0, 1, 2, 3, 4];
// const cycleLoop = [0, 1, 2, 3, 4];
// const
let currentLoopIndex = 0;
let frameCount = 0;
// let spriteLine = currentLoopIndex < 4 ? 0 : 1;
let spriteLine = 0;

function step() {
  frameCount += 1;
  if (frameCount < 15) {
    window.requestAnimationFrame(step);
    return;
  }
  frameCount = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //   drawFrame(cycleLoop[currentLoopIndex], 0, 0, 0);
  //   drawFrame(cycleLoop[currentLoopIndex], 0, 750, 50);
  if (currentLoopIndex < 4) {
    spriteLine = 0;
  } else spriteLine = 1;
  drawFrame(cycleLoop[currentLoopIndex], spriteLine, 750, 50);
  ctx.drawImage(imgFlowers, 0, 0);

  currentLoopIndex += 1;
  if (currentLoopIndex >= cycleLoop.length) {
    currentLoopIndex = 0;
  }
  window.requestAnimationFrame(step);
}

let isClick = false;
const MOVEMENT_SPEED = 1;
// let positionX = 0;
let positionX = 750;
let positionY = 0;

canvas.addEventListener("click", onCanvasMouseDown, false);
// canvas.addEventListener('mousedown', onCanvasMouseDown, false);
// canvas.addEventListener('mousedown', onCanvasMouseDown, false);

function onCanvasMouseDown(e) {
  console.log(e);
  //   isClick = !isClick;

  //   isClick = !isClick;
  //   isClick = true;
  //   if (isClick) {
  if (e.x > 155 && e.x < 350 && e.y > 30 && e.y < 200) {
    butterflyMove();
    //   } else {
    //     // init();
    //     console.log(123);
    //     // ctx.clearRect(0, 0, canvas.width, canvas.height);
    //     currentLoopIndex = 0;
    //     spriteLine = 0;
    //     // drawFrame(cycleLoop[currentLoopIndex], spriteLine, positionX, 50);
    //     // ctx.drawImage(imgFlowers, 0, 0);
    //     init();
  }

  //   butterflyMove(e.x, e.y);

  //   } else {
  //     ctx.drawImage(imgFlowers, 0, 0);
  //     drawFrame(cycleLoop[currentLoopIndex], spriteLine, 260, 50);
  //   }
}

// function butterflyMove(x, y) {
function butterflyMove() {
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  //   if (isClick) {
  //   if (x > 155 && x < 350 && y > 30 && y < 200) {
  positionX -= MOVEMENT_SPEED;
  //   drawFrame(750, 50, positionX, positionY);
  if (positionX > 230) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(imgFlowers, 0, 0);
    drawFrame(cycleLoop[currentLoopIndex], spriteLine, positionX, 50);
    //   isClick = !isClick;
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    currentLoopIndex = 0;
    spriteLine = 0;
    //   isClick = !isClick;
    ctx.drawImage(imgFlowers, 0, 0);
    drawFrame(cycleLoop[currentLoopIndex], spriteLine, 230, 70);
    //   drawFrame(cycleLoop[currentLoopIndex], spriteLine, positionX, 50);
    //   isClick = !isClick;
  }
  // isClick = false;
  //   }
  window.requestAnimationFrame(butterflyMove);
  //   return;
  //   } else {
  //     ctx.drawImage(imgFlowers, 0, 0);
  //     drawFrame(cycleLoop[currentLoopIndex], spriteLine, 260, 50);
  //   }
  //   }
}
