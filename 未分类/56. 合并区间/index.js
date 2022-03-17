/**
 * 56. 合并区间
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
 *
 *
 * 解题思路：
 * 前一个区间 1 与后一个区间 0 比较，如果小于则跳过。
 * 否则合并排序取头尾。
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
  let l = 0;
  let r = l + 1;

  while (r < intervals.length && l >= 0) {
    if (intervals[l][1] < intervals[r][0]) {
      l++;
      r = l + 1;
    } else if (intervals[l][1] === intervals[r][0]) {
      const bind = [intervals[l][0], intervals[r][1]];
      intervals.splice(l, 2, bind);
    } else if (
      intervals[l][0] > intervals[r][0] &&
      intervals[l][0] > intervals[r][1]
    ) {
      let s = intervals[l];
      intervals[l] = intervals[r];
      intervals[r] = s;
      l++;
      r = l + 1;
    } else {
      // 合并，排序。
      const res = [];
      let n = 0;
      let m = 0;

      while (n < 2 && m < 2) {
        if (intervals[l][n] <= intervals[r][m]) {
          res.push(intervals[l][n]);
          n++;
        } else {
          res.push(intervals[r][m]);
          m++;
        }
      }
      const bind = [res[0]];
      if (n === 2) {
        bind.push(intervals[r][1]);
      } else {
        bind.push(intervals[l][1]);
      }
      console.log(bind);
      intervals.splice(l, 2, bind);
      l--;
      r = l + 1;
    }
  }

  return intervals;
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
