/**
 * 41. 缺失的第一个正数
 * 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
 * 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。
 *
 * 解题思路：
 * 1. 把传入的数组当作一个 map 表，依次遍历每一个数组元素。
 * 2. 当遇到当前值小于 0 或者 大于数组长度的，进入下一个数。
 * 3. 当遇到在整数区间内的数字，进行交换，如果 （当前值 === 下标 + 1），那么进入下一个数，如果不是则再去交换。
 * 4. 遍历完毕后，依次查找下标元素， 当前值 未与 下标 + 1 匹配上的，就是缺失最小正整数。
 *
 *
 * 示例1：
 * 输入：nums = [1,2,0]
 * 输出：3
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    // 交换数字
    while (true) {
      // 当遇到当前值小于 0 或者 大于数组长度的，进入下一个数。
      if (nums[i] <= 0 || nums[i] > nums.length || nums[i] === i + 1) break;
      let key = nums[i] - 1;
      let s = nums[key];
      // 或者为当前值的 [1, 1] - 避免死循环
      if (nums[i] === s) break;
      nums[key] = nums[i];
      nums[i] = s;
    }
  }

  // 再次遍历，找到不匹配的数字
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) return i + 1;
  }

  return nums.length + 1;
};

console.log(firstMissingPositive([1, 1]));
