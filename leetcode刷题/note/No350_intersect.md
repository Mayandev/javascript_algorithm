# No.350 两个数组的交集 II

给定两个数组，编写一个函数来计算它们的交集。


## 示例

示例 1:

```
输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2,2]
```

示例 2: 

```
输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出: [4,9]
```

## 说明

- 输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
- 我们可以不考虑输出结果的顺序。

## 解题思路

**解题思路1**

先用Hashmap记录第一个数组中的元素【放在key】，和出现的次数【放在value】。

然后再遍历第二个数组，如果找到对应元素，则添加这个元素到返回数组里。

如果value值大于1，HashMap中的value值减 1，表示已经找到一个相同的了。

如果减完之后的value值等于0，则删除该元素。

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let map = new Map();
  for (let i = 0; i < nums1.length; i++) {
      let count = map.get(nums1[i]) ? map.get(nums1[i]) : 0;
      count++;
      map.set(nums1[i], count)
  }

  let returnArr = [];

  for (let i = 0; i < nums2.length; i++) {
      if(map.has(nums2[i])) {
          let count = map.get(nums2[i]);
          count--;
          map.set(nums2[i], count)
          returnArr.push(nums2[i])
          if(!count) {
              map.delete(nums2[i])
          }
      }
  }
  console.log(returnArr);
  
  return returnArr;
};
```

**解题思路二**

如果不使用HashMap，能否解决这个问题呢？答案是可以的。

遍历num1，使用indexOf方法查找num2中是否存在此元素。

如果存在，则删除num2中第一个相同的元素，并将此元素 push 到返回数组中。

代码如下：

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
     var result = [];
        for (let i = 0; i < nums1.length; i++) {
            var index = nums2.indexOf(nums1[i]);
            if (index !== -1) {
                result.push(nums1[i]);
                nums2.splice(index, 1);
            }
        }
    return result;
};
```
