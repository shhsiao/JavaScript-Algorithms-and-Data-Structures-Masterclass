export function swap(list: number[], idx1: number, idx2: number) {
    [list[idx2], list[idx1]] = [list[idx1], list[idx2]];
}
