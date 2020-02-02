import Heap from './Heap';

export default class MaxHeap extends Heap {
  pairIsInCorrectOrder(firstElement, secondElement) {
    return (firstElement >= secondElement);
  }
}