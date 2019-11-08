# 栈

堆栈（stack）是计算机常用的一种数据结构，遵循后进先出(LIFO，Last-In-First-Out) 的原则。你可以想象桌上的一摞书，只能拿放最顶端的书本。


![](https://raw.githubusercontent.com/Mayandev/mayandev_blog_image/master/blog/stack-0.png)

堆栈两种主要操作:

* **push**, 添加元素到栈的顶端(末尾);
* **pop**, 移除栈最顶端(末尾)的元素.


在 JavaScript 语言中其实自带了队列和栈的相关操作：shift()、unshift()、push()、pop()

这里仍然使用链表来存储数据，模拟队列的相关操作。


## 堆栈操作

### 判断堆栈是否为空

```javascript
  /**
   * 判断堆栈是否为空
   */
  isEmpty() {
    return !this.linkedList.head;
  }
```

### 获取栈顶元素

```javascript
  /**
   * 获取栈顶元素
   */
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.linkedList.head.value;
  }
```

### 入栈

```javascript
   /**
   * 入栈
   */
  push(value) {
    this.linkedList.prepend(value);
  }
```

### 出栈

```javascript
 /**
   * 出栈
   */
  pop() {
    return this.linkedList.deleteHead();
  }
```


## 总结

以上就是堆栈的常用操作，完整代码：[stack](https://github.com/Mayandev/javascript_algorithm/blob/master/%E7%AE%97%E6%B3%95%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E5%AD%A6%E4%B9%A0/data-structures/stack/Stack.js)