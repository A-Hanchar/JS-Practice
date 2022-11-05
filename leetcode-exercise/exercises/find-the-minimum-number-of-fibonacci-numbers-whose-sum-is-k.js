/**
 * @see https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k
 * @param {number} k
 * @return {number}
 */
const findMinFibonacciNumbers = k => {
  const fibonacci = [1, 1]

  for (let i = 2; i <= k; i++) {
    const newFibonacciNum = fibonacci[i - 2] + fibonacci[i - 1]

    if (newFibonacciNum > k) break

    fibonacci[i] = newFibonacciNum
  }

  let index = fibonacci.length - 1

  if (k === fibonacci[index]) return 1

  let countNum = 0

  do {
    k -= fibonacci[index]
    countNum++

    index = fibonacci.findIndex(item => item > k)

    if (index > 0) index--
  } while (k !== 0)

  return countNum
}

//  1, 1, 2, 3, 5, 8, 13, ...
console.log(findMinFibonacciNumbers(3))
console.log(findMinFibonacciNumbers(5))
console.log(findMinFibonacciNumbers(7))
console.log(findMinFibonacciNumbers(10))
console.log(findMinFibonacciNumbers(19))
