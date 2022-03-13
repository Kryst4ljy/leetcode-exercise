/**
 * 215. 数组中的第K个最大元素
 * 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
 * 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 *
 *
 * 解题思路：
 * 快排
 *
 *
 * 示例：
 * 输入: [3,2,1,5,6,4] 和 k = 2
 * 输出: 5
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  sort(nums, 0, nums.length - 1);

  return nums[k - 1];

  function sort(arr, left, right) {
    if (left >= right) return;
    let key = arr[left];
    let l = left;
    let r = right;

    while (l < r) {
      while (l < r && arr[r] <= key) {
        r--;
      }
      arr[l] = arr[r];
      while (l < r && arr[l] >= key) {
        l++;
      }
      arr[r] = arr[l];
    }

    arr[l] = key;
    sort(arr, left, l);
    sort(arr, l + 1, right);
  }
};

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 2));
