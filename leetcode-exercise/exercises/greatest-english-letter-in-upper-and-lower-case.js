/**
 * @see https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case
 * @param {string} s
 * @return {string}
 */
const greatestLetter = s => {
  const lowersMap = new Set()
  const uppersMap = new Set()

  for (const letter of s) {
    if (lowersMap.has(letter) || uppersMap.has(letter)) continue

    if (letter === letter.toUpperCase()) {
      uppersMap.add(letter)

      continue
    }

    lowersMap.add(letter)
  }

  const letters = []

  lowersMap.forEach(lowerLetter => {
    if (uppersMap.has(lowerLetter.toUpperCase())) {
      letters.push(lowerLetter.toUpperCase())
    }
  })

  return letters.sort().at(-1) ?? ''
}

console.log(greatestLetter('lEeTcOdE'))
console.log(greatestLetter('arRAzFif'))
console.log(greatestLetter('AbCdEfGhIjK'))
