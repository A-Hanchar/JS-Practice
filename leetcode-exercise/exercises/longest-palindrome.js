/**
 * @see https://leetcode.com/problems/longest-palindrome
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = s => {
  if (s.length <= 1) return s.length

  const countOfLetters = new Map()

  for (const letter of s) {
    const countOfLetter = countOfLetters.get(letter) ?? 0

    countOfLetters.set(letter, countOfLetter + 1)
  }

  let isNeedToAddOneLetter = false
  const result = Array.from(countOfLetters.values()).reduce((acc, currentItem) => {
    if (currentItem >= 2) {
      const pairs = Math.floor(currentItem / 2)

      if (pairs * 2 !== currentItem) {
        isNeedToAddOneLetter = true

        return acc + currentItem - 1
      }

      return acc + currentItem
    }

    isNeedToAddOneLetter = true

    return acc
  }, 0)

  return result + isNeedToAddOneLetter
}

console.log(longestPalindrome('abccccdd'))
console.log(longestPalindrome('a'))
console.log(longestPalindrome('aaa'))
console.log(longestPalindrome('aaaAaaaa'))
