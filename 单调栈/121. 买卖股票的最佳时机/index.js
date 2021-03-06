/**
 * 121. 买卖股票的最佳时机
 * 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
 * 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
 * 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
 *
 *
 * 解题思路：
 * 一、单调递增栈
 * 1. 创建一个单调递增栈，传入价格：[7]
 * 2. 遇到大的价格，直接推入。计算当前差值，保存差值
 * 3. 遇到比当前小的价格，弹出所有之前比当前价格大的价格，因为后续的计算肯定根据新插入的小的价格来结算，这样价值才能最大化：[1]
 * 4. Math.max(栈顶 - 栈尾, 差值)就为最大价格。
 *
 *
 * 二、优化
 * 1. 维护一个最小值。
 * 2. 遇到比他大的就计算差值。
 * 3. 遇到比他更小的，更新最小值。
 *
 * 示例1：
 * 输入：[7,1,5,3,6,4]
 * 输出：5
 * 解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
 * 注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
 *
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let res = 0;
  let min = prices[0];

  for (let i = 1; i < prices.length; i++) {
    // 遇到比他更小的，更新最小值。
    if (prices[i] <= min) {
      min = prices[i];
    } else {
      // 遇到比他大的就计算差值。
      res = Math.max(res, prices[i] - min);
    }
  }

  return res;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
