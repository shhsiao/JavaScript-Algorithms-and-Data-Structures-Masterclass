import { bubbleSort } from './bubble_sort';
import { selectionSort } from './selection_sort';
import { insertionSort } from './insertion_sort';

describe('bubble sort', () => {
    test('should be sorted', () => {
        expect(bubbleSort([5, 4, 1, 2, 3])).toEqual([1, 2, 3, 4, 5]);
    });
});
