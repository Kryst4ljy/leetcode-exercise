/**
 * 739. 每日温度
 * 给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指在第 i 天之后，才会有更高的温度。如果气温在这之后都不会升高，请在该位置用 0 来代替。
 *
 *
 *
 * 解题思路：
 * 单调递减栈
 * 1. 遇到小于等于栈顶的温度，直接入栈。
 * 2. 遇到大于栈顶的温度，依次结算之前的值。
 * 3. 最后如果栈不为空，遍历栈元素，每个栈元素的 index 下标记为 0。
 */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const stack = []; // 单调递减栈
  const res = [];

  for (let i = 0; i < temperatures.length; i++) {
    // 栈为空 - 直接推入
    if (stack.length === 0) {
      stack.push({ val: temperatures[i], index: i });
      continue;
    }
    let len = stack.length - 1;
    let f = false;
    for (let j = len; j >= 0; j--) {
      // 小于等于栈顶元素 - 直接推入
      if (stack[j].val >= temperatures[i]) {
        stack.push({ val: temperatures[i], index: i });
        f = true;
        break;
      }
      // 大于栈顶元素 - 依次结算
      let node = stack.pop();
      res[node.index] = i - node.index;
    }
    // 入栈
    !f && stack.push({ val: temperatures[i], index: i });
  }

  if (stack.length === 0) return res;
  for (let i = 0; i < stack.length; i++) {
    res[stack[i].index] = 0;
  }
  return res;
};
