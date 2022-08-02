/**
 * 668. 乘法表中第k小的数
 * 几乎每一个人都用 乘法表。但是你能在乘法表中快速找到第k小的数字吗？
 * 
 *
 * 给定高度m 、宽度n 的一张 m * n的乘法表，以及正整数k，你需要返回表中第k 小的数字。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/kth-smallest-number-in-multiplication-table
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 *
 */

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (m, n, k) {
  let res = []; // 结果数组
  let head = []; // 升序数组 index
  let matrix = []; // 乘法表矩阵

  // 1. 获取乘法表矩阵
  for (let i = 0; i < m; i++) {
    head.push(0);
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = (i + 1) * (j + 1);
    }
  }

  // 2. 合并 n 个升序数组
  // let index = 0; // 当前次数
  // while (index < m * n) {
  //   let min = undefined;
  //   let minIndex = 0;

  //   for (let i = 0; i < head.length; i++) {
  //     if (head[i] > n) continue;
  //     let sum = matrix[i][head[i]];
  //     // 初始化
  //     if (min === undefined) {
  //       min = sum;
  //       minIndex = i;
  //     } else {
  //       if (sum >= min) continue;
  //       min = sum;
  //       minIndex = i;
  //     }
  //   }

  //   res.push(min);
  //   head[minIndex]++;
  //   index++;
  // }

  return res[k - 1];
};

// console.log(findKthNumber(3, 3, 5));
console.log(findKthNumber(9895, 28405, 100787757));
