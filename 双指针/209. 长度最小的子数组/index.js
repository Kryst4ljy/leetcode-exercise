/**
 * 209. 长度最小的子数组
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
 *
 * 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。
 *
 *
 * 解题思路：
 * 滚动窗口
 *
 *
 *
 * 示例：
 * 输入：target = 7, nums = [2,3,1,2,4,3]
 * 输出：2
 * 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
 */

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let l = 0; // 左指针
  let r = 0; // 右指针
  let res;
  let sum = 0;
  let f = false;

  while (l < nums.length && r < nums.length) {
    !f && (sum += nums[r]);
    // 小于，右指针走
    if (sum < target && r !== nums.length - 1) {
      r++;
      f = false;
      continue;
    }
    if (sum < target && r === nums.length - 1) {
      sum -= nums[l];
      l++;
      continue;
    }
    // 大于等于，结算 + 左指针走
    if (sum >= target) {
      res = res === undefined ? r - l + 1 : Math.min(res, r - l + 1);
      // sum = sum - nums[l] - nums[r];
      sum -= nums[l];
      l++;
      // r--;
      f = true;
      continue;
    }
  }

  return res === undefined ? 0 : res;
};
