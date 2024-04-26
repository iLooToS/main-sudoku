/* eslint-disable max-len */
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

const board = read(process.argv[2]);

function solve(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === null) {
        for (let k = 1; k < 10; k++) {
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

function isSolved(board, row, col, num) {
  for (let i = 0; i < board.length; i++) {
    if (board[i][col] === num || board[row][i] === num) {
      return false;
    }
  }
  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;
  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (board[i][j] === num) {
        return false;
      }
    }
  }
  return true;
}

console.table(solve(board));

module.exports = {
  solve,
  read,
  isSolved,
};

// function isSolved(arr) {
//   let result = true;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] === arr[i + (9 - (i + 1))][j] || arr[i][j] === arr[i + (8 - (i + 1))][j] || arr[i][j] === arr[i + (7 - (i + 1))][j] || arr[i][j] === arr[i + (6 - (i + 1))][j] || arr[i][j] === arr[i + (5 - (i + 1))][j] || arr[i][j] === arr[i + (4 - (i + 1))][j] || arr[i][j] === arr[i + (3 - (i + 1))][j] || arr[i][j] === arr[i + (2 - (i + 1))][j]) {
//         result = false;
//       }
//       if (arr[i][j] === arr[i][j + (9 - (i + 1))] || arr[i][j] === arr[i][j + (8 - (i + 1))] || arr[i][j] === arr[i][j + (7 - (i + 1))] || arr[i][j] === arr[i][j + (6 - (i + 1))] || arr[i][j] === arr[i][j + (5 - (i + 1))] || arr[i][j] === arr[i][j + (4 - (i + 1))] || arr[i][j] === arr[i][j + (3 - (i + 1))] || arr[i][j] === arr[i][j + (2 - (i + 1))]) {
//         result = false;
//       }
//       if (arr[i][j] === null) {
//         result = false;
//       }
//     }
//   }

//   const cloneArr = [...arr];
//   // console.log(cloneArr);
//   const oneArr = cloneArr.flat();

//   const block1 = [];
//   const block2 = [];
//   const block3 = [];
//   const block4 = [];
//   const block5 = [];
//   const block6 = [];
//   const block7 = [];
//   const block8 = [];
//   const block9 = [];

//   for (let k = 0; k < oneArr.length; k++) {
//     if (k === 0 || k === 1 || k === 2 || k === 9 || k === 10 || k === 11 || k === 18 || k === 19 || k === 20) {
//       block1.push(oneArr[k]);
//     } else if (k === 3 || k === 4 || k === 5 || k === 12 || k === 13 || k === 14 || k === 21 || k === 22 || k === 23) {
//       block2.push(oneArr[k]);
//     } else if (k === 6 || k === 7 || k === 8 || k === 15 || k === 16 || k === 17 || k === 24 || k === 25 || k === 26) {
//       block3.push(oneArr[k]);
//     } else if (k === 27 || k === 28 || k === 29 || k === 36 || k === 37 || k === 38 || k === 45 || k === 46 || k === 47) {
//       block4.push(oneArr[k]);
//     } else if (k === 30 || k === 31 || k === 32 || k === 39 || k === 40 || k === 41 || k === 48 || k === 49 || k === 50) {
//       block5.push(oneArr[k]);
//     } else if (k === 33 || k === 34 || k === 35 || k === 42 || k === 43 || k === 44 || k === 51 || k === 52 || k === 53) {
//       block6.push(oneArr[k]);
//     } else if (k === 54 || k === 55 || k === 56 || k === 63 || k === 64 || k === 65 || k === 72 || k === 73 || k === 74) {
//       block7.push(oneArr[k]);
//     } else if (k === 57 || k === 58 || k === 59 || k === 66 || k === 67 || k === 68 || k === 75 || k === 76 || k === 77) {
//       block8.push(oneArr[k]);
//     } else if (k === 60 || k === 61 || k === 62 || k === 69 || k === 70 || k === 71 || k === 78 || k === 79 || k === 80) {
//       block9.push(oneArr[k]);
//     }
//   }

//   const b1 = block1.reduce((a, b) => a + b, 0);
//   const b2 = block2.reduce((a, b) => a + b, 0);
//   const b3 = block3.reduce((a, b) => a + b, 0);
//   const b4 = block4.reduce((a, b) => a + b, 0);
//   const b5 = block5.reduce((a, b) => a + b, 0);
//   const b6 = block6.reduce((a, b) => a + b, 0);
//   const b7 = block7.reduce((a, b) => a + b, 0);
//   const b8 = block8.reduce((a, b) => a + b, 0);
//   const b9 = block9.reduce((a, b) => a + b, 0);
//   const allB = b1 + b2 + b3 + b4 + b5 + b6 + b7 + b8 + b9;
//   if (allB !== 405) {
//     result = false;
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
