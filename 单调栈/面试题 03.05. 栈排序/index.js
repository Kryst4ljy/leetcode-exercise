/**
 * 面试题 03.05. 栈排序
 * 栈排序。 编写程序，对栈进行排序使最小元素位于栈顶。最多只能使用一个其他的临时栈存放数据，但不得将元素复制到别的数据结构（如数组）中。该栈支持如下操作：push、pop、peek 和 isEmpty。当栈为空时，peek 返回 -1。
 *
 *
 * 解题思路：
 * 单调栈，当 push 时，遍历当前栈，插入
 */

var SortedStack = function () {
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
SortedStack.prototype.push = function (val) {
  if (this.stack.length === 0) {
    this.stack.push(val);
    return;
  }
  for (let i = this.stack.length - 1; i >= 0; i--) {
    if (this.stack[i] < val) continue;
    this.stack.splice(i + 1, 0, val);
    return;
  }
  this.stack.unshift(val);
};

/**
 * @return {void}
 */
SortedStack.prototype.pop = function () {
  this.stack.pop();
};

/**
 * @return {number}
 */
SortedStack.prototype.peek = function () {
  return this.isEmpty() ? -1 : this.stack[this.stack.length - 1];
};

/**
 * @return {boolean}
 */
SortedStack.prototype.isEmpty = function () {
  return this.stack.length === 0;
};

/**
 * Your SortedStack object will be instantiated and called as such:
 * var obj = new SortedStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.isEmpty()
 */
