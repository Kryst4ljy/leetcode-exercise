/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
  let max = 0;
  let map = {};

  for (let i = lowLimit; i <= highLimit; i++) {
    const arr = i
      .toString()
      .split('')
      .map((m) => Number(m));

    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      sum += arr[j];
    }

    if (map[sum]) {
      map[sum] += 1;
    } else {
      map[sum] = 1;
    }

    if (map[sum] > max) {
      max = map[sum];
    }
  }

  return max;
};

console.log(countBalls(1, 10));
