# No.121 买卖股票的最佳时机

难度：`easy`


给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。

注意你不能在买入股票前卖出股票。

## 示例

示例 1:

```
输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
```

示例 2:
```
输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
```

## 解题思路

**解题思路1：**

暴力法，两重循环，找到利润最大。

代码如下：

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;  
    // 暴力法
    for (let i = 0, n = prices.length; i < n; i++) {
      for (let j = i+1; j < n; j++) {
        let profit = prices[j] - prices[i];
        if (profit > maxProfit)
          maxProfit = profit;
      }
    }
    return maxProfit;
};
```

**解题思路二：**

一遍循环，循环的时候就计算出当前最大的利润，最后取利润的最大值。

代码如下：

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let lastPrice = prices[0];
    let profitArr = [];
    for (let i = 1, n = prices.length; i < n; i++) {
      if (prices[i] > lastPrice) {
        profitArr.push(prices[i]-lastPrice);
      } else {
        lastPrice = prices[i];
      }
    }
    console.log(profitArr);
    return profitArr.length == 0 ? 0 : Math.max(...profitArr);  
};
```
