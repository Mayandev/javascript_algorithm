# No.66 加一

难度：`easy`

给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

## 示例

示例 1:

```
输入: [1,2,3]
输出: [1,2,4]
解释: 输入数组表示数字 123。
```

示例 2:

```
输入: [4,3,2,1]
输出: [4,3,2,2]
解释: 输入数组表示数字 4321。
```

## 解题思路

这个题目可以归结为以下3种情况：

- 个位小于9，个位直接 +1
- 由低位到高位循环，如果等于9，置0，高位 +1
- 尾数全为9，所有数组扩容一位，第一位置1

代码如下：

```javascript
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let n = digits.length;
  for (let i = n-1; i >= 0; i--) {
      if(digits[i] == 9) {
          digits[i] = 0;
          if(i==0) {
              digits.unshift(1);
              break;
          }
      } else {
         digits[i]++;
         break;
      }
  }
    return digits;
};
```
