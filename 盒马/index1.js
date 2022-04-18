/*
2、数字查找和排序 -  找出数组中重复最多的元素
var arr = [1, 2, 3, 1, 2, 3, 4, 3, 3, 5, 3];
a、找出数组中重复最多的数字。
b、重复最多的数字最先开始的位置。
c、重复最多的数字的数量。
// a) 3
// b) 2
// c) 5
*/

function test2(arr) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      let node = map.get(arr[i]);
      node.val++;
      map.set(arr[i], node);
    } else {
      map.set(arr[i], { val: 1, index: i });
    }
  }

  let sum = 0; // a、找出数组中重复最多的数字。
  let index = 0; // b、重复最多的数字最先开始的位置。
  let num = 0; // c、重复最多的数字的数量。
  for (let key of map.keys()) {
    let node = map.get(key);
    if (sum < node.val) {
      sum = key;
      index = node.index;
      num = node.val;
    }
  }

  return { sum, index, num };
}

console.log(test2([1, 2, 3, 1, 2, 3, 4, 3, 3, 5, 3]));
