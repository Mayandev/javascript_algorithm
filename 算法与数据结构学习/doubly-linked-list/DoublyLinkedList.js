import DoublyLinkedListNode from './DoublyLinkedListNode';

/**
 * 定义链表结构
 */
export default class DoublyLinkedList {

  constructor() {
    /**
     * @var DoublyLinkedListNode 
     */
    this.head = null;     // 头节点
        /**
     * @var DoublyLinkedListNode
     */ 
    this.tail = null;     // 尾指针
  }

  /**
   * 前插一个节点，返回此链表
   * @param {} value
   * @return {DoublyLinkedList} 
   */
  prepend(value) {
    // 新建一个节点，让其指向原本的头节点
    const newNode = new DoublyLinkedListNode(value, this.head);
      // 判断链表是否为空
    if (!this.head) {
      // 如果为空
      this.tail = newNode;
    } else {
      // 链表不为空
      this.head.previous = newNode;
    }
    this.head = newNode;
    return this;
  }

  /**
   * 尾部附加一个节点，返回此链表
   * @param {*} value 
   * @return {DoublyLinkedList}
   */
  append(value) {
    // 新建一个节点，让其 pre 指针指向 tail
    const newNode = new DoublyLinkedListNode(value, null, this.tail);
    // 判断链表是否为空
    if (!this.head) {
      // 如果为空
      this.head = newNode;
    } else {
      // 链表不为空
      this.tail.next = newNode;
    }
    this.tail = newNode;
    return this;
  }

  /**
   * 删除头节点
   * @return {DoublyLinkedListNode}
   */
  deleteHead() {
    if (!this.head) {
      return null;
    }
    const deleteNode = this.head;
    if (!deleteNode.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.previous = null;
    }

    return deleteNode;
  }

  /**
   * 删除头节点
   * @return {DoublyLinkedListNode}
   */
  deleteTail() {
    if (!this.tail) {
      return null;
    }
    const deleteNode = this.tail;
    if (!deleteNode.previous) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.previous;
      this.tail.next = null
    }
    return deleteNode();
  }

  /**
   * 删除某个值为 value 的节点
   * @param {*} value 
   */
  delete(value) {
    // 如果链表为空
    if (!this.head) {
      return null;
    }

    let deleteNode = null;
    let curNode = this.head;

    // 删除头节点值为 value 的节点
    while (head && curNode.value === value) {
      deleteNode = this.head;
      this.head = this.head.next;
    }
  }


  /**
   * 链表转换为节点数组
   * @return {DoublyLinkedListNode}
   */
  toArray() {
    const nodes = [];
    let curNode = this.head;

    while (curNode) {
      nodes.push(curNode);
      curNode = curNode.next;
    }

    return nodes;

  }

  /**
   * 数组转换为链表
   * @param {*[]} values 
   */
  fromArray(values) {
    values.forEach(value => this.append(value))
    return this;
  }

  /**
   * @param {function} [callback]
   * @return {string}
   */
  toString(callback) {
    return this.toArray().map(node => node.toString(callback)).toString();
  }



}