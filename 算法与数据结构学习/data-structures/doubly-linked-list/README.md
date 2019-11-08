# 双向链表

双向链表是链表中的一种，它的每个数据结点中都有两个指针，分别指向直接后继和直接前驱。所以，从双向链表中的任意一个结点开始，都可以很方便地访问它的前驱结点和后继结点。

![](https://raw.githubusercontent.com/Mayandev/mayandev_blog_image/master/blog/doubly-linked-list.svg)


双向链表的节点数据由下面三部分组成：

- 上一个节点的引用
- 节点数据
- 下一个节点的应用

## 双向链表的定义

下面是用 JavaScript 代码定义双向链表，使用 es6 语法。

### 节点

定义节点：

```javascript
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
```

## 链式结构

双向链表有两个特殊的节点，头(head)节点和尾(tail)节点。

```javascript
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
}
```

## 双向链表的基本操作

### 前插节点

```javascript
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
```

### 尾插节点

```javascript
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
```

### 删除头节点

```javascript
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
```


### 删除尾节点

```javascript
 /**
   * 删除尾部节点
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
    return deleteNode;
  }
```

### 删除值为value的节点

```javascript
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

    // 删除头节点值为 value 的节点
    while (this.head && this.head.value === value) {
      deleteNode = this.head;
      this.head = this.head.next;
    }

    this.head.previous = null;
    let curNode = this.head;

    // 如果头节点值不等于value
    if (curNode) {
      while (curNode.next) {
        if (curNode.next.value === value) {

          deleteNode = curNode.next;
          // 判断是否删除的是尾部节点
          if (deleteNode === this.tail) {
            this.tail = curNode;
            curNode.next = null;
          } else {
            curNode.next.next.previous = curNode;
            curNode.next = curNode.next.next;
          }

        } else {
          curNode = curNode.next;
        }
      }  
    }

    this.tail = curNode;

    return deleteNode;

  }

```

### 链表转换为节点数组

```javascript

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
```

### 数组转链表

```javascript

  /**
   * 数组转换为链表
   * @param {*[]} values 
   */
  fromArray(values) {
    values.forEach(value => this.append(value))
    return this;
  }
```

## 复杂度

## 时间复杂度

| 访问    | 查找    | 插入 | 删除  |
| :-------: | :-------: | :-------: | :-------: |
| O(n)      | O(n)      | O(1)      | O(1)      |

### 空间复杂度

O(n)

## 总结

以上就是双向链表定义以及常用操作，还是比较容易掌握的，理解其中结构。

完整代码：[doubly-linked-list](https://github.com/Mayandev/javascript_algorithm/blob/master/%E7%AE%97%E6%B3%95%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E5%AD%A6%E4%B9%A0/doubly-linked-list/DoublyLinkedList.js)