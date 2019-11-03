#### No19. 删除链表的倒数第N个节点

难度：**中等**

给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

**示例**

```
给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.

```
**说明**

给定的 n 保证是有效的。

**进阶**

能否尝试使用一趟扫描实现？

#### 解题思路1

两次遍历，第一次遍历计算出链表长度length，则可根据 n 找到要删除节点为第 length - n + 1 个。第二次遍历删除此节点即可。

时间复杂度：O(n)

代码如下：

```javascript

var removeNthFromEnd = function(head, n) {
  // 1、第一次遍历计算出length，删除节点为第 length-n+1 个
  let node = head;
  let length = 0;
  while (node) {
      length++;
      node = node.next;    
  }
  
  let deleteSeq = length - n;
  
  // 判断是否删除掉是头节点
  if (!deleteSeq) {
      head = head.next;
      return head;
  }
  
  // 定义前一个节点
  let pre = head;
  // 2、第二次遍历删除节点
 for(let i = 0; i < deleteSeq-1; i++) {
      pre = pre.next;
 }
  
 pre.next = pre.next.next;
 return head;
  
};
```

#### 解题思路2

使用双指针，一次遍历即可。

首先设置两个指针，第一个指针与第二个指针的距离为 n，当第二个节点到达链表尾部是，第一个节点所指向的则是所要删除节点。

时间复杂度：O(n)

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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let p1 = head;
  let p2 = head;
  
  while (n) {
      p2 = p2.next;
      n--;
  }
  
  if(!p2) {
      head = head.next;
      return head;
  }
  
  while (p2.next) {
      p1 = p1.next;
      p2 = p2.next
  }
  p1.next = p1.next.next
  return head;
};
```

