/**
 * @see https://leetcode.com/problems/find-the-difference
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = (s, t) => {
  if (!s) return t

  const sortedS = s.split('').sort().join('')
  const sortedT = t.split('').sort().join('')

  for (let i = 0; i < sortedT.length; i++) {
    if (sortedS[i] !== sortedT[i]) return sortedT[i]
  }
}

console.log(findTheDifference('abcd', 'abcde'))
console.log(findTheDifference('', 'y'))
