/**
 * 443. 压缩字符串
 * 给你一个字符数组 chars ，请使用下述算法压缩：
 *
 * 从一个空字符串 s 开始。对于 chars 中的每组 连续重复字符 ：
 *
 * 如果这一组长度为 1 ，则将字符追加到 s 中。
 * 否则，需要向 s 追加字符，后跟这一组的长度。
 * 压缩后得到的字符串 s 不应该直接返回 ，需要转储到字符数组 chars 中。需要注意的是，如果组长度为 10 或 10 以上，则在 chars 数组中会被拆分为多个字符。
 *
 * 请在 修改完输入数组后 ，返回该数组的新长度。
 *
 * 你必须设计并实现一个只使用常量额外空间的算法来解决此问题。
 *
 *
 * 解题思路：哈希表存储，遍历后重组数组
 */

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let res = [chars[0]];
  let cur = chars[0];
  let num = 1;

  for (let i = 1; i < chars.length; i++) {
    // 相等则继续
    if (chars[i] === cur) {
      num++;
      continue;
    } else {
      if (num > 1) {
        let str = num.toString();
        for (j = 0; j < str.length; j++) {
          res.push(str[j]);
        }
      }

      // 重置状态
      res.push(chars[i]);
      cur = chars[i];
      num = 1;
    }
  }

  // 最后的状态修改
  if (num > 1) {
    let str = num.toString();
    for (j = 0; j < str.length; j++) {
      res.push(str[j]);
    }
  }

  // 更新原数组
  for (let i = 0; i < res.length; i++) {
    chars[i] = res[i];
  }

  return res.length;
};

console.log(
  compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])
);
console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
