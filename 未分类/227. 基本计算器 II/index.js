/**
 * 227. 基本计算器 II
 * 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。
 *
 * 整数除法仅保留整数部分。
 *
 * 你可以假设给定的表达式总是有效的。所有中间结果将在 [-231, 231 - 1] 的范围内。
 *
 * 注意：不允许使用任何将字符串作为数学表达式计算的内置函数，比如 eval() 。
 *
 *
 *
 * 解题思路：双栈
 * 运算符栈：+ - 入栈，* / 挂起，直接先出栈结算。
 * 数字栈：正常入栈，遇到 * /，结算最后两位，得到结果新入栈。
 *
 * 更新：优化
 * 只有一个数字栈维护数字，一个变量记录符号值
 * + 直接入栈，- 标记为负数入栈，* / 标记要进行一次结算
 * 最后一轮累加获得结果
 *
 *
 * 示例：
 * 输入：s = "3+2*2"
 * 输出：7
 */

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const stack = [];
  let symbol = "+"; // 标记上一次计算符号
  let f = true;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") continue;
    // 数字入栈
    if (/^[0-9]/.test(s[i]) && !f) {
      stack[stack.length - 1] += s[i];
      continue;
    } else if (/^[0-9]/.test(s[i]) && f) {
      stack.push(symbol === "-" ? `-${s[i]}` : s[i]);
      f = false;
      continue;
    }
    // 上一次如果未 * /，需要结算一次
    if (symbol === "*") {
      let num1 = Number(stack.pop());
      let num2 = Number(stack.pop());
      stack.push(num1 * num2);
    } else if (symbol === "/") {
      let num1 = Number(stack.pop());
      let num2 = Number(stack.pop());
      stack.push(parseInt(num2 / num1));
    }
    symbol = s[i];
    f = true;
  }

  // 最后一次计算
  if (symbol === "*") {
    let num1 = Number(stack.pop());
    let num2 = Number(stack.pop());
    stack.push(num1 * num2);
  } else if (symbol === "/") {
    let num1 = Number(stack.pop());
    let num2 = Number(stack.pop());
    stack.push(parseInt(num2 / num1));
  }

  // 累加
  let res = 0;
  for (let i = 0; i < stack.length; i++) {
    res += Number(stack[i]);
  }
  return res;
};

console.log(calculate("14-3/2"));
