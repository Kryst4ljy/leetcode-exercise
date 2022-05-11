/**
 * 剑指 Offer 17. 打印从1到最大的n位数
 * 输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。
 *
 *
 * 解题思路：
 * 获取循环的终止条件，比如传入 1，则为 9，传入 2，则为 99；然后循环赋值。
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
  let round = "";
  let res = [];

  for (let i = 0; i < n; i++) {
    round += "9";
  }
  round = Number(round);

  console.log(round);

  for (let i = 1; i <= round; i++) {
    res[i] = i;
  }

  return res;
};

console.log(printNumbers(2));
