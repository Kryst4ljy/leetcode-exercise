/**
 * 剑指 Offer 21. 调整数组顺序使奇数位于偶数前面
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。
 *
 *
 *
 * 解题思路：遍历数组，奇数 unshift 偶数 push
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      res.push(nums[i]);
    } else {
      res.unshift(nums[i]);
    }
  }

  return res;
};
