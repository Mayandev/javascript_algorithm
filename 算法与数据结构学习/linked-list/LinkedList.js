// 使用es6语法
// 定义链表节点
import LinkedListNode from './LinkedNode';

// 定义链表结构
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
    let deleteNode = null;
    // 如果删除的是头节点
    while (this.head && this.head.value === value) {
      deleteNode = this.head;
      this.head = this.head.next;
    }
    // 定义当前的节点为头节点，并继续遍历查找值相同的节点
    let currentNode = this.head;
    
    // 如果链表有节点的值不等于value
    if (currentNode) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deleteNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    //  currentNode 存在，且一定为尾节点
    this.tail = currentNode;
    return deleteNode;  
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


  /**
   * 删除尾部节点
   * @returns {LinkedListNode}
   */
  deleteTail() {
    const deleteTail = this.tail;
    // case1: 如果链表为空，直接返回
    if (!this.head) {
      return null;
    }
    // case2: 如果链表长度为1，让head和tail指针指向null，并返回该节点
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
      return deleteTail;
    }
    // case3: 遍历链表，找到tail前一个节点
    let currentNode = this.head;
    while (currentNode.next.next) {
      currentNode = currentNode.next;
    }

    // current定位到tail的前一个节点
    currentNode.next = null;
    this.tail = currentNode;

    return deleteTail;
    
  }

  /**
   * 旋转链表
   * @returns {LinkedList}
   */
  reverse() {
    // 记录头节点
    let curNode = this.head;
    let prevNode = null;
    let nextNode = null;

    // 遍历链表
    while (curNode) {
      // 存储下一个节点
      nextNode = curNode.next;
      // 将当前节点指向前一个节点
      curNode.next = prevNode;

      // 指针后移
      prevNode = curNode;
      curNode = nextNode
    }

    // 重置头指针和尾指针
    this.tail = this.head;
    this.head = prevNode;

    // 返回链表
    return this;
  }

  /**
   * 将数组转换为链表
   * @param {*[]} values 
   * @returns {LinkedList}
   */
  fromArray(values) {
    // 遍历数组中的值，将值作为节点插入到链表中
    values.forEach(value => this.append(value));
    return this;
  }

  /**
   * 将链表转换为节点数组返回
   * @returns {LinkedListNode[]}
   */
  toArray() {
    const nodes = [];

    let currentNode = this.head;

    while (currentNode) {
      // 将当前遍历到底节点插入到数组中
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    // 返回节点数组
    return nodes;
  }

  toString(callback) {
    // 将链表转换为节点数组，将每个节点转换为字符串并输出
    return this.toArray().map(node => node.toString(callback)).toString();
  }
}



