/**
 * @see https://leetcode.com/problems/unique-number-of-occurrences
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = arr => {
  const map = new Map()

  for (const num of arr) {
    let countOfEntries = map.get(num) ?? 0

    map.set(num, countOfEntries + 1)
  }

  const uniqMapValues = [...new Set(map.values())]

  return uniqMapValues.length === map.size
}

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]))
console.log(uniqueOccurrences([1, 2]))
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]))
