/**
 * @see https://leetcode.com/problems/percentage-of-letter-in-string
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
const percentageLetter = (s, letter) => {
  let countLetter = 0

  for (const checkedLetter of s) {
    if (letter === checkedLetter) countLetter++
  }

  return Math.floor((countLetter / s.length) * 100)
}

console.log(percentageLetter('foobar', 'o'))
console.log(percentageLetter('jjjj', 'k'))
