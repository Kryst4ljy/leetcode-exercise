/**
 * 796. 旋转字符串
 * 给定两个字符串, s 和 goal。如果在若干次旋转操作之后，s 能变成 goal ，那么返回 true 。
 * s 的 旋转操作 就是将 s 最左边的字符移动到最右边。
 * 例如, 若 s = 'abcde'，在旋转一次之后结果就是'bcdea' 。
 *
 *
 * 解题思路：
 * 设 s[0] 为 key，找到 goal 的 key 在哪，一分为二重新拼接即可
 * 如 key = a，goal[0] = a goal[1] = bcde
 *
 *
 * 示例：
 * 输入: s = "abcde", goal = "cdeab"
 * 输出: true
 */

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  const key = s[0];
  const nums = goal.split("");
  let len = goal.length;

  for (let i = 0; i < len; i++) {
    if (nums[i] === key) {
      const front = nums.slice(0, i).join("");
      const end = nums.slice(i, len).join("");
      if (`${end}${front}` === s) return true;
    }
  }

  return false;
};

console.log(rotateString("abcde", "cdeab"));
