export function insertionSort(list: number[]): number[] {
    const ans = list.slice();
    for (let i = 1; i < ans.length; i++) {
        const currentVal = ans[i];
        let j = i - 1;
        for (; j >= 0 && ans[j] > currentVal; j--) {
            ans[j + 1] = ans[j];
        }
        ans[j + 1] = currentVal;
    }
    return ans;
}
