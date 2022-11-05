/**
 * @see https://leetcode.com/problems/shuffle-string
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = (s, indices) => {
  const resultLettersArray = new Array(indices.length)

  for (let i = 0; i < indices.length; i++) {
    const indexOfLetter = indices[i]

    resultLettersArray[indexOfLetter] = s[i]
  }

  return resultLettersArray.join('')
}

// const restoreString = function (s, indices, arr = []) {
//   indices.forEach((res, i) => (arr[res] = s[i]))

//   return arr.join('')
// }

console.log(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]))
console.log(restoreString('abc', [0, 1, 2]))
