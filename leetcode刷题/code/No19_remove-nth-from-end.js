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
var removeNthFromEnd2 = function(head, n) {
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

var removeNthFromEnd1 = function(head, n) {
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