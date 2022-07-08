/**
 * @see https://leetcode.com/problems/integer-to-roman/
 * @param {number} num
 */
const integerToRoman = num => {
  const romanValues = {
    1000: 'M',
    900: 'CM',
    800: 'DCCC',
    700: 'DCC',
    600: 'DC',
    500: 'D',
    400: 'CD',
    300: 'CCC',
    200: 'CC',
    100: 'C',
    90: 'XC',
    80: 'LXXX',
    70: 'LXX',
    60: 'LX',
    50: 'L',
    40: 'XL',
    30: 'XXX',
    20: 'XX',
    10: 'X',
    9: 'IX',
    8: 'VIII',
    7: 'VII',
    6: 'VI',
    5: 'V',
    4: 'IV',
    3: 'III',
    2: 'II',
    1: 'I',
  }

  const countM = Math.floor(num / 1000) // count M

  const numWithoutM = (num - 1000 * countM).toString()
  const lastDigit = numWithoutM[numWithoutM.length - 1]

  const result = [romanValues[lastDigit]]

  let pow = 0

  for (let i = numWithoutM.length - 2; i >= 0; i--) {
    pow++

    if (numWithoutM[i] === '0') {
      continue
    }

    result.unshift(romanValues[numWithoutM[i] * Math.pow(10, pow)])
  }

  result.unshift(romanValues[1000].repeat(countM))

  return result.join('')
}

integerToRoman(1994) //"MCMXCIV"
console.log(integerToRoman(100))
console.log(integerToRoman(700))
