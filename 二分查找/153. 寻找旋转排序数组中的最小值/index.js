/**
 * 153. 寻找旋转排序数组中的最小值
 * 已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次 旋转 后，得到输入数组。例如，原数组 nums = [0,1,2,4,5,6,7] 在变化后可能得到：
 * 若旋转 4 次，则可以得到 [4,5,6,7,0,1,2]
 * 若旋转 7 次，则可以得到 [0,1,2,4,5,6,7]
 * 注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。
 *
 * 给你一个元素值 互不相同 的数组 nums ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 最小元素 。
 *
 * 你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。
 *
 *
 * 解题思路：
 * 二分查找，往大的那边查找，如果找到山峰，则为右边的那个值。
 *
 *
 *
 * 示例：
 * 输入：nums = [3,4,5,1,2]
 * 输出：1
 * 解释：原数组为 [1,2,3,4,5] ，旋转 3 次得到输入数组。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums.length === 1) return nums[0];
  let res = undefined;

  midS(0, nums.length - 1);
  function midS(l, r) {
    if (l > r) return;
    let mid = Math.floor((r - l + 1) / 2) + l; // 中值

    // 遇到谷底 - 跳出
    if (
      (mid + 1 === nums.length && nums[mid] < nums[mid - 1]) ||
      (mid === 0 && nums[mid] < nums[mid + 1]) ||
      (nums[mid] < nums[mid + 1] && nums[mid] < nums[mid - 1])
    ) {
      res = nums[mid];
      return;
    }

    // 遇到峰顶 - 跳出
    if (
      mid < nums.length - 1 &&
      mid > 0 &&
      nums[mid] > nums[mid + 1] &&
      nums[mid] > nums[mid - 1]
    ) {
      res = nums[mid + 1];
      return;
    }

    // 向左二分
    if (l === r) return;
    if (l === r - 1 && mid === r) {
      midS(l, l);
    } else {
      midS(l, mid);
    }
    // 向右二分
    midS(mid, r);
  }

  return res;
};

console.log(findMin([2, 3, 4, 5, 1]));
