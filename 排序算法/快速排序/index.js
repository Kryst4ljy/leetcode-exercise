/**
 *
 * 3 + 2：3个初始值，2个嵌套 while 循环
 */

function quickSort(arr, left, right) {
  if (left >= right) return;
  let key = arr[left];
  let l = left;
  let r = right;

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
  quickSort(arr, left, l);
  quickSort(arr, l + 1, right);
}

const arr = [2, 1, 3];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
