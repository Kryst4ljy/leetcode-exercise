/**
 * 680. 验证回文串 II
 * 
 * 给你一个字符串 s，最多 可以从中删除一个字符。

请你判断 s 是否能成为回文字符串：如果能，返回 true ；否则，返回 false 。

 

示例 1：

输入：s = "aba"
输出：true
示例 2：

输入：s = "abca"
输出：true
解释：你可以删除字符 'c' 。
示例 3：

输入：s = "abc"
输出：false
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  var deleteTag = false;

  function dfs(i, j) {
    // console.log(s[i], s[j], i, j);

    if (i > j) return true;

    if (s[i] !== s[j]) {
      if (!deleteTag) {
        if (s[j - 1] === s[i] || s[j] === s[i + 1]) {
          deleteTag = true;
          let l;
          let r;

          if (s[j - 1] === s[i]) {
            l = dfs(i + 1, j - 2);
          }
          if (s[j] === s[i + 1]) {
            r = dfs(i + 2, j - 1);
          }

          return !!(l || r);
        }

        return false;
      }
      return false;
    }

    return dfs(i + 1, j - 1);
  }

  return dfs(0, s.length - 1);
};
