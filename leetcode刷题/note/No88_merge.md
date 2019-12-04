# No.88 合并两个有序数组

难度：`easy`

给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。


说明:

初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。

## 示例

示例:

```

输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]

```

## 解题思路

第一种很简单粗暴，直接合并两个数字，再进行排序。

但是这样没有利用到数组原本就有序的特点。

这里使用插入排序的思想，将num2的数组依次插入到num1中。

代码如下：

```javascript
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let j = 0;
  let valid = m;
  while (j < n) {
    let isInsert = false;
    let element = nums2[j];
    for (let i = 0; i < valid; i++) {
      // 插入排序
      if (nums1[i] > element) {
        // 整个数组向后移动
        for (let a = valid; a > i; a--) {
          nums1[a] = nums1[a-1];
        }
        nums1[i] = element;
        isInsert = true;
        break;
      }
    }
    if (!isInsert) {
      nums1[valid] = element;
    }
    valid++;
    j++;
  }  
};

// merge([1,2,3,0,0,0],3,[2,5,6],3);

```