/**
 * @see https://leetcode.com/problems/reverse-string
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = s => {
  const lastReversedIndex = s.length / 2

  for (let i = 0; i < lastReversedIndex; i++) {
    const current = s[i]
    const withReverseLetter = s[s.length - 1 - i]

    s[s.length - 1 - i] = current
    s[i] = withReverseLetter
  }

  return s
}

console.log(reverseString(['h', 'e', 'l', 'l', 'o']))
console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h']))
