/**
 * 32. 最长有效括号
 * 给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。
 *
 *
 * 解题思路：
 * 1. 左括号 >= 右括号
 * 2. 左括号 <= Math.floor(字符长度 / 2)
 * 3. 右括号 <= Math.floor(字符长度 / 2)
 * 4. 结算：res = 小的那个数 * 2（因为最多也是只有这几个括号能组成一对）
 *
 *
 * 示例：
 * 输入：s = "(()"
 * 输出：2
 * 解释：最长有效括号子串是 "()"
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  const arr = s.split("");
  let l = 0; // 左括号计数
  let r = 0; // 右括号计数
  let max = Math.floor(arr.length / 2); // 最大括号对数

  for (let i = 0; i < arr.length; i++) {
    // 左括号 <= Math.floor(字符长度 / 2)
    if (arr[i] === "(" && l < max) {
      l++;
      continue;
    }
    // 右括号 <= Math.floor(字符长度 / 2)
    if (arr[i] === ")" && r < max && r < l) {
      r++;
      continue;
    }
  }

  console.log(l, r);
  return Math.min(l, r) * 2;
};

console.log(longestValidParentheses("()(()"));
