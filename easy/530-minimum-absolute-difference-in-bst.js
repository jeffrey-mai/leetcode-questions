function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var getMinimumDifference = function(root) {
  let ans = Infinity, prev = Infinity;
  const helper = (root) => {
    if(!root) return;
    helper(root.right);
    ans = Math.min(ans, prev - root.val);
    prev = root.val;
    helper(root.left);
  }
  helper(root);
  return ans;
};

const input = new TreeNode(7);
input.left = new TreeNode(1);
input.right = new TreeNode(20);
input.right.left = new TreeNode(15);
input.right.right = new TreeNode(27);
console.log(getMinimumDifference(input));