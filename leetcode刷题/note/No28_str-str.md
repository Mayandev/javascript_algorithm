# No.28. 实现 strStr()

难度：`easy`

实现 strStr() 函数。

给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

## 示例

示例 1:

输入: haystack = "hello", needle = "ll"
输出: 2
示例 2:

输入: haystack = "aaaaa", needle = "bba"
输出: -1

## 说明
说明:

当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。

## 解题思路

第一个想到的就是双指针法了，通过双重循环，比较两个字符串是否在某个下标时相等。

如果 needle 遍历完，说明找到了子字符串。

时间复杂度略高...

代码如下：

```javascript
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle == '') {
    return 0;
  }
  for (let i = 0; i < haystack.length; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (needle[j] != haystack[j+i]) {
          break;  
      } else {
        if (j == needle.length-1) {
          return i;
        }
      }
    }
  }
  
  return -1;
};
```



另外一种解法就是经典的 KMP 算法了，可以参考这个[题解](https://leetcode-cn.com/problems/implement-strstr/solution/python3-sundayjie-fa-9996-by-tes/)