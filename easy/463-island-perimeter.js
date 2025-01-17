const islandPerimeter = (grid) => {
  let ans = 0, n = grid.length, m = grid[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        // checks left side
        if ((j > 0 && grid[i][j - 1] === 0) || j === 0) {ans++; console.log(i,j)}
        // checks above
        if ((i > 0 && grid[i - 1][j] === 0) || i === 0) {ans++; console.log(i,j)}
        // checks right side
        if ((j < m - 1 && grid[i][j + 1] === 0) || j === m - 1) {ans++; console.log(i,j)}
        // checks bottom
        if ((i < n - 1 && grid[i + 1][j] === 0) || i === n - 1) {ans++; console.log(i,j)}
      }
    }
  }
  return ans;
};

console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]));