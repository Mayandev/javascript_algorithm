function shellSort(arr) {
  var len = arr.length,
      temp,
      gap = Math.floor(len / 2);
  while (gap > 0) {
      for (var i = gap; i < len; i++) {
          temp = arr[i];
          for (var j = i-gap; j >= 0 && arr[j] > temp; j -= gap) {
              arr[j+gap] = arr[j];
          }
          arr[j+gap] = temp;
      }
      gap = Math.floor(gap / 2);
  }
  return arr;
}

console.log(shellSort([5,2,4,1,3]))