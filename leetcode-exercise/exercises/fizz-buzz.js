/**
 * @see https://leetcode.com/problems/fizz-buzz
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = n => {
  const fizzBuzzArray = new Array(n)

  for (let i = 1; i <= n; i++) {
    const value =
      (!(i % 15) && 'FizzBuzz') || (!(i % 5) && 'Buzz') || (!(i % 3) && 'Fizz') || `${i}`

    fizzBuzzArray[i - 1] = value
  }

  return fizzBuzzArray
}

console.log(fizzBuzz(3))
console.log(fizzBuzz(5))
console.log(fizzBuzz(15))
