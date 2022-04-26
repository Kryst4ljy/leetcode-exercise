/**
 * 剑指 Offer 39. 数组中出现次数超过一半的数字
 *
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 *
 *
 * 解题思路：
 * 哈希表存储当前数字的个数，出现超过一半的数直接返回
 *
 *
 * 示例：
 * 输入: [1, 2, 3, 2, 2, 2, 5, 4, 2]
 * 输出: 2
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let map = {};
  let max = Math.floor(nums.length / 2);
  console.log(max);

  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];
    if (map[val] === undefined) {
      map[val] = 1;
    } else {
      map[val]++;
    }
    if (map[val] > max) return val;
  }
};

// console.log(majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 2]));
console.log(majorityElement([1]));
