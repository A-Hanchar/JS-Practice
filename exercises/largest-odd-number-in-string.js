/**
 * @see https://leetcode.com/problems/largest-odd-number-in-string
 * @param {string} num
 * @return {string}
 */
const largestOddNumber = num => {
  let copyStr = num

  while (copyStr.length) {
    const lastDigit = Number(copyStr.at(-1))

    if (lastDigit % 2 !== 0) return `${copyStr}`

    copyStr = copyStr.slice(0, copyStr.length - 1)
  }

  return ''
}

console.log(largestOddNumber('239537672423884969653287101'))
// console.log(largestOddNumber('52'))
// console.log(largestOddNumber('4206'))
// console.log(largestOddNumber('35427'))
