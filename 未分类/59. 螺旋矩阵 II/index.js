/**
 * 59. 螺旋矩阵 II
 * 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
 *
 *
 *
 * 解题思路：
 * 收缩边界 + 设定方向 + 记步数
 */

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const matrix = [];
  // 初始化矩阵
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
  }
  let x = 0;
  let y = 0;
  let max = n; // 收缩边界
  let s = "right"; // 标记方向
  let index = 0; // 记步数

  while (index < n * n) {
    // 向右
    if (s === "right" && y < max) {
      matrix[x][y] = ++index;
      y++;
    } else if (s === "right" && y === max) {
      s = "down";
      y--;
      x++;
    }
    // 向下
    if (s === "down" && x < max) {
      matrix[x][y] = ++index;
      x++;
    } else if (s === "down" && x === max) {
      s = "left";
      x--;
      y--;
    }
    // 向左
    if (s === "left" && y >= n - max) {
      matrix[x][y] = ++index;
      y--;
    } else if (s === "left" && y === n - max - 1) {
      s = "up";
      y++;
      x--;
      // 边界收缩
      max--;
    }
    // 向上
    if (s === "up" && x > n - max - 1) {
      matrix[x][y] = ++index;
      x--;
    } else if (s === "up" && x === n - max - 1) {
      s = "right";
      x++;
      y++;
    }
  }

  return matrix;
};

console.log(generateMatrix(4));
