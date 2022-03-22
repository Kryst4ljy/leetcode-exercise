/**
 * 03. 数组中重复的数字
 * 找出数组中重复的数字。
 * 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。
 *
 * 解题思路：
 * 创建一个 hash 表，数组的元素作为 key 值，出现重复 key 则代表有重复的数字
 *
 * 示例1：
 * 输入：
 * [2, 3, 1, 0, 2, 5, 3]
 * 输出：2 或 3
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  let res = undefined;
  const hash = {}; // 哈希表

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] === undefined) {
      hash[nums[i]] = nums[i];
    } else {
      res = nums[i];
      break;
    }
  }

  return res;
};

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));
