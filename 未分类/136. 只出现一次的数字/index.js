/**
 * 136. 只出现一次的数字
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 *
 * 说明：
 *
 * 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 *
 *
 * 解题思路：
 * 异或运算。
 * 1. 满足交换律 a^b^c = a^c^b
 * 2. 0^n = n
 * 3. n^n = 0，所以能借此来消除成对的数
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // 异或操作符，满足交换律，0^n =>n，n^n=>0
  for (let i = 1; i < nums.length; i++) {
    nums[0] = nums[0] ^ nums[i];
  }

  return nums[0];
};
