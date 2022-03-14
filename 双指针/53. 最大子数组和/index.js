/**
 * 53. 最大子数组和
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 子数组 是数组中的一个连续部分。
 *
 *
 * 解题思想：
 * 视窗解法，右边界不断探索，直到合数为负后重制左指针
 *
 *
 * 示例：
 * 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出：6
 * 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let res = nums[0];
  let l = 0;
  let r = 0;

  while (l < nums.length && r < nums.length) {
    let sum = nums[l]; // -2
    res = Math.max(res, nums[l]);
    if (sum <= 0) {
      l++;
      continue;
    }

    r = l;

    while (r < nums.length) {
      r++;
      if (r >= nums.length) break;
      sum += nums[r]; // -1
      res = Math.max(res, sum); // 0
      if (sum <= 0) {
        l = r + 1;
        r = l;
        sum = 0;
        break;
      }
    }
  }

  return res;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
