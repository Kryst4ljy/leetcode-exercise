/**
 * 415. 字符串相加
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。
 * 你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。
 *
 *
 * 解题思路：
 * 双指针，末尾向前加
 *
 *
 * 示例：
 * 输入：num1 = "11", num2 = "123"
 * 输出："134"
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let res = "";
  let arr1 = num1.split("");
  let arr2 = num2.split("");
  let l = arr1.length - 1;
  let r = arr2.length - 1;

  let f = false;

  while (l >= 0 || r >= 0) {
    if (l < 0 && r >= 0) {
      let num = Number(arr2[r]) + 1;
      res = `${f ? (num === 10 ? 0 : num) : arr2[r]}${res}`;
      f = f === true && arr2[r] == "9";
      r--;
      continue;
    }
    if (r < 0 && l >= 0) {
      let num = Number(arr1[l]) + 1;
      res = `${f ? (num === 10 ? 0 : num) : arr1[l]}${res}`;
      f = f === true && arr1[l] == "9";
      l--;
      continue;
    }

    let sum = Number(arr1[l]) + Number(arr2[r]) + (f ? 1 : 0);
    let number = sum % 10;
    let enter = Math.floor(sum / 10);

    if (enter === 1) {
      f = true;
    } else {
      f = false;
    }

    res = `${number}${res}`;
    l--;
    r--;
  }

  return `${f ? 1 : ""}${res}`;
};

console.log(addStrings("11", "123"));
