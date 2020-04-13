import { swap } from './swap';
export function bubbleSort(list: number[]): number[] {
    const ans = list.slice();
    for (let i = ans.length; i > 0; i--) {
        let swapInvoked = false;
        for (let j = 0; j < i - 1; j++) {
            if (ans[j] > ans[j + 1]) {
                swap(ans, j, j + 1);
                swapInvoked = true;
            }
        }
        if (!swapInvoked) {
            break;
        }
    }
    return ans;
}
