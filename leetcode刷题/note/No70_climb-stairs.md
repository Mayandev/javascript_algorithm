# No.70 爬楼梯

难度：`easy`

假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

**注意：**给定 n 是一个正整数。

## 示例

示例 1：
```
输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
```


示例 2：
```
输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶
```

## 解题思路

根据示例，再向后推导几步，发现数列n = (n-1) + (n-2)，即满足斐波那契数列。

由动态规划的思想可以知道，第 i 阶可以由以下两种方法得到：

- 在第 (i-1)(i−1) 阶后向上爬一阶。

- 在第 (i-2)(i−2) 阶后向上爬 22 阶。

代码如下：

```javascript
// 递归超时，这里直接使用循环解决

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  
  // 满足斐波那契数列
  if (n == 1) {return 1;}
  if (n==2) {return 2;}

  let total = 0;
  let [pre,preAndPre] = [2,1]

  for (let i = 2; i < n; i++) {
    total = pre + preAndPre;
    preAndPre = pre;
    pre = total;
  }
  return total;

  // 递归的思路
  // if (n == 1) {return 1;}
  // if (n==2) {return 2;}

  // return climbStairs(n-1) + climbStairs(n-2);
};
```