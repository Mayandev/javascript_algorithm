# No.101 对称二叉树

难度：`easy`



给定一个二叉树，检查它是否是镜像对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
```
    1
   / \
  2   2
 / \ / \
3  4 4  3
```
但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
```
    1
   / \
  2   2
   \   \
   3    3
```
说明:

如果你可以运用递归和迭代两种方法解决这个问题，会很加分。

## 解题思路

使用递归的思路，同时判断左右是否相等.

代码如下：

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return isMirror(root,root);
};

var isMirror = function(l,r) {
  if (l == null && r == null) return true;
  if (l == null || r == null) return false;
  return (l.val == r.val)
        && isMirror(l.right, r.left)
        && isMirror(l.left, r.right);
}
```
