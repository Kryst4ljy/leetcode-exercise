/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function (arrays) {
  let min = arrays[0][0];
  let max = arrays[0][arrays[0].length - 1];
  let res = 0;

  for (let i = 1; i < arrays.length; i++) {
    const curMax = arrays[i][arrays[i].length - 1];
    const curMin = arrays[i][0];

    res = Math.max(res, Math.abs(curMax - min), Math.abs(max - curMin));

    if (curMax > max) {
      max = curMax;
    }
    if (curMin < min) {
      min = curMin;
    }
  }

  return res;
};

console.log(
  maxDistance([
    [1, 2, 3],
    [4, 5],
    [1, 2, 3],
  ])
);
console.log(maxDistance([[1], [1]]));
console.log(maxDistance([[1], [2]]));
console.log(
  maxDistance([
    [1, 4],
    [0, 5],
  ])
);
console.log(maxDistance([[-8, -7, -7, -5, 1, 1, 3, 4], [-2], [-10, -10, -7, 0, 1, 3], [2]]));
