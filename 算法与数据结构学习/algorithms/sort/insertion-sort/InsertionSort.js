export default class InsertionSort {
  sort(originalArray) {
    const array = [...originalArray];

    for (let i = 1; i < array.length; i++) {
      
      let currentIdx = i;

      while ((array[currentIdx] < array[currentIdx - 1]) && currentIdx > 0) {
        const tmp = array[currentIdx - 1];
        array[currentIdx - 1] = array[currentIdx];
        array[currentIdx] = tmp;
        currentIdx--;
      }
    }
    return array;
  }
}