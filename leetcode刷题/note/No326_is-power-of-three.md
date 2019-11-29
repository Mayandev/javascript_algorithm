# No.326 3的幂


给定一个整数，写一个函数来判断它是否是 3 的幂次方。

## 示例

示例 1:

```
输入: 27
输出: true
```

示例 2:
```
输入: 0
输出: false
```

示例 3:

```
输入: 9
输出: true
```

示例 4:

```
输入: 45
输出: false
```

## 解题思路

将输入的数n一直除以3，如果是 3 第次幂，则最后的结果一定为1。

代码如下：

```javascript
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if (n == 0) {
    return false;
  }
  while (n != 1) {
    n = n / 3;
    if (n == 0) {
      return false;
    }
  }
  return true;
};
```