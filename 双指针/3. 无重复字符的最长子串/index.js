/**
 * 3. 无重复字符的最长子串
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 * 示例1:
 * 输入: s = "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 *
 * 示例2:
 * 输入: s = "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let res = 0;
  let l = 0; // 左节点
  let r = 0; // 右节点
  const map = {};
  const nums = s.split("");

  while (r < nums.length) {
    const element = nums[r];
    console.log(element, map);
    // 同一起跑线 || map未记录此节点
    if (l === r || map[element] === undefined) {
      map[element] = r;
      res = Math.max(res, r - l + 1);
      r++;
      continue;
    }
    if (map[element] !== undefined) {
      l = Math.max(l, map[element] + 1); // 移动左节点 !!!!!!!! 左边界不能往左走
      map[element] = r;
      res = Math.max(res, r - l + 1);
      r++;
    }
  }

  return res;
};

console.log(lengthOfLongestSubstring("abba"));
