# No.38 报数

难度： `easy`


报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：

```
1.     1
2.     11
3.     21
4.     1211
5.     111221

```

1 被读作  "one 1"  ("一个一") , 即 11。
11 被读作 "two 1s" ("两个一"）, 即 21。
21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。

给定一个正整数 n（1 ≤ n ≤ 30），输出报数序列的第 n 项。

注意：整数顺序将表示为一个字符串。

 
## 示例

示例 1:
```
输入: 1
输出: "1"
```

示例 2:
```
输入: 4
输出: "1211"
```

## 解题思路

一次此看题目一脸懵逼，需要多读几遍题目。

还是用正则表达式来做，全局匹配数字，且数字连续相同。

代码如下：

```javascript
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let prev = '1'
    for(let i = 1; i < n; i++){
        prev = prev.replace(/(\d)\1*/g, item =>`${item.length}${item[0]}`)
    }
    return prev
};

```