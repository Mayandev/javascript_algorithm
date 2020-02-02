import HeapSort from '../HeapSort';
import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
  SortTester,
} from '../../SortTester';

describe('HeapSort', () => {
  it('should sort array', () => {
    SortTester.testSort(HeapSort);
  });

  it('should sort negative numbers', () => {
    SortTester.testNegativeNumbersSort(HeapSort);
  });

});
