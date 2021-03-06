# AVL树
二叉查找树的一个局限性就是有可能退化成一个链表，这种情况下二叉查找树的效率就会急剧下降变成0(n)。而AVL树可以很好地解决BST的这种困境。本篇博客会介绍AVL树的基本特点和相关操作。

任何两个子树的高度差最大是1，这样的二叉树叫做AVL树。

先来确定几个概念：

> 平衡因子：将二叉树上节点的左子树高度减去右子树高度的值称为该节点的平衡因子BF(Balance Factor)。

> 最小不平衡子树：距离插入节点最近的，且平衡因子的绝对值大于1的节点为根的子树。