/**
 * 232. 用栈实现队列
 * 请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（push、pop、peek、empty）：
 * 实现 MyQueue 类：
 *    void push(int x) 将元素 x 推到队列的末尾
 *    int pop() 从队列的开头移除并返回元素
 *    int peek() 返回队列开头的元素
 *    boolean empty() 如果队列为空，返回 true ；否则，返回 false
 *
 * 说明：
 * 你 只能 使用标准的栈操作 —— 也就是只有 push to top, peek/pop from top, size, 和 is empty 操作是合法的。
 * 你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
 *
 *
 * 解题思路：
 * 栈实现队列，一个栈只负责入、一个只负责出。
 * 入栈不需要特殊处理，出栈需要把 入栈 里面的所有元素先倒到 出栈 中，再执行出栈。
 * 当 出栈 中不为空时，优先先出完 出栈 中的所有元素，等 出栈 为空后，再从 入栈 中取元素。
 */

var MyQueue = function () {
  this.list1 = []; // 入口栈
  this.list2 = []; // 出口栈
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.list1.push(x); // 入栈都是直接入
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.list2.length === 0 && this.list1.length === 0) return undefined;
  if (this.list2.length === 0) {
    while (this.list1.length !== 0) {
      this.list2.push(this.list1.pop());
    }
  }
  return this.list2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.list2.length === 0
    ? this.list1[0]
    : this.list2[this.list2.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.list1.length === 0 && this.list2.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
