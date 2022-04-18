/**
 * 56. 合并区间
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
 *
 *
 * 解题思路：
 * 归并排序 + 前后区间对比
 * 1. 归并排序，获得一个递增区间数组
 * 2. 遍历数组，前一个区间的结尾与后一个区间的前面相比较，大于等于则合并区间，新区间结尾取两个区间的大值。
 *
 *
 *
 * 示例：
 * 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
 * 输出：[[1,6],[8,10],[15,18]]
 * 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // 1. 排序
  divide(intervals, 0, intervals.length - 1);
  function divide(arr, left, right) {
    if (left >= right) return;
    let mid = Math.floor((right - left + 1) / 2) + left;
    divide(arr, left, mid - 1);
    divide(arr, mid, right);
    cure(arr, left, mid, right);
  }
  function cure(arr, left, mid, right) {
    const res = [];
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
      if (arr[key1][0] >= arr[key2][0]) {
        res[i] = arr[key2++];
      } else {
        res[i] = arr[key1++];
      }
    }

    for (let i = 0; i < res.length; i++) {
      arr[i + left] = res[i];
    }
  }

  // 2. 合并区间
  const res = [intervals[0]];
  let index = 0;
  for (let i = 1; i < intervals.length; i++) {
    if (res[index][1] >= intervals[i][0]) {
      res[index][1] = Math.max(intervals[i][1], res[index][1]);
      continue;
    }
    res.push(intervals[i]);
    index++;
  }

  return res;
};

console.log(
  merge([
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [1, 10],
  ])
);
