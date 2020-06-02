import {
    binarySearchLoopVersion,
    binarySearchRecusionVersion
} from './binary-search';

describe('search jest', () => {
    const list = Array.from(Array(100).keys())
    it(`should be found`, () => {
        expect(binarySearchRecusionVersion(list,50)).toBeTruthy();
        expect(binarySearchLoopVersion(list,50)).toBe(50);
    });
    it(`should not be found`, () => {
        expect(binarySearchRecusionVersion(list,500)).toBeFalsy();
        expect(binarySearchLoopVersion(list,500)).toBe(-1);
    });
});
