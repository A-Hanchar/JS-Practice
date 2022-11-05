/**
 * @see https://leetcode.com/problems/valid-anagram
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false
  }

  const sSort = s.split('').sort().join('')
  const tSort = t.split('').sort().join('')

  return sSort === tSort
}

console.log(isAnagram('anagram', 'nagaram'))
console.log(isAnagram('rat', 'car'))
