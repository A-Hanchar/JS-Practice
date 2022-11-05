/**
 * @see https://leetcode.com/problems/occurrences-after-bigram
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
const findOcurrences = (text, first, second) => {
  const arrOfWords = text.split(' ')

  let currentIdx = 0

  const result = []

  while (currentIdx < arrOfWords.length - 2) {
    if (arrOfWords[currentIdx] === first && arrOfWords[currentIdx + 1] === second) {
      result.push(arrOfWords[currentIdx + 2])
    }

    currentIdx++
  }

  return result
}

console.log(findOcurrences('alice is a good girl she is a good student', 'a', 'good'))
console.log(findOcurrences('we will we will rock you', 'we', 'will'))
console.log(findOcurrences('we we we we will rock you', 'we', 'we'))
