/**
 * 300. 最长递增子序列
 * 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
 * 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。
 *
 *
 * 解题思路：
 * 维护一个单调递增栈，记录长度。 🙅‍♂️
 * 动态规划 - 未学习
 * 
 * 遍历数组中的每一个数，记录此时最长值为 1，然后向前遍历。
 * 遇到比他大的直接跳过，遇到比他小的，从记录 map 中取出 j 的值 + 1 后，与自身存在 map 中的值对比，去较大值。
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
  let res = 1;
  let map = [];

  for (let i = 0; i < nums.length; i++) {
    map[i] = 1;

    for (j = i - 1; j >= 0; j--) {
      // 遇到大于等于的 则跳过
      if (nums[j] >= nums[i]) {
        continue;
      } else {
        map[i] = Math.max(map[i], map[j] + 1);
        res = Math.max(res, map[i]);
      }
    }
  }

  return res;
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
