function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var findSecondMinimumValue = function(root) {
  const set = new Set();
  const helper = (root) => {
    if (!root) return;
    if (!set.has(root.val)) set.add(root.val);
    helper(root.left);
    helper(root.right);
  }
  helper(root);
  return set.size >= 2 ? [...set].sort((a, b) => a - b)[1] : -1;
};

const input = new TreeNode(2);
input.left = new TreeNode(2);
input.right = new TreeNode(5);
input.right.left = new TreeNode(5);
input.right.right = new TreeNode(7);
console.log(findSecondMinimumValue(input));