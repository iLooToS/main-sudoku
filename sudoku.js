/* eslint-disable no-unreachable-loop */

function read(num) {
  const fs = require('fs');
  const { EOL } = require('os');
  const board = fs.readFileSync('puzzles.txt', 'utf-8');
  const boardAllSudoku = board.split(EOL);
  let arrSudoku;
  for (let i = 0; i <= boardAllSudoku.length; i += 1) {
    arrSudoku = boardAllSudoku[num - 1].split('');
    break;
  }
  const playingField = [];
  for (let i = 0; i < arrSudoku.length; i += 9) {
    playingField.push(arrSudoku.slice(i, i + 9));
  }
  const result = playingField.map((row) => row.map((el) => {
    if (el === '-') {
      return el = null;
    }
    return Number(el);
  }));
  return result;
}

// console.table(read(1));
const board = read(1);
console.table(board);
function solve(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === null) {
        for (let k = 1; k < 10; k++) {
          // if (true) {
          if (isSolved(board, i, j, k)) {
            board[i][j] = k;
            if (solve(board)) {
              return board;
            }
            board[i][j] = null;
          }
        }
        return false;
      }
    }
  }
  return board;
}

console.table(solve(board));
// let noone = solve(board)
// console.log(noone);

function isSolved(arr) {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
  let result = true;
  let count = 1;

  for (let i = 1; i <= arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      count++;
      if (arr[i][j] === arr[i + (10 - count)][j] || arr[i][j] === arr[i + (9 - count)][j] || arr[i][j] === arr[i + (8 - count)][j] || arr[i][j] === arr[i + (7 - count)][j] || arr[i][j] === arr[i + (6 - count)][j] || arr[i][j] === arr[i + (5 - count)][j] || arr[i][j] === arr[i + (4 - count)][j] || arr[i][j] === arr[i + (3 - counti)][j]) {
        result = false;
      }
      if (arr[i][j] === arr[i][j + (10 - count)] || arr[i][j] === arr[i][j + (9 - count)] || arr[i][j] === arr[i][j + (8 - count)] || arr[i][j] === arr[i][j + (7 - count)] || arr[i][j] === arr[i][j + (6 - count)] || arr[i][j] === arr[i][j + (5 - count)] || arr[i][j] === arr[i][j + (4 - count)] || arr[i][j] === arr[i][j + (3 - count)]) {
        result = false;
      }
      if (arr[i][j] === null) {
        result = false;
      }
    }
  }

  return result;
}

function prettyBoard(board) {
  for (let i = 0; i < board.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      console.log('--- --- ---');
    }
    let newStr = '';
    for (let j = 0; j < board[i].length; j++) {
      if (j % 3 === 0 && j !== 0) {
        newStr += '|';
      }
      if (board[i][j] === 0) {
        newStr += ' ';
      } else {
        newStr += board[i][j];
      }
      newStr += ' ';
    }
    console.log(newStr);
  }
  return newStr;
}

module.exports = {
  solve,
  read,
};
