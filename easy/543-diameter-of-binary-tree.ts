// Definition for a binary tree node.
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
}

// input: root, 
// returns length of the diameter of tree
// find max depth on left and right side then add together

function diameterOfBinaryTree(root: TreeNode | null, length: number = 0): number {
  let ans = 0
  function dfs(node: TreeNode | null): number {
    if(node === null) return 0;
    const left = dfs(node.left);
    const right = dfs(node.right);
    ans = Math.max(ans, left + right);
    return Math.max(left, right) + 1;
  }
  dfs(root);
  return ans;
};

export default diameterOfBinaryTree;