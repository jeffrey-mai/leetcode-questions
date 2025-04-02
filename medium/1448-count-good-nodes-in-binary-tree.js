function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var goodNodes = function(root) {
  let count = 0
  const dfs = (node, maxSoFar) => {
    if(!node) return;
    if(node.val >= maxSoFar) count++;
    const newMaxSoFar = Math.max(maxSoFar, node.val);
    dfs(node.left, newMaxSoFar);
    dfs(node.right, newMaxSoFar);
  }
  dfs(root, Number.MIN_SAFE_INTEGER);
  return count;
};

const input = new TreeNode(3);
input.left = new TreeNode(1);
input.right = new TreeNode(4);
input.left.left = new TreeNode(3);
input.right.left = new TreeNode(1);
input.right.right = new TreeNode(5);
console.log(goodNodes(input));