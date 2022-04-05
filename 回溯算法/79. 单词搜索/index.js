/**
 * 79. 单词搜索
 * 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。
 *
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
 *
 *
 * 解题思路：
 * 回溯
 * 矩阵的回溯，可以用一个 map，记录每层的 节点来进行 path 的记录。
 * 一般的 path 是一个一维数组，而矩阵是二维的，所以也需要一个二维的数据结构来记录节点信息。
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  if (word.length > board.length * board[0].length) return false; // 特判
  let x = 0;
  let y = 0;
  let m = board.length - 1;
  let n = board[0].length - 1;
  let res = false;
  const path = {};

  while (x <= m && !res) {
    dfs(x, y, 0, "");
    if (y === n) {
      y = 0;
      x++;
      continue;
    }
    y++;
  }

  function dfs(x, y, i) {
    if (res || x > m || y > n || x < 0 || y < 0) return; // 边界处理
    if (path[x] !== undefined && path[x].includes(y)) return;
    if (board[x][y] !== word[i]) return;
    if (board[x][y] === word[i] && i === word.length - 1) {
      res = true;
      return;
    }
    path[x] === undefined ? (path[x] = [y]) : path[x].push(y);
    dfs(x + 1, y, i + 1, "d"); // 向下
    dfs(x, y + 1, i + 1, "r"); // 向右
    dfs(x - 1, y, i + 1, "t"); // 向上
    dfs(x, y - 1, i + 1, "l"); // 向左
    path[x].pop();
  }

  return res;
};
