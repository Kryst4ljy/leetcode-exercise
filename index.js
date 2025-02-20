/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function (n) {
  let even = 0;
  let odd = 0;
  let tag = 'even';

  let current = n;
  while (current > 1) {
    const left = current % 2;
    if (tag === 'even') {
      left === 1 && even++;
      tag = 'odd';
    } else {
      left === 1 && odd++;
      tag = 'even';
    }

    if (left === 1) {
      current = (current - 1) / 2;
    } else {
      current = current / 2;
    }
  }

  if (current === 1) {
    if (tag === 'even') {
      even++;
    } else {
      odd++;
    }
  }

  return [even, odd];
};

console.log(evenOddBit(50));
console.log(evenOddBit(2));
