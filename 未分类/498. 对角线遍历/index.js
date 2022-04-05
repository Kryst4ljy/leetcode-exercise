/**
 * 498. 对角线遍历
 * 给你一个大小为 m x n 的矩阵 mat ，请以对角线遍历的顺序，用一个数组返回这个矩阵中的所有元素。
 *
 *
 * 解题思路：制定规则
 * 向上 - 正常：x--，y++
 *       边界：x = 0，y++
 *       边界：y = mat[0].length - 1，x++，优先级更高
 * 向下 - 正常：x++，y--
 *       边界：y = 0，x++
 *       边界：x = mat.length - 1，y++，优先级更高
 */

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  let step = mat.length * mat[0].length;
  let index = 0;
  const path = [];
  let s = false; // false 向上 true 向下
  let x = 0;
  let y = 0;

  while (index < step) {
    // 向上 - 边界 y = n
    if (!s && y === mat[0].length - 1) {
      path.push(mat[x][y]);
      s = true;
      x++;
      index++;
      continue;
    }
    // 向上 - 边界 x = 0
    if (!s && x === 0) {
      path.push(mat[x][y]);
      s = true;
      y++;
      index++;
      continue;
    }
    // 向上 - normal
    if (!s) {
      path.push(mat[x][y]);
      x--;
      y++;
      index++;
      continue;
    }
    // 向下 - 边界 y = 0 || x = m
    if (s && x === mat.length - 1) {
      path.push(mat[x][y]);
      s = false;
      y++;
      index++;
      continue;
    }
    // 向下 - 边界 x = 0
    if (s && y === 0) {
      path.push(mat[x][y]);
      s = false;
      x++;
      index++;
      continue;
    }
    // 向下 - normal
    if (s) {
      path.push(mat[x][y]);
      y--;
      x++;
      index++;
      continue;
    }
  }

  return path;
};
