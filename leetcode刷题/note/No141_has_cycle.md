# No.141 环形链表

难度：`easy`

给定一个链表，判断链表中是否有环。

为了表示给定链表中的环，我们使用整数 `pos` 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 `pos` 是 -1，则在该链表中没有环。

## 示例

示例1：

```
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
```

示例2：

```
输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。
```

示例3:

```
输入：head = [1], pos = -1
输出：false
解释：链表中没有环。
```

## 进阶

你能用 O(1)（即，常量）内存解决此问题吗？

## 解题思路

**解题思路一：**

首先第一个很容易想到的就是集合，通过遍历，将每个节点放入集合。

如果插入的节点存在于集合，说明链表是有环的。

代码如下：

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let cur = head;
    let set = new Set();
    while(cur) {
        if (set.has(cur)) {
            return true;
        }
        set.add(cur);
        cur = cur.next;
    }
    return false;
};
```

**解题思路2：**

思路1 用到了新的内存的空间，另外一种就是使用快慢指针的解法。

首先想象一下赛跑比赛，如果是环形赛道，跑的快的人一定会在某刻与跑得慢的人相遇。

因此如果一个链表存在环，快的指针会在某刻与慢指针相遇。

代码如下：

``` JavaScript
// 略
```