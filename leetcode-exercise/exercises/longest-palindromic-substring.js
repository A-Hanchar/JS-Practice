/**
 * @see https://leetcode.com/problems/longest-palindromic-substring
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = s => {
  let result = ''

  for (let i = 0; i < s.length; i++) {
    const leftLetters = s.length - i
    if (leftLetters <= result.length) break

    let lastIndex = s.length - 1

    while (lastIndex >= 0) {
      const checkedSubString = s.substring(i, lastIndex + 1)

      if (checkedSubString.length <= result.length) break

      if (isPalindrom(checkedSubString)) {
        if (checkedSubString.length > result.length) {
          result = checkedSubString
        }

        break
      }

      lastIndex--
    }
  }

  return result
}

function isPalindrom(str) {
  let lastIndex = str.length - 1

  for (let i = 0; i < lastIndex / 2; i++) {
    let x = str[i]
    let y = str[lastIndex - i]

    if (x != y) {
      return false
    }
  }

  return true
}

console.log(longestPalindrome('babad'))
console.log(longestPalindrome('cbbd'))
