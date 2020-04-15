import { swap } from './swap';
export function bubbleSort(list: number[]): number[] {
    const ans = list.slice();
    for (let i = ans.length; i > 0; i--) {
        let noSwap = true;
        for (let j = 0; j < i - 1; j++) {
            if (ans[j] < ans[j + 1]) {
                continue;
            }
            swap(ans, j, j + 1);
            noSwap = false;
        }
        if (noSwap) {
            break;
        }
    }
    return ans;
}
