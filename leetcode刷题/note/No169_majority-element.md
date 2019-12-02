# No.169 多数元素

难度：`easy`

给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

## 示例

示例 1:
```
输入: [3,2,3]
输出: 3
```


示例 2:
```
输入: [2,2,1,1,1,2,2]
输出: 2
```

## 解题思路

首先想到的是使用 Map 的方法，遍历整个数组，对每个数组出现的个数进行计数。

代码如下：

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let cond = nums.length / 2;
    // 使用 map，记录每个数的出现的个数
    let map = new Map();

    nums.map(item => {
      let count = map.get(item) || 0;
      count++;
      map.set(item, count); 
    });

    for (let [key, value] of map) {
      if (value > cond) {
        return key;
      }
    }
};
```

另外一种解题思路，可以通过排序，排序后数组中间的数一定是所要找的数字。

代码：略