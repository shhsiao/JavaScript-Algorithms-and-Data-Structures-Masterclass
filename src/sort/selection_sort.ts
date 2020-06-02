import { swap } from './swap';

export function selectionSort(list: number[]) {
    const ans = list.slice();
    for (let i = 0; i < ans.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < ans.length; j++) {
            if (ans[j] < ans[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(ans, i, minIndex);
        }
    }
    return ans;
}

