/**
 * 1287. 有序数组中出现次数超过25%的元素
 * 
 * 
提示
给你一个非递减的 有序 整数数组，已知这个数组中恰好有一个整数，它的出现次数超过数组元素总数的 25%。

请你找到并返回这个整数

 

示例：

输入：arr = [1,2,2,6,6,6,6,7,10]
输出：6
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
  const Threshold = arr.length / 4;
  const map = {};

  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = 1;
    } else {
      map[arr[i]] += 1;
    }

    if (map[arr[i]] > Threshold) return arr[i];
  }
};

console.log(findSpecialInteger([1, 2, 2, 6, 6, 6, 7, 10]));
console.log(findSpecialInteger([1, 2, 3, 3]));
console.log(findSpecialInteger([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 12, 12]));
