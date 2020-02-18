function quickSort(arr, low, high) {
  // 调整数组
  let i = adjustArr(arr, low, high);
  // 分治
  quickSort(arr, low, i-1);
  quickSort(arr, i+1, high);
}

function adjustArr(arr, low, high) {
  let pivot = arr[low];

  while (low < high) {
    while (arr[high] > pivot)
      high--;
    arr[low++] = arr[high];
    while (arr[low] < pivot)
      low++;
    arr[high--] = arr[low];
  }

  arr[low] = pivot;
  return low;
}

let arr = [72,6,57,88,60,42,83,73,48,85];
quickSort(arr, 0, arr.length-1);
console.log(arr);