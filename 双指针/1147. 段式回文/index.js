/**
 * 1147. 段式回文
 * 你会得到一个字符串 text 。你应该把它分成 k 个子字符串 (subtext1, subtext2，…， subtextk) ，要求满足:
 * subtexti 是非空字符串
 * 所有子字符串的连接等于 text ( 即subtext1 + subtext2 + ... + subtextk == text )
 * subtexti == subtextk - i + 1 表示所有 i 的有效值( 即 1 <= i <= k )
 * 返回k可能最大值。
 *
 * 解题思路：
 * 双视口
 * 段式回文，一定是左边截取的与右边截取的一致。
 * 比如：g i - gh hi - ghi ghi
 * 所以分为左右两边两个视口，当两个视口出现同样的字符串时，记录值+2（因为回文，左右两边各一段）
 * 然后修改左右视口的边界，继续扫描，直到左右视口的边界到达了字符串中心位置，停止扫描。
 *
 *
 * 示例：
 * 输入：text = "ghiabcdefhelloadamhelloabcdefghi"
 * 输出：7
 * 解释：我们可以把字符串拆分成 "(ghi)(abcdef)(hello)(adam)(hello)(abcdef)(ghi)"。
 *
 * 执行用时：68 ms, 在所有 JavaScript 提交中击败了75.00%的用户
 * 内存消耗：41.7 MB, 在所有 JavaScript 提交中击败了18.75%的用户
 */

/**
 * @param {string} text
 * @return {number}
 */
var longestDecomposition = function (text) {
  let res = 0;
  let sum = 0; // 已经清算的长度
  let l = 0; // 左边界
  let r = text.length; // 右边界
  let lenL = l + 1; // 左边界的窗口区右边界
  let lenR = r - 1; // 右边界的窗口区左边界
  const d = Math.floor(text.length / 2) + 1;

  while (l < r && lenL < d) {
    while (lenL < d) {
      if (text.slice(l, lenL) !== text.substring(lenR, r)) {
        lenL++;
        lenR--;
      } else {
        l = lenL;
        r = lenR;
        lenL = l + 1;
        lenR = r - 1;
        res += 2;
        sum = l * 2;
        break;
      }
    }
  }

  return sum < text.length ? res + 1 : res;
};

console.log(longestDecomposition("aaa"));
