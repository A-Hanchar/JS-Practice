/**
 * @see https://leetcode.com/problems/kth-distinct-string-in-an-array
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
const kthDistinct = (arr, k) => {
  const mapWords = new Map()

  for (const word of arr) {
    const countOfWord = mapWords.get(word) ?? 0

    mapWords.set(word, countOfWord + 1)
  }

  let checkedWords = 0

  for (let word of mapWords) {
    if (word[1] === 1) checkedWords++

    if (checkedWords === k) return word[0]
  }

  return ''
}

console.log(kthDistinct(['d', 'b', 'c', 'b', 'c', 'a'], 2))
console.log(kthDistinct(['aaa', 'aa', 'a'], 1))
console.log(kthDistinct(['a', 'b', 'a'], 3))
