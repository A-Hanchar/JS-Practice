/**
 * @see https://leetcode.com/problems/minimum-moves-to-convert-string/
 * @param {string} s
 * @return {number}
 */
const minimumMoves = s => {
  let steps = 0

  let idx = 0

  while (idx < s.length) {
    const firstLetter = s[idx] ?? ''

    if (firstLetter === 'O') {
      idx++
      continue
    }

    const secondLetter = s[idx + 1] ?? ''
    const thirdLetter = s[idx + 2] ?? ''

    const checkStr = firstLetter + secondLetter + thirdLetter

    if (checkStr.includes('X')) steps++

    idx += 3
  }

  return steps
}

console.log(minimumMoves('XXX'))
console.log(minimumMoves('XXOX'))
console.log(minimumMoves('OOOO'))
console.log(minimumMoves('OXOX'))
