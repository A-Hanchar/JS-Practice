/**
 * @see https://leetcode.com/problems/excel-sheet-column-number
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = columnTitle => {
  let result = 0

  for (let i = columnTitle.length - 1; i >= 0; i--) {
    const numOfLetter = columnTitle[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1

    result += numOfLetter * 26 ** (columnTitle.length - 1 - i)
  }

  return result
}

console.log(titleToNumber('A'))
console.log(titleToNumber('AB'))
console.log(titleToNumber('ZY'))

/**
 * A -> 1
 * B -> 2
 * C -> 3
 ...
 * Z -> 26
 * AA -> 27
 * AB -> 28 
...
 */

/**
 * ZZ 702
 * AA 703
 * ABA 729
 *
 * [1-26] [27-]
 */
