/**
 * 节点结构
 */
export default class DoublyLinkedListNode {
  constructor(value, next = null, previous = null) {
    this.value = value;   // 节点值
    this.next = next;     // 指向下个节点的引用
    this.previous = previous;   // 指向上一个节点的引用
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`
  }

}