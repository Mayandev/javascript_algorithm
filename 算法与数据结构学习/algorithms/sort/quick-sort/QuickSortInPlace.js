export default class QuickSortInPlace extends Sort {
  sort(
    originalArray,
    inputLowIndex = 0,
    inputHighIndex = originalArray.length - 1,
    recursiveCall = false,
  ) {
    // 复制一份数组，然后对array进行原地排序
    const array = recursiveCall ? originalArray : [...originalArray];

    const partitionArray = (lowIndex, highIndex) => {
      const swap = (leftIndex, rightIndex) => {
        const temp = array[leftIndex];
        array[leftIndex] = array[rightIndex];
        array[rightIndex] = temp;
      }

      const pivot = array[highIndex];
    }
  }
}