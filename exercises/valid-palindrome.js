/**
 * @see https://leetcode.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = s => {
  const lengthOfS = s.length

  if (lengthOfS === 0) {
    return false
  }

  if (lengthOfS === 1) {
    return true
  }

  const workString = s.toLowerCase().replace(/[^a-z0-9]+/g, '')

  let start = 0
  let end = workString.length - 1

  console.log(workString)
  do {
    if (workString[start] !== workString[end]) {
      return false
    }

    start++
    end--
  } while (start < end)

  return true
}

console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome('"ab_a"'))
