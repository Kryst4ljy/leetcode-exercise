/**
 * 54. 螺旋矩阵
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 *
 *
 * 解题思路：
 * 顺时针就是 往 右、下、左、上 依次遍历，主要是遍历到的值变为 G，标记为已经遍历过。
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const path = [];
  let x = 0;
  let y = 0;
  let step = 0; // 步进器
  let f = "r"; // 记录方向 r右 b下 l左 t上
  let row = matrix.length - 1;
  let col = matrix[0].length - 1;
  let max = (row + 1) * (col + 1);

  while (step < max) {
    step++;
    path.push(matrix[x][y]);
    matrix[x][y] = "G"; // 标记已经遍历过;
    console.log(x, y, f);
    // 往右步进
    if (f === "r" && y < col && matrix[x][y + 1] !== "G") {
      y++;
      continue;
    } else if (f === "r" && (y === col || matrix[x][y + 1] === "G")) {
      f = "b";
      x++;
      continue;
    }
    // 向下步进
    if (f === "b" && x < row && matrix[x + 1][y] !== "G") {
      x++;
      continue;
    } else if (f === "b" && (x === row || matrix[x + 1][y] === "G")) {
      f = "l";
      y--;
      continue;
    }
    // 往左步进
    if (f === "l" && y > 0 && matrix[x][y - 1] !== "G") {
      y--;
      continue;
    } else if (f === "l" && (y === 0 || matrix[x][y - 1] === "G")) {
      f = "t";
      x--;
      continue;
    }
    // 向上步进
    if (f === "t" && x > 0 && matrix[x - 1][y] !== "G") {
      x--;
      continue;
    } else if (f === "t" && (x === 0 || matrix[x - 1][y] === "G")) {
      f = "r";
      y++;
      continue;
    }
  }

  return path;
};

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);
