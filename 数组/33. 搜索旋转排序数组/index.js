/**
 * 33. 搜索旋转排序数组
 * 整数数组 nums 按升序排列，数组中的值 互不相同 。
 * 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。
 * 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。
 *
 *
 * 解题思路：
 * 判断第一个数大还是小，target 比第一个数大的话，直接按顺序遍历；小的话从后面开始遍历
 *
 *
 * 示例：
 * 输入：nums = [4,5,6,7,0,1,2], target = 0
 * 输出：4
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums[0] === target) return 0; // 特判：当前数组第一个数就是 target
  let res = -1;

  if (nums[0] > target) {
    let k = nums.length - 1;
    // 从后往前遍历
    while (k > 0) {
      if (nums[k] === target) {
        res = k;
        break;
      }
      k--;
    }
  } else {
    // 从前往后遍历
    let k = 0;
    // 从后往前遍历
    while (k < nums.length) {
      if (nums[k] === target) {
        res = k;
        break;
      }
      k++;
    }
  }

  return res;
};

console.log(search([1], 9));
