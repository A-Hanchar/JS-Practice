/**
 * @see https://leetcode.com/problems/calculate-money-in-leetcode-bank
 * @param {number} n
 * @return {number}
 */
const totalMoney = n => {
  const countWeeks = Math.ceil(n / 7)

  // 1 2 3 4 5 6 7  28
  // 2 3 4 5 6 7 8 35
  // 3 4 5 6 7 8 9 42
  // 4 5 6 7 8 9 10 49
  // 5 6 7 8 9 10 11 56
  // 6 7 8 9 10 11 12 63

  // 28 (28*1 + 7*0)
  //63 (28*2 + 7*1)
  //105 (28*3 + 7*3)
  //154 (28*4 + 7*6)
  //210 (28*5 + 7*10)
  //273 (28*6 + 7*15)

  let powSeven = 0

  for (let i = 0; i <= countWeeks - 1; i++) {
    powSeven += i
  }

  let result = 28 * countWeeks + 7 * powSeven

  let notCountDays = countWeeks * 7 - n
  let lastDayMoney = countWeeks + 6

  while (notCountDays !== 0) {
    result -= lastDayMoney

    lastDayMoney--
    notCountDays--
  }

  return result
}

console.log(totalMoney(4))
console.log(totalMoney(10))
console.log(totalMoney(20))
console.log(totalMoney(21))
console.log(totalMoney(22))
