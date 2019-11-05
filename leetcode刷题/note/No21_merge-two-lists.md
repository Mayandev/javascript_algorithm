# No21. 合并两个有序链表

难度：`easy`

将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

## 示例

```
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
```

## 解题思路

借助归并排序的思路，同时遍历两个链表l1、l2，如果 l1 的值小于 l2，则 l1 的指针向后移动，l2 不变。

最后如果有某条表遍历完，则将剩余项拼接。这里我在不改变原来的链表的基础上，创建了新的链表并返回。

## 代码

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    
    let node;
    let head = new ListNode();
    let tail = new ListNode();
   
    head.next = tail;
    
    // 1、比较两个指针的值
    while(l1 && l2) {
        node = new ListNode();
        if(l1.val <= l2.val){
            node.val = l1.val;
            l1 = l1.next;
        } else {
            node.val = l2.val
            l2 = l2.next;
        }
        // 2、拼接链表，指针后移
            
        tail.next = node;
        tail = node;
    }
    // 3、判断是否到尾部，将剩余项拼接
    if (l1) {
        tail.next = l1;
    }
    
    if (l2) {
        tail.next = l2;
    }
    return head.next.next;
};
```