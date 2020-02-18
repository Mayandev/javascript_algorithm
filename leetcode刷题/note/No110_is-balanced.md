# No.110 平衡二叉树

给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。

## 示例

示例 1:

给定二叉树 [3,9,20,null,null,15,7]

    3
   / \
  9  20
    /  \
   15   7
返回 true 。

示例 2:

给定二叉树 [1,2,2,3,3,null,null,4,4]

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
返回 false 。

## 解题思路

### 1、自顶向下发

遍历每一个节点，计算节点的左右子树高度。

```javascript
var isBalanced = function(root) {
  if (root == null) return true;
  return (Math.abs(leftHeight(root) - rightHeight(root)) <= 1) && isBalanced(root.left) && isBalanced(root.right)
};

var leftHeight = function(node) {
  if (!node) return 0;
  return height(node.left) + 1;
}

var rightHeight = function(node) {
  if (!node) return 0;
  return height(node.right) + 1;
}

var height = function(node) {
  return Math.max(leftHeight(node), rightHeight(node));
}
```

### 2、自底向上

对二叉树做深度优先遍历DFS，递归过程中，当我们发现有一例 左/右子树高度差 ＞ 1 的情况时，代表此树不是平衡树，返回-1；
当发现不是平衡树时，后面的高度计算都没有意义了，因此一路返回-1，避免后续多余计算。
最差情况是对树做一遍完整DFS，时间复杂度为 O(N)。

```javascript
var isBalanced = function(root) {
  return depth(root) != -1;
};

var depth = function(root) {
  if (!root) return 0;
  let left = depth(root.left);
  if (left == -1) return -1;
  let right = depth(root.right);
  if (right == -1) return -1;
  return Math.abs(left - right) < 2 ? Math.max(left, right) + 1 : -1;
}
```