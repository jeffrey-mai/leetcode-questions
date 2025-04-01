function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var isSubtree = function(root, subRoot) {
  const isSameTree = (p, q) => {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  };

  const helper = (p, q) => {
    if (!p) return false;
    if (isSameTree(p, q)) return true;
    return helper(p.left, q) || helper(p.right, q);
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

console.log(isSubtree(input));