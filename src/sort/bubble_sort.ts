export function BubbleSort(list: number[]): number[] {
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

export function swap(list: number[], idx1: number, idx2: number) {
    [list[idx2], list[idx1]] = [list[idx1], list[idx2]];
}
