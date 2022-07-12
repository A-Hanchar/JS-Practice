/**
 * @see https://leetcode.com/problems/divide-two-integers/
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = (dividend, divisor) => {
  if (dividend === -Math.pow(2, 31) && divisor === -1) return Math.pow(2, 31) - 1
  if (divisor === 1) return dividend
  if (dividend === divisor) return 1

  let result = 0

  const isPositiveDividend = dividend > 0
  const isPositiveDivisor = divisor > 0

  let positiveDividend = isPositiveDividend ? dividend : -dividend
  let positiveDivisor = isPositiveDivisor ? divisor : -divisor

  while (positiveDividend >= positiveDivisor) {
    result++
    positiveDividend -= positiveDivisor
  }

  return isPositiveDividend + isPositiveDivisor === 1 ? -result : result
}

console.log(divide(-10, -1))
console.log(divide(-10, 1))
console.log(divide(10, -1))
console.log(divide(10, 3))
console.log(divide(7, -3))
console.log(divide(-2147483648, -1))
