/**
 * 624. 数组列表中的最大距离
 * 
 * 给定 m 个数组，每个数组都已经按照升序排好序了。

现在你需要从两个不同的数组中选择两个整数（每个数组选一个）并且计算它们的距离。两个整数 a 和 b 之间的距离定义为它们差的绝对值 |a-b| 。

返回最大距离。

示例 1：

输入：[[1,2,3],[4,5],[1,2,3]]
输出：4
解释：
一种得到答案 4 的方法是从第一个数组或者第三个数组中选择 1，同时从第二个数组中选择 5 。
示例 2：

输入：arrays = [[1],[1]]
输出：0
 

提示：

m == arrays.length
2 <= m <= 105
1 <= arrays[i].length <= 500
-104 <= arrays[i][j] <= 104
arrays[i] 以 升序 排序。
所有数组中最多有 105 个整数。
 */

/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function (arrays) {
  let min = arrays[0][0];
  let max = arrays[0][arrays[0].length - 1];
  let res = 0;

  for (let i = 1; i < arrays.length; i++) {
    const curMax = arrays[i][arrays[i].length - 1];
    const curMin = arrays[i][0];

    res = Math.max(res, Math.abs(curMax - min), Math.abs(max - curMin));

    if (curMax > max) {
      max = curMax;
    }
    if (curMin < min) {
      min = curMin;
    }
  }

  return res;
};

console.log(
  maxDistance([
    [1, 2, 3],
    [4, 5],
    [1, 2, 3],
  ])
);
console.log(maxDistance([[1], [1]]));
console.log(maxDistance([[1], [2]]));
console.log(
  maxDistance([
    [1, 4],
    [0, 5],
  ])
);
console.log(maxDistance([[-8, -7, -7, -5, 1, 1, 3, 4], [-2], [-10, -10, -7, 0, 1, 3], [2]]));
