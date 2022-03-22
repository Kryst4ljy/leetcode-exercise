/**
 * 225. 用队列实现栈
 * 请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（push、top、pop 和 empty）。
 * 实现 MyStack 类：
 *    void push(int x) 将元素 x 压入栈顶。
 *    int pop() 移除并返回栈顶元素。
 *    int top() 返回栈顶元素。
 *    boolean empty() 如果栈是空的，返回 true ；否则，返回 false 。
 *
 * 注意：
 * 你只能使用队列的基本操作 —— 也就是 push to back、peek/pop from front、size 和 is empty 这些操作。
 * 你所使用的语言也许不支持队列。 你可以使用 list （列表）或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。
 *
 *
 * 解题思路：
 * 两个队列来回切换 - 用指针去判断
 * 1. 入栈：入 当前指针队列 无需特殊处理。
 *        例子：入 1，2，3。 l = [1,2,3] r = []
 * 2. 出栈：先出 当前指针队列 元素到 另一个队列 中，剩余最后一个元素记为需要出栈元素
 *        例子：出 3。l = [3] r = [1,2]
 * 3. 然后再切换指针即可。
 *
 */

var MyStack = function () {
  this.key = "l"; // 当前队列
  this.l = []; // 第一个队列
  this.r = []; // 第二个队列
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this[this.key].push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  let another = this.key === "l" ? "r" : "l";
  // 1. 先把当前指针下的队列推出至只剩一个元素
  let round = this[this.key].length - 1;
  for (let i = 0; i < round; i++) {
    // 2. 推入另一个队列
    this[another].push(this[this.key].shift());
  }
  // 3. 推出当前队列 - 获得结果
  let res = this[this.key].shift();
  // 改变指针方向
  this.key = another;
  return res;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this[this.key][this[this.key].length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this[this.key].length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
