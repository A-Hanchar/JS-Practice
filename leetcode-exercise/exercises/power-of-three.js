/**
 * @see https://leetcode.com/problems/power-of-three
 * @param {number} n
 * @return {boolean}
 * Observation 1: If there is a power of three number, it will definitely end with either 3, 9 , 7 or 1.

Observation 2 : If a number ends with one of these 4 digits, we only have to check the powers of three which would guarantee a number ending with that last digit. For example, if a given number ends with 1, it must be a 4th or 8th or 12th and so on power of three, if at all.

Now since we are clear with the observations, let’s have a look at the algorithm.

Algorithm :  

Step 1: If the given number, n, is not ending with 3,9,7 or 1, it means that the number is not a power of three, therefore return FALSE.

Step 2 : If not, we create a Map with 4 entries in it in order to maintain the mapping between the powers to three(1,2,3,4) and the number’s last digits(3,9,7,1).

Step 3 : Extract the last digit from a given number and look up it’s corresponding power in the map.

Step 4 :  If this power when raised to three equals  the number, n, return TRUE.

Step 5 : If this power raised to three is less than the number, n, increment the power straight by 4 and loop step 4 until the power raised to three becomes more than n.  

Step 6 : If the power raised to three becomes more than the given number, return FALSE.
 */
const isPowerOfThree = n => {
  if (n === 1) return true

  const lastDigit = n % 10

  const map = new Map()
  map.set(3, 1)
  map.set(9, 2)
  map.set(7, 3)
  map.set(1, 4)

  if (map.get(lastDigit) === null) return false

  let power = map.get(lastDigit)
  let powerOfThree = Math.pow(3, power)

  while (powerOfThree <= n) {
    if (powerOfThree === n) return true

    power = power + 4
    powerOfThree = Math.pow(3, power)
  }

  return false
}

console.log(isPowerOfThree(27))
console.log(isPowerOfThree(0))
console.log(isPowerOfThree(9))
