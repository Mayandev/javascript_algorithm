import MinHeap from '../../../data-structures/heap/MinHeap'

export default class HeapSort {
  sort (originalArray) {
    const sortedArray = [];

    const minHeap = new MinHeap();

    originalArray.forEach(element => {
      minHeap.add(element)
    });

    while (!minHeap.isEmpty()) {
      const nextMinElement = minHeap.poll();

      sortedArray.push(nextMinElement);
    }
    return sortedArray;
  }
}