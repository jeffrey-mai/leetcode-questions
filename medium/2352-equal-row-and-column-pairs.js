var equalPairs = function(grid) {
  const rows = new Map(), n = grid.length;
  let count = 0;

  // tracking rows
  for(let r = 0; r < n; r++){
    const row = String(grid[r]);
    rows.set(row, 1 + (rows.get(row) || 0));
  }

  // comparing columns to rows
  for(let c = 0; c < n; c++){
    const col = String(grid.map(row => row[c]));
    count += (rows.get(col) || 0);
  }
  
  return count;
};

console.log(equalPairs([[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]));