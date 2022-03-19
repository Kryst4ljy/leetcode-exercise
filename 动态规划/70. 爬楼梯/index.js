/**
 * 70. 爬楼梯
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 *
 *
 * 解题思路：
 * fn = fn-1 + fn-2
 *
 *
 * 示例：
 * 输入：n = 2
 * 输出：2
 * 解释：有两种方法可以爬到楼顶。
 * 1. 1 阶 + 1 阶
 * 2. 2 阶
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  let l = 1;
  let r = 2;

  while (n > 2) {
    let s = l;
    l = r;
    r = l + s;
    n--;
  }

  return r;
};

console.log(climbStairs(7));
