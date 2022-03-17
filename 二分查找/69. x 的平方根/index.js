/**
 * 69. x 的平方根
 * 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。
 * 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
 * 注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。
 *
 *
 * 解题思路：
 * 求算数平方根，首先 res 一定是小于 x 的。
 * 其次，res 的平方 一定是最接近 x 的那个数。
 * 比如 8 的算数平方根是 2.8 取整则是 2。
 * 所以按照这个思路，1-8 区间进行二分计算，如果遇到刚好等于的就是 res。
 * 然后递归二分，拿到最大的（平方根最接近 x）的那个整数。
 *
 * 示例：
 * 输入：x = 4
 * 输出：2
 * 输入：x = 8
 * 输出：2
 * 解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。
 */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0) return 0;
  if (x === 1) return 1;
  let res = 1;

  dfs(1, x);
  function dfs(l, r) {
    let s = Math.floor((r - l + 1) / 2) + l; // 二分区间
    if (l + 1 === r) return;
    if (s === 1) {
      s = l + 1;
    }
    // 刚好相同
    if (s * s === x) {
      res = s;
      return;
    }
    // 二分区间平方大于传入的数
    if (s * s > x) {
      dfs(l, s);
    } else {
      res = Math.max(res, s);
      dfs(s, r);
    }
  }

  return res;
};

console.log(mySqrt(2));
