/**
 * @see https://leetcode.com/problems/longest-common-prefix/
 * @param {string[]} strs
 */
const longestCommonPrefix = strs => {
  // const shortedWord = strs.reduce((a, c) => (c.length < a.length ? c : a), strs[0])

  if (strs.length === 1) {
    return strs[0]
  }

  let result = ''

  for (let i = 0; i < strs[0].length; i++) {
    let isEnd = false

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== strs[0][i]) {
        isEnd = true

        break
      }
    }

    if (isEnd) {
      break
    }

    result += strs[0][i]
  }

  return result
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
console.log(longestCommonPrefix(['dog', 'racecar', 'car']))
console.log(longestCommonPrefix(['cir', 'car']))
console.log(longestCommonPrefix(['cir']))
console.log(longestCommonPrefix(['flower', 'flower', 'flower', 'flower']))
console.log(longestCommonPrefix(['c', 'acc', 'ccc']))
