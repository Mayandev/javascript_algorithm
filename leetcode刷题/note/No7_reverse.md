# No7. 整数反转

给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

## 示例

示例 1:

```
输入: 123
输出: 321
```

示例 2:

```
输入: -123
输出: -321
```

示例 3:

```
输入: 120
输出: 21
```

**注意:**
假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

## 解题思路

先将数字转换成字符串数组，再进行调换。

主要考虑以下几种情况：

- 负数
- 正数但最后一位为0
- 整数最后一位不为零

代码如下：

```javascript
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  
  if (x === 0 || x < Math.pow(-2, 31) || x > (Math.pow(2, 31)-1)) {
    return 0;
  }
  let arr = Array.from(String(x));
  // 1、负数
  if (x < 0) {
    for (let i = 1; i <= arr.length/2; i++) {
      swap(arr, i, arr.length-i);
    }
  }
  // 2、正数但最后一位为0
  // 3、正数最后一位不为零
  if (x > 0) {
    if ( arr[arr.length-1] == '0') {
      arr.length = arr.length - 1;
    }
    for (let i = 0; i < arr.length/2; i++) {
      swap(arr, i, arr.length-i-1);
    }    
  }
  let str = arr.join('');
  let reverseNum = parseInt(str);
  if (reverseNum < Math.pow(-2, 31) || reverseNum > (Math.pow(2, 31)-1)) {
    return 0;
  }
  return reverseNum;
};

var swap = function(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
```