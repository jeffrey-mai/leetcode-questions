const findContentChildren = (g, s) => {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let i = 0, j = 0, ans = 0;
  while (j < s.length && i < g.length) {
    if (g[i] <= s[j++]) {
      ans++;
      i++;
    }
  }
  return ans;
};

console.log(findContentChildren([10,9,8,7], [5,6,7,8]));