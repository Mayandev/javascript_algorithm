# No.234 回文链表

难度：`easy`

请判断一个链表是否为回文链表。

## 示例

**示例1：**

```
输入: 1->2
输出: false
```

**示例2：**

```
输入: 1->2->2->1
输出: true
```

## 进阶

你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

## 解题思路

**思路1**

首先不考虑空间复杂度，第一种思路就是遍历链表，将链表的每个值存入数组，这就变成一个回文数组的问题。

然后分别从头部和尾部遍历数组，比较数组的值是否相等，如果不相等，则返回false。

时间复杂度：`O(n)`

空间复杂度：`O(n)`

## 代码

代码如下：

```javascript
    let tempArr = [];
    let node = head;
    while (node) {
        tempArr.push(node.val);
        node = node.next;
    }
    
    let length = tempArr.length;
    
    for (let i = 0; i < length / 2; i++) {
        if (tempArr[i] != tempArr[length - i - 1]) {
            return false;
        }
    }
    
    return true;
```

