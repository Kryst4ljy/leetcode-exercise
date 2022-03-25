/**
 * 240. 搜索二维矩阵 II
 * 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：
 * 每行的元素从左到右升序排列。
 * 每列的元素从上到下升序排列。
 *
 *
 * 解题思路：
 * 首先在对角线二分寻找，如果比 target 小，则以此对角线的点为基点，进行 行、列 的二分查找。如果大了则继续对角线二分查找。
 *
 *
 * 二分的中值一定在右边，所以向上查找不需要处理，向下查找需要处理边界。
 *
 *
 * 示例：
 * 输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
 * 输出：true
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let x = matrix.length - 1;
  let y = matrix[0].length - 1;
  if (matrix[x][y] < target) return false;
  if (matrix[x][y] === target) return true;

  let res = false;

  while (x >= 0 && y >= 0 && !res) {
    // 行二分
    let colX = 0;
    let colY = y;
    while (colX < colY) {
      let mid = Math.floor((colY - colX + 1) / 2) + colX;
      if (matrix[x][mid] === target) {
        res = true;
        break;
      } else if (matrix[x][mid] < target) {
        colX = mid;
        continue;
      } else if (matrix[x][mid] > target) {
        colY = mid === colY ? colX : mid;
        continue;
      }
    }
    if (matrix[x][colX] === target) {
      res = true;
      break;
    }
    // 列二分
    let rowX = 0;
    let rowY = x;
    while (rowX < rowY) {
      let mid = Math.floor((rowY - rowX + 1) / 2) + rowX;
      if (matrix[mid][y] === target) {
        res = true;
        break;
      } else if (matrix[mid][y] < target) {
        rowX = mid;
        continue;
      } else if (matrix[mid][y] > target) {
        rowY = mid === rowY ? rowX : mid;
        continue;
      }
    }
    if (matrix[rowX][y] === target) {
      res = true;
      break;
    }
    // 递减
    x--;
    y--;
  }

  return res;
};

console.log(searchMatrix([[-1, 3]], -1));
