/**
 * @see https://leetcode.com/problems/unique-morse-code-words/
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = words => {
  if(words.length <= 1) {
    return words.length
  }

  const morseCodes = {
    'a': '.-',
    'b': '-...',
    'c': '-.-.',
    'd': '-..',
    'e': '.',
    'f': '..-.',
    'g': '--.',
    'h': '....',
    'i': '..',
    'j': '.---',
    'k': '-.-',
    'l': '.-..',
    'm': '--',
    'n': '-.',
    'o': '---',
    'p': '.--.',
    'q': '--.-',
    'r': '.-.',
    's': '...',
    't': '-',
    'u': '..-',
    'v': '...-',
    'w': '.--',
    'x': '-..-',
    'y': '-.--',
    'z': '--..',
  }

  const uniqWords = []

  for(const word of words) {
    word.toLowerCase()

    let transformWord = ''
    
    for(const letter of word) {
      transformWord += morseCodes[letter]
    }

    if(uniqWords.indexOf(transformWord) > -1) {
      continue
    }

    uniqWords.push(transformWord)
  }

  return uniqWords.length
}

console.log(uniqueMorseRepresentations(["gin","zen","gig","msg"]));