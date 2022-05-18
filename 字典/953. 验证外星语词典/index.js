/**
 * 953. 验证外星语词典
 * 某种外星语也使用英文小写字母，但可能顺序 order 不同。字母表的顺序（order）是一些小写字母的排列。
 *
 * 给定一组用外星语书写的单词 words，以及其字母表的顺序 order，只有当给定的单词在这种外星语中按字典序排列时，返回 true；否则，返回 false。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/verifying-an-alien-dictionary
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 *
 *
 *
 *
 * 示例：
 * 输入：words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
 * 输出：true
 * 解释：在该语言的字母表中，'h' 位于 'l' 之前，所以单词序列是按字典序排列的。
 *
 * 输入：words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
 * 输出：false
 * 解释：在该语言的字母表中，'d' 位于 'l' 之后，那么 words[0] > words[1]，因此单词序列不是按字典序排列的。
 */

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  // 1. 将字典字符串转换为字典哈希表
  let map = {};
  for (let i = 0; i < order.length; i++) {
    map[order[i]] = i;
  }

  // 2. 比较 words 数组，得出结果
  for (let i = 0, j = 1; i < words.length, j < words.length; i++, j++) {
    let k = 0;
    while (true) {
      let left = words[i][k];
      let right = words[j][k];
      if (left === right) {
        // 2.1 两者都为 undefined 跳过此次循环
        if (left === undefined && right === undefined) break;
        k++;
      } else {
        // 2.2 其中一者为 undefined 得出结果
        if (left === undefined) return true;
        if (right === undefined) return false;
        // 2.3 两者都不为 undefined 且不相同 得出结果
        if (map[left] > map[right]) return false;
        break;
      }
    }
  }

  return true;
};

console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));
console.log(
  isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz")
);
console.log(
  isAlienSorted(
    [
      "fxasxpc",
      "dfbdrifhp",
      "nwzgs",
      "cmwqriv",
      "ebulyfyve",
      "miracx",
      "sxckdwzv",
      "dtijzluhts",
      "wwbmnge",
      "qmjwymmyox",
    ],
    "zkgwaverfimqxbnctdplsjyohu"
  )
);
