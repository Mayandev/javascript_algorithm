# No.387 字符串中的第一个唯一字符

难度： `easy`

给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

## 示例

```
s = "leetcode"
返回 0.

s = "loveleetcode",
返回 2.
```

`注意事项：您可以假定该字符串只包含小写字母。`

## 解题思路

现在看到解决重复的问题，第一个想到的就是哈希表了。

解决此问题只需要两次遍历：

- 第一次遍历将字符出现的个数进行记录
- 第二次遍历判断个数为 1 的字符，返回奇下标

代码如下：

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  // 将string 转换成array
  let arr = s.split('');
  console.log(arr);
  let index = -1;
  let n = arr.length;
  let map = new Map();
  for (let i = 0; i < n; i++) {
    let count = map.has(arr[i]) ?  map.get(arr[i]).count : 0;
    count++;
    map.set(arr[i], {count: count, index:i});
  }
  
  
  for (let item of map.values()) {
    if (item.count == 1) {
      index = item.index
      break;
    }
  }
  return index;
  
};
```