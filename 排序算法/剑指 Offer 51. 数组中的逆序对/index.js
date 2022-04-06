/**
 * 剑指 Offer 51. 数组中的逆序对
 * 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。
 *
 *
 * 解题思路：
 * 逆序想到了 归并排序， 进行一次转换后，记结果为 +1
 *
 *
 * 示例：
 * 输入: [7,5,6,4]
 * 输出: 5
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
  let sum = 0;
  divide(nums, 0, nums.length - 1);

  // 分 - 二分
  function divide(arr, left, right) {
    if (left >= right) return;
    let mid = Math.floor((right - left + 1) / 2) + left;
    divide(arr, left, mid - 1);
    divide(arr, mid, right);
    cure(arr, left, mid, right);
  }

  // 治 - 合并两个排序数组
  function cure(arr, left, mid, right) {
    let res = [];
    let index = 0;
    let key1 = left;
    let key2 = mid;

    while (index < right - left + 1) {
      if (key1 >= mid) {
        res[index++] = arr[key2++];
        continue;
      }
      if (key2 > right) {
        res[index++] = arr[key1++];
        continue;
      }
      if (arr[key1] <= arr[key2]) {
        res[index++] = arr[key1++];
        continue;
      } else {
        sum += mid - key1;
        res[index++] = arr[key2++];
        continue;
      }
    }

    for (let i = 0; i < res.length; i++) {
      arr[i + left] = res[i];
    }
  }

  return sum;
};

console.log(reversePairs([7, 5, 6, 4]));
