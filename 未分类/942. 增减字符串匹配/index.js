/**
 * 942. 增减字符串匹配
 * 由范围 [0,n] 内所有整数组成的 n + 1 个整数的排列序列可以表示为长度为 n 的字符串 s ，其中:
 *
 * 如果 perm[i] < perm[i + 1] ，那么 s[i] == 'I'
 * 如果 perm[i] > perm[i + 1] ，那么 s[i] == 'D'
 * 给定一个字符串 s ，重构排列 perm 并返回它。如果有多个有效排列perm，则返回其中 任何一个 。
 *
 *
 * 解题思路：
 * 遍历数组，遇到 I 递增赋值，遇到 D 递减赋值。
 *
 *
 *
 * 示例：
 * 输入：s = "IDID"
 * 输出：[0,4,1,3,2]
 *
 * 输入：s = "III"
 * 输出：[0,1,2,3]
 *
 * 输入：s = "DDI"
 * 输出：[3,2,0,1]
 */

/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  let D = s.length;
  let I = 0;
  let res = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I") {
      res[i] = I++;
    } else {
      res[i] = D--;
    }
  }

  // 追加末尾数字
  if (s[s.length - 1] === "I") {
    res.push(D);
  } else {
    res.push(I);
  }

  return res;
};

console.log(diStringMatch("IDID"));
console.log(diStringMatch("III"));
console.log(diStringMatch("DDI"));
console.log(diStringMatch(""));
