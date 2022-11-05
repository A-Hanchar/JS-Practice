/**
 * @see https://leetcode.com/problems/is-subsequence
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
  if (s.length > t.length) return false
  if (s.length === t.length) return s === t

  let lastIndex = t.length

  for (let i = s.length - 1; i >= 0; i--) {
    const lastLetterS = s[i]

    const index = t.lastIndexOf(lastLetterS, lastIndex - 1)

    if (index === -1) return false

    lastIndex = index
  }

  return true
}

console.log(isSubsequence('abc', 'ahbgdc'))
console.log(isSubsequence('axc', 'ahbgdc'))
console.log(isSubsequence('bb', 'ahbgdc'))
