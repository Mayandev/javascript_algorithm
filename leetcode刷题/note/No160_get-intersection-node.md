# No.160 相交链表

难度：`easy`

编写一个程序，找到两个单链表相交的起始节点。

## 示例

示例 1
```
输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
输出：Reference of the node with value = 8
输入解释：相交节点的值为 8 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
```

示例 2：
```
输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
输出：Reference of the node with value = 2
输入解释：相交节点的值为 2 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。
``` 

示例 3：
```
输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
输出：null
输入解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。
解释：这两个链表不相交，因此返回 null。
``` 


注意：

```
如果两个链表没有交点，返回 null.
在返回结果后，两个链表仍须保持原有的结构。
可假定整个链表结构中没有循环。
程序尽量满足 O(n) 时间复杂度，且仅用 O(1) 内存。
```

## 解题思路

使用暴力法，遍历 A 的同时，遍历 B 链表，如果有相同的节点，直接返回。

这里使用另一种解法，首先分别遍历链表 A 和 B，计算出链表长度之差为n。

使较长的链表先遍历n，这时候两个链表到链表尾部的距离是相同的，然后同时遍历，通过判断节点是否相同，如果相同直接返回。

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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let lengthA=lengthB=0;
    let curA = headA;
    let curB = headB;
    while (curA) {
      curA = curA.next;
      lengthA++;
    }
    while (curB) {
      curB = curB.next;
      lengthB++;
    }
    let interval = lengthA - lengthB;
    curA = headA;
    curB = headB;
    
    if (interval > 0) {
      while (interval) {
        curA = curA.next;
        interval--;
      }
    } else {
      while (interval < 0) {
        curB = curB.next;
        interval++;
      }
    }

    while (curA || curB) {
      if (curA == curB) {
        return curA; 
      }
      curA = curA.next;
      curB = curB.next;
    }
    return null;
};
```