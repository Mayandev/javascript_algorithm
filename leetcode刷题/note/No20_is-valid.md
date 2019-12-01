# No.20 有效的括号

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

1. 左括号必须用相同类型的右括号闭合。
2. 左括号必须以正确的顺序闭合。

注意空字符串可被认为是有效字符串。

## 示例

示例 1:

```
输入: "()"
输出: true
```

示例 2:
```
输入: "()[]{}"
输出: true
```

示例 3:
```
输入: "(]"
输出: false
```

示例 4:
```
输入: "([)]"
输出: false
```

示例 5:
```
输入: "{[]}"
输出: true
```

## 解题思路

使用堆栈的思想，如果遇到左括号全部进栈，遇到右括号，判断是否匹配，如果匹配则出栈，不匹配直接返回false。

最后如果栈的长度为 0， 则括号是匹配的。

代码如下：

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  // 1、使用堆栈的思想
  let stack = [];
  let rule = {'}' : '{', ']' : '[', ')' : '('};

  

  for (let char of s) {

    // 遇到左括号全部进栈
    if (char == '[' || char == '{' || char == '(') {
      stack.push(char);
    } else {
      // 遇到右括号，判断是否匹配，如果匹配则出栈，不匹配直接返回false
      if (rule[char] == stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  
  return stack.length == 0;
};

```