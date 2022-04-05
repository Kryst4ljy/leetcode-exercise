/**
 * 283. 移动零
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 *
 * 请注意 ，必须在不复制数组的情况下原地对数组进行操作。
 * 
 * 
 * 解题思路：
 * 使用一个队列记录为 0 的时候的下标
 * 如果队列长度不为 0，则需要替换元素，下标也同时替换。
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const queue = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      queue.push(i);
      continue;
    } else if (nums[i] !== 0 && queue.length > 0) {
      nums[queue.shift()] = nums[i];
      nums[i] = 0;
      queue.push(i);
      continue;
    }
  }

  return nums;
};
