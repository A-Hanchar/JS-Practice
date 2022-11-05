/**
 * @see https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = n => {
  let sum = 0
  let multi = 1

  const nAsString = new String(n)

  for (const digit of nAsString) {
    sum += +digit
    multi *= +digit
  }

  return multi - sum
}

console.log(subtractProductAndSum(234))
console.log(subtractProductAndSum(4421))
