/**
 * 1. 两数之和
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 你可以按任意顺序返回答案。
 *
 *
 * 解题思路：
 * 双指针，寻到对应结果返回
 *
 * 示例：
 * 输入：nums = [2,7,11,15], target = 9
 * 输出：[0,1]
 * 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let l = 0;
  let r = 0;
  let f = false;

  while (l < nums.length && !f) {
    const t = target - nums[l];
    while (r < nums.length) {
      if (t === nums[r] && l !== r) {
        f = true;
        break;
      }
      r++;
    }
    !f && (r = 0);
    !f && l++;
  }

  return [l, r];
};

console.log(twoSum([-1, -2, -3, -4, -5], -8));
