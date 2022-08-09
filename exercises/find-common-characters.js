/**
 * @see https://leetcode.com/problems/find-common-characters
 * @param {string[]} words
 * @return {string[]}
 */
const commonChars = words => {
  const result = []

  for (const letter of words[0]) {
    let isAddLetter = true

    for (let i = 1; i < words.length; i++) {
      if (!words[i].includes(letter)) {
        isAddLetter = false
        break
      }

      const updateWord = words[i].replace(letter, '')
      words[i] = updateWord
    }

    isAddLetter && result.push(letter)
  }

  return result
}

console.log(commonChars(['bella', 'label', 'roller']))
console.log(commonChars(['cool', 'lock', 'cook']))
