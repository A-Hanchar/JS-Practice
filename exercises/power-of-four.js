/**
 * @see https://leetcode.com/problems/power-of-four
 * @param {number} n
 * @return {boolean}
 * solution almost same as find power of three (see file ./power-of-three)
 */
const isPowerOfFour = n => {
  if (n === 1) return true

  const lastDigit = n % 10

  const map = new Map()
  map.set(4, 1)
  map.set(6, 2)

  if (map.get(lastDigit) === null) return false

  let power = map.get(lastDigit)
  let powerOfFour = Math.pow(4, power)

  while (powerOfFour <= n) {
    if (powerOfFour === n) return true

    power = power + 2
    powerOfFour = Math.pow(4, power)
  }

  return false
}

console.log(isPowerOfFour(16))
console.log(isPowerOfFour(15))
console.log(isPowerOfFour(4))
