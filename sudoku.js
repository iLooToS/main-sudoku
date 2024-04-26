const boardDesc =[[1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9],
[1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9],
[1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]];

function read(num) {
  const fs = require('fs');
  const { EOL } = require("os");
  const board = fs.readFileSync('puzzles.txt', 'utf-8');
  const boardAllSudoku = board.split(EOL);
  let arrSudoku;
  for (let i = 0; i <= boardAllSudoku.length; i += 1) {
    arrSudoku = boardAllSudoku[num - 1].split("");
    break;
  }
  let playingField = [];
  for (let i = 0; i < arrSudoku.length; i += 9) {
    playingField.push(arrSudoku.slice(i, i + 9));
  }
  const result = playingField.map((row) => row.map((el) => {
    if (el === '-') {
     return el = null;
    } else {
      return el
    }
  }))
  return playingField;
}


function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
