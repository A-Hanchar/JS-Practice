/**
 * @see https://leetcode.com/problems/capitalize-the-title
 * @param {string} title
 * @return {string}
 */
const capitalizeTitle = title =>
  title
    .split(' ')
    .map(word => {
      let lowerWord = word.toLowerCase()

      if (word.length >= 3) {
        lowerWord = lowerWord[0].toUpperCase() + lowerWord.slice(1)
      }

      return lowerWord
    })
    .join(' ')

console.log(capitalizeTitle('capiTalIze tHe titLe'))
console.log(capitalizeTitle('First leTTeR of EACH Word'))
console.log(capitalizeTitle('i lOve leetcode'))
