const solve = require('./sudoku');
const read = require('./sudoku');

solve(read((process.argv[2])));

