export function binarySearchLoopVersion(sortedList: number[], target: number): number {
    let left = 0,
        right = sortedList.length - 1,
        middle = (right + left) >> 1;
    while (left <= right) {
        if (sortedList[middle] === target) {
            return middle;
        }
        if (sortedList[middle] > target) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
        middle = (right + left) >> 1;
    }
    return -1;
}

export function binarySearchRecusionVersion(
    sortedList: number[],
    target: number
): boolean {
    let left = 0,
        right = sortedList.length - 1,
        middle = (right + left) >> 1;
    if (sortedList[middle] === target) {
        return true;
    }
    if (sortedList.length === 1) {
        return false;
    }
    if (sortedList[middle] > target) {
        return binarySearchRecusionVersion(sortedList.slice(0, middle), target);
    } else {
        return binarySearchRecusionVersion(
            sortedList.slice(middle + 1),
            target
        );
    }
}
