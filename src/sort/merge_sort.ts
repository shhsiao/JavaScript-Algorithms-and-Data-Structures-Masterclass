function merge(list1: number[], list2: number[]): number[] {
    const result: number[] = [];
    let i = 0;
    let j = 0;
    while (i < list1.length && j < list2.length) {
        if (list1[i] > list2[j]) {
            result.push(list2[j]);
            j++;
        } else {
            result.push(list1[i]);
            i++;
        }
    }
    while (i < list1.length) {
        result.push(list1[i]);
        i++;
    }
    while (j < list2.length) {
        result.push(list2[j]);
        j++;
    }
    return result;
}

function mergeSort(list: number[]) {
    if (list.length <= 1) {
        return list;
    }
    const mid: number = Math.floor(list.length / 2);
    const left: number[] = mergeSort(list.slice(0, mid));
    const right: number[] = mergeSort(list.slice(mid));
    return merge(left, right);
}
