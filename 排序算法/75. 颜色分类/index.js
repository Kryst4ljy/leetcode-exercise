/**
 * 75. 颜色分类
 * 给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 *
 * 我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 *
 *
 * 解题思路：排序
 *
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  divide(nums, 0, nums.length - 1);
  function divide(arr, left, right) {
    if (left >= right) return;
    let mid = Math.floor((right - left + 1) / 2) + left;
    divide(arr, left, mid - 1);
    divide(arr, mid, right);
    cure(arr, left, mid, right);
  }
  function cure(arr, left, mid, right) {
    let res = [];
    let key1 = left;
    let key2 = mid;

    for (let i = 0; i < right - left + 1; i++) {
      if (key1 >= mid) {
        res[i] = arr[key2++];
        continue;
      }
      if (key2 > right) {
        res[i] = arr[key1++];
        continue;
      }
      if (arr[key1] >= arr[key2]) {
        res[i] = arr[key2++];
      } else {
        res[i] = arr[key1++];
      }
    }

    for (let i = 0; i < res.length; i++) {
      arr[i + left] = res[i];
    }
  }

  return nums;
};
