# No.53 最大子序和

难度：`easy`

给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

## 示例



示例:
```
输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
```

## 进阶

进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。

## 解题思路

**思路一：**

暴力法，双重循环，每次遍历求和并保留最大值。

代码如下：

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    //暴力法
    let max = -Infinity;
    for (let i = 0, n = nums.length; i < n; i++) {
      let total = 0;
      for (let j = i; j < n; j++) {
        total += nums[j];
        if (total > max)
          max = total;
      }
    }
    return max;
};
```

**思路二：**

动态规划，一遍遍历，每次遍历计算出。类似寻找最大最小值的题目，初始值一定要定义成理论上的最小最大值
