/**
 * 29. 两数相除
 * 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。
 * 返回被除数 dividend 除以除数 divisor 得到的商。
 * 整数除法的结果应当截去（truncate）其小数部分，例如：truncate(8.345) = 8 以及 truncate(-2.7335) = -2
 *
 * 解题思路：
 * 除法就是无限做减法
 *
 * 示例1:
 * 输入: dividend = 10, divisor = 3
 * 输出: 3
 * 解释: 10/3 = truncate(3.33333..) = truncate(3) = 3
 */

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  if (dividend === 0) return 0; // 被除数为0 统统为0
  let f = false;
  // 负数
  if (divisor < 0) {
    f = !f;
    divisor = Math.abs(divisor); // 取绝对值
  }
  if (dividend < 0) {
    f = !f;
    dividend = Math.abs(dividend); // 取绝对值
  }
  let res = 0;

  while (dividend >= divisor) {
    dividend -= divisor;
    res++;
  }

  if (res === 0) return 0;
  return f ? "-" + res : res;
};

console.log(divide(1, 1)); // 1
console.log(divide(0, 1)); // 0
console.log(divide(-1, -1)); // 1
console.log(divide(-1, -2)); // 0
console.log(divide(-1, 2)); // 0
console.log(divide(0, -1)); // 0
console.log(divide(10, -2)); // -5
console.log(divide(10, 2)); // 5
console.log(divide(-2147483648, -1)); // 3
