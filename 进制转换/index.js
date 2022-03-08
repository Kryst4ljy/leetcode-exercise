/**
 * 通用模版
 * 转换进制公式：对一个十进制转换成 n 进制
 * 十进制 % n 取余 获得第一位数，十进制 / n 向下取整获取下一位数。
 *
 * 504. 七进制数
 * 给定一个整数 num，将其转化为 7 进制，并以字符串形式输出。
 *
 * 示例：
 * 输入: num = 100
 * 输出: "202"
 */

/**
 * @param {number} num 十进制
 * @param {number} n 要转换的进制
 * @return {string}
 */
var convertToBase = function (num, n) {
  if (num === 0) return "0";

  let res = [];
  let f = false; // 是否是负数
  if (num < 0) {
    f = true;
    num = Math.abs(num);
  }

  while (num > 0) {
    res.push(num % n);
    num = Math.floor(num / n);
  }

  return f ? `-${res.reverse().join("")}` : res.reverse().join("");
};

console.log(convertToBase(-100, 7));
