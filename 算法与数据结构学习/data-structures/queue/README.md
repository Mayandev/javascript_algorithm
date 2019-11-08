# 队列

队列是计算机常用的一种数据结构，遵循先进先出(FIFO，First-In-First-Out) 的原则，在操作系统中有很多的引用，例如进程管理、打印池任务等等。

![](https://raw.githubusercontent.com/Mayandev/mayandev_blog_image/master/blog/queue-1.png)


在 JavaScript 语言中其实自带了队列和栈的相关操作：shift()、unshift()、push()、pop()

这里仍然使用链表来存储数据，模拟队列的相关操作。


## 队列操作

### 判断队列是否为空

```javascript
  /**
   * 判断队列是否为空
   * @return {boolean}
   */
  isEmpty() {
    return !this.linkedList.head;
  }
```

### 获取队头元素

```javascript
  /**
   * 获取队头元素值
   */
  peek() {
    if (this.isEmpty()) {
      return null
    }
    return this.linkedList.head.value;
  }
```

### 入队列

```javascript
  /**
   * 入队列，即在链表尾部插入元素
   * @param {*} value 
   */
  enqueue(value) {
    return this.linkedList.append(value);
  }
```

### 出队列

```javascript
  /**
   * 出队列，即删除链表头节点
   */
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.linkedList.deleteHead();
  }
```


## 总结

以上就是队列队队常用操作，完整代码：[queue](https://github.com/Mayandev/javascript_algorithm/blob/master/%E7%AE%97%E6%B3%95%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E5%AD%A6%E4%B9%A0/data-structures/queue/Queue.js)