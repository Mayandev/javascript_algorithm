# No.242  有效的字母异位词

给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。


## 示例

示例 1:

```
输入: s = "anagram", t = "nagaram"
输出: true
```

示例 2: 

```
输入: s = "rat", t = "car"
输出: false
```

说明:
你可以假设字符串只包含小写字母。

## 进阶
如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？

## 解题思路

**解题思路1**

这个又是一道判断重复字符的题，首先想到了哈希表。

通过判断每个字符的个数，来判断是否为字母异味词。

代码如下：

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var No = function(s, t) {
  
  if (s === '' && t === '') {return true;}
  
  if (s.length != t.length) {return false;}
  
  let sArr = s.split('');
  let tArr = t.split('');
  
  let sMap = new Map();
  let tMap = new Map();

  
  
  
  for (let i = 0; i < sArr.length; i++) {
    let count1 = sMap.has(sArr[i]) ? sMap.get(sArr[i]) : 0;
    let count2 = tMap.has(tArr[i]) ? tMap.get(tArr[i]) : 0;

    count1++;
    count2++;
    sMap.set(sArr[i], count1);
    tMap.set(tArr[i], count2)
  }
  for (let [key, value] of sMap) {
    // 判断 t 中是否有此键
    if (!tMap.has(key)) {
      // t 中不含此键
      return false;
    }
    if (value != tMap.get(key)) {
      return false;
    }
  }
  return true;
};
```

**解题思路2**

将字符进行排序，然后判断每个字符是否相等。

如果不相等，返回false。

代码如下：

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

  if (s.length !== t.length) {return false;}
  
  let sArr = s.split('');
  let tArr = t.split('');

  sArr.sort();
  tArr.sort();

  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] != tArr[i]) {return false;}
  }

  return true;

};
```

