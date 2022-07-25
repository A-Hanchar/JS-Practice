/**
 * @see https://leetcode.com/problems/plus-one
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = digits => {
  const lastDigit = digits.at(-1)

  if (lastDigit >= 0 && lastDigit <= 8) {
    digits[digits.length - 1] = lastDigit + 1

    return digits
  }

  if (digits.length === 1) return [1, 0]

  const result = [0]

  for (let i = digits.length - 2; i >= 0; i--) {
    if (digits[i] === 9) {
      result.unshift(0)

      if (i === 0) {
        result.unshift(1)
      }

      continue
    }

    result.unshift(...digits.slice(0, i), digits[i] + 1)
    break
  }

  return result
}

console.log(plusOne([1, 2, 3]))
console.log(plusOne([4, 3, 2, 1]))
console.log(plusOne([9]))
console.log(plusOne([9, 9]))
console.log(plusOne([8, 9, 9, 9]))
console.log(plusOne([9, 9, 8, 9, 9, 9]))
console.log(plusOne([9, 9, 9, 9, 9, 9]))
