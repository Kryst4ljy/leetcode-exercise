/**
 * 162. 寻找峰值
 * 峰值元素是指其值严格大于左右相邻值的元素。
 * 给你一个整数数组 nums，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回 任何一个峰值 所在位置即可。
 * 你可以假设 nums[-1] = nums[n] = -∞ 。
 * 你必须实现时间复杂度为 O(log n) 的算法来解决此问题。
 *
 *
 * 解题思路：
 * 从头到尾遍历固然可以找到，但是时间复杂度为 O(n)，不符合题意。
 * 当看到时间复杂度为 O(log n) 时，必然要想到二分查找。
 * 但是二分查找，必然是有条件的，就是下一次往左还是往右查找。
 * 而此题是找山峰。
 * 往小的那边走，一定是低谷，有可能会遇到山峰，也有可能会一直是低谷。
 * 而往大的那边走。只要遇到右边有一个小的值，就一定能找到山峰。
 *
 * 比如第一次二分：3 5 6。
 * 如果继续往左二分，需要满足 3 是低谷，而左两位为 小于3 大于3 3，这样子的。
 * 而往右的话 只需要右一位满足即可，如 5 6 小于 6.
 *
 *
 * 示例：
 * 输入：nums = [1,2,3,1]
 * 输出：2
 * 解释：3 是峰值元素，你的函数应该返回其索引 2。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  if (nums.length === 1) return 0;
  if (nums.length === 2) return nums[0] > nums[1] ? 0 : 1;
  let res = -1;

  dfs(0, nums.length - 1);
  function dfs(l, r) {
    if (res !== -1) return;
    if (l + 1 === r) {
      if (l === 0 && nums[l] > nums[r]) {
        res = l;
        return;
      }
      if (r === nums.length - 1 && nums[l] < nums[r]) {
        res = r;
        return;
      }
    }
    const half = Math.floor((r - l + 1) / 2) + l; // 中值
    // 找到了山峰
    // 左边界
    if (half === 0 && nums[half] > nums[half + 1]) {
      res = half;
      return;
    }
    // 右边界
    if (half === nums.length - 1 && nums[half] > nums[half - 1]) {
      res = half;
      return;
    }
    // 中间
    if (nums[half] > nums[half - 1] && nums[half] > nums[half + 1]) {
      res = half;
      return;
    }
    // 左边的大，往左走
    if (nums[half] < nums[half - 1]) {
      dfs(l, half);
    }
    // 右边的大，往右走
    if (nums[half] < nums[half + 1]) {
      dfs(half, r);
    }
  }

  return res;
};

console.log(findPeakElement([2,1]));
