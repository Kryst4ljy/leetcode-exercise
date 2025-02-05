var nums = [1, 1, 2, 2];
var res = [[]];
var map = {};

function dfs(prev, index) {
  if (index >= nums.length) return;

  const current = [...prev, nums[index]];
  const tag = current.join('');
  if (!map[tag]) {
    map[tag] = 1;
    console.log(current);
  }

  for (let i = index + 1; i < nums.length; i++) {
    dfs(current, i);
  }
}

for (let i = 0; i < nums.length; i++) {
  dfs([], i);
}
