/**
 * 905. 按奇偶排序数组
 * 给定一个非负整数数组 A，返回一个数组，在该数组中， A 的所有偶数元素之后跟着所有奇数元素。
 *
 * 你可以返回满足此条件的任何数组作为答案。
 *
 *
 * 解题思路：
 * 奇数 push，偶数 unshift
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    nums[i] % 2 === 0 ? res.unshift(nums[i]) : res.push(nums[i]);
  }

  return res;
};
