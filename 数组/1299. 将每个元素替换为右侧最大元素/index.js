/**
 * @param {number[]} arr
 * @return {number[]}
 */
// var replaceElements = function (arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let max = 0;

//     for (let j = i + 1; j < arr.length; j++) {
//       max = Math.max(max, arr[j]);
//     }

//     arr[i] = max;
//   }

//   arr[arr.length - 1] = -1;

//   return arr;
// };

// console.log(replaceElements([17, 18, 5, 4, 6, 1])); // [18,6,6,6,1,-1]

var replaceElements = function (arr) {
  const n = arr.length;
  const ans = new Array(n);
  ans[n - 1] = -1;
  for (let i = n - 2; i >= 0; i--) {
    ans[i] = Math.max(ans[i + 1], arr[i + 1]);
    console.log(ans);
  }
  return ans;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1])); // [18,6,6,6,1,-1]
