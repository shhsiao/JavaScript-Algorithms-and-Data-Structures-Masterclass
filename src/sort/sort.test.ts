import { bubbleSort } from './bubble_sort';
import { selectionSort } from './selection_sort';
import { insertionSort } from './insertion_sort';
import { mergeSort } from './merge_sort';
import { quickSort } from './quick_sort';
import { radixSort,getDigit,digitCount } from './radix_sort';

describe('sort jest', () => {
    test('bubbleSort should be sorted', () => {
        expect(bubbleSort([5, 4, 1, 2, 3, 0])).toEqual([0, 1, 2, 3, 4, 5]);
    });
    test('selectionSort should be sorted', () => {
        expect(selectionSort([5, 4, 1, 2, 3, 0])).toEqual([0, 1, 2, 3, 4, 5]);
    });
    test('insertionSort should be sorted', () => {
        expect(insertionSort([5, 4, 1, 2, 3, 0])).toEqual([0, 1, 2, 3, 4, 5]);
    });
    test('mergeSort should be sorted', () => {
        expect(mergeSort([5, 4, 1, 2, 3, 0])).toEqual([0, 1, 2, 3, 4, 5]);
    });
    test('quickSort should be sorted', () => {
        expect(quickSort([5, 4, 1, 2, 3, 0])).toEqual([0, 1, 2, 3, 4, 5]);
    });
    test('radixSort should be sorted', () => {
        expect(radixSort([5, 4, 1, 2, 3, 0])).toEqual([0, 1, 2, 3, 4, 5]);
        expect(digitCount(123)).toBe(3);
        expect(digitCount(123000)).toBe(6);
        expect(digitCount(0)).toBe(1);
        expect(getDigit(123,0)).toBe(3);
        expect(getDigit(123,1)).toBe(2);
        expect(getDigit(123,2)).toBe(1);
    });
});
