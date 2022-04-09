/**
 * 151. 颠倒字符串中的单词
 * 给你一个字符串 s ，颠倒字符串中 单词 的顺序。
 *
 * 单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。
 *
 * 返回 单词 顺序颠倒且 单词 之间用单个空格连接的结果字符串。
 *
 * 注意：输入字符串 s中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。
 *
 *
 * 解题思路：
 * 1. 利用 split 方法 分割出所有单词
 * 2. 遍历数组，去除空格成员，以及去除成员两边的空格
 * 3. 反转数组，join 方法生成字符串返回
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const arr = s.split(" ");
  const res = [];

  // 去除空格
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "") continue;
    res.push(arr[i].trim());
  }

  return res.reverse().join(" ");
};
