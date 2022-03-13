/**
 * 1156. 单字符重复子串的最大长度
 * 如果字符串中的所有字符都相同，那么这个字符串是单字符重复的字符串。
 * 给你一个字符串 text，你只能交换其中两个字符一次或者什么都不做，然后得到一些单字符重复的子串。返回其中最长的子串的长度。
 *
 *
 * 解题思路：
 * 遍历整个字符串
 * 1. 记录每个字符出现的 {下标，长度}，存入 map 中。
 * 2. 找到最长的那个节点
 *    - 如果只有一个最长节点，那么去寻找边上有没有相邻的节点。
 *      - 有相邻节点则找到长的那个，在判断是否还有其他节点，有的话长度就是 [当前节点长度+相邻节点长度+1(借来的节点)]，无的话长度就是 [当前节点长度+相邻节点长度]。
 *      - 无相邻节点则直接判断是否还有其他节点，有的话长度就是 [当前节点长度+1]，无的话长度就是当前节点。
 *    - 如果有多个最长节点，则先去判断是否有相邻节点，找出相邻最大节点成为结算节点，进行结算。
 *
 *
 * 示例：
 * 输入：text = "ababa"
 * 输出：3
 *
 */

/**
 * @param {string} text
 * @return {number}
 */
var maxRepOpt1 = function (text) {
  let res = 0;
  let maxArr = []; // 记录所有的最长节点
  const map = {}; // 记录所有节点
  const nums = text.split("");
  let l = 0;
  let r = 0;
  let max = 0;

  while (l < nums.length) {
    const key = nums[l]; // 当前字符
    let len = 1;
    while (true) {
      if (nums[r + 1] !== key) break;
      len++;
      r++;
    }
    const node = { len, p: [l, r] };
    map[key] ? map[key].push(node) : (map[key] = [node]);
    if (max === len) {
      maxArr.push({ key: key, index: maxArr.length });
      max = len;
    } else if (max < len) {
      maxArr = [{ key: key, index: 0 }];
      max = len;
    }
    len = 0;
    l++;
    r = l;
  }

  console.log(map, maxArr);

  if (maxArr.length === 1) {
    
  }
};

console.log(maxRepOpt1("ababa"));
