# No.3 无重复字符的最长子串

难度：`middle`

给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

## 示例

示例 1:
```
输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```
示例 2:
```
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```
示例 3:
```
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

## 解题思路

一遍循环，使用滑动窗口的思想，找出最大值即可。

代码如下：


```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

  let n = s.length, ans = 0, start = 0;
  let map = new Map();
  for (let i = 0; i < n; i++) {
    let char = s[i];
    if (map.has(char)) {
      start = Math.max(map.get(char), start)
    }
    ans = Math.max(ans, i - start + 1);
    map.set(s[i], i + 1);
  }
  return ans;
};
```