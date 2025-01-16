/**
 * 3066. 超过阈值的最少操作数 II
 * 
 * 给你一个下标从 0 开始的整数数组 nums 和一个整数 k 。

一次操作中，你将执行：

选择 nums 中最小的两个整数 x 和 y 。
将 x 和 y 从 nums 中删除。
将 min(x, y) * 2 + max(x, y) 添加到数组中的任意位置。
注意，只有当 nums 至少包含两个元素时，你才可以执行以上操作。

你需要使数组中的所有元素都大于或等于 k ，请你返回需要的 最少 操作次数。

示例 1：

输入：nums = [2,11,10,1,3], k = 10
输出：2
解释：第一次操作中，我们删除元素 1 和 2 ，然后添加 1 * 2 + 2 到 nums 中，nums 变为 [4, 11, 10, 3] 。
第二次操作中，我们删除元素 3 和 4 ，然后添加 3 * 2 + 4 到 nums 中，nums 变为 [10, 11, 10] 。
此时，数组中的所有元素都大于等于 10 ，所以我们停止操作。
使数组中所有元素都大于等于 10 需要的最少操作次数为 2 。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  mergeSort(nums);

  if (nums[0] >= k) return 0;
  if (nums[1] >= k) return 1;

  let res = 0;

  while (true) {
    if (!nums[0] || nums[0] >= k) break;

    res++;

    let num1 = nums.shift();
    let num2 = nums.shift();
    let sum = num1 * 2 + num2;

    if (sum < k) {
      insertNumToArr(nums, sum);
    }
  }

  return res;
};

function insertNumToArr(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
      arr.splice(i, 0, num);
      return;
    }
  }
  arr.push(num);
}

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

// 1 2 3 10 11
const res = minOperations([1, 1, 2, 4, 9], 20); // 2
console.log(res);







var minOperations = function (nums, k) {
  let res = 0;
  const pq = new MinHeap();

  for (const num of nums) {
    pq.push(num);
  }
  while (pq.peek() < k) {
    const x = pq.pop();
    const y = pq.pop();
    pq.push(x + x + y);
    res++;
  }

  return res;
};

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  peek() {
    return this.heap[0];
  }

  push(val) {
    this.heap.push(val);
    this._heapifyUp();
  }

  pop() {
    if (this.size() === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown();
    return root;
  }

  _heapifyUp() {
    let index = this.size() - 1;
    const element = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (element >= parent) break;

      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  _heapifyDown() {
    let index = 0;
    const length = this.size();
    const element = this.heap[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let smallest = index;

      if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallest]) {
        smallest = leftChildIndex;
      }

      if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallest]) {
        smallest = rightChildIndex;
      }

      if (smallest === index) break;

      this.heap[index] = this.heap[smallest];
      this.heap[smallest] = element;
      index = smallest;
    }
  }
}
