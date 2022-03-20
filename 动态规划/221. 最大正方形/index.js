/**
 * 221. 最大正方形
 * 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。
 *
 *
 * 解题思路：
 * 1. 以当前节点 (x,y) 为坐标，如果当前节点为 1。
 * 2. 记录此时 round 为 1，从 (x+1, y) 节点开始，一次向右，向上遍历，如果一路上都是 1，则 round++，进入下一次遍历。
 * 3. 每次遍历的边界为 [x+round, y+round]。
 * 
 * PS：此解法时间复杂度太高，导致最后一个 75/75 的测试用例未通过。
 *
 *
 * 示例：
 * 输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
 * 输出：4
 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  let res = 0;
  let xLen = matrix.length;
  let yLen = matrix[0].length;
  let x = 0;
  let y = 0;

  while (x < xLen && y < yLen) {
    // 不为 1 直接跳过
    if (matrix[x][y] != 1 && y !== yLen - 1) {
      y++;
      continue;
    } else if (matrix[x][y] != 1 && y === yLen - 1) {
      x++;
      y = 0;
      continue;
    }
    // 为 1 进入深层遍历
    console.log("基点", x, y);
    let i = x + 1; // 起始点为下一行那个点
    let j = y;
    let round = 1;
    while (i < xLen && j < yLen) {
      console.log(i, j, x, y);
      if (matrix[i][j] != 1) break;
      // 向下到底
      if (i === x + round && j < y + round) {
        j++;
        continue;
      }
      // 向左到底
      if (j === y + round && i <= x + round && i > x) {
        i--;
        continue;
      }
      // 向上到底
      if (i === x && j === y + round) {
        // 新一轮
        console.log("----------- 新一轮");
        round++;
        i = x + round;
        j = y;
      }
    }
    res = Math.max(res, round);
    if (y !== yLen - 1) {
      y++;
    } else if (y === yLen - 1) {
      x++;
      y = 0;
    }
  }

  return res * res;
};

console.log(
  maximalSquare([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "1", "1", "0"],
    ["1", "1", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["0", "0", "1", "1", "1"],
  ])
);
