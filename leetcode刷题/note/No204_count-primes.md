# No.204 计数质数

难度：`easy`


统计所有小于非负整数 n 的质数的数量。

## 示例

示例:

```
输入: 10
输出: 4
解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
```

## 解题思路

使用暴力法，一次判断2-n中质数的个数。

这里使用排除法，例如循环到 2 的时候，将所有2的倍数的数排除，以此类推。

代码如下：

```javascript
var countPrimes = function(n) {
    let count = 0;
    let signs = new Uint8Array(n);
    for (let i = 2; i < n; i++) {
        if (!signs[i - 1]) {
            count++;
            for (let j = i * i; j <= n; j += i) {
                signs[j - 1] = true;
            }
        }
    }
    return count;
};
```
