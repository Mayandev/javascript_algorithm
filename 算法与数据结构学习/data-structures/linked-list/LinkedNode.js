export default class LinkedListNode {
  // 构造函数
  constructor(value, next = null) {
    this.value = value;   // 节点值
    this.next = next;     // 下个节点的指针
  }

  // 重写toString方法
  toString(callback) {
    // callback 传递回调函数，可自定义输出，默认输入节点数据
    return callback ? callback(this.value) : `${this.value}`;
  }
}