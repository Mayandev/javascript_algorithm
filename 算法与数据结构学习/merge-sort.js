/**
 * 递归归并排序
 * 时间复杂度：O(nlogn)，空间复杂度：O(n)
 * @param {number[]} nums 
 * @param {number} low 
 * @param {number} high 
 */
function mergeSort(nums, low, high) {
  // 递归终止条件
  if (nums.length == 0 || low == high) {
    return;
  }
  let mid = Math.floor((low+high)/2);
  // 左半边递归
  mergeSort(nums, low, mid);
  // 右半边递归
  mergeSort(nums, mid+1, high);
  // 合并
  mergeNum(nums,low,mid,high);
}

function mergeNum(nums, low, mid, high) {
  let arr = [];
  let L = low;
  let R = mid+1;
  let k = 0
  // 双指针，依此将数从小到大放入新的数组
  while (L <= mid && R <= high) {
    arr[k++] = nums[L] < nums[R] ? nums[L++] : nums[R++];
  }

  // 如果左/右部分剩余，说明剩余部分均大于右/左部分，将剩余部分放入到数组
  while (L <= mid) {
    arr[k++] = nums[L++];
  }
  while (R <= high) {
    arr[k++] = nums[R++];
  }

  // 复制内容到原数组中
  for (let i = 0; i < arr.length; i++) {
    nums[low+i] = arr[i] 
  }
}

// 定义一个数组
var nums = [4,2,8,1,6,5,7,3]
// 调用归并排序函数
mergeSort(nums,0,nums.length-1)
// 打印排序的数组
console.log(nums);  // Array(8) [1, 2, 3, 4, 5, 6, 7, 8]
