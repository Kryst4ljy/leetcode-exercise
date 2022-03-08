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
  let start = 0; // 初始指针
  let end = 0; // 末尾指针
  const map = {}; // 记录当前元素的下标表

  const nums = s.split("");
  while (end < nums.length) {
    const element = nums[end]; // 当前元素
    // 遇到重复选项
    if (map[element] !== undefined && start <= map[element]) {
      // 左边窗口边界重新赋值
      start = map[element] + 1;
    }
    // 更新当前元素下标
    map[element] = end;
    res = Math.max(res, end - start + 1);
    end++;
  }

  return res;
};

console.log(lengthOfLongestSubstring("abba"));
