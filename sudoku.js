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
const boardExperemental = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [2, 2, 2, 2, 2, 2, 2, 2, 2], [2, 2, 2, 2, 2, 2, 2, 2, 2], [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const boardExample = [
  [null, 2, 3, 4, null, 6, 7, null, 9], [1, 2, 3, null, 5, 6, 7, 8, 9], [1, null, 3, null, 5, 6, 7, 8, null],
  [1, 2, null, 4, 5, null, 7, 8, 9], [1, 2, null, 4, 5, 6, null, 8, 9], [1, 2, 3, 4, null, 6, 7, 8, null],
  [1, 2, null, 4, null, 6, 7, null, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, null, 8, 9],
];

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
function solve(board) {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
  for (let i = 0; i < board.length; i++) {
    // console.log('ROW');
    // console.table(board[i]);
    for (let j = 0; j < board[i].length; j++) {
      // console.log('COLUMN');
      // console.table(board[i][j]);
      if (board[i][j] === null) {
        for (let k = 1; k < 10; k++) {
          if (true) {
          // if (isSolved(board, i, j, k)) {
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

// function isSolved(arr) {
//   /**
//    * Принимает игровое поле в том формате, в котором его вернули из функции solve.
//    * Возвращает булевое значение — решено это игровое поле или нет.
//    */
//   let result = true;
//   let count = 1;

//   for (let i = 1; i <= arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       count++;
//       if (arr[i][j] === arr[i + (10 - count)][j] || arr[i][j] === arr[i + (9 - count)][j] || arr[i][j] === arr[i + (8 - count)][j] || arr[i][j] === arr[i + (7 - count)][j] || arr[i][j] === arr[i + (6 - count)][j] || arr[i][j] === arr[i + (5 - count)][j] || arr[i][j] === arr[i + (4 - count)][j] || arr[i][j] === arr[i + (3 - counti)][j]) {
//         result = false;
//       }
//       if (arr[i][j] === arr[i][j + (10 - count)] || arr[i][j] === arr[i][j + (9 - count)] || arr[i][j] === arr[i][j + (8 - count)] || arr[i][j] === arr[i][j + (7 - count)] || arr[i][j] === arr[i][j + (6 - count)] || arr[i][j] === arr[i][j + (5 - count)] || arr[i][j] === arr[i][j + (4 - count)] || arr[i][j] === arr[i][j + (3 - count)]) {
//         result = false;
//       }
//       if (arr[i][j] === null) {
//         result = false;
//       }

//       // let cloneArr = [...arr]
//       // let newArr = []
//       // let oneArr = cloneArr.flat()

//       // let block1 = []
//       // let block2 = []
//       // let block3 = []
//       // let block4 = []
//       // let block5 = []
//       // let block6 = []
//       // let block7 = []
//       // let block8 = []
//       // let block9 = []

//       // for (let k = 0; k < oneArr.length; k++) {
//       //   (if k = 0 || k = 1)
//       // }
//     }
//   }

//   return result;
// }

// function prettyBoard(board) {
//   for (let i = 0; i < board.length; i++) {
//     if (i % 3 === 0 && i !== 0) {
//       console.log('--- --- ---');
//     }
//     let newStr = '';
//     for (let j = 0; j < board[i].length; j++) {
//       if (j % 3 === 0 && j !== 0) {
//         newStr += '|';
//       }
//       if (board[i][j] === 0) {
//         newStr += ' ';
//       } else {
//         newStr += board[i][j];
//       }
//       newStr += ' ';
//     }
//     console.log(newStr);
//   }
//   return newStr;
// }
