const boardDesc = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
];

console.table(boardDesc);

function read() {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
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
const fs = require('fs');
const { EOL } = require('os');

function prettyBoard(func) {
  func = isSolved();
  for (let i = 0; i < func.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      console.log('--- --- ---');
    }
    let newStr = '';
    for (let j = 0; j < func[i].length; j++) {
      if (j % 3 === 0 && j !== 0) {
        newStr += '|';
      }
      if (func[i][j] === 0) {
        newwStr += ' ';
      } else {
        newwStr += func[i][j];
      }
      newStr += ' ';
    }
    console.log(newStr);
  }
}
prettyBoard(isSolved());
