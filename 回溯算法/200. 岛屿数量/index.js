/**
 * 200. 岛屿数量
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 * 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
 * 此外，你可以假设该网格的四条边均被水包围。
 *
 *
 * 解题思路：
 * 回溯算法
 * 1. 从 grid[0][0] 开始遍历
 * 2. 遇到 0 直接下一个。
 * 3. 遇到 1 ，先置空(设此坐标点为0) & 岛屿数+1，开始判断上、左、右、下方向是否也为 1，逐步寻路，到右下都不为1后回溯。
 * 4. 继续遍历，直到边界。
 *
 * 示例1：
 * 输入：grid = [
 * ["1","1","1","1","0"],
 * ["1","1","0","1","0"],
 * ["1","1","0","0","0"],
 * ["0","0","0","0","0"]
 * ]
 * 输出：1
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let res = 0;
  let line = 0; // 当前第几行
  let col = 0; // 当前第几列

  const maxLine = grid.length;
  const maxCol = grid[0].length;

  while (line < maxLine) {
    let current = grid[line][col];

    if (current === "1") {
      res++; // 数量+1
      dfs(line, col); // 寻路
    }

    if (col < maxCol) {
      col++;
    } else {
      col = 0;
      line++;
    }
  }

  function dfs(l, c) {
    if (l >= maxLine || c >= maxCol || c < 0 || l < 0 || grid[l][c] === "0")
      return;
    grid[l][c] = "0"; // 清空数据
    dfs(l + 1, c); // 下
    dfs(l, c + 1); // 右
    dfs(l, c - 1); // 左
    dfs(l - 1, c); // 上
  }

  return res;
};

console.log(
  numIslands([
    ["1", "0", "1", "1", "1"],
    ["1", "0", "1", "0", "1"],
    ["1", "1", "1", "0", "1"],
  ])
);
