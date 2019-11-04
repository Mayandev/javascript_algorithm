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
  // 3、遍历的过程中保证链表不断
  while(curNode) {
      nextNode = curNode.next;
      curNode.next = preNode;
      preNode = curNode;
      curNode = nextNode;
      
  }
  head = preNode;
  return head;
};