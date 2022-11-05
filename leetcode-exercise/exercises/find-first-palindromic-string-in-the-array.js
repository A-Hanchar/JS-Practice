/**
 * @see https://leetcode.com/problems/find-first-palindromic-string-in-the-array
 * @param {string[]} words
 * @return {string}
 */
const firstPalindrome = words => {
  for (const word of words) {
    if (word === word.split('').reverse().join('')) return word
  }

  return ''
}

console.log(firstPalindrome(['abc', 'car', 'ada', 'racecar', 'cool']))
console.log(firstPalindrome(['notapalindrome', 'racecar']))
console.log(firstPalindrome(['def', 'ghi']))
