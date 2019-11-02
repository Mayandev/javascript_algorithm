

// 暴力法
// 时间复杂度O（n*k），空间复杂度O（1）
// 耗时360ms，消耗内存35MB
var rotate1 = function(nums, k) {
    for(let i = 0; i < k; i++) {
      let last = nums[nums.length-1];
      for (let j = nums.length-1; j > 0; j--) {
        nums[j] = nums[j-1];
      }
      nums[0] = last;
    }
    console.log(nums)
};



// 新建数组法
// 时间复杂度O(n)，空间复杂度O(n)
// 耗时108ms，消耗内存35MB
var rotate2 = function(nums, k) {
  let a = [];
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    index = (i + k) % nums.length;
    a[index] = nums[i];
  }
  for (let i = 0; i < a.length; i++) {
    const element = a[i];
    nums[i] = element;
  }
  console.log(nums)
};


var rotate3 = function(nums, k) {
  let n = nums.length;
  reverseArray(nums,0,n-1);
  reverseArray(nums,0,k%n-1);
  reverseArray(nums,k%n,n-1);
};

// util
var reverseArray = function(nums, start, end) {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
  console.log(nums);
  return nums;
}

