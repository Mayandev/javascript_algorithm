# No.102 二叉树的层次遍历

难度：`middle`

给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。

例如:
给定二叉树: [3,9,20,null,null,15,7],

```
    3
   / \
  9  20
    /  \
   15   7
```
返回其层次遍历结果：

```
[
  [3],
  [9,20],
  [15,7]
]
```

## 解题思路

使用队列的思路，宽度优先搜索，每次遍历都将节点入队列，并加入到输出的数组中。

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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root == null) {
    return [];
  }
  let queue = [root];
  let res = [];
  while (queue.length) {
    let arr = [];
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let front = queue.shift();
      arr.push(front.val);
      if (front.left) 
        queue.push(front.left);
      if (front.right)
        queue.push(front.right);
    }
    res.push(arr);
  }
  return res;
};
```