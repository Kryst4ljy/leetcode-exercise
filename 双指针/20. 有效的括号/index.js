/**
 * 20. 有效的括号
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 *
 *
 * 解题思路：
 * 维护一个数组，存入左括号，右括号的时候，判断栈顶是否为它的左括号，是的话消除，不是返回 false。
 *
 *
 * 示例：
 * 输入：s = "()"
 * 输出：true
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let len = s.length;
  if (len % 2 !== 0) return false;
  let nums = s.split("");
  let stack = [];

  for (let i = 0; i < len; i++) {
    if (nums[i] === "(" || nums[i] === "[" || nums[i] === "{") {
      stack.push(nums[i]);
    } else if (nums[i] === ")") {
      if (stack.pop() === "(") continue;
      return false;
    } else if (nums[i] === "}") {
      if (stack.pop() === "{") continue;
      return false;
    } else if (nums[i] === "]") {
      if (stack.pop() === "[") continue;
      return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid("{[}]"));
