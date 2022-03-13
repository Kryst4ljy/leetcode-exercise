/**
 * 1299. 将每个元素替换为右侧最大元素
 * 给你一个数组 arr ，请你将每个元素用它右边最大的元素替换，如果是最后一个元素，用 -1 替换。
 * 完成所有替换操作后，请你返回这个数组。
 *
 * 解题思路：双指针遍历 没啥好说的 - -
 *
 * 示例：
 * 输入：arr = [17,18,5,4,6,1]
 * 输出：[18,6,6,6,1,-1]
 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  const res = [];
  let l = 0;
  let r = l + 1;

  while (l < arr.length) {
    let max = arr[r];
    for (r; r < arr.length; r++) {
      max = Math.max(max, arr[r]);
    }
    res[l] = max;
    r = ++l + 1;
    max = 0;
  }

  res[arr.length - 1] = -1;

  return res;
};

console.log(replaceElements([400]));
