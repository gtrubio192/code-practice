/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
// My solution - Consistiently off by 1
// var maxProfit = function(prices, fee) {
//     let profits = 0;
//     for(let i = 1; i < prices.length; i++) {
//         if(prices[i] > prices[i-1]) {
//             console.log('New profit of :', prices[i] - prices[i-1] - fee, " at ", prices[i])
//             profits += prices[i] - prices[i-1]
//             profits -= fee
//             console.log('current profits: ', profits)
//         }
//     }
    
//     return profits;
// };

/**
Idea:
This proplem is an introduction to state machine logic. In order to solve it, we can consider the two possible distinct states of being: having no stock and being ready to buy (buying) and owning stock and being ready to sell (selling).

We just need to iterate through the prices (P) and keep track of the best possible value for these two states of being for each day. The difficulty is that the tracks of the two states cross over regulary.

For example, if we consider the state of being ready to buy stock after this iteration (buying), it can be reached from being ready to buy today and doing nothing, OR it can be reached by being ready to sell today and selling (with the additional fee [F]). We just need to pick whichever one yields the best value.

The same is true of the selling state. The new selling state is the better result between the previous selling state with no action and the previous buying state with a stock purchase today.

*/
var maxProfit = function(P, F) {
  let len = P.length, buying = 0, selling = -P[0]
  console.log('-P[0]',  -P[0])
  for (let i = 1; i < len; i++) {
      console.log('selling + P[i] - F :', selling + P[i] - F)
      console.log('buying - P[i] :', buying - P[i])
      buying = Math.max(buying, selling + P[i] - F)
      selling = Math.max(selling, buying - P[i])
      console.log('buying :', buying)
      console.log('selling :', selling, '\n')
  }
  return buying
};