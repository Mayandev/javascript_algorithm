# No.283 移动零


难度： `easy`

给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

## 示例

```
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
```

## 说明

1. 必须在原数组上操作，不能拷贝额外的数组。
2. 尽量减少操作次数。

## 解题思路

**解题思路一：**

首先很容易想到的是冒泡法，双重循环，每次循环将 0 元素移动到最底。

代码如下：

```javascript
// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let length = nums.length;
  for (let i = 0; i < length; i++) {
    for(let j = 0; j < length-1; j++) {
        if(nums[j] == 0) {
            nums[j] = nums[j+1];
            nums[j+1] = 0;
        }
    }
  }
  
};
```

上面的解法有很大的弊端：

- 时间复杂度为 O(n^2)，很高
- 交换的次数太多

**解题思路二：**

能否使用 O(n) 的时间复杂度解决此问题？答案是可以的。

只需要两次循环，第一循环将所有的非零元素按顺序放到数组的最前端，并记录非零元素的个数count。

第二次循环从 count 开始，将剩余的元素都置为 0。

代码如下：

```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let n = nums.length;
    let count = 0;
    for(let i = 0; i < n; i++) {
        if(nums[i] != 0) {
            nums[count++] = nums[i]
        }
    }
    
    for(let j = count; j < n; j++) {
        nums[j] = 0
    }
};
```