function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var binaryTreePaths = function(root) {
  const paths = (root, pathValues, pathValue = "") => {
    if (!root) return;
    pathValue += `${root.val}`;
    if (!root.left && !root.right) pathValues.push(pathValue);
    paths(root.left, pathValues, pathValue + "->");
    paths(root.right, pathValues, pathValue + "->");
  }

  const pathValues = [];
  paths(root, pathValues);
  return pathValues;
};

const input = new TreeNode(1);
input.left = new TreeNode(2);
input.right = new TreeNode(3);
input.left.right = new TreeNode(5);
console.log(binaryTreePaths(input));