# No.268 缺失数字

给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。

## 示例

示例 1:

```
输入: [3,0,1]
输出: 2
```

示例 2:
```
输入: [9,6,4,2,3,5,7,0,1]
输出: 8
```
说明:
你的算法应具有线性时间复杂度。你能否仅使用额外常数空间来实现？



## 解题思路

用数学的思维方式，假如没有数字缺失，则total满足等差数列的求和公式。减去原数组的和，则剩下的数为缺失的数字。

代码如下：

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length+1;
    // 等差数列求和
    let total = (n-1)*n/2;
    for (let i = 0; i < n-1; i++) {
      total -=  nums[i];
    }
    return total;
};
```