/**
 * 42. 接雨水
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 *
 * 思路：
 * 单调递减栈实现：
 * 1. 先入栈的是左边还没结算的边界，如果遇到比他低的就陆续进栈等待结算。
 * 2. 遇到比栈顶高的右边界时，进行结算，计算此栈顶积累的水的体积：w * h
 * 3. w：右边界下标 - 左边界下标（也就是栈顶下面的那个元素）- 1（右边界自身）
 * 4. h：min(栈顶与左边界高度差，栈顶与右边界高度差)
 *
 * 示例1:
 * 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出：6
 * 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let res = 0; // 积水量
  const stack = []; // 单调递减栈

  for (let i = 0; i < height.length; i++) {
    // 边界处理
    if (stack.length === 0 && height[i] === 0) continue;
    // 入栈，递减栈，小于栈顶入栈，大于栈顶出栈结算
    while (true) {
      const top = stack[stack.length - 1]; // 获取栈顶元素
      const left = stack[stack.length - 2]; // 栈顶左元素
      // 栈顶没有元素 || 栈顶 >= 当前元素 ---- 入栈
      if (top === undefined || top.h >= height[i]) {
        stack.push({ i: i, h: height[i] });
        break;
      } else if (top.h < height[i] && left === undefined) {
        stack.pop(); // 出栈
        stack.push({ i: i, h: height[i] });
        break;
      } else if (top.h < height[i] && left !== undefined) {
        const w = i - left.i - 1; // 计算宽度
        const h = Math.min(height[i] - top.h, left.h - top.h); // 计算高度
        res += w * h; // 结算
        stack.pop(); // 出栈
        continue;
      }
    }
  }

  return res;
};

console.log(trap([4, 2, 0, 3, 2, 5]));
