/**
 * @see https://leetcode.com/problems/ransom-note
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
  const magazineMap = new Map()

  for (const letter of magazine) {
    const countOfLetter = magazineMap.get(letter) ?? 0

    magazineMap.set(letter, countOfLetter + 1)
  }

  for (const letter of ransomNote) {
    const leftLetterCount = magazineMap.get(letter)

    if (!leftLetterCount) {
      return false
    }

    magazineMap.set(letter, leftLetterCount - 1)
  }

  return true
}

console.log(canConstruct('a', 'b'))
console.log(canConstruct('aa', 'ab'))
console.log(canConstruct('aa', 'aab'))
console.log(canConstruct('bg', 'efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj'))
