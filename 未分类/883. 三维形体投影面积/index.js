/**
 * 883. 三维形体投影面积
 * 在 n x n 的网格 grid 中，我们放置了一些与 x，y，z 三轴对齐的 1 x 1 x 1 立方体。
 *
 * 每个值 v = grid[i][j] 表示 v 个正方体叠放在单元格 (i, j) 上。
 *
 * 现在，我们查看这些立方体在 xy 、yz 和 zx 平面上的投影。
 *
 * 投影 就像影子，将 三维 形体映射到一个 二维 平面上。从顶部、前面和侧面看立方体时，我们会看到“影子”。
 *
 * 返回 所有三个投影的总面积 。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/projection-area-of-3d-shapes
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 *
 *
 * 解题思路：
 * 计算底部，左边，右边的面积
 *
 *
 *
 * 示例：
 * 输入：[[1,2],[3,4]]
 * 输出：17
 * 解释：这里有该形体在三个轴对齐平面上的三个投影(“阴影部分”)。
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
  let res = 0;
  let x = 0; // 底部
  let y = []; // 左
  let z = []; // 右

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      let val = grid[i][j];
      // 底部 +1
      if (val !== 0) {
        x++;
      }
      // 左边记录
      if (y[i] === undefined) {
        y[i] = val;
      } else {
        y[i] = Math.max(val, y[i]);
      }
      // 右边记录
      if (z[j] === undefined) {
        z[j] = val;
      } else {
        z[j] = Math.max(val, z[j]);
      }
    }
  }

  console.log(x, y, z);
  for (let i = 0; i < y.length; i++) {
    res += y[i];
  }
  for (let i = 0; i < z.length; i++) {
    res += z[i];
  }

  return res + x;
};

console.log(
  projectionArea([
    [1, 2],
    [3, 4],
  ])
);
