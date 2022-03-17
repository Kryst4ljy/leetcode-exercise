/**
 * 31. 下一个排列
 * 整数数组的一个 排列  就是将其所有成员以序列或线性顺序排列。
 *
 * 例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 。
 * 整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，那么数组的 下一个排列 就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。
 * 例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。
 * 类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。
 * 而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。
 * 给你一个整数数组 nums ，找出 nums 的下一个排列。
 * 必须 原地 修改，只允许使用额外常数空间。
 *
 *
 * 解题思路：
 * 字典序就是下一个排序比他大的整数。
 * 所以此题就是末尾向前找，一个升序对，比如 [4,2,0,1,4,3,2,1,0]，升序对是 1，4。那么必定是在这两个数这边做调整。
 * 从 4 的位置开始往后找，（找到最接近 1 的 比 1 大的数），替换二者位置，得到 [4,2,0,2,4,3,1,1,0]。
 * 此时再对 2 后面的数字进行排序，就可以得到最小的比这个值大的整数了。[4,2,0,2,0,1,1,3,4]。
 * 而如果一直未找到（找到最接近 1 的 比 1 大的数），那么直接交换这个升序对的值，然后再做尾部排序即可。
 *
 * 如果是获取每一个排序的话，递归每一种排序，找到只有当前元素（仅出现过一次的）所有排序，按顺序来
 *
 *
 *
 *
 * 示例：
 * 输入：nums = [1,2,3]
 * 输出：[1,3,2]
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let r = nums.length - 1;
  let l = r - 1;
  let res = false;

  while (l >= 0) {
    // 遍历寻找升序对
    if (nums[l] >= nums[r]) {
      r--;
      l = r - 1;
    } else {
      // 匹配到了升序对
      let next = r + 1;
      let cur = nums[l];
      let nextIndex = 0;
      let f = false; // 是否匹配到了大于替换值的值
      while (next < nums.length) {
        // 匹配最接近替换值的那个值
        if (nums[next] > cur) {
          nums[l] = nums[next];
          f = true;
          nextIndex = next;
        }
        next++;
      }
      if (!f) {
        let s = nums[r];
        nums[r] = nums[l];
        nums[l] = s;
      } else {
        nums[nextIndex] = cur;
      }
      sort(nums, r, nums.length - 1); // 尾部数据重新排序
      res = true;
      break;
    }
  }

  return res ? nums : nums.reverse();

  function sort(arr, left, right) {
    if (left >= right) return;
    let l = left;
    let r = right;
    let key = arr[l];

    while (l < r) {
      while (l < r && arr[r] >= key) {
        r--;
      }
      arr[l] = arr[r];
      while (l < r && arr[l] <= key) {
        l++;
      }
      arr[r] = arr[l];
    }

    arr[l] = key;
    sort(arr, left, l);
    sort(arr, l + 1, right);
  }
};

console.log(nextPermutation([1, 2, 3]));
console.log(nextPermutation([3, 2, 1]));
console.log(nextPermutation([1, 5, 1]));
console.log(nextPermutation([4, 2, 0, 2, 3, 2, 0]));
console.log(nextPermutation([2, 2, 7, 5, 4, 3, 2, 2, 1]));
