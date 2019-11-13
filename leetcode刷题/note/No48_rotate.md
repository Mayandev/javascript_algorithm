# No.48 旋转图像

难度： `middle`

给定一个 n × n 的二维矩阵表示一个图像。将图像顺时针旋转 90 度。

## 说明

你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。

## 示例

示例 1:

```
给定 matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

原地旋转输入矩阵，使其变为:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
```

示例2：

```
给定 matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 

原地旋转输入矩阵，使其变为:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
```

## 解题思路

**解题思路1**

首先忽略题目说明，如果使用新的矩阵，该如何实现呢。

我们需要从第一列最底部向上遍历，依次到n列，每遍历完一列将这一列插入新的数组。

然后将新矩阵到每个值赋给旧的矩阵。

代码如下：

```javascript
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix[0].length;
    let matrixDup = [];
    for (let i = 0; i < n; i++) {
        let arr = [];
        for (let j = n-1; j >= 0 ;j--) {
            arr.push(matrix[j][i])
        }
        matrixDup.push(arr)
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] = matrixDup[i][j];
        }
    }
};
```

**解题思路2**

现在题目要求必须在原地旋转图像，这难道我了。。。

这个思路也是看题解才会的。

很简单，总结出来就是一句话：先转置再逆序。

即先将矩阵转置，然后将每一行逆序。

代码如下：

```javascript
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix.length;

    // transpose matrix
    for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
        let tmp = matrix[j][i];
        matrix[j][i] = matrix[i][j];
        matrix[i][j] = tmp;
      }
    }
    // reverse each row
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n / 2; j++) {
        let tmp = matrix[i][j];
        matrix[i][j] = matrix[i][n - j - 1];
        matrix[i][n - j - 1] = tmp;
      }
    }
};
```