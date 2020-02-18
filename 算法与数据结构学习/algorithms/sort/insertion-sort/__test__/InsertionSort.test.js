import InsertionSort from '../InsertionSort';

import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
  SortTester,
} from '../../SortTester';

describe('HeapSort', () => {
  it('should sort array', () => {
    SortTester.testSort(InsertionSort);
  });

  it('should sort negative numbers', () => {
    SortTester.testNegativeNumbersSort(InsertionSort);
  });

});