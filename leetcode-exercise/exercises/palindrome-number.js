/**
 * @see https://leetcode.com/problems/palindrome-number/
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => {
  if (x < 0 || (x != 0 && x % 10 === 0)) {
    return false
  }

  const xString = String(x)

  let firstIndex = 0
  let lastIndex = xString.length - 1

  do {
    if (xString[firstIndex] !== xString[lastIndex]) {
      return false
    }

    firstIndex++
    lastIndex--
  } while (firstIndex < lastIndex)

  return true
}

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))
console.log(isPalindrome(123321))
console.log(isPalindrome(12321))
