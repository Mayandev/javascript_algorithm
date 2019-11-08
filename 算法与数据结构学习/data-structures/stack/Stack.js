import LinkedList from '../linked-list/LinkedList';

export default class Stack {

  constructor() {
    this.linkedList = new LinkedList();
  }


  /**
   * 判断堆栈是否为空
   */
  isEmpty() {
    return !this.linkedList.head;
  }

  /**
   * 获取栈顶元素
   */
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.linkedList.head.value;
  }


  /**
   * 入栈
   */
  push(value) {
    this.linkedList.prepend(value);
  }

  /**
   * 出栈
   */
  pop() {
    return this.linkedList.deleteHead();
  }

    /**
   * @param {function} [callback]
   * @return {string}
   */
  toString(callback) {
    return this.linkedList.toString(callback);
  }

}