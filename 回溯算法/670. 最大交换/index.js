/**
 * 670. 最大交换
 * 给定一个非负整数，你至多可以交换一次数字中的任意两位。返回你能得到的最大值。
 *
 *
 * 解题思路：
 * 1. 遍历第一遍，找到最大的值，如果遇到 9 则跳出，因为 9 一定是最大的
 * 2. 遍历第二遍，确定需要替换的值的位置
 * 3. 交换后续最大的值
 *
 *
 * 示例：
 * 输入: 2736
 * 输出: 7236
 * 解释: 交换数字2和数字7。
 */

/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  let s = num.toString(); // 转换成字符串 利于遍历
  let max = 0; // 最大值

  // 1. 遍历 - 找出最大值
  for (let i = 0; i < s.length; i++) {
    if (s[i] == 9) {
      max = 9;
      break;
    }
    if (max < s[i]) {
      max = s[i];
    }
  }

  console.log(max);

  let start = -1;
  let startNum = 0;
  let end = -1;
  let endNum = 0;
  let index = 0;
  // 2. 遍历 - 确定需要替换的位，以及交换
  while (index < s.length && (start == -1 || end == -1)) {
    start = -1;
    startNum = 0;
    for (let i = index; i < s.length; i++) {
      if (start === -1 && s[i] >= max) continue;
      if (start === -1) {
        start = i;
        startNum = s[i];
        continue;
      }
      if (s[i] > startNum && s[i] > endNum) {
        end = i;
        endNum = s[i];
      }
    }
    index++;
  }

  console.log(start, end, startNum, endNum);

  if (start == -1 || end == -1) return num;
  let arr = s.split("");
  arr[start] = endNum;
  arr[end] = startNum;
  return arr.join("");
};

console.log(maximumSwap(98368));
