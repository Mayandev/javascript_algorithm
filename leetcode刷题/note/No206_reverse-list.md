# No.206 反转链表

难度：`easy`

反转一个单链表。

## 示例

```
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
```

## 进阶

你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

## 解题思路

这题在不使用其他链表空间的情况下，可以使用三指针解决。

首先通过定义三个指针，pre、cur、next，pre->null, cur->head, next->cur.next

每次遍历都让当前节点的next指针指向前一个节点，然后指针向后移动，以此改变指针的方向。

时间复杂度：O(n)

## 代码

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
 * @return {ListNode}
 */
var reverseList = function(head) {
    
    // 1、定义前指针
    let preNode = null
    let curNode = head;
    let nextNode;
    // 2、让下一个节点指向前节点
    // 3、遍历的过程中保证下个节点的地址被保存
    while(curNode) {
        nextNode = curNode.next;
        curNode.next = preNode;
        preNode = curNode;
        curNode = nextNode;
        
    }
    head = preNode;
    return head;
};
```
