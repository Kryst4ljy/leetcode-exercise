/**
 * 5. 最长回文子串
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 *
 *
 * 解题思路：
 * 先把自身当整体，中心扩散。
 * 再判断右边的相不相等，相等再当一个整体，扩散。
 *
 *
 * 示例：
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let res = 1;
  let left = 0;
  let right = 0;
  let nums = s.split("");

  for (let i = 0; i < nums.length; i++) {
    // 自身扩散
    dfs(i - 1, i + 1);
    // 右边相等，当做一个整体扩散
    if (nums[i] === nums[i + 1]) {
      if (res < 2) {
        res = 2;
        left = i;
        right = i + 1;
      }
      dfs(i - 1, i + 2);
    }
  }

  function dfs(l, r) {
    if (l < 0 || r > nums.length - 1) return;
    if (nums[l] !== nums[r]) return;
    // 长度更新
    if (r - l + 1 >= res) {
      left = l;
      right = r;
      res = r - l + 1;
    }
    dfs(l - 1, r + 1);
  }

  return s.slice(left, right + 1);
};

console.log(longestPalindrome("abcba"));
