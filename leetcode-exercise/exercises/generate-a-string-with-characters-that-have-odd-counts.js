/**
 * @see https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts
 * @param {number} n
 * @return {string}
 */
const generateTheString = n => {
  let result = 'z'.repeat(n - 1)

  result += n % 2 === 0 ? 'p' : 'z'

  return result
}

console.log(generateTheString(4))
console.log(generateTheString(2))
console.log(generateTheString(7))
