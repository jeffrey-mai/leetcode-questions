function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var isSubtree = function(root, subRoot) {
  const isSameTree = (root, subRoot) => {
    if (!root && !subRoot) return true;
    if (!root || !subRoot) return false;
    if (root.val !== subRoot.val) return false;
    return isSameTree(root.left, subRoot.left) && isSameTree(root.right, subRoot.right);
  };

  const helper = (root, subRoot) => {
    if (!root) return false;
    if (isSameTree(root, subRoot)) return true;
    return helper(root.left, subRoot) || helper(root.right, subRoot);
  };

  return helper(root, subRoot);
};

const input = new TreeNode(3);
input.left = new TreeNode(4);
input.right = new TreeNode(5);
input.left.left = new TreeNode(1);
input.left.right = new TreeNode(2);

const input2 = new TreeNode(4);
input2.left = new TreeNode(1);
input2.right = new TreeNode(2);

console.log(isSubtree(input, input2));