# No.14 最长公共前缀

难度：  `easy`

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

## 示例

示例 1:

```
输入: ["flower","flow","flight"]
输出: "fl"
```

示例 2:

```
输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。

```

说明:

所有输入只包含小写字母 a-z 。

## 解题思路


**解题思路1：**

首先用一种很简单方法去解。

- 找到最短的子串
- 然后将子串的长度从最长到最短暴力匹配出来

代码如下：

```javascript

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let n = strs.length;
  if (n == 0) {
    return "";
  }
  let minSubStrIdx = 0;
  let minLength=strs[0].length;
  for (let i = 1; i < n; i++) {
    if (strs[i].length < minLength) {
      minLength = strs[i].length;  
    }
  }

  let returnStr = [];
  for (let i = 0; i < minLength; i++) {
    let stack = [strs[0][i]];
    for (let j = 1; j < n; j++) {
      
      if (stack[stack.length-1] == strs[j][i]) {
        stack.push(strs[j][i]);
      } else {
        break;
      }
    }
    if (stack.length != n) {
      break;
    } else {
      returnStr.push(stack[0]);
    }
  }
  console.log(returnStr);
  return returnStr.join('');
};
```

**解题思路2：**

这是一个官方题解，思路非常的巧妙。

算法首先去第一个字符串为最长公共前缀，然后一次比较后面的字符，使用indexOf()函数，如果后面的字符包含公共前缀，则跳到下一个循环。

以示例 1 为例：

```
输入: ["flower","flow","flight"]
输出: "fl"
```

首先假设 prefix = 'flower'，然后使用indexOf()比较后一个字符串，

如果后一个字符串存在 prefix，则跳到下一个循环。

如果不存在 prefix，则使用 substring 将字符串切割，长度减少1。

代码如下：

```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length == 0) return "";
   let prefix = strs[0];
   for (let i = 1; i < strs.length; i++)
       while (strs[i].indexOf(prefix) != 0) {
           prefix = prefix.substring(0, prefix.length - 1);
           if (prefix.length == 0) return "";
       }        
   return prefix;
};
```
