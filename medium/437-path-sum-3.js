function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var pathSum = function(root, targetSum) {
  let count = 0;
  function helper(root, path) {
    if (!root) return;
    path.push(root.val);
    let sum = 0;

    for (let i = path.length - 1; i >= 0; i--) {
      sum += path[i];
      if (sum === targetSum) count++;
    }
    helper(root.left, path);
    helper(root.right, path);
    path.pop();
  }
  helper(root, []);
  return count;
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
console.log(pathSum(input, 22));