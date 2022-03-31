/**
 * 14. 最长公共前缀
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 *
 *
 * 解题思路：
 * 双重循环
 *
 *
 * 示例：
 * 输入：strs = ["flower","flow","flight"]
 * 输出："fl"
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let res = "";
  let f = true;
  let index = 0;

  while (f) {
    let s = new Set();
    for (let i = 0; i < strs.length; i++) {
      // 遇到空的直接跳出
      if (strs[i][index] === undefined) {
        f = false;
        break;
      }
      s.add(strs[i][index]);
    }
    if (!f || s.size !== 1) break;
    res += s.keys().next().value;
    s.clear();
    index++;
  }

  return res;
};

console.log(longestCommonPrefix(["ab", "a"]));
