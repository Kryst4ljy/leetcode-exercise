/**
 * 122. 买卖股票的最佳时机 II
 * 给定一个数组 prices ，其中 prices[i] 表示股票第 i 天的价格。
 * 在每一天，你可能会决定购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以购买它，然后在 同一天 出售。
 * 返回 你能获得的 最大 利润 。
 *
 *
 * 解题思路：
 * 单调递增栈，因为同一时间只能有一支股票持有，所以栈只存一个数。
 * 遇到比他小的，直接弹出。
 * 遇到比他大的，结算后弹出。
 *
 *
 * 示例：
 * 输入: prices = [7,1,5,3,6,4]
 * 输出: 7
 * 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
 *      随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let res = 0;
  let stack = prices[0];

  for (let i = 1; i < prices.length; i++) {
    // 价格比之前的小，弹出
    if (prices[i] <= stack) {
      stack = prices[i];
    } else {
      res += prices[i] - stack;
      stack = prices[i];
    }
  }

  return res;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
