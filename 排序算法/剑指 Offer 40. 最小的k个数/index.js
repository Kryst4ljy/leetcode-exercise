/**
 * 剑指 Offer 40. 最小的k个数
 * 输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。
 *
 *
 * 解题思路：
 * 排序
 *
 *
 * 示例：
 * 输入：arr = [3,2,1], k = 2
 * 输出：[1,2] 或者 [2,1]
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  divide(arr, 0, arr.length - 1);

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

  return arr.slice(0, k);
};

console.log(getLeastNumbers([3, 2, 1], 2));
