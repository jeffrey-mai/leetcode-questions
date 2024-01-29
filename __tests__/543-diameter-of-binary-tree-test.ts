import diameterOfBinaryTree from '../easy/543-diameter-of-binary-tree';

describe('543-diameter-of-binary-tree test', () => {
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

  it('input: [1,2,3,4,5] (Binary tree)', () => {
    const test = new TreeNode(1);
    test.left = new TreeNode(2);
    test.right = new TreeNode(3);
    test.left.left = new TreeNode(4);
    test.left.right = new TreeNode(5);
    expect(diameterOfBinaryTree(test)).toEqual(3);
  })

  it('input: [1,2] (Binary tree)', () => {
    const test = new TreeNode(1);
    test.left = new TreeNode(2);
    expect(diameterOfBinaryTree(test)).toEqual(1);
  })
})