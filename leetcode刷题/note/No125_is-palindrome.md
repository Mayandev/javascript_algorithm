# No.125 验证回文串

给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

## 示例

示例 1:

输入: "A man, a plan, a canal: Panama"
输出: true
示例 2:

输入: "race a car"
输出: false

## 解题思路

有题目条件可知，字符串中含有其他字符，所以可以先将非字母、数字的数组去除，再通过数组判断是否为回文字符串。

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let arr = [];
  for (let char of s) {
    let charCode = char.charCodeAt();
    if (('0'.charCodeAt()<=charCode && charCode<='9'.charCodeAt()) 
     || ('a'.charCodeAt()<=charCode && charCode<='z'.charCodeAt())
     || ('A'.charCodeAt()<=charCode && charCode<='Z'.charCodeAt()) ) {

			arr.push(char.toLowerCase());
				
    }
	}
	
	for (let i = 0; i < arr.length/2; i++) {
		if (arr[i] !== arr[arr.length-1-i]) {
			return false;
		}
	}
	return true;
};
```