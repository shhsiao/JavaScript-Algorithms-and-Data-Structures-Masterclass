import { swap, BubbleSort } from './bubble_sort';

describe('bubble sort', () => {
    test('should be sorted', () => {
        expect(BubbleSort([5, 4, 1, 2, 3])).toEqual([1, 2, 3, 4, 5]);
    });
});
