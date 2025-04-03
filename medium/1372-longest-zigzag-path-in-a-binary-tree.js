function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var longestZigZag = function(root) {
  let max = 0;
  const dfs = (root, prev, length) => {
    if (!root) return;
    max = Math.max(max, length);
    dfs(root.left, 'l', prev !== 'l' ? length + 1 : 1);
    dfs(root.right, 'r', prev !== 'r' ? length + 1 : 1);
  }
  dfs(root, 'l', 0);
  return max;
};

const input = new TreeNode(5);
input.left = new TreeNode(4);
input.right = new TreeNode(8);
input.left.left = new TreeNode(11);
input.right.left = new TreeNode(13);
input.right.right = new TreeNode(4);
input.left.left.left = new TreeNode(7);
input.left.left.right = new TreeNode(2);
input.right.right.left = new TreeNode(5);
input.right.right.right = new TreeNode(1);
console.log(longestZigZag(input));