/**
 * 169. 多数元素
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 * 
 * 
 * 解题思路：
 * 遍历数组，map 存储值，遇到超过的 直接返回结果
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = 1;
      if (1 > nums.length / 2) return nums[i];
      continue;
    }
    if (++map[nums[i]] > nums.length / 2) return nums[i];
  }
};
