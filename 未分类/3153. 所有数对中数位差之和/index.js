/**
 * @param {number[]} nums
 * @return {number}
 */
var sumDigitDifferences = function (nums) {
  var source = [];
  var len = nums[0].toString().length;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < len; j++) {
      var num = nums[i].toString()[j];
      if (source[j] && source[j][num]) {
        source[j][num] += 1;
      } else if (source[j] && !source[j][num]) {
        source[j][num] = 1;
      } else {
        source[j] = { [num]: 1 };
      }
    }
  }

  console.log(source);

  let res = 0;

  for (let i = 0; i < source.length; i++) {
    const maps = Object.keys(source[i]);
    const len = maps.length;

    console.log('maps', maps);

    for (let j = 0; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        const sum = Math.abs(maps[j] - maps[k]) * source[i][maps[j]] * source[i][maps[k]];
        console.log('___sum', sum, maps[j], maps[k]);
        res += sum;
      }
    }
  }

  return res;
};

// console.log(sumDigitDifferences([13, 23, 12]));
console.log(sumDigitDifferences([50, 28, 48]));
