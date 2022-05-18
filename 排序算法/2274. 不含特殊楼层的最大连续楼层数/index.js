/**
 * 2274. 不含特殊楼层的最大连续楼层数
 * Alice 管理着一家公司，并租用大楼的部分楼层作为办公空间。Alice 决定将一些楼层作为 特殊楼层 ，仅用于放松。
 *
 * 给你两个整数 bottom 和 top ，表示 Alice 租用了从 bottom 到 top（含 bottom 和 top 在内）的所有楼层。另给你一个整数数组 special ，其中 special[i] 表示  Alice 指定用于放松的特殊楼层。
 *
 * 返回不含特殊楼层的 最大 连续楼层数。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/maximum-consecutive-floors-without-special-floors
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 *
 *
 * 解题思路：
 * 1. 归并排序特殊楼层。
 * 2. 计算左区间最大值。
 * 3. 计算右区间最大值。
 * 4. 遍历一次排序后的特殊楼层数组，根据连续性计算特殊楼层数组中出现的工作楼层，且得出最大值。
 */

/**
 * @param {number} bottom
 * @param {number} top
 * @param {number[]} special
 * @return {number}
 */
var maxConsecutive = function (bottom, top, special) {
  let len = special.length - 1;

  // 1. 排序
  divide(special, 0, len);

  function divide(arr, left, right) {
    if (left >= right) return;
    let mid = Math.floor((right - left + 1) / 2) + left;
    divide(arr, left, mid - 1);
    divide(arr, mid, right);
    cure(arr, left, mid, right);
  }

  function cure(arr, left, mid, right) {
    let res = [];
    let key1 = left;
    let key2 = mid;

    for (let i = 0; i < right - left + 1; i++) {
      if (key1 >= mid) {
        res[i] = arr[key2++];
        continue;
      }
      if (key2 > right) {
        res[i] = arr[key1++];
        continue;
      }

      if (arr[key1] >= arr[key2]) {
        res[i] = arr[key2++];
      } else {
        res[i] = arr[key1++];
      }
    }

    for (let i = 0; i < res.length; i++) {
      arr[i + left] = res[i];
    }
  }

  console.log(special);

  let res = 0;

  // 2. 计算左连续区间
  res = Math.max(special[0] - bottom, res);

  // 3. 计算右连续区间
  res = Math.max(top - special[len], res);

  // 4. 计算中间楼层区间
  for (let i = 1; i <= len; i++) {
    // 连续休闲楼层直接跳过，不连续的计入 res
    if (special[i - 1] + 1 !== special[i]) {
      let max = special[i] - special[i - 1] - 1;
      res = Math.max(max, res);
    }
  }

  return res;
};
