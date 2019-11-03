import LinkedList from '../linked-list/LinkedList';

export defaut class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  /**
   * 判断队列是否为空
   * @return {boolean}
   */
  isEmpty() {
    return !this.linkedList.head;
  }

  /**
   * 获取队头元素值
   */
  peek() {
    if (this.isEmpty()) {
      return null
    }
    return this.linkedList.head.value;
  }

  /**
   * 入队列，即在链表尾部插入元素
   * @param {*} value 
   */
  enqueue(value) {
    return this.linkedList.append(value);
  }

  /**
   * 出队列，即删除链表头节点
   */
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.linkedList.deleteHead();
  }

  /**
   * @param [callback]
   * @return {string}
   */
  toString(callback) {
    // Return string representation of the queue's linked list.
    return this.linkedList.toString(callback);
  }


}