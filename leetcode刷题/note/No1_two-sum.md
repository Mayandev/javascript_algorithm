# No.1 两数之和

给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

## 示例

```
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

## 解题思路

**解题思路1**

无脑循环，使用双重循环，判断两个数的和是否为 target，如果是，返回两个数的下标。

代码如下：

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let length = nums.length;
    // 无脑循环
    for(let i = 0; i < length; i++) {
        for(let j = i+1; j < length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
                break;
            }
        }
    }
    return null;
};
```

**解题思路2**

利用空间换时间，使用哈希表，通过判断 num1 = target - num2，只需要一次循环即可。

代码如下：

```javascript
// 略
```