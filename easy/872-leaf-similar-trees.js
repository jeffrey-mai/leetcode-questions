function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var leafSimilar = function(root1, root2) {
  const collectLeafValues = (root, leafValues) => {
    if (!root) return;
    if (!root.left && !root.right) leafValues.push(root.val);
    collectLeafValues(root.left, leafValues);
    collectLeafValues(root.right, leafValues);
  };

  const leafValues1 = [], leafValues2 = [];
  collectLeafValues(root1, leafValues1);
  collectLeafValues(root2, leafValues2);

  return JSON.stringify(leafValues1) === JSON.stringify(leafValues2);
};

console.log(leafSimilar());