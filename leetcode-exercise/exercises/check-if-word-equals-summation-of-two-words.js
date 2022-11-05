/**
 * @see https://leetcode.com/problems/check-if-word-equals-summation-of-two-words
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
const isSumEqual = (firstWord, secondWord, targetWord) => {
  /**
   *
   * @param {string} s
   * @return {number}
   */
  const convertStringIntoNumber = s => {
    const lettersCodes = {
      a: 0,
      b: 1,
      c: 2,
      d: 3,
      e: 4,
      f: 5,
      g: 6,
      h: 7,
      i: 8,
      j: 9,
    }

    const generatedNumberArr = s.split('').map(letter => lettersCodes[letter])

    return Number(generatedNumberArr.join(''))
  }

  const first = convertStringIntoNumber(firstWord)
  const second = convertStringIntoNumber(secondWord)
  const target = convertStringIntoNumber(targetWord)

  return first + second === target
}

console.log(isSumEqual('acb', 'cba', 'cdb'))
console.log(isSumEqual('aaa', 'a', 'aab'))
console.log(isSumEqual('aaa', 'a', 'aaaa'))
