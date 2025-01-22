/**
 * 1561. 你可以获得的最大硬币数目
 * 
 * 有 3n 堆数目不一的硬币，你和你的朋友们打算按以下方式分硬币：

每一轮中，你将会选出 任意 3 堆硬币（不一定连续）。
Alice 将会取走硬币数量最多的那一堆。
你将会取走硬币数量第二多的那一堆。
Bob 将会取走最后一堆。
重复这个过程，直到没有更多硬币。
给你一个整数数组 piles ，其中 piles[i] 是第 i 堆中硬币的数目。

返回你可以获得的最大硬币数目。

 

示例 1：

输入：piles = [2,4,1,2,7,8]
输出：9
解释：选出 (2, 7, 8) ，Alice 取走 8 枚硬币的那堆，你取走 7 枚硬币的那堆，Bob 取走最后一堆。
选出 (1, 2, 4) , Alice 取走 4 枚硬币的那堆，你取走 2 枚硬币的那堆，Bob 取走最后一堆。
你可以获得的最大硬币数目：7 + 2 = 9.
考虑另外一种情况，如果选出的是 (1, 2, 8) 和 (2, 4, 7) ，你就只能得到 2 + 4 = 6 枚硬币，这不是最优解。
示例 2：

输入：piles = [2,4,5]
输出：4
示例 3：

输入：piles = [9,8,7,6,5,1,2,3,4]
输出：18
 */

/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
  // 排序
  mergeSort(piles);
  let round = piles.length / 3;
  let res = 0;
  let index = piles.length - 2;

  while (round > 0) {
    res += piles[index];
    round--;
    index -= 2;
  }

  return res;
};

function mergeSort(arr) {
  divide(arr, 0, arr.length - 1);

  // 分
  function divide(arr, left, right) {
    if (left >= right) return;
    let mid = Math.floor((right - left + 1) / 2) + left;
    divide(arr, left, mid - 1);
    divide(arr, mid, right);
    // 治
    cure(arr, left, mid, right);
  }

  // 治
  function cure(arr, left, mid, right) {
    let res = [];
    let index = 0;
    let key1 = left;
    let key2 = mid;

    // 合并两个排序数组 - 核心为细分到最小
    while (index < right - left + 1) {
      if (key1 === mid) {
        res[index] = arr[key2];
        key2++;
        index++;
        continue;
      }
      if (key2 === right + 1) {
        res[index] = arr[key1];
        key1++;
        index++;
        continue;
      }
      if (arr[key1] > arr[key2]) {
        res[index] = arr[key2];
        key2++;
      } else {
        res[index] = arr[key1];
        key1++;
      }
      index++;
    }

    // 修改原数组
    for (let i = 0; i < res.length; i++) {
      arr[i + left] = res[i];
    }
  }

  return arr;
}
