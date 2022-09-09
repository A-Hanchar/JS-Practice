/**
 * @see https://leetcode.com/problems/letter-combinations-of-a-phone-number
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = digits => {
  if (!digits.length) return []

  const digitsMap = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  }

  let result = []

  function backtrack(str, index) {
    if (str.length == digits.length) {
      result.push(str)

      return
    }

    for (let char of digitsMap[digits[index]]) {
      backtrack(str + char, index + 1)
    }
  }

  backtrack('', 0)

  return result
}

console.log(letterCombinations('23'))
console.log(letterCombinations(''))
console.log(letterCombinations('2'))
console.log(letterCombinations('2334'))
