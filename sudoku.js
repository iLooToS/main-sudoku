const boardDesc =[[1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9],
[1, 2, 3, 4, null, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9],
[1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]];

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

function isSolved(arr) {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
  let result = true
  let count = 1

  for(let i = 1; i <= arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      count++
      if (arr[i][j] === arr[i+(10-count)][j] || arr[i][j] === arr[i+(9-count)][j] || arr[i][j] === arr[i+(8-count)][j] || arr[i][j] === arr[i+(7-count)][j] || arr[i][j] === arr[i+(6-count)][j] || arr[i][j] === arr[i+(5-count)][j] || arr[i][j] === arr[i+(4-count)][j] || arr[i][j] === arr[i+(3-counti)][j]) {
        result = false
      }
      if (arr[i][j] === arr[i][j+(10-count)] || arr[i][j] === arr[i][j+(9-count)] || arr[i][j] === arr[i][j+(8-count)] || arr[i][j] === arr[i][j+(7-count)] || arr[i][j] === arr[i][j+(6-count)] || arr[i][j] === arr[i][j+(5-count)] || arr[i][j] === arr[i][j+(4-count)] || arr[i][j] === arr[i][j+(3-count)]) {
        result = false
      }
      if (arr[i][j] === null) {
        result = false
      }
      
      // let cloneArr = [...arr]
      // let newArr = []
      // let oneArr = cloneArr.flat()

      // let block1 = []
      // let block2 = []
      // let block3 = []
      // let block4 = []
      // let block5 = []
      // let block6 = []
      // let block7 = []
      // let block8 = [] 
      // let block9 = []

      // for (let k = 0; k < oneArr.length; k++) {
      //   (if k = 0 || k = 1)
      // }



    }
  }

  return result
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
