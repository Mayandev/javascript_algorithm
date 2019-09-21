import LinkedListNode from './LinkedListNode';

export default class LinkedList {

  constructor() {
    /**
     * @var LinkedListNode
     */
    this.head = null;   // 头节点
    /**
     * @var LinkedListNode
     */
    this.tail = null;   // 尾节点
    
  }

  /**
   * 插入头节点
   * @param {*} value 
   * @return {LinkedList}
   */
  prepend(value) {
    // 创建一个节点，让它指向原本的头节点
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    // 如果tail为空，即链表为空，则让tail也指向新节点
    if (!this.tail) {
      this.tail = newNode;
    }
    // 返回链表
    return this;
  }

  /**
   * 链表添加尾节点
   * @param {*} value
   * @return {LinkedList}
   */
  append(value) {
    // 新建一个节点，使尾部节点指向该节点
    const newNode = new LinkedListNode(value);

    // 如果链表为空，则让head和tail指向该节点
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    // 将尾点连接到新的节点，并让为指针指向新的节点
    this.tail.next = newNode;
    this.tail = newNode;

    // 返回这条链表
    return this;
  }

  /**
   * 输入值为value的节点，删除这个节点，并返回该节点
   * @param {*} value 
   * @return {LinkedListNode}
   */
  delete(value) {
    // 如果链表为空，直接返回
    if (!this.head) {
      return null;
    }

    // 

    
  }

  /**
   * 删除尾部节点
   * @returns {LinkedListNode}
   */
  deleteTail() {
    // case1: 如果链表为空，直接返回
    if (!this.head) {
      
    }
    // case2: 如果链表长度唯一，让head和tail指针指向null
    // case3: 遍历链表，找到tail前一个节点
  }

  /**
   * 删除头部节点
   * @returns {LinkedListNode}
   */
  deleteHead() {
    // case1:如果链表为空，直接返回
    if (!this.head) {
      return null;
    }

    const deleteNode = this.head;

    // case2:如果链表只有一个节点，则让head和tail指向null
    // case3: 让head指针点指向下一个节点    
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next
    }

    return deleteNode;
  }






}