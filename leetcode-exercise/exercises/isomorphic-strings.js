/**
 * @see https://leetcode.com/problems/isomorphic-strings
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
  if (s.length !== t.length) return false

  const mapS = new Map()
  const mapT = new Map()

  for (let i = 0; i < s.length; i++) {
    const letterS = s[i]
    const letterT = t[i]

    if (mapS.has(letterS) && mapS.get(letterS) !== letterT) return false

    mapS.set(letterS, letterT)

    if (mapT.has(letterT) && mapT.get(letterT) !== letterS) return false

    mapT.set(letterT, letterS)
  }

  return true
}

console.log(isIsomorphic('egg', 'add'))
console.log(isIsomorphic('foo', 'bar'))
console.log(isIsomorphic('paper', 'title'))
console.log(isIsomorphic('badc', 'baba'))
