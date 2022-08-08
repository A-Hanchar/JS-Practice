/**
 * @see https://leetcode.com/problems/count-asterisks
 * @param {string} s
 * @return {number}
 */
const countAsterisks = s => {
  const letterLine = '|'
  const letterAsterisk = '*'
  
  let isLineOpen = false

  let countAsterisk = 0

  for(const letter of s) {
    if(![letterAsterisk, letterLine].includes(letter)) continue

    if(letter === letterLine) {
      isLineOpen = !isLineOpen       

      continue
    }

    if(letter === letterAsterisk && !isLineOpen) countAsterisk++
  }

  return countAsterisk
}

console.log(countAsterisks('l|*e*et|c**o|*de|'))
console.log(countAsterisks('iamprogrammer'))
console.log(countAsterisks('yo|uar|e**|b|e***au|tifu|l'))
