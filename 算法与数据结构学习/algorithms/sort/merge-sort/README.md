# Merge Sort

在计算机科学中，合并排序（通常也拼写为mergesort）是一种高效的通用功能，基于比较的排序算法。 大多数实施产生稳定的排序，这意味着执行保留排序后相等元素的输入顺序输出。 Mergesort是一种分而治之的算法，由约翰·冯·诺伊曼（John von Neumann）于1945年发明。

合并排序的示例。 首先将列表分为最小单位（1个元素），然后比较每个元素与相邻列表进行排序和合并两个相邻的列表。 最后将所有元素排序并合并。

![合并排序]（https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif）

递归合并排序算法，用于对7个数组进行排序整数值。 这些是人类将要采取的步骤模拟合并排序（自上而下）。


![Merge Sort](https://upload.wikimedia.org/wikipedia/commons/e/e6/Merge_sort_algorithm_diagram.svg)

## Complexity

| 名称                  | 最优            | 平均             | 最差               | 空间    | 稳定    | 评论  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **归并排序**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | n         | Yes       |           |

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Merge_sort)
- [YouTube](https://www.youtube.com/watch?v=KF2j-9iSf4Q&index=27&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)