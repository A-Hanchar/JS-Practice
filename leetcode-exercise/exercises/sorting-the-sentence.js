/**
 * @see https://leetcode.com/problems/sorting-the-sentence
 * @param {string} s
 * @return {string}
 */
const sortSentence = s => {
  const arrOfWord = s.split(' ')

  const scoreWords = new Array(arrOfWord.length)

  arrOfWord.forEach(word => {
    const wordIdx = Number(word.slice(-1))

    scoreWords[wordIdx] = word.slice(0, -1)
  })

  return scoreWords.join(' ').trim()
}

console.log(sortSentence('is2 sentence4 This1 a3'))
console.log(sortSentence('Myself2 Me1 I4 and3'))
