# No.189 旋转数组

难度：`easy`

给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

## 示例

**示例 1:**

```
输入: [1,2,3,4,5,6,7] 和 k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右旋转 1 步: [7,1,2,3,4,5,6]
向右旋转 2 步: [6,7,1,2,3,4,5]
向右旋转 3 步: [5,6,7,1,2,3,4]
```

## 解题思路

**解题思路1：暴力法**

循环数组，每次移动一步，代码如下：

```javascript
// 暴力法
// 时间复杂度O（n*k），空间复杂度O（1）
// 耗时360ms，消耗内存35MB
var rotate1 = function(nums, k) {
    for(let i = 0; i < k; i++) {
      let last = nums[nums.length-1];
      for (let j = nums.length-1; j > 0; j--) {
        nums[j] = nums[j-1];
      }
      nums[0] = last;
    }
    console.log(nums)
};
```

**解题思路2：利用新的数组空间**

利用新的数组空间，计算出每个元素所处的位置并插入到新的数组中，最后将新数组内容进行复制。

```javascript

// 新建数组法
// 时间复杂度O(n)，空间复杂度O(n)
// 耗时108ms，消耗内存35MB
var rotate2 = function(nums, k) {
  let a = [];
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    index = (i + k) % nums.length;
    a[index] = nums[i];
  }
  for (let i = 0; i < a.length; i++) {
    const element = a[i];
    nums[i] = element;
  }
  console.log(nums)
};
```

**解体思路3：巧妙的方法**

循环三次，首先将整个数组颠倒，然后分别在左右颠倒。

例如：

```
原始数组                  : 1 2 3 4 5 6 7
反转所有数字后             : 7 6 5 4 3 2 1
反转前 k 个数字后          : 5 6 7 4 3 2 1
反转后 n-k 个数字后        : 5 6 7 1 2 3 4 --> 结果
```



```javascript
var rotate3 = function(nums, k) {
  let n = nums.length;
  reverseArray(nums,0,n-1);
  reverseArray(nums,0,k%n-1);
  reverseArray(nums,k%n,n-1);
};

// util
var reverseArray = function(nums, start, end) {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
  console.log(nums);
  return nums;
}
```
