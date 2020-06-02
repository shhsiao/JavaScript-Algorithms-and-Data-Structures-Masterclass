export function getDigit(num: number, place: number): number {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

export function digitCount(num: number): number {
    if (num === 0) {
        return 1;
    }
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

export function mostDigits(numList: number[]): number {
    return digitCount(Math.max(...numList));
}

export function radixSort(numList: number[]) {
    let ans: number[] = numList.slice();
    const maxDigitCount = mostDigits(ans);
    for (let i = 0; i < maxDigitCount; i++) {
        const digitBuckets: Array<Array<number>> = Array.from(
            { length: 10 },
            () => []
        );
        ans.forEach((v) => {
            const digit = getDigit(v, i);
            digitBuckets[digit].push(v);
        });
        ans = [].concat(...(digitBuckets as any));
    }
    return ans;
}
