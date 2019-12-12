# No.384 打乱数组

难度：`middle`

打乱一个没有重复元素的数组。

## 示例

示例:
```
// 以数字集合 1, 2 和 3 初始化数组。
int[] nums = {1,2,3};
Solution solution = new Solution(nums);

// 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。
solution.shuffle();

// 重设数组到它的初始状态[1,2,3]。
solution.reset();

// 随机返回数组[1,2,3]打乱后的结果。
solution.shuffle();
```

## 解题思路

主要是乱序到方法，可以使用洗牌算法，一边遍历数组，遍历的同时随机生成一个下标，将当前遍历的下标与随机生成的下标元素进行交换。

代码如下：

```javascript
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums;
    this.original = [...nums];
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.original;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    // 洗牌算法，一边遍历数组，遍历的同时随机生成一个下标，将当前遍历的下标与随机生成的下标元素进行交换
    for (let i = 0, n = this.nums.length; i < n; i++) {
      let randomIdx = Math.floor(Math.random()*n);
      let temp = this.nums[i];
      this.nums[i] = this.nums[randomIdx];
      this.nums[randomIdx] = temp;
    }
    return this.nums;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
```

