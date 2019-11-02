

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  // 这里判断是否为最后一个节点是不必要的，因为题目已经说明node不是最后一个节点
  if (!node.next) {
      node = null
  } else {
      node.val = node.next.val;
      node.next = node.next.next;   
  }
};