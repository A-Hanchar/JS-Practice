/**
 * @see https://leetcode.com/problems/group-anagrams
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = strs => {
  const sortString = strs.map(word => word.split('').sort().join(''))

  const map = new Map()

  for (let i = 0; i < sortString.length; i++) {
    const sortedWord = sortString[i]
    const currentWord = strs[i]

    if (map.has(sortedWord)) {
      const arrOfWords = map.get(sortedWord)

      map.set(sortedWord, [...arrOfWords, currentWord])

      continue
    }

    map.set(sortedWord, [currentWord])
  }

  const result = []

  for (const words of map.values()) {
    result.push(words)
  }

  return result
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
console.log(groupAnagrams(['']))
console.log(groupAnagrams(['a']))
