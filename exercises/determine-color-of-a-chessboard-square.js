/**
 * @see https://leetcode.com/problems/determine-color-of-a-chessboard-square
 * @param {string} coordinates
 * @return {boolean}
 */
const squareIsWhite = coordinates => {
  const oddsBlackLetters = ['a', 'c', 'e', 'g']

  const isOdd = coordinates[1] % 2 === 0

  return oddsBlackLetters.includes(coordinates[0]) ? isOdd : !isOdd
}

console.log(squareIsWhite('a1'))
console.log(squareIsWhite('h3'))
console.log(squareIsWhite('c7'))
console.log(squareIsWhite('c8'))
