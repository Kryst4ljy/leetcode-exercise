/**
 * 704. 二分查找
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 *
 *
 *
 * 解题思路：二分
 *
 *
 * 示例：
 * 输入: nums = [-1,0,3,5,9,12], target = 9
 * 输出: 4
 * 解释: 9 出现在 nums 中并且下标为 4
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let res = -1;
  divide(nums, 0, nums.length - 1);

  function divide(arr, left, right) {
    if (left >= right || res !== -1) return;
    let mid = Math.floor((right - left + 1) / 2) + left;
    if (arr[mid] === target) {
      res = mid;
      return;
    }
    divide(arr, left, mid - 1);
    divide(arr, mid, right);
  }

  // 加个特判 会漏掉第一位数
  if (res === -1) {
    res = nums[0] === target ? 0 : -1;
  }
  return res;
};

console.log(search([-1, 0, 3, 5, 9, 12], -1));
