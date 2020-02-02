# Heap Sort

Heapsort是一种基于比较的排序算法。堆排序可以认为是一种改进的选择排序：类似于该算法，它将输入分为排序和未排序的区域，并反复进行通过提取最大的区域来缩小未分类区域元素并将其移至已排序的区域。改进方法包括使用堆数据结构而不是线性时间搜索来找到最大值。

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/1/1b/Sorting_heapsort_anim.gif)

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/4/4d/Heapsort-example.gif)

## Complexity

| 名称                  | 最优            | 平均             | 最差               | 空间    | 稳定    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Heap sort**         | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | 1         | No        |           |

## References

[Wikipedia](https://en.wikipedia.org/wiki/Heapsort)
