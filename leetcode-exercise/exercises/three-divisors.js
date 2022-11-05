/**
 * @see https://leetcode.com/problems/three-divisors
 * @param {number} n
 * @return {boolean}
 */
const isThree = n => {
  if (n <= 3) return false

  const middle = Math.floor(n / 2)

  let result = 2

  for (let i = 2; i <= middle; i++) {
    if (n % i === 0) result++

    if (result >= 4) return false
  }

  return result === 3
}

console.log(isThree(2))
console.log(isThree(4))
