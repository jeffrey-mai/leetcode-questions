function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var findMode = function(root) {
  const map = new Map();
  let maxMode = 0, ans = [];
  const helper = (root) => {
    if(!root) return;
    map.set(root.val, map.get(root.val) + 1 || 1);
    if(maxMode === map.get(root.val)) ans.push(root.val);
    else if(maxMode < map.get(root.val)) ans = [root.val];
    maxMode = Math.max(maxMode, map.get(root.val));
    helper(root.left);
    helper(root.right);
  }
  helper(root);
  return ans;
};

const input = new TreeNode(3);
input.left = new TreeNode(7);
input.right = new TreeNode(20);
input.right.left = new TreeNode(15);
input.right.right = new TreeNode(7);
console.log(findMode(input));