# No.188 杨辉三角

难度：`easy`

给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。

在杨辉三角中，每个数是它左上方和右上方的数的和。

## 示例

示例:

```
输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
```

## 解题思路

正常的循环，计算当前的数字，满足`a[i][j] = a[i-1][j-1] + a[i-1][j]`

代码如下：

```javascript
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let arr = [];
  for (let i = 0; i < numRows; i++) {
    arr.push([1]);
    arr[i][i] = 1;
    for (let j = 1; j <= i-1; j++) {
      let cur = arr[i-1][j-1] + arr[i-1][j];
      arr[i][j] = cur;
    }
  }
  return arr;
};
```