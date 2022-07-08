/**
 *
 * @param {string} romanString
 */
const romanToInteger = romanString => {
  const reverse = romanString.split('').reverse().join('')

  const arabValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  const canSubtraction = ['I', 'X', 'C', 'M']

  let countLetters = reverse.length

  let index = 0
  let result = 0

  while (index < countLetters) {
    const current = reverse[index]
    const next = reverse[index + 1]

    result += arabValues[current]

    if (arabValues[current] > arabValues[next] && canSubtraction.includes(next)) {
      result -= arabValues[next]

      index += 2
      continue
    }

    index++
  }

  return result
}

console.log(romanToInteger('CM'))
console.log(romanToInteger('III'))
console.log(romanToInteger('LVIII'))
console.log(romanToInteger('MCMXCIV'))
console.log(romanToInteger('DCXXI'))
