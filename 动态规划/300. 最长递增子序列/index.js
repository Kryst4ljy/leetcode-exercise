/**
 * 300. 最长递增子序列
 * 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
 * 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。
 *
 *
 * 解题思路：
 * 维护一个单调递增栈，记录长度。 🙅‍♂️
 * 动态规划
 *
 *
 * 示例：
 * 输入：nums = [10,9,2,5,3,7,101,18]
 * 输出：4
 * 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let res = 0;
  let stack = []; // 单调递增栈

  for (let i = 0; i < nums.length; i++) {
    dfs(nums[i], i);
  }

  function dfs(num, i) {
    // 入栈
    if (stack.length === 0 || stack[stack.length - 1] < num) {
      stack.push(num);
      res = Math.max(res, stack.length);
      return;
    }
    // 遇到当前元素小于栈wei
    if (stack[stack.length - 1] >= num) {
      console.log("出栈", num);
      stack.pop();
      dfs(num);
    }
  }

  console.log(res);
};

console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));
