function init() {
  const canvas = document.getElementById("puzzle15");
  canvas.width = 320; // задаём размеры холста
  canvas.height = 320;

  const cellSize = canvas.width / 4;
  const context = canvas.getContext("2d");
  const field = new Game15(); // создаём объект пятнашек
  field.mix(350); // тщательно перемешиваем содердимое коробки
  field.setCellView(function (x, y) {
    // задаём внешний вид пятнашек

    context.fillStyle = "#16d9e3";
    context.fillRect(x + 1, y + 1, cellSize - 2, cellSize - 2);
  });
  field.setNumView(function () {
    // параметры шрифта для цифр
    context.font = "bold " + cellSize / 2 + "px Sans";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = "#222";
  });

  context.fillStyle = "#bbfafd";
  context.fillRect(0, 0, canvas.width, canvas.height);
  field.draw(context, cellSize);
  canvas.onclick = function (e) {
    // обрабатываем клики мышью
    const x = ((e.pageX - canvas.offsetLeft) / cellSize) | 0;
    const y = ((e.pageY - canvas.offsetTop) / cellSize) | 0;

    onBoardClick(x, y, field, context, cellSize, canvas);
  };
  canvas.ontouchend = function (e) {
    // обрабатываем касания пальцем
    const x = ((e.touches[0].pageX - canvas.offsetLeft) / cellSize) | 0;
    const y = ((e.touches[0].pageY - canvas.offsetTop) / cellSize) | 0;

    onBoardClick(x, y, field, context, cellSize, canvas);
  };
}

class Game15 {
  cellView = null;
  numView = null;
  arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 0],
  ];
  clicks = 0;

  getNull() {
    // функция возвращает координату пустой клетки
    for (let i = 0; i < 4; i += 1) {
      for (let j = 0; j < 4; j += 1) {
        if (this.arr[j][i] === 0) {
          return { x: i, y: j };
        }
      }
    }
  }
  // функция возвращает произвольное логическое значение
  getRandomBool() {
    if (Math.floor(Math.random() * 2) === 0) {
      return true;
    }
  }
  // метод возвращает число касаний

  getClicks() {
    return this.clicks;
  }
  // метод перемещает "пятнашку" в пустую клутку

  move(x, y) {
    const nullX = this.getNull().x;
    const nullY = this.getNull().y;
    if (
      ((x - 1 == nullX || x + 1 == nullX) && y == nullY) ||
      ((y - 1 == nullY || y + 1 == nullY) && x == nullX)
    ) {
      this.arr[nullY][nullX] = this.arr[y][x];
      this.arr[y][x] = 0;
      this.clicks++;
    }
  }
  // проверка условия победы

  victory() {
    const e = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 0],
    ];
    let res = true;
    for (let i = 0; i < 4; i += 1) {
      for (let j = 0; j < 4; j += 1) {
        if (e[i][j] !== this.arr[i][j]) {
          res = false;
        }
      }
    }
    return res;
  }
  // метод "перемешивает" пятнашки

  mix(stepCount) {
    let x, y;
    for (let i = 0; i < stepCount; i += 1) {
      const nullX = this.getNull().x;
      const nullY = this.getNull().y;
      const hMove = this.getRandomBool();
      const upLeft = this.getRandomBool();
      if (!hMove && !upLeft) {
        y = nullY;
        x = nullX - 1;
      }
      if (hMove && !upLeft) {
        x = nullX;
        y = nullY + 1;
      }
      if (!hMove && upLeft) {
        y = nullY;
        x = nullX + 1;
      }
      if (hMove && upLeft) {
        x = nullX;
        y = nullY - 1;
      }
      if (0 <= x && x <= 3 && 0 <= y && y <= 3) {
        this.move(x, y);
      }
    }
    this.clicks = 0;
  }
  // внешний вид пятнашки

  setCellView(func) {
    this.cellView = func;
  }
  // параметры шрифта цифр

  setNumView(func) {
    this.numView = func;
  }
  // Метод рисующий наши пятнашки на холсте

  draw(context, size) {
    for (let i = 0; i < 4; i += 1) {
      for (let j = 0; j < 4; j += 1) {
        if (this.arr[i][j] > 0) {
          if (this.cellView !== null) {
            this.cellView(j * size, i * size);
          }
          if (this.numView !== null) {
            this.numView();
            context.fillText(
              this.arr[i][j],
              j * size + size / 2,
              i * size + size / 2
            );
          }
        }
      }
    }
  }
}

function onBoardClick(x, y, field, context, cellSize, canvas) {
  // функция производит необходимые действие при клике(касанию)
  field.move(x, y);
  context.fillStyle = "#222";
  context.fillRect(0, 0, canvas.width, canvas.height);
  field.draw(context, cellSize);
  if (field.victory()) {
    // если головоломка сложена, то пятнашки заново перемешиваются
    alert("Собрано за " + field.getClicks() + " касание!"); // вывод сообщения о выигрыше!!
    field.mix(300);
    context.fillStyle = "#222";
    context.fillRect(0, 0, canvas.width, canvas.height);
    field.draw(context, cellSize);
  }
}

init();
