# No.581 最短无序连续子数组

难度：`easy`

给定一个整数数组，你需要寻找一个连续的子数组，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。

你找到的子数组应是最短的，请输出它的长度。


## 示例

示例 1:

输入: [2, 6, 4, 8, 10, 9, 15]
输出: 5
解释: 你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。
说明 :

输入的数组长度范围在 [1, 10,000]。
输入的数组可能包含重复元素 ，所以升序的意思是<=。

## 解题思路

复制一份数组，将数组排序，然后比较两个数组，记录不同值的 index。

代码如下：

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let arr = [...nums];
    let firstIdx = lastIdx = 0;
    nums.sort(function(a,b){return a-b});
    for (let i = 0, n = nums.length; i < n; i++) {
      if (arr[i] != nums[i]) {
        firstIdx = i;
        break;
      }
    }
    for (let i = nums.length-1; i > 0; i--) {
      if (arr[i] != nums[i]) {
        lastIdx = i;
        break;
      }
    }
    return lastIdx == firstIdx ? 0 : lastIdx-firstIdx +1;
};
```