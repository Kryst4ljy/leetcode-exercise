/**
 * 41. 缺失的第一个正数
 * 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
 * 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。
 *
 * 解题思路：
 * 1. 把传入的数组当作一个 hash 表，依次遍历每一个数组元素。
 * 2. 判断当前遍历到的元素，如果 nums[0] 为边界值以外的数（0以及负数以及大于数组长度的正整数）或者 满足 hash 规则（nums[0] === 1，nums[1] === 2...），则跳过此次循环，指针后移进入下一个数。
 * 3. 不满足条件的，把此正整数放入对应的满足 hash 规则的下标中进行替换，比如当前 nums[0] === 9，nums[8] === 4，则替换两个数。指针不动进入下一次循环。
 * 4. 当遍历完一遍数组排完后，再依次查找每个下标上的元素是否对应其正整数值，遇到第一个不对应的就是当前缺失的第一个正整数。
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
  let res = undefined;
  let key = 0; // 当前数组下标
  let len = nums.length;

  // 整理数组 0-1 1-2 2-3
  while (key < len) {
    if (nums[key] <= 0 || nums[key] > len || nums[key] === key + 1) {
      key++;
    } else {
      const r_key = nums[key] - 1;
      const sum = nums[r_key];
      nums[r_key] = nums[key];
      nums[key] = sum;
    }
  }

  for (let i = 0; i < len; i++) {
    if (nums[i] !== i + 1) {
      res = i + 1;
      break;
    }
  }

  return res === undefined ? len + 1 : res;
};

console.log(firstMissingPositive([1, 2]));
