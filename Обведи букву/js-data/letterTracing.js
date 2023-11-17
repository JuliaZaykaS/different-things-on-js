import {
  scaleImage,
  checkingAnswerPositive,
  checkingAnswerReset,
  renderCheckPanel,
  getCheckPanelElements,
  togglePointerEventElement,
} from "../_common_files/common_scripts.js";

(() => {
  // это уникальный id для данного задания, который был присвоен в html
  const taskId = "letterTracing_task-1";

  /*заменить Aa на нужные буквы*/
  const letter = "Aa";
  /*при необходимости подобрать подходящее занчение winPercent (0.75 - 0.85)
    для проверки заполненности буквы*/
  const winPercent = 0.8;
  /**/
  /*при необходимости подобрать нужный шрифт, скачать и подключить в css*/
  const font = "Titillium Web";

  /*заменить цвет закраски буквы на нужный в формате rgb*/
  /*использовать любой кроме
    (220,220,220)-цвет буквы и
    (240, 100, 0)-цвет обводки
    (значение 220 нельзя применять ни к одному из трех каналов цвета)*/

  const rgbValues = {
    r: 230,
    g: 0,
    b: 0,
  };

  /**/
  //сама функция, здесь ничего менять не нужно
  renderLetterTracing(taskId, letter, winPercent, font, rgbValues);
})();

// ФУНКЦИЯ
// function renderLetterTracing(taskId, letter, winPercent, font, rgbValues) {
//   const { r, g, b } = rgbValues;
//   // const fontSizeLetter = "310px";
//   const fontSizeLetter = "510px";
//   const fontWeightLetter = "bold";
//   const letterInsideColor = "rgb(220, 220, 220)";
//   const letterConturColor = "rgb(240, 100, 0)";

//   const { redValue, greenValue, blueValue } = getRGB(letterInsideColor);

//   let pixels = null;
//   let letterpixels = null;
//   let mousedown = false;
//   let isLetterComplete = false;
//   let drowColor = `rgb(${r}, ${g}, ${b})`;

//   const taskWrapper = document.querySelector(`#${taskId}`);
//   const letterPicture = taskWrapper.querySelector(
//     ".letterTracing_letter_picture"
//   );
//   const audio = taskWrapper.querySelector(".letterTracing_letter_audio");
//   let c = taskWrapper.querySelector(".letterTracing_letter_canvas");
//   let c2 = taskWrapper.querySelector("#arrows");
//   let cx = c.getContext("2d");
//   cx.font = `${fontWeightLetter} ${fontSizeLetter} ${font}`;
//   c2.height = 600;
//   c2.width = 600;
//   // let ctx = c.getContext("2d");
//   let ctx = c2.getContext("2d");
//   ctx.font = `bold 30px ${font}`;
//   let raf;
//   // let running = false;
//   // const ball = {
//   //   x: 67,
//   //   y: 390,
//   //   vx: 5,
//   //   vy: 1,
//   //   radius: 25,
//   //   color: "blue",
//   //   draw: function () {
//   //     ctx.beginPath();
//   //     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
//   //     ctx.closePath();
//   //     ctx.fillStyle = this.color;
//   //     ctx.fill();
//   //   },
//   // };
//   // ball.draw();

//   class Circle {
//     constructor(x, y, radius, canvas, num, numX, numY) {
//       this.x = x;
//       this.y = y;
//       this.r = radius;
//       this.ctx = canvas;
//       this.startAngle = 0; // начальная точка
//       this.endAngle = Math.PI * 2; // конечная точка окружности
//       this.clockwise = true; // по часовой стрелке
//       this.num = num;
//       this.numX = numX;
//       this.numY = numY;
//     }

//     draw() {
//       this.ctx.beginPath();
//       //  thix.ctx.arc(67, 390, 27, 0, Math.PI * 2, true);
//       this.ctx.arc(
//         this.x,
//         this.y,
//         this.r,
//         this.startAngle,
//         this.endAngle,
//         this.clockwise
//       );
//       this.ctx.fillText(this.num, this.numX, this.numY);
//       this.ctx.stroke();
//     }
//     scale() {}
//   }
//   const circleOne = new Circle(67, 390, 27, ctx, "1", 60, 400);
//   createNumCircles();

//   function createNumCircles() {
//     // const circleOne = new Circle(67, 390, 27, ctx, "1", 60, 400);
//     // circleOne.draw();
//     ctx.beginPath();
//     // ctx.moveTo(110, 75);

//     ctx.arc(67, 390, 27, 0, Math.PI * 2, true); // 1
//     ctx.font = `bold 30px ${font}`;
//     // ctx.fillText("1", 60, 400);
//     // ctx.fillText("⬀", 60, 400);
//     ctx.fillText("⇧", 60, 400);
//     ctx.save();
//     ctx.moveTo(112, 300);
//     ctx.arc(86, 300, 27, 0, Math.PI * 2, true); // 2
//     // ctx.fillText("2", 80, 310);
//     ctx.fillText("⇧", 80, 310);
//     ctx.save();
//     ctx.moveTo(138, 200);
//     ctx.arc(111, 200, 27, 0, Math.PI * 2, true); // 3
//     // ctx.fillText("3", 106, 210);
//     ctx.fillText("⇧", 106, 210);
//     ctx.save();
//     ctx.moveTo(158, 111);
//     ctx.arc(132, 111, 27, 0, Math.PI * 2, true); // 4
//     // ctx.fillText("4", 125, 118);
//     ctx.fillText("⇧", 125, 118);
//     ctx.save();
//     ctx.stroke();
//   }

//   // c2.addEventListener("click", function (e) {
//   //   if (!running) {
//   //     raf = window.requestAnimationFrame(draw);
//   //     running = true;
//   //   }
//   // });

//   // c2.addEventListener("mouseout", function (e) {
//   //   window.cancelAnimationFrame(raf);
//   //   running = false;
//   // });
//   // c2.addEventListener("mousemove", function (e) {
//   //   if (!running) {
//   //     clear();
//   //     ball.x = e.clientX;
//   //     ball.y = e.clientY;
//   //     ball.draw();
//   //   }
//   // });

//   function clear() {
//     ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
//     ctx.fillRect(0, 0, c2.width, c2.height);
//   }
//   // c2.addEventListener("mousemove", function (e) {
//   //   // clear();
//   //   onmousemove(e);
//   //   console.log(
//   //     "🚀 ~ file: letterTracing.js ~ line 107 ~ e.clientX",
//   //     e.clientX
//   //   );
//   //   ball.x = e.clientX;
//   //   ball.y = e.clientY;
//   //   ball.draw();
//   // });
//   // ctx.arc(338, 79, 27, 0, Math.PI * 2, true); // Внешняя окружность

//   // ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Внешняя окружность
//   // ctx.moveTo(110, 75);
//   // ctx.arc(75, 75, 35, 0, Math.PI, false); // рот (по часовой стрелке)
//   // ctx.moveTo(65, 65);
//   // ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Левый глаз
//   // ctx.moveTo(95, 65);
//   // ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Правый глаз

//   // function fillLetter() {
//   //   ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
//   //   ctx.fillRect(0, 0, canvas.width, canvas.height);
//   // }
//   // c.addEventListener("mousedown", (e) => {
//   //   console.log(e.target);
//   // });
//   // c2.addEventListener("mousedown", (e) => {
//   //   console.log(e.target);
//   // });

//   // function draw() {
//   //   clear();
//   //   ball.draw();
//   //   ball.x += ball.vx;
//   //   ball.y += ball.vy;

//   //   if (ball.y + ball.vy > c2.height || ball.y + ball.vy < 0) {
//   //     ball.vy = -ball.vy;
//   //   }
//   //   if (ball.x + ball.vx > c2.width || ball.x + ball.vx < 0) {
//   //     ball.vx = -ball.vx;
//   //   }

//   //   raf = window.requestAnimationFrame(draw);
//   // }

//   renderCheckPanel(taskWrapper, false);
//   const { btnReset, controlsBox, infoBox } = getCheckPanelElements(taskWrapper);

//   // let cx = c.getContext("2d");
//   // cx.font = `${fontWeightLetter} ${fontSizeLetter} ${font}`;

//   letterPicture.addEventListener("pointerdown", onImageClick);
//   btnReset.addEventListener("click", reloadTask);

//   // c.addEventListener("pointerdown", onmousedown, false);
//   c2.addEventListener("pointerdown", onmousedown, false);
//   // c.addEventListener("pointerup", onmouseup, false);
//   // c.addEventListener("pointermove", onmousemove, false);
//   c2.addEventListener("pointerup", onmouseup, false);
//   c2.addEventListener("pointermove", onmousemove, false);

//   if (document.fonts) {
//     document.fonts
//       .load(`${fontWeightLetter} ${fontSizeLetter} ${font}`)
//       .then(function () {
//         setupCanvas();
//       });
//   }

//   function onImageClick(e) {
//     scaleImage(e.target);
//   }

//   function getRGB(str) {
//     const match = str.match(
//       /rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/
//     );
//     return match
//       ? {
//           // redValue: Number(match[1]),
//           // greenValue: Number(match[2]),
//           // blueValue: Number(match[3]),
//           redValue: +match[1],
//           greenValue: +match[2],
//           blueValue: +match[3],
//         }
//       : {};
//   }

//   function setupCanvas() {
//     // c.height = 300;
//     c.height = 600;
//     c.width = 600;
//     cx.lineCap = "round";
//     cx.font = `${fontWeightLetter} ${fontSizeLetter} ${font}`;
//     cx.fillStyle = letterInsideColor;
//     cx.textBaseline = "middle";

//     drawletter(letter, letterInsideColor);
//     pixels = cx.getImageData(0, 0, c.width, c.height);

//     letterpixels = getpixelamount(redValue, greenValue, blueValue);
//   }

//   function drawletter(letter, color) {
//     let centerx = (c.width - cx.measureText(letter).width) / 2;
//     let centery = c.height / 2;
//     cx.fillStyle = color;

//     cx.fillText(letter, centerx, centery);
//     drawletterBorder(letter);
//   }

//   function drawletterBorder(letter) {
//     let centerx = (c.width - cx.measureText(letter).width) / 2;
//     let centery = c.height / 2;
//     cx.lineWidth = 15;
//     cx.lineCap = "round";
//     cx.strokeStyle = letterConturColor;
//     cx.strokeText(letter, centerx, centery);
//   }

//   function paint(x, y) {
//     let colour = getpixelcolour(x, y);

//     if (
//       colour.r !== redValue ||
//       colour.g !== greenValue ||
//       colour.b !== blueValue
//     ) {
//       mousedown = false;
//     } else {
//       cx.strokeStyle = drowColor;

//       cx.lineWidth = 28;
//       // cx.lineWidth = 35;
//       cx.lineTo(x, y);
//       cx.stroke();
//       cx.beginPath();
//       cx.stroke();

//       cx.beginPath();
//       cx.moveTo(x, y);

//       drawletterBorder(letter);
//     }
//   }

//   function getpixelcolour(x, y) {
//     let index = y * (pixels.width * 4) + x * 4;
//     return {
//       r: pixels.data[index],
//       g: pixels.data[index + 1],
//       b: pixels.data[index + 2],
//       a: pixels.data[index + 3],
//     };
//   }

//   function getpixelamount(r, g, b) {
//     let pixels = cx.getImageData(0, 0, c.width, c.height);
//     console.log(
//       "🚀 ~ file: letterTracing.js ~ line 335 ~ getpixelamount ~ pixels",
//       pixels
//     );

//     let all = pixels.data.length;
//     let amount = 0;
//     for (let i = 0; i < all; i += 4) {
//       if (
//         pixels.data[i] === r &&
//         pixels.data[i + 1] === g &&
//         pixels.data[i + 2] === b
//       ) {
//         amount++;
//       }
//     }
//     return amount;
//   }

//   function pixelthreshold() {
//     console.log(
//       "🚀 ~ file: letterTracing.js ~ line 356 ~ pixelthreshold ~ letterpixels",
//       letterpixels
//     );
//     if (getpixelamount(r, g, b) / letterpixels > winPercent) {
//       if (!isLetterComplete) {
//         pulse();
//         checkingAnswerPositive(controlsBox, infoBox);
//         togglePointerEventElement(taskWrapper.firstElementChild);
//       }
//     }
//   }

//   function pulse() {
//     let size = parseInt(fontSizeLetter);

//     audio.play();

//     let timerId1 = setInterval(() => {
//       size += 2;
//       cx.clearRect(0, 0, c.width, c.height);
//       cx.font = `${fontWeightLetter} ${size}px ${font}`;
//       drawletter(letter, drowColor);
//     }, 40);

//     setTimeout(() => {
//       clearInterval(timerId1);
//       let timerId2 = setInterval(() => {
//         size -= 2;
//         cx.clearRect(0, 0, c.width, c.height);
//         cx.font = `${fontWeightLetter} ${size}px ${font}`;
//         drawletter(letter, drowColor);
//       }, 40);
//       setTimeout(() => {
//         clearInterval(timerId2);
//       }, 1000);
//     }, 1000);

//     isLetterComplete = true;
//   }

//   function onmousedown(ev) {
//     // mousedown = true;
//     let x = Math.round(ev.clientX - c.getBoundingClientRect().x);

//     let y = Math.round(ev.clientY - c.getBoundingClientRect().y);

//     if (x > 40 && x < 80 && y < 400 && y > 320) {
//       mousedown = true;
//     }
//     // console.log(ev);
//     ev.preventDefault();
//   }

//   function onmouseup(ev) {
//     mousedown = false;
//     pixelthreshold();
//     ev.preventDefault();
//     cx.beginPath();
//   }

//   function onmousemove(ev) {
//     if (mousedown) {
//       let x = Math.round(ev.clientX - c.getBoundingClientRect().x);
//       console.log(
//         "🚀 ~ file: letterTracing.js ~ line 363 ~ onmousemove ~ x",
//         x
//       );
//       let y = Math.round(ev.clientY - c.getBoundingClientRect().y);
//       console.log(
//         "🚀 ~ file: letterTracing.js ~ line 365 ~ onmousemove ~ y",
//         y
//       );
//       if (x > 40 && x < 150 && y > 100 && y < 400) {
//         if (x > 40 && x < 80 && y < 400 && y > 320) {
//           // circleOne.scale(0.9);
//           ctx.clearRect(39, 350, 300, 300);
//           // clear();
//           // ctx.restore();
//         }
//         if (x > 50 && x < 100 && y < 320 && y > 250) {
//           ctx.clearRect(39, 250, 300, 300);
//           // clear();
//           // ctx.restore();
//         }
//         if (x > 60 && x < 130 && y < 260 && y > 180) {
//           ctx.clearRect(39, 150, 300, 300);
//           // clear();
//           // ctx.restore();
//         }
//         if (x > 70 && x < 150 && y < 140 && y > 100) {
//           ctx.clearRect(39, 80, 300, 300);
//           // clear();
//           // ctx.restore();
//         }
//         paint(x, y);
//       }
//     }
//   }

//   function reloadTask() {
//     isLetterComplete = false;
//     checkingAnswerReset(controlsBox, infoBox);
//     setupCanvas();
//     if (taskWrapper.firstElementChild.classList.contains("noEventElement")) {
//       togglePointerEventElement(taskWrapper.firstElementChild);
//     }
//     createNumCircles();
//   }
// }
function renderLetterTracing(taskId, letter, winPercent, font, rgbValues) {
  const { r, g, b } = rgbValues;
  // const fontSizeLetter = "310px";
  const fontSizeLetter = "510px";
  const fontWeightLetter = "bold";
  // const letterInsideColor = "rgb(220, 220, 220)";
  const letterInsideColor = "rgb(255, 255, 255)";
  const letterInsideColor2 = "rgb(255, 0, 0)";
  // const letterConturColor = "rgb(240, 100, 0)";
  const letterConturColor = "rgb(0, 0, 0)";

  const { redValue, greenValue, blueValue } = getRGB(letterInsideColor);
  // console.log(
  //   "🚀 ~ file: letterTracing.js:482 ~ getRGB(letterInsideColor):",
  //   getRGB(letterInsideColor)
  // );
  // const { redValue2, greenValue2, blueValue2 } = getRGB(letterInsideColor2);
  const color2 = getRGB(letterInsideColor2);

  // console.log(
  //   "🚀 ~ file: letterTracing.js:487 ~ getRGB(letterInsideColor2):",
  //   getRGB(letterInsideColor2)
  // );

  let pixels = null;
  let letterpixels = null;
  let mousedown = false;
  let isLetterComplete = false;
  let drowColor = `rgb(${r}, ${g}, ${b})`;
  let imgLetter = new Image();
  imgLetter.src = "Images_1/letterTraicing/letter_Aa.svg";
  // imgLetter.style.textAlign = "center";
  // console.log(
  //   "🚀 ~ file: letterTracing.js:486 ~ renderLetterTracing ~ imgLetter:",
  //   imgLetter
  // );

  const taskWrapper = document.querySelector(`#${taskId}`);
  // const letterPicture = taskWrapper.querySelector(
  //   ".letterTracing_letter_picture"
  // );
  const audio = taskWrapper.querySelector(".letterTracing_letter_audio");
  let c = taskWrapper.querySelector(".letterTracing_letter_canvas");

  let cx = c.getContext("2d");
  // cx.drawImage(imgLetter, 0, 0);

  // cx.font = `${fontWeightLetter} ${fontSizeLetter} ${font}`;

  renderCheckPanel(taskWrapper, false);
  const { btnReset, controlsBox, infoBox } = getCheckPanelElements(taskWrapper);

  // let cx = c.getContext("2d");
  // cx.font = `${fontWeightLetter} ${fontSizeLetter} ${font}`;

  // letterPicture.addEventListener("pointerdown", onImageClick);
  btnReset.addEventListener("click", reloadTask);

  c.addEventListener("pointerdown", onmousedown, false);

  c.addEventListener("pointerup", onmouseup, false);
  c.addEventListener("pointermove", onmousemove, false);

  // if (document.fonts) {
  //   document.fonts
  //     .load(`${fontWeightLetter} ${fontSizeLetter} ${font}`)
  //     .then(function () {
  imgLetter.onload = function () {
    // cx.drawImage(imgLetter, 0, 0, 600, 600);
    // cx.drawImage(imgLetter, 0, 0, 600, 600);
    setupCanvas();
  };
  //     });
  // }

  function onImageClick(e) {
    scaleImage(e.target);
  }

  function getRGB(str) {
    const match = str.match(
      /rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/
    );
    return match
      ? {
          // redValue: Number(match[1]),
          // greenValue: Number(match[2]),
          // blueValue: Number(match[3]),
          redValue: +match[1],
          greenValue: +match[2],
          blueValue: +match[3],
        }
      : {};
  }

  function setupCanvas() {
    // c.height = 300;
    c.height = 600;
    // c.width = 600;
    c.width = 800;

    // cx.lineCap = "round";
    // cx.font = `${fontWeightLetter} ${fontSizeLetter} ${font}`;
    // cx.fillStyle = letterInsideColor;
    // cx.textBaseline = "middle";

    cx.drawImage(imgLetter, 0, 0, 800, 600);

    // drawletter(letter, letterInsideColor);
    pixels = cx.getImageData(0, 0, c.width, c.height);

    // letterpixels = getpixelamount(redValue, greenValue, blueValue);
    // letterpixels = getpixelamount(
    //   color2.redValue,
    //   color2.greenValue,
    //   color2.blueValue
    // );
    letterpixels =
      getpixelamount(color2.redValue, color2.greenValue, color2.blueValue) +
      getpixelamount(redValue, greenValue, blueValue);
    // getpixelamount(redValue, greenValue, blueValue) +
    // getpixelamount(redValue2, greenValue2, blueValue2);
    // console.log(
    //   "🚀 ~ file: letterTracing.js:573 ~ setupCanvas ~ letterpixels:",
    //   letterpixels
    // );
    // &&
    // getpixelamount(redValue2, greenValue2, blueValue2);
  }

  function drawletter(letter, color) {
    let centerx = (c.width - cx.measureText(letter).width) / 2;
    let centery = c.height / 2;
    cx.fillStyle = color;

    cx.fillText(letter, centerx, centery);
    // drawletterBorder(letter);
    cx.drawImage(imgLetter, 0, 0, 800, 600);
  }

  // function drawletterBorder(letter) {
  function drawletterBorder() {
    let centerx = (c.width - cx.measureText(letter).width) / 2;
    let centery = c.height / 2;
    cx.lineWidth = 15;
    // cx.lineWidth = 100;
    cx.lineCap = "round";
    cx.strokeStyle = letterConturColor;
    // cx.strokeText(letter, centerx, centery);
    // cx.stroke(centerx, centery);
    cx.stroke();
  }

  function paint(x, y) {
    let colour = getpixelcolour(x, y);
    console.log("🚀 ~ file: letterTracing.js:624 ~ paint ~ colour:", colour);

    if (
      // colour.r !== redValue ||
      // colour.g !== greenValue ||
      // colour.b !== blueValue
      // colour.r !== redValue2 ||
      // colour.g !== greenValue2 ||
      // colour.b !== blueValue2
      // (colour.r !== redValue && colour.r !== color2.redValue) ||
      // (colour.g !== greenValue && colour.g !== color2.greenValue) ||
      // (colour.b !== blueValue && colour.b !== color2.blueValue)
      (colour.r !== redValue ||
        colour.g !== greenValue ||
        colour.b !== blueValue) &&
      (colour.r !== color2.redValue ||
        colour.g !== color2.greenValue ||
        colour.b !== color2.blueValue)
      // colour.r !== redValue ||
      // colour.r !== color2.redValue ||
      // colour.g !== greenValue ||
      // colour.g !== color2.greenValue ||
      // colour.b !== blueValue ||
      // colour.b !== color2.blueValue
    ) {
      console.log(4);
      // mousedown = false;
      // } else if (
      //   colour.r !== color2.redValue ||
      //   colour.g !== color2.greenValue ||
      //   colour.b !== color2.blueValue
      // ) {
      //   console.log(5);
      //   mousedown = false;
    } else {
      cx.strokeStyle = drowColor;

      cx.lineWidth = 28;
      // cx.lineWidth = 35;
      cx.lineTo(x, y);
      cx.stroke();
      cx.beginPath();
      cx.stroke();

      cx.beginPath();
      cx.moveTo(x, y);

      // drawletterBorder(letter);
      drawletterBorder();
    }
  }

  function getpixelcolour(x, y) {
    let index = y * (pixels.width * 4) + x * 4;
    return {
      r: pixels.data[index],
      g: pixels.data[index + 1],
      b: pixels.data[index + 2],
      a: pixels.data[index + 3],
    };
  }

  function getpixelamount(r, g, b) {
    // console.log(
    //   "🚀 ~ file: letterTracing.js:657 ~ getpixelamount ~ r, g, b:",
    //   r,
    //   g,
    //   b
    // );
    let pixels = cx.getImageData(0, 0, c.width, c.height);
    // console.log(
    //   "🚀 ~ file: letterTracing.js:641 ~ getpixelamount ~ pixels:",
    //   pixels
    // );

    let all = pixels.data.length;
    let amount = 0;
    for (let i = 0; i < all; i += 4) {
      if (
        pixels.data[i] === r &&
        pixels.data[i + 1] === g &&
        pixels.data[i + 2] === b
      ) {
        amount++;
      }
    }
    return amount;
  }

  function pixelthreshold() {
    // console.log(
    //   "🚀 ~ file: letterTracing.js ~ line 356 ~ pixelthreshold ~ letterpixels",
    //   letterpixels
    // );
    if (getpixelamount(r, g, b) / letterpixels > winPercent) {
      if (!isLetterComplete) {
        // pulse();
        checkingAnswerPositive(controlsBox, infoBox);
        togglePointerEventElement(taskWrapper.firstElementChild);
      }
    }
  }

  function pulse() {
    let size = parseInt(fontSizeLetter);

    audio.play();

    let timerId1 = setInterval(() => {
      size += 2;
      cx.clearRect(0, 0, c.width, c.height);
      cx.font = `${fontWeightLetter} ${size}px ${font}`;
      drawletter(letter, drowColor);
    }, 40);

    setTimeout(() => {
      clearInterval(timerId1);
      let timerId2 = setInterval(() => {
        size -= 2;
        cx.clearRect(0, 0, c.width, c.height);
        cx.font = `${fontWeightLetter} ${size}px ${font}`;
        drawletter(letter, drowColor);
      }, 40);
      setTimeout(() => {
        clearInterval(timerId2);
      }, 1000);
    }, 1000);

    isLetterComplete = true;
  }

  function onmousedown(ev) {
    mousedown = true;

    ev.preventDefault();
  }

  function onmouseup(ev) {
    mousedown = false;
    pixelthreshold();
    ev.preventDefault();
    cx.beginPath();
  }

  function onmousemove(ev) {
    if (mousedown) {
      let x = Math.round(ev.clientX - c.getBoundingClientRect().x);

      let y = Math.round(ev.clientY - c.getBoundingClientRect().y);

      paint(x, y);
    }
  }

  function reloadTask() {
    isLetterComplete = false;
    checkingAnswerReset(controlsBox, infoBox);
    setupCanvas();
    if (taskWrapper.firstElementChild.classList.contains("noEventElement")) {
      togglePointerEventElement(taskWrapper.firstElementChild);
    }
  }
}
