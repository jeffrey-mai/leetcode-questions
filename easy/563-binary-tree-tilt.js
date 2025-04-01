function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var findTilt = function(root) {
  let sum = 0;
  const helper = (root) => {
    if(!root) return 0;
    const leftSum = helper(root.left);
    const rightSum = helper(root.right);
    sum += Math.abs(leftSum - rightSum);
    return leftSum + rightSum + root.val;
  }
  helper(root);
  return sum;
};

const input = new TreeNode(4);
input.left = new TreeNode(2);
input.right = new TreeNode(9);
input.left.left = new TreeNode(3);
input.left.right = new TreeNode(5);
input.right.right = new TreeNode(7);
console.log(findTilt(input));