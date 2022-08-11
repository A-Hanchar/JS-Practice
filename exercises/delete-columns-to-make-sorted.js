/**
 * @see https://leetcode.com/problems/delete-columns-to-make-sorted
 * @param {string[]} strs
 * @return {number}
 */
const minDeletionSize = strs => {
  let result = 0

  const lengthWords = strs[0].length

  for (let i = 0; i < lengthWords; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j - 1][i] > strs[j][i]) {
        result++

        break
      }
    }
  }

  return result
}

console.log(minDeletionSize(['cba', 'daf', 'ghi']))
console.log(minDeletionSize(['a', 'b']))
console.log(minDeletionSize(['zyx', 'wvu', 'tsr']))
