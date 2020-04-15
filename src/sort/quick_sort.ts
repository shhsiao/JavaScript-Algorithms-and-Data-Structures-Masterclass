import { swap } from './swap';

function pivot(list: number[], start = 0, end = list.length + 1): number {
    const pivot = list[start];
    let swapIndex = start;
    for (let i = start + 1; i < list.length; i++) {
        if (pivot < list[i]) {
            continue;
        }
        swapIndex++;
        swap(list, swapIndex, i);
    }

    swap(list, start, swapIndex);
    return swapIndex;
}

function quickSort(list: number[], left = 0, right = list.length - 1) {
    if (left >= right) {
        return list;
    }
    let pivotIndex = pivot(list, left, right);
    // left
    quickSort(list, left, pivotIndex - 1);
    // right
    quickSort(list, pivotIndex + 1, right);
    return list;
}
