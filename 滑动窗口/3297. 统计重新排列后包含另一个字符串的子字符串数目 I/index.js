/**
 * 3297. 统计重新排列后包含另一个字符串的子字符串数目 I
 * 
 * 给你两个字符串 word1 和 word2 。

如果一个字符串 x 重新排列后，word2 是重排字符串的 
前缀
 ，那么我们称字符串 x 是 合法的 。

请你返回 word1 中 合法 
子字符串
 的数目。

 

示例 1：

输入：word1 = "bcca", word2 = "abc"

输出：1

解释：

唯一合法的子字符串是 "bcca" ，可以重新排列得到 "abcc" ，"abc" 是它的前缀。

示例 2：

输入：word1 = "abcabc", word2 = "abc"

输出：10

解释：

除了长度为 1 和 2 的所有子字符串都是合法的。

示例 3：

输入：word1 = "abcabc", word2 = "aaabc"

输出：0
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var validSubstringCount = function (word1, word2) {
  if (word2.length > word1.length) return 0;

  var res = 0; // 返回结果
  var tag = 0; // 记录有多少个超过 0 的
  var map = {};

  for (let i = 0; i < word2.length; i++) {
    if (!map[word2[i]]) {
      map[word2[i]] = 1;
      tag++;
    } else {
      map[word2[i]] += 1;
    }
  }

  var len = word1.length - word2.length;

  for (let i = 0, j = 0; i <= len; j++) {
    if (j >= word1.length) break;

    if (typeof map[word1[j]] === 'number') {
      map[word1[j]]--;
      if (map[word1[j]] === 0) {
        tag--;
      }
    }

    if (tag === 0) {
      while (true) {
        if (tag === 0) {
          res += word1.length - j;
          if (typeof map[word1[i]] === 'number') {
            map[word1[i]]++;
            if (map[word1[i]] > 0) {
              tag++;
            }
          }
          i++;
        } else {
          break;
        }
      }
    }
  }

  return res;
};

var res = validSubstringCount('dcbdcdccb', 'cdd');
console.log(res);
