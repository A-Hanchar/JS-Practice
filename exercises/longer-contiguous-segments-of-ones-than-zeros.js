/**
 * @see https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros
 * @param {string} s
 * @return {boolean}
 */
const checkZeroOnes = s => {
  let longestQueueOfZero = 0
  let longestQueueOfOne = 0

  let queueOfZero = 0
  let queueOfOne = 0

  for (const letter of s) {
    if (letter === '1') {
      queueOfOne++
      queueOfZero = 0

      if (queueOfOne > longestQueueOfOne) {
        longestQueueOfOne = queueOfOne
      }
    }

    if (letter === '0') {
      queueOfOne = 0
      queueOfZero++

      if (queueOfZero > longestQueueOfZero) {
        longestQueueOfZero = queueOfZero
      }
    }
  }

  return longestQueueOfOne > longestQueueOfZero
}

console.log(checkZeroOnes('1101'))
console.log(checkZeroOnes('111000'))
console.log(checkZeroOnes('110100010'))
