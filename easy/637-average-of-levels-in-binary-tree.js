function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var averageOfLevels = function(root) {
  const ans = [];
  const helper = (root, ans, depth = 0) => {
    if(!root) return;
    if(!ans[depth]) ans[depth] = [root.val, 1];
    else ans[depth] = [ans[depth][0] + root.val, ans[depth][1] + 1];
    helper(root.left, ans, depth+1);
    helper(root.right, ans, depth+1);
  }
  helper(root, ans);
  ans.forEach((ele, i) =>  ans[i] = ele[0]/ele[1]);
  return ans;
};

const input = new TreeNode(3);
input.left = new TreeNode(9);
input.right = new TreeNode(20);
input.right.left = new TreeNode(15);
input.right.right = new TreeNode(7);
console.log(averageOfLevels(input));