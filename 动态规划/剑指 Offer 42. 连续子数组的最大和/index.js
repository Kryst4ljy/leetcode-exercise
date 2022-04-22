/**
 * 剑指 Offer 42. 连续子数组的最大和
 * 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。
 *
 * 要求时间复杂度为O(n)。
 *
 *
 *
 * 解题思路：
 * 动态规划：dp[i] = dp[i - 1] + f[i];
 *
 *
 * 输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const dp = [nums[0]];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let res = dp[i - 1] <= 0 ? 0 : dp[i - 1]; // 记录上一次的值
    let cur = nums[i];
    if (res > 0) {
      cur += res;
    }
    max = Math.max(max, cur);
    dp[i] = cur > 0 ? cur : 0;
  }

  return max;
};

console.log(maxSubArray([-2, 1]));
