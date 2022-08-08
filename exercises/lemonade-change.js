/**
 * @see https://leetcode.com/problems/lemonade-change
 * @param {number[]} bills
 * @return {boolean}
 */
const lemonadeChange = bills => {
  if (bills[0] !== 5) return false

  const billsCount = new Map()

  billsCount.set(5, 1)
  billsCount.set(10, 0)
  billsCount.set(20, 0)

  for (let i = 1; i < bills.length; i++) {
    const countBills = billsCount.get(bills[i])
    billsCount.set(bills[i], countBills + 1)

    if (bills[i] === 5) continue

    const countFives = billsCount.get(5)
    const countTens = billsCount.get(10)

    if (bills[i] === 10) {
      if (countFives === 0) return false

      billsCount.set(5, countFives - 1)

      continue
    }

    if (bills[i] === 20) {
      if (countFives === 0) return false

      if (countTens > 0) {
        billsCount.set(5, countFives - 1)
        billsCount.set(10, countTens - 1)

        continue
      }

      if (countTens === 0) {
        if (countFives < 3) return false

        billsCount.set(5, countFives - 3)
      }
    }
  }

  return true
}

console.log(lemonadeChange([5, 5, 5, 10, 20]))
console.log(lemonadeChange([5, 5, 10, 10, 20]))
