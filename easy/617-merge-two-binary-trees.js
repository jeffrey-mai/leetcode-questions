function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var mergeTrees = function(root1, root2) {
  if(!root1) return root2;
  if(!root2) return root1;

  root1.val += root2.val;
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);
  return root1;
};

const input = new TreeNode(1);
input.left = new TreeNode(3);
input.right = new TreeNode(2);
input.left.left = new TreeNode(5);

const input2 = new TreeNode(2);
input2.left = new TreeNode(1);
input2.right = new TreeNode(3);
input2.left.right = new TreeNode(4);
input2.right.right = new TreeNode(7);

console.log(mergeTrees(input, input2));