# 链表

链表是数据元素的线性集合，和数组不一样的是，元素的位置不是由它们在内存中的物理位置给出。相反，每个元素中有一个指针（地址）指向下一个元素。

一般链表的节点数据由下面两部分组成：

- 节点数据
- 下一个节点的引用

这种结构允许在遍历期间有效的从序列中插入和删除元素，但这样的一个缺点就是访问时间是线性的。

## 链表的定义

下面使用JavaScript代码定义链表，使用 es6 语法

### 节点

定义节点：

```javascript
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
```


### 链式结构

链表有两个特殊的节点，头(head)节点和尾(tail)节点。

```javascript
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
}
```

## 链表的基本操作


### 插入头节点

```javascript
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
```

### 添加尾节点

```javascript
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

```

### 删除头节点

```javascript
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
```

### 删除尾节点

```javascript
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
```

### 删除值为value的节点

```javascript
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
```

### 旋转链表

```javascript
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
```

### 数组转链表

```javascript
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
```

### 链表转数组

```javascript
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
```

## 总结

以上就是链表定义以及常用操作，

完整代码：[linked-list](https://github.com/Mayandev/javascript_algorithm/blob/master/%E7%AE%97%E6%B3%95%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E5%AD%A6%E4%B9%A0/linked-list/LinkedList.js)