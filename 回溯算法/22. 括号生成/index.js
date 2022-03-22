/**
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 *
 * 示例1：
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 *
 * 示例2:
 * 输入：n = 1
 * 输出：["()"]
 *
 * 解题思路：
 * 遍历出所有的（ 和 ）括号的路径，剔除不满足条件的节点。
 * 输入 n = 1; 每次都是便利两遍 也就是 n * 2次 --- 因为括号都是成对出现的。
 * 条件1：跳过首位为 ）的所有分支（都是以左括号开头的）
 * 条件2：当左括号数小于右括号数的时候，删除分支。
 * 条件3：左右括号数量得相同。
 */

/**
 * @param {number} n
 * @return {string[]}
 * @description 第一个版本
 */
var generateParenthesis1 = function (n) {
  let res = [];
  const path = [];
  const nums = ["(", ")"];

  dfs(path, 0);
  return res;
  function dfs(path, index) {
    if (index === n * 2) {
      const r = choose(path);
      r && res.push(r);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (index === 0 && i === 1) continue; // 跳过首位为 ）的所有分支
      path.push(nums[i]);
      dfs(path, index + 1);
      path.pop();
    }
  }
  function choose(arr) {
    let left = 0;
    let right = 0;
    let f = false;
    arr.forEach((m) => {
      m === "(" && left++;
      m === ")" && right++;
      left < right && (f = true);
    });
    if (f) return undefined;
    if (left === right) {
      return arr.join("");
    }
  }
};

console.log(generateParenthesis(2));

/**
 * @param {number} n
 * @return {string[]}
 * @description 第二个版本
 */
var generateParenthesis2 = function (n) {
  let arr = ["(", ")"];
  const path = [];
  const res = [];
  let l = 0; // 左括号记为 +1，
  let r = 0; // 右括号记为 +1

  dfs();
  function dfs() {
    // 若右括号比左括号多 或 左括号大于n 或 右括号大于n 跳出
    if (r > l || l > n || r > n) {
      return;
    }
    if (path.length === n * 2) {
      res.push(path.join(""));
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      path.push(arr[i]);
      if (i === 0) {
        l++;
      } else {
        r++;
      }
      dfs();
      path.pop();
      if (i === 0) {
        l--;
      } else {
        r--;
      }
    }
  }

  return res;
};
