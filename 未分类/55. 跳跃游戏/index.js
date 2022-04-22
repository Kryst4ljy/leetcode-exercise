/**
 * 55. 跳跃游戏
 * 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
 *
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 *
 * 判断你是否能够到达最后一个下标。
 *
 *
 * 解题思路：跳就完事了
 *
 *
 *
 * 示例：
 * 输入：nums = [2,3,1,1,4]
 * 输出：true
 * 解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let res = false;
  let index = 0;
  let end = nums.length - 1; // 最后一个点的下标
  let set = new Set();

  while (index >= 0) {
    if (set.has(index)) {
      index--;
      continue;
    }
    set.add(index);
    if (nums[index] >= end - index) {
      res = true;
      break;
    }
    if (nums[index] === 0) {
      index--;
    } else {
      index += nums[index];
    }
  }

  return res;
};

console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false
console.log(canJump([2, 5, 0, 0])); // true
