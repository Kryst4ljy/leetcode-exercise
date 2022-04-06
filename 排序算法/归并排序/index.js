/**
 * 归并排序
 */

function mergeSort(arr) {
  divide(arr, 0, arr.length - 1);

  // 分
  function divide(arr, left, right) {
    if (left >= right) return;
    let mid = Math.floor((right - left + 1) / 2) + left;
    divide(arr, left, mid - 1);
    divide(arr, mid, right);
    // 治
    cure(arr, left, mid, right);
  }

  // 治
  function cure(arr, left, mid, right) {
    let res = [];
    let index = 0;
    let key1 = left;
    let key2 = mid;

    // 合并两个排序数组 - 核心为细分到最小
    while (index < right - left + 1) {
      if (key1 === mid) {
        res[index] = arr[key2];
        key2++;
        index++;
        continue;
      }
      if (key2 === right + 1) {
        res[index] = arr[key1];
        key1++;
        index++;
        continue;
      }
      if (arr[key1] > arr[key2]) {
        res[index] = arr[key2];
        key2++;
      } else {
        res[index] = arr[key1];
        key1++;
      }
      index++;
    }

    // 修改原数组
    for (let i = 0; i < res.length; i++) {
      arr[i + left] = res[i];
    }
  }

  return arr;
}

console.log(mergeSort([3, 5, 234, 124, 56, 7, 4234, 1, 3]));
