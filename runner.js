const solve = require('./sudoku');
const read = require('./sudoku');
const isSolved = require('./sudoku');

solve(read((process.argv[2])));
console.table(solve(board));