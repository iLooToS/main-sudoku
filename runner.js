// Используйте для решения судоку необходимые функции из файла sudoku.js
const solve = require('./sudoku');
const read = require('./sudoku');

solve(read((process.argv[2])));
