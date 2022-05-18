/**
 * 139. 单词拆分
 * 给你一个字符串 s 和一个字符串列表 wordDict 作为字典。请你判断是否可以利用字典中出现的单词拼接出 s 。
 *
 * 注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。
 *
 *
 *
 * 解题思路：
 * 1. 将字典数组 -> 字典 map
 * 2. 截取 str，遍历该字母的数组表，如果匹配则切割，不匹配则返回 false。
 *
 *
 *
 * 示例：
 * 输入: s = "leetcode", wordDict = ["leet", "code"]
 * 输出: true
 * 解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let res = false;
  const map = new Map();
  const set = new Set();

  // 1. 转换数组为 map
  for (let i = 0; i < wordDict.length; i++) {
    let head = wordDict[i][0];
    if (map.has(head)) {
      map.get(head).push(wordDict[i]);
    } else {
      map.set(head, [wordDict[i]]);
    }
    for (let j = 0; j < wordDict[i].length; j++) {
      set.add(wordDict[i][j]);
    }
  }

  // 2. 判断是否有不存在的字符
  for (let i = 0; i < s.length; i++) {
    if (!set.has(s[i])) return false;
  }

  // 2. 截取 s
  dfs(s);
  function dfs(str) {
    if (res) return;
    if (str === "") return (res = true);
    let head = str[0];
    if (!map.has(head)) return; // 没有字符串开头则直接返回 false

    let arr = map.get(head);
    for (let i = 0; i < arr.length; i++) {
      let patch = str.slice(0, arr[i].length);
      if (patch === arr[i]) {
        console.log(patch);
        // 递归
        dfs(str.slice(arr[i].length));
      }
    }
  }

  return res;
};

// console.log(
//   wordBreak(
//     "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
//     [
//       "a",
//       "aa",
//       "aaa",
//       "aaaa",
//       "aaaaa",
//       "aaaaaa",
//       "aaaaaaa",
//       "aaaaaaaa",
//       "aaaaaaaaa",
//       "aaaaaaaaaa",
//     ]
//   )
// );
// console.log(wordBreak("leetcode", ["leet", "code"]));
console.log(
  wordBreak(
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    [
      "aa",
      "aaa",
      "aaaa",
      "aaaaa",
      "aaaaaa",
      "aaaaaaa",
      "aaaaaaaa",
      "aaaaaaaaa",
      "aaaaaaaaaa",
      "ba",
    ]
  )
);
