# No.461 汉明距离

两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。

给出两个整数 x 和 y，计算它们之间的汉明距离。

注意：
0 ≤ x, y < 231.

## 示例



示例:

```
输入: x = 1, y = 4

输出: 2

解释:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

上面的箭头指出了对应二进制位不同的位置。
```

## 解题思路

这需要使用二进制数的一些操作，相对两个数求异或，新的数字中含1个数就是题目中说的汉明顿距离。

然后循环这个数，计算1的个数。

代码如下：

```javascript
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let k = x^y;
    let count = 0;
    while(k!=0){
			k=k&(k-1);
			count++;
		}
		return count;
};
```
