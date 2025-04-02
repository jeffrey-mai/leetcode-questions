function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var findTarget = function(root, k) {
  const set = new Set();
  const helper = (root) => {
    if(!root) return false;
    if(set.has(k - root.val)) return true;
    set.add(root.val);
    return helper(root.left) || helper(root.right);
  }
  return helper(root);
};

const input = new TreeNode(5);
input.left = new TreeNode(3);
input.right = new TreeNode(6);
input.left.left = new TreeNode(2);
input.left.left = new TreeNode(4);
input.right.right = new TreeNode(7);
console.log(findTarget(input, 9));