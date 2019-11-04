### No.26 从排序数组中删除重复项

给定一个排序的数组，原地删除重复项，返回移除后新数组的新长度。

不要使用额外的数组空间，在O(1)条件下完成。

**示例1：**

```
给定数组 nums = [1,1,2], 

函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。 
```

**示例2：**

```
给定 nums = [0,0,1,1,1,2,2,3,3,4],

函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。
```

解题思路：

使用双指针来完成，给定指针i、j，j往后移动，如果num[i]≠num[j]，则令 i 后面的元素等于j，即 num[i+1]=num[j]，同时i往后移动。

时间复杂度O(n)，空间复杂度O(1)。

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 0;
  for (let j = 1; j <= nums.length-1; j++) {
    if(nums[i] != nums[j]) {
      nums[i+1] = nums[j]
      i++;
    }
  }
  return i+1;
};
```

[完整代码链接](https://github.com/Mayandev/javascript_algorithm/blob/master/leetcode%E5%88%B7%E9%A2%98/code/No26_remove-duplicates.js)