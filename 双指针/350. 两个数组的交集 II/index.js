/**
 * 350. 两个数组的交集 II
 * 给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。
 *
 *
 * 解题思路：
 * 双指针，左边依次遍历，右边取结果，取到结果后去掉当前数。
 *
 * 示例1：
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2,2]
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let res = [];
  let l = 0;
  let r = 0;

  while (l < nums1.length) {
    while (r < nums2.length) {
      // 未匹配
      if (nums1[l] !== nums2[r]) {
        r++;
        continue;
      }
      // 匹配到了
      if (nums1[l] === nums2[r]) {
        // 记录节点
        res.push(nums2[r]);
        nums2.splice(r, 1);
        break;
      }
    }
    // 第二数组循环完了
    l++;
    r = 0;
  }

  return res;
};

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
