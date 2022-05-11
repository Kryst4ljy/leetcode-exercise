/**
 * 179. 最大数
 * 给定一组非负整数 nums，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。
 *
 * 注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数。
 *
 *
 *
 * 解题思路：
 * 先比第一位数，谁大谁排前面。
 * 再比第二位，如果一个数少，就一直比它最后那位数。
 *
 *
 * 示例：
 * 输入：nums = [10,2]
 * 输出："210"
 */

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  const stack = [`${nums[0]}`];

  for (let i = 1; i < nums.length; i++) {
    let current = `${nums[i]}`;
    let f = false;
    // 循环一次 stack，比较大小
    for (let j = stack.length - 1; j >= 0; j--) {
      if (max(stack[j], current)) {
        console.log(stack, j, current);
        stack.splice(j + 1, 0, current);
        f = true;
        break;
      }
    }
    !f && stack.unshift(current);
    console.log(stack);
  }

  function max(s1, s2) {
    let l = 0;
    let r = 0;
    let maxl = 0;
    let maxr = 0;

    while (true) {
      maxl = Math.max(maxl, Number(s1[l]));
      maxr = Math.max(maxr, Number(s2[r]));
      if (Number(s1[l]) > Number(s2[r])) return true;
      if (Number(s1[l]) < Number(s2[r])) return false;
      if (l === s1.length - 1 && r === s2.length - 1) return true;
      if (l === s1.length - 1) return Number(s1[l]) < maxr;
      if (r === s2.length - 1) return Number(s2[r]) >= maxl;
      l = l === s1.length - 1 ? l : l + 1;
      r = r === s2.length - 1 ? r : r + 1;
    }
  }

  console.log(stack);

  return stack.join("");
};

console.log(largestNumber([3, 30, 34, 5, 9]));
