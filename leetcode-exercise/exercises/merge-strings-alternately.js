/**
 * @see https://leetcode.com/problems/merge-strings-alternately
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = (word1, word2) => {
  const maxLength = Math.max(word1.length, word2.length)

  let result = ''

  for (let i = 0; i < maxLength; i++) {
    if (word1[i]) result += word1[i]
    if (word2[i]) result += word2[i]
  }

  return result
}

console.log(mergeAlternately('abc', 'pqr'))
console.log(mergeAlternately('ab', 'pqrs'))
console.log(mergeAlternately('abcd', 'pq'))
