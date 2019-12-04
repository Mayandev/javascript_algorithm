# No.412 Fizz Buzz

难度： `easy`

写一个程序，输出从 1 到 n 数字的字符串表示。

1. 如果 n 是3的倍数，输出“Fizz”；

2. 如果 n 是5的倍数，输出“Buzz”；

3. 如果 n 同时是3和5的倍数，输出 “FizzBuzz”。

## 示例


示例：

```
n = 15,

返回:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]

```

## 解题思路

直接判断是否能够整除即可。

代码如下：

```javascript
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let strArr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
      strArr.push('FizzBuzz');
      continue;
    }
    if (i % 3 == 0) {
      strArr.push('Fizz');
      continue;
    } 
    if (i % 5 == 0) {
      strArr.push('Buzz');
      continue;
      
    }
    strArr.push(`${i}`);
    
  }
  return strArr;
};
```

