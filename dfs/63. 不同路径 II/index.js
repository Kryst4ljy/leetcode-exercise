/**
 * 63. 不同路径 II
 * 
 * 给定一个 m x n 的整数数组 grid。一个机器人初始位于 左上角（即 grid[0][0]）。机器人尝试移动到 右下角（即 grid[m - 1][n - 1]）。机器人每次只能向下或者向右移动一步。

网格中的障碍物和空位置分别用 1 和 0 来表示。机器人的移动路径中不能包含 任何 有障碍物的方格。

返回机器人能够到达右下角的不同路径数量。

测试用例保证答案小于等于 2 * 109。
 */

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  var max_x = obstacleGrid[0].length - 1;
  var max_y = obstacleGrid.length - 1;

  if (obstacleGrid[max_y][max_x] === 1) return 0;
  if (obstacleGrid[0][0] === 1) return 0;

  var memo = Array(max_y + 1)
    .fill(null)
    .map(() => Array(max_x + 1).fill(-1));

  function dfs(x, y) {
    if (x > max_x) return 0;
    if (y > max_y) return 0;

    if (memo[y][x] && memo[y][x] !== -1) return memo[y][x];

    if (obstacleGrid[y][x] === 1) return 0;
    if (x === max_x && y === max_y) return 1;

    const res = dfs(x + 1, y) + dfs(x, y + 1);

    if (res && res !== -1) {
      memo[y][x] = res;
    }

    return res;
  }

  return dfs(0, 0);
};
