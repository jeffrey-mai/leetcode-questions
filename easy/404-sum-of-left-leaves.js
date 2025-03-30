function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var sumOfLeftLeaves = function(root) {
  const helper = (root, flag) => {
    if (!root) return 0;
    if (flag === 0 && !root.right && !root.left) return root.val;
    return helper(root.left, 0) + helper(root.right, 1);
  }
  return helper(root);
};

const input = new TreeNode(3);
input.left = new TreeNode(9);
input.right = new TreeNode(20);
input.right.left = new TreeNode(15);
input.right.right = new TreeNode(7);
console.log(sumOfLeftLeaves(input));