/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
const buddyStrings = (s, goal) => {
  for(let i = 0; i < s.length - 1; i++) {    
    for(let j = 1; j < s.length; j++) {
      const firstLetter = s[i]
      const secondLetter = s[j]

      let chekStr = s
      chekStr[i] = secondLetter
      chekStr[j] = firstLetter
      console.log(chekStr, s);
    }
  }

  return false
}

console.log(buddyStrings('ab', 'ba'))
console.log(buddyStrings('abcd', 'cbad'))
