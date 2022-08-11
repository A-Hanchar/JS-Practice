/**
 * @see https://leetcode.com/problems/best-time-to-buy-and-sell-stock
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices => {
  //     let maxProfit = 0

  //   for(let i = 0; i < prices.length - 1; i++) {
  //     const buyPrice = prices[i]
  //     for(let j = i + 1; j < prices.length; j++) {
  //       const sellPrice = prices[j]

  //       const profit = sellPrice - buyPrice

  //       if(profit > maxProfit) {
  //         maxProfit = profit
  //       }
  //     }
  //   }

  //   return maxProfit

  let maxProfit = 0
  let minPrice = prices[0]

  for (let i = 1; i < prices.length; i++) {
    const sellPrice = prices[i]

    const profit = sellPrice - minPrice

    maxProfit = Math.max(maxProfit, profit)

    if (sellPrice < minPrice) minPrice = sellPrice
  }

  return maxProfit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7, 6, 4, 3, 1]))
