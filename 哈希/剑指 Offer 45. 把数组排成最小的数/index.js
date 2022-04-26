/**
 * 剑指 Offer 45. 把数组排成最小的数
 * 输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。
 *
 *
 * 解题思路：
 * 1. 按第一位数进行 map 的分类。
 * 2. 按 1-9 的顺序进行组合。
 * 3. 比较每个 map 中的数，进行排序。
 * 4. 规则，0 是最小的，如果为空，则判断 大于等于当前数，如果 大于等于则排在后面，小于则排在前面
 *
 *
 *
 * 示例：
 * 输入: [10,2]
 * 输出: "102"
 *
 * 输入: [3,30,34,5,9]
 * 输出: "3033459"
 */

/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let str = nums[i].toString();
    let key = str[0]; // 当前 map 的 key
    let num = str; // 当前值

    if (map[key] === undefined) {
      map[key] = [num];
    } else {
      for (let j = map[key].length - 1; j >= 0; j--) {
        let f = sortStr(map[key][j], num);
        if (!f) {
          map[key].splice(j + 1, 0, num);
          break;
        }
        if (f && j === 0) {
          map[key].unshift(num);
        }
      }
    }
  }

  function sortStr(s1, s2) {
    if (s1 === s2) return false;
    let key = s1[0];
    let len = Math.max(s1.length, s2.length);

    for (let i = 1; i < len; i++) {
      if (s1[i] === undefined && s2[i] === undefined) return false; // 不变
      if (s1[i] === undefined) {
        if (s2[i] >= key) return false; // 不变
        if (s2[i] < key) return true; // 向前 push
      }
      if (s2[i] === undefined) {
        if (s1[i] >= key) return true; // 向前 push
        if (s1[i] < key) return false; // 不变
      }
      if (s1[i] === s2[i]) continue;
      if (s1[i] >= s2[i]) return true; // 向前 push
      if (s1[i] < s2[i]) return true; // 不变
    }
  }

  console.log(map);
  let res = "";
  for (let i = 1; i <= 9; i++) {
    if (map[i] === undefined) continue;
    for (let j = 0; j < map[i].length; j++) {
      res += map[i][j];
    }
  }

  return res;
};

// console.log(minNumber([3, 30, 34, 5, 9]));
console.log(minNumber([121, 12]));
