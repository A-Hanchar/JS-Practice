/**
 * @see https://leetcode.com/problems/reverse-integer
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
  //   const reverseNum = [...Math.abs(x).toString()].reverse().join('')
  //   return Math.pow(2,31) < reverseNum ? 0 : Math.sign(x) * reverseNum;

  const xLettersArr = [...`${Math.abs(x)}`]

  const middle = xLettersArr.length / 2

  for (let i = 0; i < middle; i++) {
    const left = xLettersArr[i]
    const right = xLettersArr.at(-i - 1)

    xLettersArr[i] = right
    xLettersArr[xLettersArr.length - 1 - i] = left
  }

  const reverseNum = Number(xLettersArr.join(''))

  return Math.pow(2, 31) < reverseNum ? 0 : reverseNum * Math.sign(x)
}

console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))
