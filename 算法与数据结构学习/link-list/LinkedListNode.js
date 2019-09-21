// 使用es6语
// 定义链表节点
export default class LinkedListNode {
  // 构造函数
  constructor(value, next = null) {
    this.value = value;   // 节点值
    this.next = next;     // 下个节点的指针
  }

  // 重写toString方法
  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

