# No.136 只出现一次的数字

难度： `easy`

给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

**说明：**

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

## 示例

示例1:

```
输入: [2,2,1]
输出: 1
```

示例2:

```
输入: [4,1,2,1,2]
输出: 4
```

## 解题思路

**解题思路1**：

这个和找重复数字类型的题目很相似，只不过思路是相反的，这里需要找到出现一次的数字，其他的数字都重复。

首先很容易就先想到使用集合这种数据结构来解决这种问题，通过遍历整个数组，将数据放入集合，如果集合中存在相同元素，则将此元素删除。最后集合中一定只存在一个元素，而这个元素就是只出现一次都元素。

代码如下：

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let n = nums.length;
    let set = new Set();
    for (let i = 0; i < n; i++) {
        let num = nums[i];
        if (set.has(num)) {
            set.delete(num);
        } else {
            set.add(num);
        }
    }
    return [...set][0];
};
```

**解题思路2:**

另外一种是使用异或运算的方法，很骚。


- 如果我们对 0 和二进制位做 XOR 运算，得到的仍然是这个二进制位
  - a⊕0=a
- 如果我们对相同的二进制位做 XOR 运算，返回的结果是 0
  - a⊕a=0
- XOR 满足交换律和结合律
  - a⊕b⊕a=(a⊕a)⊕b=0⊕b=b
所以我们只需要将所有的数进行 XOR 操作，得到那个唯一的数字。

代码如下：

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let a = 0;
    for (let i=0; i < nums.length; i++) {
        a ^= nums[i];
    }
    return a;
};
```
