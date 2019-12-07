# No.448 找到所有数组中消失的数字

难度：`easy`

给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。

找到所有在 [1, n] 范围之间没有出现在数组中的数字。

您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。

## 示例

示例:

```
输入:
[4,3,2,7,8,2,3,1]

输出:
[5,6]
```

## 解题思路


**解题思路一：**

可以使用暴力法求解，但是这样的时间复杂度会比较高。

思路就是从 1 循环到 n，看是否存在与 nums 中，如果不存在，则返回。

代码如下：

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let n = nums.length;
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (nums.indexOf(i) < 0) {
      arr.push(i);
    }
  }
  return arr;
};
```

**解题思路2:**

可以将通过加上数组长度可以标记元素出现过。求余数数据即可知道原先数字的大小。

代码如下：

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
 let n=nums.length;
        let ans=[];
        //通过加上数组长度可以标记元素出现过。求余数数据即可知道原先数字的大小。
        for(let i=0;i<nums.length;i++){
            nums[(nums[i]-1)%n]+=n;
        }
        for(let i=0;i<nums.length;i++){
            if(nums[i]<=n)
                ans.push(i+1);
        }
        return ans;
};
```

