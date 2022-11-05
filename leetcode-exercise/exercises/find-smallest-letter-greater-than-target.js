/**
 * @see https://leetcode.com/problems/find-smallest-letter-greater-than-target
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = (letters, target) => {
  let foundedLetter = letters[0]

  if (target === 'z') return foundedLetter

  for (const element of letters) {
    if (element > target) {
      foundedLetter = element
      break
    }
  }

  return foundedLetter
}

console.log(nextGreatestLetter(['c', 'f', 'j'], 'a'))
console.log(nextGreatestLetter(['c', 'f', 'j'], 'c'))
console.log(nextGreatestLetter(['c', 'f', 'j'], 'd'))
console.log(nextGreatestLetter(['c', 'f', 'j'], 'j'))
